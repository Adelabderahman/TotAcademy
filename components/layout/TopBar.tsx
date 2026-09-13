'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage, Language } from '@/context/LanguageContext';

export const TopBar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="w-full bg-white border-b border-border-color py-3">
      <div className="w-[95%] max-w-7xl mx-auto px-4 flex justify-between items-center text-sm font-medium">
        {/* Left Side: Language Switcher & Social Channels */}
        <div className="flex items-center gap-3 md:gap-5">
          <select
            aria-label="Language Selector"
            value={language}
            onChange={(e) => setLanguage(e.target.value as Language)}
            className="px-3 py-1.5 bg-white border border-border-color rounded-lg font-semibold text-text-dark text-xs md:text-sm cursor-pointer outline-none hover:border-primary-blue transition-all"
          >
            <option value="ar">العربية (Arabic)</option>
            <option value="en">English (US)</option>
            <option value="fr">Français (FR)</option>
          </select>

          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/213555989370"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center bg-white border border-border-color rounded-lg text-text-dark hover:text-primary-blue hover:border-primary-blue hover:bg-slate-50 transition-all transform hover:-translate-y-0.5"
              title="WhatsApp"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>

            <a
              href="mailto:totacademy@gmail.com"
              className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center bg-white border border-border-color rounded-lg text-text-dark hover:text-primary-blue hover:border-primary-blue hover:bg-slate-50 transition-all transform hover:-translate-y-0.5"
              title="Email"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side: CMS Studio & Registration Action */}
        <div className="flex items-center gap-2 md:gap-3">
          <Link
            href="/studio"
            className="px-3 py-1.5 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors flex items-center gap-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-primary-blue"></span>
            {t('لوحة التحكم CMS', 'CMS Studio', 'Studio CMS')}
          </Link>

          <Link
            href="/classes"
            className="px-4 md:px-6 py-1.5 md:py-2 bg-white text-text-dark border border-border-color rounded-lg text-xs md:text-sm font-bold hover:border-text-dark hover:bg-slate-50 transition-all whitespace-nowrap"
          >
            {t('التسجيل', 'Enroll', 'Inscription')}
          </Link>
        </div>
      </div>
    </div>
  );
};