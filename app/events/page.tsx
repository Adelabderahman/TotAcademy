'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { LocalizedContent } from '@/types';

interface AcademyEventItem {
  id: string;
  title: LocalizedContent;
  category: 'webinar' | 'workshop' | 'conference';
  categoryLabel: LocalizedContent;
  dateDay: string;
  dateMonth: LocalizedContent;
  fullDate: string;
  time: LocalizedContent;
  location: LocalizedContent;
  speaker: LocalizedContent;
  speakerTitle: LocalizedContent;
  seatsRemaining: number;
  description: LocalizedContent;
  registrationUrl: string;
  isFeatured?: boolean;
}

const academyEvents: AcademyEventItem[] = [
  {
    id: 'evt-tot-summit-2026',
    title: {
      ar: 'المؤتمر السنوي لصناع الأثر التدريبي (TOT Global Summit 2026)',
      en: 'Annual Impact Trainers Summit (TOT Global Summit 2026)',
      fr: 'Sommet Mondial des Formateurs d’Impact (TOT Summit 2026)',
    },
    category: 'conference',
    categoryLabel: {
      ar: 'مؤتمر دولي افتراضي',
      en: 'International Virtual Conference',
      fr: 'Conférence Internationale',
    },
    dateDay: '28',
    dateMonth: { ar: 'سبتمبر', en: 'Sep', fr: 'Sep' },
    fullDate: '2026-09-28',
    time: {
      ar: '18:00 - 22:00 بتوقيت مكة المكرمة',
      en: '18:00 - 22:00 GMT+3',
      fr: '18:00 - 22:00 UTC+3',
    },
    location: {
      ar: 'المنصة الافتراضية الكبرى (Zoom Premium)',
      en: 'Main Virtual Grand Hall (Zoom Premium)',
      fr: 'Grande Salle Virtuelle (Zoom Premium)',
    },
    speaker: {
      ar: 'نخبة من كبار رواد التدريب الدوليين',
      en: 'International Keynote Panelists',
      fr: 'Panel de Maîtres Formateurs Internationaux',
    },
    speakerTitle: {
      ar: 'بمشاركة ممثلي 12 دولة عربية وأجنبية',
      en: 'Featuring delegates from 12 countries',
      fr: 'Avec des délégués de 12 pays',
    },
    seatsRemaining: 42,
    description: {
      ar: 'الحدث الأضخم سنوياً لمناقشة مستقبل صناعة التدريب في عصر الذكاء الاصطناعي، وتكريم خريجي الأفواج التدريبية المتميزة، وتوقيع اتفاقيات الشراكة.',
      en: 'The flagship annual gathering exploring the future of pedagogy, honoring distinguished cohort graduates, and forming regional partnerships.',
      fr: 'L’événement phare annuel explorant l’avenir de la formation à l’ère de l’IA et célébrant l’excellence pédagogique.',
    },
    registrationUrl: 'https://wa.me/213555989370?text=Register_TOT_Global_Summit',
    isFeatured: true,
  },
  {
    id: 'evt-prompt-workshop',
    title: {
      ar: 'ورشة عمل: هندسة الأوامر وتوليد الحقائب التدريبية بالذكاء الاصطناعي',
      en: 'Workshop: Prompt Engineering for Instructional Courseware',
      fr: 'Atelier : Ingénierie de Prompts & Conception Pédagogique IA',
    },
    category: 'workshop',
    categoryLabel: {
      ar: 'ورشة تطبيقية مكثفة',
      en: 'Intensive Applied Workshop',
      fr: 'Atelier Pratique Intensif',
    },
    dateDay: '05',
    dateMonth: { ar: 'أكتوبر', en: 'Oct', fr: 'Oct' },
    fullDate: '2026-10-05',
    time: {
      ar: '19:30 - 21:30 بتوقيت مكة المكرمة',
      en: '19:30 - 21:30 GMT+3',
      fr: '19:30 - 21:30 UTC+3',
    },
    location: {
      ar: 'قاعة الخوارزمي الافتراضية',
      en: 'Al-Khawarizmi Smart Room',
      fr: 'Salle Virtuelle Al-Khawarizmi',
    },
    speaker: {
      ar: 'م. مريم الطاهر',
      en: 'Eng. Mariam Ettahar',
      fr: 'Ing. Mariam Ettahar',
    },
    speakerTitle: {
      ar: 'استشارية تكنولوجيا التعليم والذكاء الاصطناعي',
      en: 'EdTech & AI Pedagogical Consultant',
      fr: 'Consultante EdTech & Intelligence Artificielle',
    },
    seatsRemaining: 12,
    description: {
      ar: 'تطبيق عملي خطوة بخطوة لصياغة أوامر دقيقة لإنتاج سيناريوهات التدريب التفاعلية، وتوليد أسئلة الاختبارات الذكية في ثوانٍ.',
      en: 'Hands-on practical walkthrough crafting structured prompts to rapidly scaffold interactive case studies and smart quiz banks.',
      fr: 'Mise en pratique pour structurer des prompts précis afin de créer des cas pratiques et générer des banques d’évaluations.',
    },
    registrationUrl: 'https://wa.me/213555989370?text=Register_AI_Prompt_Workshop',
  },
  {
    id: 'evt-charismatic-voice',
    title: {
      ar: 'ويبينار مفتوح: أسرار الصوت القيادي وفنون كسر رهاب المسرح',
      en: 'Open Webinar: Vocal Authority & Conquering Stage Fright',
      fr: 'Webinaire Ouvert : Puissance Vocale & Maîtrise du Trac',
    },
    category: 'webinar',
    categoryLabel: {
      ar: 'جلسة تدريبية مفتوحة',
      en: 'Open Public Webinar',
      fr: 'Webinaire Ouvert au Public',
    },
    dateDay: '12',
    dateMonth: { ar: 'أكتوبر', en: 'Oct', fr: 'Oct' },
    fullDate: '2026-10-12',
    time: {
      ar: '20:00 - 21:30 بتوقيت مكة المكرمة',
      en: '20:00 - 21:30 GMT+3',
      fr: '20:00 - 21:30 UTC+3',
    },
    location: {
      ar: 'بث مباشر عبر YouTube Live و Zoom',
      en: 'Simulcast on YouTube Live & Zoom',
      fr: 'Diffusé en direct sur YouTube & Zoom',
    },
    speaker: {
      ar: 'أ. بلال عويش',
      en: 'Prof. Billel Aouiche',
      fr: 'Pr. Billel Aouiche',
    },
    speakerTitle: {
      ar: 'مؤسس أكاديمية تدريب المدربين',
      en: 'Founder & Senior Master Trainer',
      fr: 'Fondateur & Maître Formateur',
    },
    seatsRemaining: 85,
    description: {
      ar: 'جلسة ملهمة مفتوحة تتناول تمارين التنفس البطني، تدريب الحبال الصوتية على التردد الرنان، وتقنيات الحضور المسرحي المقنع.',
      en: 'An inspiring public masterclass exploring diaphragmatic breathing drills, vocal cord resonance, and stage command.',
      fr: 'Une session ouverte sur la respiration diaphragmatique, le placement de la voix et la présence scénique.',
    },
    registrationUrl: 'https://wa.me/213555989370?text=Register_Vocal_Webinar',
  },
  {
    id: 'evt-addie-clinic',
    title: {
      ar: 'عيادة التدريب: مراجعة واعتماد الحقائب التدريبية الفردية',
      en: 'Training Clinic: One-on-One Courseware Audit & Review',
      fr: 'Clinique Pédagogique : Audit & Validation de Kits de Formation',
    },
    category: 'workshop',
    categoryLabel: {
      ar: 'عيادة تدقيق واعتماد',
      en: 'Certification Audit Clinic',
      fr: 'Clinique de Validation',
    },
    dateDay: '22',
    dateMonth: { ar: 'أكتوبر', en: 'Oct', fr: 'Oct' },
    fullDate: '2026-10-22',
    time: {
      ar: '17:00 - 20:00 بتوقيت مكة المكرمة',
      en: '17:00 - 20:00 GMT+3',
      fr: '17:00 - 20:00 UTC+3',
    },
    location: {
      ar: 'غرف الاستشارات الفردية المغلقة',
      en: 'Private Breakout Consultation Rooms',
      fr: 'Salles Virtuelles Privées de Consultation',
    },
    speaker: {
      ar: 'لجنة الفحص والاعتماد بالأكاديمية',
      en: 'Academy Accreditation Board',
      fr: 'Comité Scientifique d’Accréditation',
    },
    speakerTitle: {
      ar: 'نخبة المستشارين الأكاديميين',
      en: 'Senior Academic Consultants',
      fr: 'Consultants Pédagogiques Seniors',
    },
    seatsRemaining: 8,
    description: {
      ar: 'جلسات تدقيق فردية مدتها 45 دقيقة لكل مدرب لفحص دليله التدريبي وشرائح العرض وإصدار شهادة المطابقة المهنية.',
      en: 'Intensive 45-minute 1-on-1 audit reviews to evaluate your instructional manual and approve official course certification.',
      fr: 'Sessions individuelles de 45 minutes pour auditer votre kit de formation et délivrer l’attestation de conformité.',
    },
    registrationUrl: 'https://wa.me/213555989370?text=Register_ADDIE_Audit_Clinic',
  },
];

