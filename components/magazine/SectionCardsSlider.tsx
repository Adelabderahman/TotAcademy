'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ArticleCardData, EditorialSlide, MAG_SECTIONS } from '@/lib/magazine-data';
import { MagazineFlipCard } from './MagazineFlipCard';

interface SectionCardsSliderProps {
  slides?: EditorialSlide[];
  activeSlideSlug?: string;
  onSelectSlide?: (slug: string) => void;
  // Fallbacks
  cards?: ArticleCardData[];
  layout?: string;
  sectionSlug?: string;
  lang: 'ar' | 'en' | 'fr';
  isRtl: boolean;
  t: Record<string, string>;
  onOpenArticle: (card: ArticleCardData) => void;
  onOpenVideo: (video: { url: string; title: string; speaker: string; duration: string }) => void;
  onOpenShare: (card: ArticleCardData) => void;
  onCopyCitation: (title: string) => void;
}

export const SectionCardsSlider: React.FC<SectionCardsSliderProps> = ({
  slides,
  activeSlideSlug,
  onSelectSlide,
  cards,
  layout = 'radar',
  sectionSlug = 'slide',
  lang,
  isRtl,
  t,
  onOpenArticle,
  onOpenVideo,
  onOpenShare,
  onCopyCitation,
}) => {
  // Normalize slides
  const effectiveSlides: EditorialSlide[] = React.useMemo(() => {
    if (slides && slides.length > 0) return slides;
    if (cards && cards.length > 0) {
      return [
        {
          slug: sectionSlug,
          layout: layout,
          accent: '#f59e0b',
          cards: cards,
        },
      ];
    }
    return [];
  }, [slides, cards, layout, sectionSlug]);

  // Active slide calculation for desktop
  const activeIdx = effectiveSlides.findIndex((s) => s.slug === activeSlideSlug);
  const currentSlide = effectiveSlides[activeIdx >= 0 ? activeIdx : 0] || effectiveSlides[0];

  const mobileTrackRef = useRef<HTMLDivElement>(null);
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);
  const [flippedCardKey, setFlippedCardKey] = useState<string | null>(null);

  // Sync mobile track scroll position when activeSlideSlug changes from external navigation pills
  useEffect(() => {
    if (!activeSlideSlug) return;
    const idx = effectiveSlides.findIndex((s) => s.slug === activeSlideSlug);
    if (idx >= 0 && idx !== activeMobileIdx) {
      setActiveMobileIdx(idx);
      setFlippedCardKey(null);
      if (mobileTrackRef.current) {
        const container = mobileTrackRef.current;
        const track = container.firstElementChild as HTMLElement | null;
        const target = track?.children[idx] as HTMLElement | undefined;
        if (target) {
          container.scrollTo({
            left: isRtl
              ? target.offsetLeft - (container.clientWidth - target.clientWidth)
              : target.offsetLeft,
            behavior: 'smooth',
          });
        }
      }
    }
  }, [activeSlideSlug, effectiveSlides, isRtl, activeMobileIdx]);

  // Global document click listener: when user clicks outside cards, un-flip all flipped cards
  useEffect(() => {
    const handleDocClick = () => {
      setFlippedCardKey(null);
    };
    document.addEventListener('click', handleDocClick);
    return () => document.removeEventListener('click', handleDocClick);
  }, []);

  // Handle mobile swipe/scroll detection to sync active index and slide bar
  const handleMobileScroll = useCallback(() => {
    if (!mobileTrackRef.current) return;
    const container = mobileTrackRef.current;
    const scrollLeft = Math.abs(container.scrollLeft);
    const itemWidth = container.clientWidth || 320;
    const newIdx = Math.round(scrollLeft / itemWidth);
    if (newIdx >= 0 && newIdx < effectiveSlides.length && newIdx !== activeMobileIdx) {
      setActiveMobileIdx(newIdx);
      setFlippedCardKey(null);
      if (onSelectSlide && effectiveSlides[newIdx]) {
        onSelectSlide(effectiveSlides[newIdx].slug);
      }
    }
  }, [effectiveSlides, activeMobileIdx, onSelectSlide]);

  useEffect(() => {
    const track = mobileTrackRef.current;
    if (!track) return;
    track.addEventListener('scroll', handleMobileScroll, { passive: true });
    return () => track.removeEventListener('scroll', handleMobileScroll);
  }, [handleMobileScroll]);

  const scrollToSlide = (idx: number) => {
    if (!mobileTrackRef.current) return;
    const container = mobileTrackRef.current;
    const track = container.firstElementChild as HTMLElement | null;
    const target = track?.children[idx] as HTMLElement | undefined;
    if (target) {
      container.scrollTo({
        left: isRtl
          ? target.offsetLeft - (container.clientWidth - target.clientWidth)
          : target.offsetLeft,
        behavior: 'smooth',
      });
      setActiveMobileIdx(idx);
      setFlippedCardKey(null);
      if (onSelectSlide && effectiveSlides[idx]) {
        onSelectSlide(effectiveSlides[idx].slug);
      }
    }
  };

  const handlePrev = () => {
    const nextIdx = Math.max(0, activeMobileIdx - 1);
    scrollToSlide(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = Math.min(effectiveSlides.length - 1, activeMobileIdx + 1);
    scrollToSlide(nextIdx);
  };

  // Card click toggles 3D flip
  const handleCardClick = (cardKey: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFlippedCardKey((prev) => (prev === cardKey ? null : cardKey));
  };

  if (effectiveSlides.length === 0) return null;

  const currentMobileSlide = effectiveSlides[activeMobileIdx] || effectiveSlides[0];
  const activeSecMeta = MAG_SECTIONS.find((s) => s.slug === currentMobileSlide.slug);

  return (
    <div className="mag-carousel-outer">
      {/* ========================================================================= */}
      {/* DESKTOP VIEW: Renders active slide in full 12-column grid layout          */}
      {/* Strictly hidden on mobile via .mag-desktop-only CSS class                 */}
      {/* ========================================================================= */}
      <div className="mag-desktop-only">
        <div
          className={`mag-desktop-slide-grid ${currentSlide.layout}-grid`}
          dir={isRtl ? 'rtl' : 'ltr'}
        >
          {currentSlide.cards.map((card, idx) => (
            <MagazineFlipCard
              key={`${card.title.en || card.title.ar}-${idx}`}
              card={card}
              index={idx}
              total={currentSlide.cards.length}
              lang={lang}
              isRtl={isRtl}
              t={t}
              onOpenArticle={onOpenArticle}
              onOpenVideo={onOpenVideo}
              onOpenShare={onOpenShare}
              onCopyCitation={onCopyCitation}
            />
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE VIEW: Exact replica of reference file (trainer-magazine.html)       */}
      {/* Strictly hidden on desktop via .mag-mobile-only CSS class                 */}
      {/* ========================================================================= */}
      <div className="mag-mobile-only">
        {/* 1. Mobile Slide Bar with Index, Title and Nav Arrows */}
        {effectiveSlides.length > 1 && (
          <div className="strategy-slide-bar">
            <div className="strategy-slide-title-wrap">
              <span
                className="strategy-slide-index"
                style={{
                  background: currentMobileSlide.accent || '#ffd166',
                  color: '#173052',
                }}
              >
                {String(activeMobileIdx + 1).padStart(2, '0')}
              </span>
              <h3 className="strategy-slide-title">
                {activeSecMeta ? activeSecMeta.name[lang] || activeSecMeta.name.ar : currentMobileSlide.slug}
              </h3>
            </div>

            <div className="strategy-controls">
              <button
                type="button"
                className="strategy-arrow"
                onClick={isRtl ? handleNext : handlePrev}
                disabled={isRtl ? activeMobileIdx === effectiveSlides.length - 1 : activeMobileIdx === 0}
                aria-label="Previous"
              >
                {isRtl ? '›' : '‹'}
              </button>
              <button
                type="button"
                className="strategy-arrow"
                onClick={isRtl ? handlePrev : handleNext}
                disabled={isRtl ? activeMobileIdx === 0 : activeMobileIdx === effectiveSlides.length - 1}
                aria-label="Next"
              >
                {isRtl ? '‹' : '›'}
              </button>
            </div>
          </div>
        )}

        {/* 2. Swipeable Slide Containers with Exact Geometric Card Grids */}
        <div
          ref={mobileTrackRef}
          className="strategy-slider"
          dir={isRtl ? 'rtl' : 'ltr'}
        >
          <div className="strategy-track">
            {effectiveSlides.map((slide) => {
              return (
                <div
                  key={slide.slug}
                  className="strategy-slide"
                  data-strategy-slide={slide.slug}
                >
                  <div className={`strategy-card-grid layout-${slide.layout}`}>
                    {slide.cards.map((card, cardIdx) => {
                      const cardKey = `${slide.slug}-${cardIdx}`;
                      const isFlipped = flippedCardKey === cardKey;
                      const isFeature = card.kind === 'feature';
                      const isVideo = Boolean(card.video);

                      return (
                        <article
                          key={cardKey}
                          className={`article-card ${isFeature ? 'feature' : ''} ${isVideo ? 'video-card' : ''} ${isFlipped ? 'flipped' : ''}`}
                          onClick={(e) => handleCardClick(cardKey, e)}
                          style={{
                            ['--article-image' as any]: `url('${card.image}')`,
                            ['--card-accent' as any]: slide.accent || '#ffd166',
                          }}
                        >
                          <div className="article-card-inner">
                            {/* FRONT FACE */}
                            <div className="article-card-face article-card-front">
                              {isVideo && (
                                <span className="article-type-badge video">
                                  ▶ {lang === 'ar' ? 'فيديو' : lang === 'fr' ? 'Vidéo' : 'Video'}
                                </span>
                              )}
                              <div className="article-front-copy">
                                <span className="article-eyebrow">
                                  {card.eyebrow[lang] || card.eyebrow.ar}
                                </span>
                                <h4>{card.title[lang] || card.title.ar}</h4>
                                <span className="article-detail-btn">
                                  {t.article_details || 'التفاصيل'}
                                </span>
                              </div>
                            </div>

                            {/* BACK FACE */}
                            <div className="article-card-face article-card-back">
                              <span className="article-eyebrow">
                                {card.eyebrow[lang] || card.eyebrow.ar}
                              </span>
                              <h4>{card.title[lang] || card.title.ar}</h4>
                              <p className="article-intro">
                                {card.intro[lang] || card.intro.ar}
                              </p>
                              <button
                                className="article-read-link"
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (card.video) {
                                    onOpenVideo({
                                      url: card.video.url,
                                      title: card.title[lang] || card.title.ar,
                                      speaker: card.video.speaker[lang] || card.video.speaker.ar,
                                      duration: card.video.duration[lang] || card.video.duration.ar,
                                    });
                                  } else {
                                    onOpenArticle(card);
                                  }
                                }}
                              >
                                {isVideo
                                  ? (lang === 'ar' ? 'شاهد الفيديو' : lang === 'fr' ? 'Voir la vidéo' : 'Watch video')
                                  : (t.article_read || 'اطلع على المقال')}
                              </button>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Slide Dots */}
        {effectiveSlides.length > 1 && (
          <div className="strategy-dots">
            {effectiveSlides.map((s, idx) => (
              <button
                key={s.slug}
                type="button"
                className={`strategy-dot ${activeMobileIdx === idx ? 'active' : ''}`}
                style={activeMobileIdx === idx ? { background: s.accent || '#ffd166' } : undefined}
                onClick={() => scrollToSlide(idx)}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
