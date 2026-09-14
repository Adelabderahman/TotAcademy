'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ArticleCardData, EditorialSlide, MAG_SECTIONS } from '@/lib/magazine-data';
import { MagazineFlipCard } from './MagazineFlipCard';
import { ChevronLeft, ChevronRight, Layers } from 'lucide-react';

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

  // Sync mobile index with activeSlideSlug prop
  useEffect(() => {
    if (!activeSlideSlug) return;
    const idx = effectiveSlides.findIndex((s) => s.slug === activeSlideSlug);
    if (idx >= 0 && idx !== activeMobileIdx) {
      setActiveMobileIdx(idx);
      if (mobileTrackRef.current) {
        const container = mobileTrackRef.current;
        const target = container.children[idx] as HTMLElement | undefined;
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
  }, [activeSlideSlug, effectiveSlides, isRtl]);

  // Handle mobile swipe/scroll detection to sync state
  const handleMobileScroll = useCallback(() => {
    if (!mobileTrackRef.current) return;
    const container = mobileTrackRef.current;
    const scrollLeft = Math.abs(container.scrollLeft);
    const itemWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).clientWidth + 14
      : 320;
    const newIdx = Math.round(scrollLeft / itemWidth);
    if (newIdx >= 0 && newIdx < effectiveSlides.length && newIdx !== activeMobileIdx) {
      setActiveMobileIdx(newIdx);
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
    const target = container.children[idx] as HTMLElement | undefined;
    if (target) {
      container.scrollTo({
        left: isRtl
          ? target.offsetLeft - (container.clientWidth - target.clientWidth)
          : target.offsetLeft,
        behavior: 'smooth',
      });
      setActiveMobileIdx(idx);
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

  if (effectiveSlides.length === 0) return null;

  return (
    <div className="mag-carousel-outer">
      {/* ========================================================================= */}
      {/* DESKTOP VIEW: Renders active slide in full 12-column grid layout          */}
      {/* ========================================================================= */}
      <div className="hidden md:block">
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
      {/* MOBILE VIEW: Horizontal swipe track of SLIDE CONTAINERS (حاويات المقالات) */}
      {/* ========================================================================= */}
      <div className="block md:hidden">
        {/* Navigation Bar without swipe hint */}
        {effectiveSlides.length > 1 && (
          <div className="mag-slider-mobile-bar" style={{ justifyContent: 'space-between', marginBottom: 10 }}>
            <span className="mag-slider-counter-badge" style={{ fontSize: '11px' }}>
              {lang === 'ar'
                ? `حاوية ${activeMobileIdx + 1} من ${effectiveSlides.length}`
                : lang === 'fr'
                ? `Volet ${activeMobileIdx + 1} sur ${effectiveSlides.length}`
                : `Slide ${activeMobileIdx + 1} of ${effectiveSlides.length}`}
            </span>

            <div className="mag-slider-actions">
              <button
                type="button"
                className="mag-slider-nav-btn"
                onClick={isRtl ? handleNext : handlePrev}
                disabled={isRtl ? activeMobileIdx === effectiveSlides.length - 1 : activeMobileIdx === 0}
                aria-label="Previous"
              >
                {isRtl ? <ChevronRight size={15} /> : <ChevronLeft size={15} />}
              </button>

              <button
                type="button"
                className="mag-slider-nav-btn"
                onClick={isRtl ? handlePrev : handleNext}
                disabled={isRtl ? activeMobileIdx === 0 : activeMobileIdx === effectiveSlides.length - 1}
                aria-label="Next"
              >
                {isRtl ? <ChevronLeft size={15} /> : <ChevronRight size={15} />}
              </button>
            </div>
          </div>
        )}

        {/* Slide Containers Track */}
        <div
          ref={mobileTrackRef}
          className="mag-slides-swipe-track"
          dir={isRtl ? 'rtl' : 'ltr'}
        >
          {effectiveSlides.map((slide, slideIdx) => {
            const secMeta = MAG_SECTIONS.find((s) => s.slug === slide.slug);
            const slideTitle = secMeta ? secMeta.name[lang] || secMeta.name.ar : slide.slug;
            const countLabel =
              lang === 'ar'
                ? `${slide.cards.length} مقالات وفيديوهات`
                : lang === 'fr'
                ? `${slide.cards.length} contenus`
                : `${slide.cards.length} items`;

            const hasFeature = slide.cards.length > 1 && slide.cards[0].kind === 'feature';
            const topFeatureCard = hasFeature ? slide.cards[0] : null;
            const restCards = hasFeature ? slide.cards.slice(1) : slide.cards;

            return (
              <div
                key={slide.slug}
                id={`mobile-slide-${slide.slug}`}
                className="mag-slide-container-card"
              >
                {/* Container Header */}
                <div className="mag-slide-container-head">
                  <span
                    className="mag-slide-badge-title"
                    style={{
                      borderColor: `${slide.accent}44`,
                      color: slide.accent,
                      background: `${slide.accent}15`,
                    }}
                  >
                    <Layers size={12} />
                    <span>{slideTitle}</span>
                  </span>
                  <span className="mag-slide-item-count">{countLabel}</span>
                </div>

                {/* Top Feature Card (if exists) */}
                {topFeatureCard && (
                  <div className="mag-slide-feature-slot">
                    <MagazineFlipCard
                      card={topFeatureCard}
                      index={0}
                      total={slide.cards.length}
                      lang={lang}
                      isRtl={isRtl}
                      t={t}
                      onOpenArticle={onOpenArticle}
                      onOpenVideo={onOpenVideo}
                      onOpenShare={onOpenShare}
                      onCopyCitation={onCopyCitation}
                      isCompact
                    />
                  </div>
                )}

                {/* Compact 2-column Grid for Cards */}
                {restCards.length > 0 && (
                  <div className="mag-slide-compact-grid">
                    {restCards.map((card, rIdx) => (
                      <MagazineFlipCard
                        key={`${card.title.en || card.title.ar}-${rIdx}`}
                        card={card}
                        index={hasFeature ? rIdx + 1 : rIdx}
                        total={slide.cards.length}
                        lang={lang}
                        isRtl={isRtl}
                        t={t}
                        onOpenArticle={onOpenArticle}
                        onOpenVideo={onOpenVideo}
                        onOpenShare={onOpenShare}
                        onCopyCitation={onCopyCitation}
                        isCompact
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Slide Pagination Dots */}
        {effectiveSlides.length > 1 && (
          <div className="mag-slider-dots-container" style={{ marginTop: '10px' }}>
            <div className="mag-slider-dots">
              {effectiveSlides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`mag-slider-dot ${activeMobileIdx === idx ? 'active' : ''}`}
                  onClick={() => scrollToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