export default function EventsPage() {
  const { language, t } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'conference' | 'workshop' | 'webinar'>('all');
  const [selectedDateFilter, setSelectedDateFilter] = useState<string | null>(null);

  const filteredEvents = academyEvents.filter((evt) => {
    const matchesCategory = selectedFilter === 'all' || evt.category === selectedFilter;
    const matchesDate = !selectedDateFilter || evt.fullDate === selectedDateFilter;
    return matchesCategory && matchesDate;
  });

  const featuredEvent = academyEvents.find((evt) => evt.isFeatured);

  return (
    <div className="w-full min-h-screen pb-24">
      
      {/* ================= Hero Showcase Section ================= */}
      <section className="bg-gradient-to-br from-[#0b3a96] via-primary-blue to-[#1c61e7] text-white rounded-b-[36px] px-6 md:px-12 pt-12 pb-20 shadow-hero relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-yellow/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="w-[95%] max-w-7xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-accent-yellow text-xs font-black uppercase tracking-wider mb-4 backdrop-blur-md border border-white/20">
            {t('أجندة الفعاليات والمؤتمرات التفاعلية', 'Academy Events & Masterclasses', 'Calendrier des Événements')}
          </span>
          <h1 className="text-3xl md:text-5xl font-black leading-tight max-w-3xl mx-auto mb-6">
            {t(
              'واكب أحدث ورش العمل والمؤتمرات التدريبية الكبرى',
              'Stay Ahead with Exclusive Workshops, Summits & Masterclasses',
              'Participez aux Masterclasses et Événements Majeurs de l’Académie'
            )}
          </h1>
          <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto leading-relaxed mb-8 font-medium">
            {t(
              'احجز مقعدك في الجلسات التفاعلية المباشرة، وتواصل مع نخبة المدربين والمستشارين من مختلف أنحاء العالم العربي.',
              'Reserve your seat in high-impact interactive sessions and connect with leading thought leaders and certified coaches worldwide.',
              'Réservez votre place pour nos sessions interactives et échangez avec des experts reconnus du monde de la formation.'
            )}
          </p>

          {/* Quick Category Anchors */}
          <div className="flex justify-center gap-3 flex-wrap">
            <a
              href="#featured-event-spotlight"
              className="px-8 py-3.5 bg-accent-yellow text-black font-extrabold rounded-xl shadow-lg hover:bg-white transition-all transform hover:-translate-y-0.5 text-xs md:text-sm"
            >
              🌟 {t('القمة السنوية الكبرى', 'Annual Global Summit', 'Sommet Annuel')}
            </a>
            <a
              href="#events-list-section"
              className="px-8 py-3.5 bg-white/10 border border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all text-xs md:text-sm"
            >
              📅 {t('جدول المواعيد القادمة', 'Browse Calendar', 'Voir le Calendrier')}
            </a>
          </div>
        </div>
      </section>

      {/* ================= Featured Event Spotlight ================= */}
      {featuredEvent && (
        <section id="featured-event-spotlight" className="w-[95%] max-w-7xl mx-auto px-4 -mt-10 relative z-20">
          <div className="bg-white rounded-3xl border-2 border-accent-yellow shadow-xl p-6 md:p-10 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3.5 py-1 bg-accent-yellow text-black font-extrabold text-xs rounded-full uppercase tracking-wider shadow-sm">
                    ⭐ {t('الحدث الأبرز لهذا العام', 'Featured Major Event', 'Événement Phare')}
                  </span>
                  <span className="text-xs font-bold text-primary-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    {featuredEvent.categoryLabel[language] || featuredEvent.categoryLabel.ar}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-text-dark mb-4 leading-snug">
                  {featuredEvent.title[language] || featuredEvent.title.ar}
                </h2>

                <p className="text-xs md:text-sm text-text-light leading-relaxed mb-6 max-w-2xl">
                  {featuredEvent.description[language] || featuredEvent.description.ar}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-text-dark p-4 rounded-2xl bg-slate-50 border border-border-color">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🗓️</span>
                    <span>{featuredEvent.dateDay} {featuredEvent.dateMonth[language] || featuredEvent.dateMonth.ar} 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">⏱️</span>
                    <span>{featuredEvent.time[language] || featuredEvent.time.ar}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📍</span>
                    <span>{featuredEvent.location[language] || featuredEvent.location.ar}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">👥</span>
                    <span className="text-primary-blue font-bold">
                      {featuredEvent.seatsRemaining} {t('مقعد متبقٍ فقط', 'seats remaining', 'places restantes')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Column */}
              <div className="flex flex-col items-center justify-center gap-3 w-full lg:w-auto flex-shrink-0">
                <a
                  href={featuredEvent.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full lg:w-64 py-4 bg-primary-blue text-white text-center font-extrabold text-sm rounded-2xl shadow-md hover:bg-secondary-blue transition-all transform hover:-translate-y-0.5"
                >
                  {t('تسجيل الحضور الفوري', 'Register for Summit', 'S’inscrire au Sommet')}
                </a>
                <span className="text-[11px] text-text-light font-medium">
                  {t('المقاعد محدودة لضمان جودة التفاعل', 'Limited seats to ensure high engagement')}
                </span>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* ================= Interactive Filtering Bar ================= */}
      <section id="events-list-section" className="w-[95%] max-w-7xl mx-auto px-4 mt-16">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-border-color pb-6 mb-8">
          <div>
            <h2 className="text-2xl font-black text-text-dark">
              {t('جدول المواعيد القادمة', 'Scheduled Calendar', 'Calendrier des Sessions')}
            </h2>
            <p className="text-xs text-text-light mt-1">
              {t('اختر نوع الفعالية أو انقر على التاريخ لتصفية الجلسات.', 'Filter by format or select a specific date.')}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-2 scrollbar-none">
            <button
              onClick={() => { setSelectedFilter('all'); setSelectedDateFilter(null); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                selectedFilter === 'all' && !selectedDateFilter
                  ? 'bg-primary-blue text-white border-primary-blue shadow-sm'
                  : 'bg-white text-text-dark border-border-color hover:bg-slate-50'
              }`}
            >
              {t('الكل', 'All Events', 'Tous')}
            </button>
            <button
              onClick={() => setSelectedFilter('workshop')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                selectedFilter === 'workshop'
                  ? 'bg-primary-blue text-white border-primary-blue shadow-sm'
                  : 'bg-white text-text-dark border-border-color hover:bg-slate-50'
              }`}
            >
              {t('ورش عمل', 'Workshops', 'Ateliers')}
            </button>
            <button
              onClick={() => setSelectedFilter('webinar')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                selectedFilter === 'webinar'
                  ? 'bg-primary-blue text-white border-primary-blue shadow-sm'
                  : 'bg-white text-text-dark border-border-color hover:bg-slate-50'
              }`}
            >
              {t('ويبينار', 'Webinars', 'Webinaires')}
            </button>
            <button
              onClick={() => setSelectedFilter('conference')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                selectedFilter === 'conference'
                  ? 'bg-primary-blue text-white border-primary-blue shadow-sm'
                  : 'bg-white text-text-dark border-border-color hover:bg-slate-50'
              }`}
            >
              {t('مؤتمرات', 'Conferences', 'Conférences')}
            </button>
          </div>
        </div>

        {/* ================= Event Cards Grid ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              className="bg-white rounded-3xl border border-border-color p-6 md:p-8 shadow-sm hover:shadow-card-elevated hover:border-primary-blue/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Date & Category Top Row */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex flex-col items-center justify-center text-primary-blue shadow-inner flex-shrink-0">
                      <span className="text-lg font-black leading-none">{evt.dateDay}</span>
                      <span className="text-[10px] font-bold uppercase mt-1">
                        {evt.dateMonth[language] || evt.dateMonth.ar}
                      </span>
                    </div>
                    <div>
                      <span className="px-2.5 py-1 bg-slate-100 text-slate-700 font-bold text-[11px] rounded-lg">
                        {evt.categoryLabel[language] || evt.categoryLabel.ar}
                      </span>
                      <div className="text-[11px] text-text-light mt-1 font-mono">
                        ⏱ {evt.time[language] || evt.time.ar}
                      </div>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full whitespace-nowrap">
                    {evt.seatsRemaining} {t('مقعد متاح', 'open')}
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-extrabold text-text-dark mb-3 leading-snug">
                  {evt.title[language] || evt.title.ar}
                </h3>

                <p className="text-xs text-text-light leading-relaxed mb-6">
                  {evt.description[language] || evt.description.ar}
                </p>

                {/* Speaker details */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-border-color mb-6 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary-blue text-white flex items-center justify-center font-bold text-xs shadow-sm flex-shrink-0">
                    🎤
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-text-dark truncate">
                      {evt.speaker[language] || evt.speaker.ar}
                    </h4>
                    <p className="text-[10px] text-text-light truncate">
                      {evt.speakerTitle[language] || evt.speakerTitle.ar}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-border-color flex items-center gap-3">
                <a
                  href={evt.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-primary-blue text-white text-center font-bold text-xs rounded-xl shadow hover:bg-secondary-blue transition-all transform hover:-translate-y-0.5"
                >
                  {t('تأكيد الحضور', 'Confirm Attendance', 'Confirmer')}
                </a>
                <button
                  onClick={() => {
                    const eventTitle = encodeURIComponent(evt.title.en || evt.title.ar);
                    const eventLoc = encodeURIComponent(evt.location.en || evt.location.ar);
                    window.open(`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&location=${eventLoc}`, '_blank');
                  }}
                  className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-text-dark font-bold text-xs rounded-xl transition-colors"
                  title={t('إضافة إلى تقويم Google', 'Add to Google Calendar')}
                >
                  📅 +
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="p-12 text-center bg-white rounded-3xl border border-border-color my-8">
            <span className="text-3xl mb-2 block">🔍</span>
            <h3 className="text-base font-bold text-text-dark mb-1">
              {t('لا توجد فعاليات مطابقة في هذا التاريخ', 'No scheduled events match your filter')}
            </h3>
            <p className="text-xs text-text-light">
              {t('يرجى اختيار تصنيف آخر أو استعراض جميع الفعاليات.', 'Try resetting your filter to view upcoming sessions.')}
            </p>
          </div>
        )}
      </section>

      {/* ================= Host a Workshop CTA Banner ================= */}
      <section className="w-[95%] max-w-7xl mx-auto px-4 mt-20">
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-accent-yellow uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full">
              {t('التعاون الأكاديمي والمدربون الزائرون', 'Trainer Collaboration & Guest Faculty')}
            </span>
            <h3 className="text-xl md:text-3xl font-black mt-3 mb-2">
              {t('هل ترغب في تقديم ورشة عمل مشتركة أو ندوة عبر منصتنا؟', 'Want to Host a Masterclass or Webinar with TOT Academy?')}
            </h3>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              {t(
                'نرحب بكافة المدربين المحترفين والمستشارين لطرح مبادراتهم ومحتواهم العلمي أمام آلاف المهتمين في الوطن العربي.',
                'We welcome certified master trainers and authors to pitch exclusive workshops and reach thousands of passionate educators.'
              )}
            </p>
          </div>

          <a
            href="https://wa.me/213555989370?text=Propose_Workshop_TOT_Academy"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-accent-yellow text-black font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:bg-white transition-all transform hover:-translate-y-0.5 whitespace-nowrap flex-shrink-0"
          >
            🤝 {t('تقديم مقترح ورشة تدريبية', 'Propose a Workshop', 'Proposer un Atelier')}
          </a>
        </div>
      </section>

    </div>
  );
}