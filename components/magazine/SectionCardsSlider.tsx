'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ArticleCardData } from '@/lib/magazine-data';
import { MagazineFlipCard } from './MagazineFlipCard';
import { ChevronLeft, ChevronRight, Compass, Layers } from 'lucide-react';

interface SectionCardsSliderProps {
  cards: ArticleCardData[];
  layout: string;
  sectionSlug: string;
  lang: 'ar' | 'en' | 'fr';
  isRtl: boolean;
  t: Record<string, string>;
  onOpenArticle: (card: ArticleCardData) => void;
  onOpenVideo: (video: { url: string; title: string; speaker: string; duration: string }) => void;
  onOpenShare: (card: ArticleCardData) => void;
  onCopyCitation: (title: string) => void;
}

export const SectionCardsSlider: React.FC<SectionCardsSliderProps> = ({
  cards,
  layout,
  sectionSlug,
  lang,
  isRtl,
  t,
  onOpenArticle,
  onOpenVideo,
  onOpenShare,
  onCopyCitation,
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Swipe prompt strings
  const sliderText = {
    ar: {
      swipe_hint: 'اسحب أفقياً لتصفح البطاقات',
      prev: 'السابق',
      next: 'التالي',
      counter: '{current} من {total}',
    },
    en: {
      swipe_hint: 'Swipe horizontally to browse cards',
      prev: 'Previous',
      next: 'Next',
      counter: '{current} of {total}',
    },
    fr: {
      swipe_hint: 'Glissez horizontalement pour faire défiler',
      prev: 'Précédent',
      next: 'Suivant',
      counter: '{current} sur {total}',
    },
  }[lang] || {
    swipe_hint: 'اسحب أفقياً لتصفح البطاقات',
    prev: 'السابق',
    next: 'التالي',
    counter: '{current} من {total}',
  };

  // Listen to scroll to update active dot on mobile swipe
  const handleScroll = useCallback(() => {
    if (!trackRef.current) return;
    const container = trackRef.current;
    const scrollLeft = Math.abs(container.scrollLeft);
    const itemWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).clientWidth + 16
      : 300;
    const newIndex = Math.round(scrollLeft / itemWidth);
    if (newIndex >= 0 && newIndex < cards.length) {
      setActiveIndex(newIndex);
    }
  }, [cards.length]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener('scroll', handleScroll, { passive: true });
    return () => track.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Reset to first slide on section change
  useEffect(() => {
    setActiveIndex(0);
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [sectionSlug]);

  const scrollToCard = (index: number) => {
    if (!trackRef.current) return;
    const container = trackRef.current;
    const children = container.children;
    if (children[index]) {
      const child = children[index] as HTMLElement;
      container.scrollTo({
        left: child.offsetLeft - (isRtl ? container.clientWidth - child.clientWidth : 0),
        behavior: 'smooth',
      });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    const nextIdx = Math.max(0, activeIndex - 1);
    scrollToCard(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = Math.min(cards.length - 1, activeIndex + 1);
    scrollToCard(nextIdx);
  };

  return (
    <div className="mag-carousel-outer">
      {/* Mobile Swipe Top Bar with Controls */}
      <div className="mag-slider-mobile-bar">
        <div className="mag-swipe-hint-pill">
          <Compass size={13} className="text-amber-400 animate-spin-slow" />
          <span>{sliderText.swipe_hint}</span>
        </div>

        <div className="mag-slider-actions">
          <button
            type="button"
            className="mag-slider-nav-btn"
            onClick={isRtl ? handleNext : handlePrev}
            disabled={isRtl ? activeIndex === cards.length - 1 : activeIndex === 0}
            aria-label={sliderText.prev}
          >
            {isRtl ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>

          <span className="mag-slider-counter-badge">
            {sliderText.counter
              .replace('{current}', String(activeIndex + 1))
              .replace('{total}', String(cards.length))}
          </span>

          <button
            type="button"
            className="mag-slider-nav-btn"
            onClick={isRtl ? handlePrev : handleNext}
            disabled={isRtl ? activeIndex === 0 : activeIndex === cards.length - 1}
            aria-label={sliderText.next}
          >
            {isRtl ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
          </button>
        </div>
      </div>

      {/* Cards Track (Desktop Grid / Mobile Swipe Track) */}
      <div
        ref={trackRef}
        className={`mag-swipe-track ${layout}-grid`}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        {cards.map((card, idx) => (
          <MagazineFlipCard
            key={`${card.title.en || card.title.ar}-${idx}`}
            card={card}
            index={idx}
            total={cards.length}
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

      {/* Slider Pagination Dots (Active on mobile swipe, interactive) */}
      {cards.length > 1 && (
        <div className="mag-slider-dots-container">
          <div className="mag-slider-dots">
            {cards.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`mag-slider-dot ${activeIndex === idx ? 'active' : ''}`}
                onClick={() => scrollToCard(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
