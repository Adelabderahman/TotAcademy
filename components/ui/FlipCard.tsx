'use client';

import React, { useState } from 'react';
import { SpecializationTrack } from '@/types';
import { useLanguage } from '@/context/LanguageContext';

interface FlipCardProps {
  track: SpecializationTrack;
}

export const FlipCard: React.FC<FlipCardProps> = ({ track }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { language, t } = useLanguage();

  const handleToggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div
      className={`flip-card-container w-full h-[380px] cursor-pointer select-none ${
        isFlipped ? 'is-flipped' : ''
      }`}
      onClick={handleToggleFlip}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleToggleFlip();
        }
      }}
      aria-label={`${track.title[language] || track.title.ar} - ${t('انقر لقلب البطاقة', 'Click to flip card')}`}
    >
      <div className="flip-card-inner relative w-full h-full transition-transform duration-700 ease-out shadow-sm hover:shadow-card-elevated rounded-2xl">
        
        {/* ================= Front Face ================= */}
        <div className="flip-card-front bg-white border border-border-color p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="px-3 py-1 bg-blue-50 text-primary-blue rounded-full text-xs font-bold border border-blue-100">
                {track.badge[language] || track.badge.ar}
              </span>
              <span className="text-xs text-text-light font-semibold">
                {track.durationWeeks} {t('أسابيع', 'Weeks', 'Semaines')}
              </span>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-border-color flex items-center justify-center text-3xl mb-4 shadow-inner">
              {track.frontIcon}
            </div>

            <h3 className="text-xl font-extrabold text-text-dark mb-2 line-clamp-2 leading-tight">
              {track.title[language] || track.title.ar}
            </h3>

            <p className="text-xs md:text-sm text-text-light line-clamp-3 leading-relaxed">
              {track.description[language] || track.description.ar}
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-primary-blue">
            <span>{t('انقر لاستعراض المنهج', 'Click to view syllabus', 'Cliquer pour voir le programme')}</span>
            <span className="text-base transform transition-transform duration-300 group-hover:rotate-180">↻</span>
          </div>
        </div>

        {/* ================= Back Face ================= */}
        <div className="flip-card-back bg-gradient-to-br from-[#0b3a96] via-primary-blue to-[#1c61e7] text-white p-6 flex flex-col justify-between border border-blue-400/30">
          <div>
            <div className="flex items-center justify-between border-b border-white/20 pb-3 mb-4">
              <h4 className="text-base font-extrabold text-accent-yellow">
                {t('مفردات المسار التدريبي', 'Curriculum Outline', 'Grandes Lignes')}
              </h4>
              <span className="text-xs bg-white/20 px-2 py-0.5 rounded text-white/90">
                {track.curriculum.length} {t('محاور', 'Units', 'Unités')}
              </span>
            </div>

            <ul className="space-y-2 text-xs text-white/95 overflow-y-auto max-h-[190px] pr-1 scrollbar-none">
              {track.curriculum.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 leading-relaxed">
                  <span className="text-accent-yellow font-bold mt-0.5">✓</span>
                  <span>{item[language] || item.ar}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-3 border-t border-white/20 flex gap-2">
            <a
              href={track.actionUrl}
              onClick={(e) => e.stopPropagation()}
              className="w-full py-2.5 bg-accent-yellow text-black text-center font-extrabold text-xs rounded-xl shadow-md hover:bg-white transition-colors"
            >
              {t('انضم للتخصص', 'Enroll in Track', 'Rejoindre')}
            </a>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleToggleFlip();
              }}
              className="px-3 py-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-xs text-white font-bold transition-colors"
              title={t('رجوع للواجهة الأمامية', 'Flip back')}
            >
              ↩
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};