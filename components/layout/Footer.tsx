'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-white border-t border-border-color mt-24 mb-16 lg:mb-0">
      <div className="w-[95%] max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary-blue text-white flex items-center justify-center font-extrabold text-lg shadow-sm">
                T
              </div>
              <span className="text-2xl font-extrabold text-primary-blue">
                TOT<span className="text-accent-yellow">Academy</span>
              </span>
            </div>
            <p className="text-sm text-text-light max-w-md leading-relaxed">
              {t(
                'أكاديمية تدريب المدربين — منصة رائدة متخصصة في تأهيل الكفاءات وتطوير المهارات القيادية والتدريبية وفق المعايير المهنية المعاصرة.',
                'TOT Academy — The premier platform dedicated to qualifying training leaders and empowering professional educators worldwide.',
                'Académie TOT — Plateforme d’excellence pour la formation et la certification des formateurs professionnels.'
              )}
            </p>
          </div>

          {/* Quick Links Col */}
          <div>
            <h4 className="text-sm font-bold text-text-dark uppercase tracking-wider mb-4">
              {t('روابط المنصة', 'Platform Links', 'Liens Utiles')}
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-text-light">
              <li>
                <Link href="/classes" className="hover:text-primary-blue transition-colors">
                  {t('الفصول والقاعات', 'Classes & Rooms', 'Classes & Salles')}
                </Link>
              </li>
              <li>
                <Link href="/specializations" className="hover:text-primary-blue transition-colors">
                  {t('التخصصات والمسارات', 'Specialization Tracks', 'Spécialisations')}
                </Link>
              </li>
              <li>
                <Link href="/edupath" className="hover:text-primary-blue transition-colors">
                  {t('المسار والاختبارات', 'Pathway & Quizzes', 'Parcours & Quiz')}
                </Link>
              </li>
              <li>
                <Link href="/trainer-magazine" className="hover:text-primary-blue transition-colors">
                  {t('مجلة المدرب', 'Trainer Magazine', 'Magazine')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-sm font-bold text-text-dark uppercase tracking-wider mb-4">
              {t('التواصل والدعم', 'Contact & Support', 'Contact')}
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-text-light">
              <li>
                <a href="https://wa.me/213555989370" target="_blank" rel="noopener noreferrer" className="hover:text-primary-blue transition-colors">
                  WhatsApp: +213 555 989 370
                </a>
              </li>
              <li>
                <a href="mailto:totacademy@gmail.com" className="hover:text-primary-blue transition-colors">
                  totacademy@gmail.com
                </a>
              </li>
              <li className="pt-2">
                <Link href="/studio" className="inline-block px-3 py-1.5 rounded-lg bg-slate-100 text-primary-blue font-bold hover:bg-slate-200 transition-colors">
                  {t('لوحة المشرف CMS', 'Admin CMS Studio', 'Studio Admin')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-border-color text-center text-xs text-text-light space-y-2">
          <p>
            {t(
              'أكاديمية تدريب المدربين — استثمر شغفك واصنع الأثر. جميع الحقوق محفوظة © 2026',
              'TOT Academy — Empower Your Passion, Create Impact. All rights reserved © 2026',
              'Académie TOT — Tous droits réservés © 2026'
            )}
          </p>
          <p className="text-text-dark font-bold tracking-wide">
            {t('تصميم وتطوير الأستاذ بلال عويش', 'Designed & Engineered by Prof. Billel Aouiche')}
          </p>
        </div>
      </div>
    </footer>
  );
};