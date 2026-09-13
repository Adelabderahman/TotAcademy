'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { LocalizedContent } from '@/types';

interface TrainingClass {
  id: string;
  roomCode: string;
  title: LocalizedContent;
  category: LocalizedContent;
  status: 'live' | 'upcoming' | 'open';
  capacity: string;
  schedule: LocalizedContent;
  instructor: LocalizedContent;
  instructorRole: LocalizedContent;
  description: LocalizedContent;
  badgeColor: string;
  enrollUrl: string;
}

const academyClasses: TrainingClass[] = [
  {
    id: 'hall-al-farabi',
    roomCode: 'HALL-01',
    title: {
      ar: 'قاعة الفارابي: مختبر الإلقاء والخطابة الحية',
      en: 'Al-Farabi Hall: Live Rhetoric & Public Speaking Lab',
      fr: 'Salle Al-Farabi : Laboratoire d’Éloquence & Art Oratoire',
    },
    category: {
      ar: 'فصل تطبيقي مباشر',
      en: 'Live Applied Workshop',
      fr: 'Atelier Pratique en Direct',
    },
    status: 'live',
    capacity: '25 / 30 مقعد',
    schedule: {
      ar: 'السبت والثلاثاء (19:00 - 21:00 بتوقيت مكة)',
      en: 'Sat & Tue (19:00 - 21:00 GMT+3)',
      fr: 'Sam & Mar (19:00 - 21:00 UTC+3)',
    },
    instructor: {
      ar: 'أ. بلال عويش',
      en: 'Prof. Billel Aouiche',
      fr: 'Pr. Billel Aouiche',
    },
    instructorRole: {
      ar: 'كبير المدربين المعتمدين ومؤسس المنصة',
      en: 'Senior Master Trainer & Academy Founder',
      fr: 'Maître Formateur & Fondateur',
    },
    description: {
      ar: 'قاعة افتراضية ذكية تركز على محاكاة الإلقاء المسرحي الحقيقي، وتوزيع المهام الفردية مع تقييم نبرة الصوت ولغة الجسد فورياً.',
      en: 'An interactive virtual lab focusing on simulated stage presence, real-time vocal feedback, and micro-teaching evaluations.',
      fr: 'Un espace interactif simulant la prise de parole en public avec analyse immédiate du timbre vocal et de la posture.',
    },
    badgeColor: 'bg-emerald-500',
    enrollUrl: 'https://wa.me/213555989370?text=Enroll_Hall_AlFarabi',
  },
  {
    id: 'hall-ibn-khaldoun',
    roomCode: 'HALL-02',
    title: {
      ar: 'قاعة ابن خلدون: هندسة وتصميم الحقائب (ADDIE)',
      en: 'Ibn Khaldoun Hall: Instructional Design (ADDIE)',
      fr: 'Salle Ibn Khaldoun : Ingénierie Pédagogique (ADDIE)',
    },
    category: {
      ar: 'فصل التخطيط المنهجي',
      en: 'Curriculum Planning Studio',
      fr: 'Atelier de Conception Pédagogique',
    },
    status: 'upcoming',
    capacity: '18 / 25 مقعد',
    schedule: {
      ar: 'الأحد والأربعاء (20:00 - 22:00 بتوقيت مكة)',
      en: 'Sun & Wed (20:00 - 22:00 GMT+3)',
      fr: 'Dim & Mer (20:00 - 22:00 UTC+3)',
    },
    instructor: {
      ar: 'د. سفيان بن حمودة',
      en: 'Dr. Sofiane Benhamouda',
      fr: 'Dr. Sofiane Benhamouda',
    },
    instructorRole: {
      ar: 'خبير الاعتمادات وتطوير الكفاءات الأكاديمية',
      en: 'Instructional Accreditation Specialist',
      fr: 'Expert en Accréditation Pédagogique',
    },
    description: {
      ar: 'ورش عمل جماعية لبناء دليل المدرب، صياغة الأهداف السلوكية، وإعداد أدوات التقييم القبلي والبعدي المتطورة.',
      en: 'Collaborative workshop sessions dedicated to authoring trainer handbooks, mapping Bloom taxonomy objectives, and rubrics.',
      fr: 'Sessions collaboratives pour rédiger les guides du formateur et calibrer les évaluations formatives.',
    },
    badgeColor: 'bg-blue-500',
    enrollUrl: 'https://wa.me/213555989370?text=Enroll_Hall_IbnKhaldoun',
  },
  {
    id: 'hall-al-khawarizmi',
    roomCode: 'HALL-03',
    title: {
      ar: 'قاعة الخوارزمي: أدوات الذكاء الاصطناعي والتدريب الرقمي',
      en: 'Al-Khawarizmi Hall: AI & EdTech Studio',
      fr: 'Salle Al-Khawarizmi : IA & Technologies Éducatives',
    },
    category: {
      ar: 'مختبر التقنيات والـ EdTech',
      en: 'EdTech & Digital Innovation Lab',
      fr: 'Laboratoire EdTech & Innovation',
    },
    status: 'open',
    capacity: 'مفتوح للتسجيل',
    schedule: {
      ar: 'الخميس والجمعة (18:30 - 20:30 بتوقيت مكة)',
      en: 'Thu & Fri (18:30 - 20:30 GMT+3)',
      fr: 'Jeu & Ven (18:30 - 20:30 UTC+3)',
    },
    instructor: {
      ar: 'م. مريم الطاهر',
      en: 'Eng. Mariam Ettahar',
      fr: 'Ing. Mariam Ettahar',
    },
    instructorRole: {
      ar: 'استشارية التحول الرقمي ومنصات التعلم الذكية',
      en: 'EdTech & Digital Transformation Consultant',
      fr: 'Consultante en Transformation Digitale',
    },
    description: {
      ar: 'تطبيق مباشر لأقوى أدوات الذكاء الاصطناعي التوليدي في إنتاج الشرائح التفاعلية، وتوليد الأنشطة، وتلخيص المراجع التدريبية.',
      en: 'Practical utilization of cutting-edge Generative AI tools to produce dynamic slides, automate icebreakers, and synthesize literature.',
      fr: 'Mise en pratique de l’IA générative pour concevoir des supports visuels interactifs et automatiser les activités.',
    },
    badgeColor: 'bg-amber-500',
    enrollUrl: 'https://wa.me/213555989370?text=Enroll_Hall_AlKhawarizmi',
  },
  {
    id: 'hall-ibn-rushd',
    roomCode: 'HALL-04',
    title: {
      ar: 'قاعة ابن رشد: القيادة التدريبية وإدارة الورش المعقدة',
      en: 'Ibn Rushd Hall: Advanced Workshop Leadership',
      fr: 'Salle Ibn Rushd : Leadership & Animation Complexe',
    },
    category: {
      ar: 'فصل التيسير المتقدم',
      en: 'Advanced Facilitation Suite',
      fr: 'Facilitation Avancée & Gestion de Crise',
    },
    status: 'upcoming',
    capacity: '14 / 20 مقعد',
    schedule: {
      ar: 'الإثنين والخميس (20:30 - 22:30 بتوقيت مكة)',
      en: 'Mon & Thu (20:30 - 22:30 GMT+3)',
      fr: 'Lun & Jeu (20:30 - 22:30 UTC+3)',
    },
    instructor: {
      ar: 'أ. د. كريم الصالحي',
      en: 'Prof. Karim Essalehi',
      fr: 'Pr. Karim Essalehi',
    },
    instructorRole: {
      ar: 'مدرب دولي معتمد ومستشار تدريب تنفيذي',
      en: 'International Master Trainer & Executive Advisor',
      fr: 'Formateur International & Conseiller Exécutif',
    },
    description: {
      ar: 'السيطرة التامة على تفاعلات القاعة، التعامل مع الشخصيات الصعبة، وإدارة الوقت والضغط في المؤتمرات والبرامج الطويلة.',
      en: 'Mastering room dynamics, resolving difficult personality frictions, and optimizing time management during marathon conferences.',
      fr: 'Maîtrise des dynamiques de groupe, gestion des participants difficiles et régulation du temps en séminaire.',
    },
    badgeColor: 'bg-indigo-500',
    enrollUrl: 'https://wa.me/213555989370?text=Enroll_Hall_IbnRushd',
  },
];

export default function ClassesPage() {
  const { language, t } = useLanguage();
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'live' | 'upcoming' | 'open'>('all');

  const filteredClasses = selectedStatus === 'all'
    ? academyClasses
    : academyClasses.filter((c) => c.status === selectedStatus);

  return (
    <div className="w-full min-h-screen pb-24">
      
      {/* ================= Hero Showcase Section ================= */}
      <section className="bg-gradient-to-br from-[#0b3a96] via-primary-blue to-[#1c61e7] text-white rounded-b-[36px] px-6 md:px-12 pt-12 pb-20 shadow-hero relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-yellow/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="w-[95%] max-w-7xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-accent-yellow text-xs font-black uppercase tracking-wider mb-4 backdrop-blur-md border border-white/20">
            {t('القاعات والفصول الافتراضية الذكية', 'Smart Virtual Classrooms & Halls', 'Salles & Classes Virtuelles')}
          </span>
          <h1 className="text-3xl md:text-5xl font-black leading-tight max-w-3xl mx-auto mb-6">
            {t(
              'بيئة تدريبية تفاعلية تحاكي الواقع وتصقل المهارات التطبيقية',
              'Interactive Applied Classrooms Built for Peak Trainer Mastery',
              'Un Environnement Pédagogique Immersif pour Perfectionner Vos Compétences'
            )}
          </h1>
          <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto leading-relaxed mb-8 font-medium">
            {t(
              'فصول ذكية ومجموعات تدريبية مركزة لا تتجاوز 25 متدرباً، لضمان حصول كل مشارك على الممارسة الفردية والتغذية الراجعة الدقيقة.',
              'High-engagement virtual suites capped at 25 trainees to guarantee individualized coaching, live microphone drills, and rigorous feedback.',
              'Des cohortes restreintes limitées à 25 participants garantissant une pratique intensive et un feedback personnalisé.'
            )}
          </p>

          {/* Quick Metrics Bar */}
          <div className="flex justify-center items-center gap-6 md:gap-12 flex-wrap pt-4 border-t border-white/15 max-w-3xl mx-auto text-center">
            <div>
              <div className="text-2xl md:text-3xl font-black text-accent-yellow">4</div>
              <div className="text-xs text-white/80 mt-0.5">{t('قاعات تدريب متخصصة', 'Specialized Halls', 'Salles')}</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/20"></div>
            <div>
              <div className="text-2xl md:text-3xl font-black text-accent-yellow">100%</div>
              <div className="text-xs text-white/80 mt-0.5">{t('تطبيق عملي حي', 'Live Applied Practice', 'Pratique')}</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/20"></div>
            <div>
              <div className="text-2xl md:text-3xl font-black text-accent-yellow">4K HD</div>
              <div className="text-xs text-white/80 mt-0.5">{t('بث صوتي ومرئي نقي', 'Ultra Clear Broadcast', 'Qualité 4K')}</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/20"></div>
            <div>
              <div className="text-2xl md:text-3xl font-black text-accent-yellow">24/7</div>
              <div className="text-xs text-white/80 mt-0.5">{t('تسجيلات متاحة للمراجعة', 'Cloud Recordings', 'Replay 24/7')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Interactive Room Filter Buttons ================= */}
      <section className="w-[95%] max-w-7xl mx-auto px-4 mt-12">
        <div className="flex items-center justify-center gap-2 md:gap-3 overflow-x-auto pb-4 scrollbar-none">
          <button
            onClick={() => setSelectedStatus('all')}
            className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-extrabold transition-all border ${
              selectedStatus === 'all'
                ? 'bg-primary-blue text-white border-primary-blue shadow-md scale-105'
                : 'bg-white text-text-dark border-border-color hover:bg-slate-50'
            }`}
          >
            {t('جميع القاعات المتاحة', 'All Classrooms', 'Toutes les Salles')}
          </button>

          <button
            onClick={() => setSelectedStatus('live')}
            className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-extrabold transition-all border flex items-center gap-2 ${
              selectedStatus === 'live'
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-md scale-105'
                : 'bg-white text-emerald-700 border-border-color hover:bg-emerald-50/50'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>{t('جلسات جارية الآن', 'Live in Session', 'En Direct')}</span>
          </button>

          <button
            onClick={() => setSelectedStatus('upcoming')}
            className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-extrabold transition-all border ${
              selectedStatus === 'upcoming'
                ? 'bg-blue-600 text-white border-blue-600 shadow-md scale-105'
                : 'bg-white text-text-dark border-border-color hover:bg-slate-50'
            }`}
          >
            {t('قاعات تنطلق قريباً', 'Starting Soon', 'Prochainement')}
          </button>

          <button
            onClick={() => setSelectedStatus('open')}
            className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-extrabold transition-all border ${
              selectedStatus === 'open'
                ? 'bg-amber-500 text-white border-amber-500 shadow-md scale-105'
                : 'bg-white text-text-dark border-border-color hover:bg-slate-50'
            }`}
          >
            {t('التسجيل المفتوح', 'Open Registration', 'Inscriptions Ouvertes')}
          </button>
        </div>

        {/* ================= Classes Cards Grid ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          {filteredClasses.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-border-color p-6 md:p-8 shadow-sm hover:shadow-card-elevated hover:border-primary-blue/60 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-slate-100 text-slate-800 text-xs font-mono font-bold rounded-lg border border-slate-200">
                      {item.roomCode}
                    </span>
                    <span className="px-3 py-1 bg-blue-50 text-primary-blue text-xs font-bold rounded-full">
                      {item.category[language] || item.category.ar}
                    </span>
                  </div>

                  {/* Status Indicator */}
                  {item.status === 'live' && (
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-200">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                      {t('مباشر الآن', 'LIVE NOW', 'EN DIRECT')}
                    </span>
                  )}
                  {item.status === 'upcoming' && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
                      {t('يبدأ قريباً', 'Starts Soon', 'Bientôt')}
                    </span>
                  )}
                  {item.status === 'open' && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900">
                      {t('مقاعد متاحة', 'Seats Available', 'Places Disponibles')}
                    </span>
                  )}
                </div>

                <h3 className="text-xl md:text-2xl font-black text-text-dark mb-3 leading-snug">
                  {item.title[language] || item.title.ar}
                </h3>

                <p className="text-xs md:text-sm text-text-light leading-relaxed mb-6">
                  {item.description[language] || item.description.ar}
                </p>

                {/* Schedule & Capacity Details */}
                <div className="space-y-2.5 p-4 rounded-2xl bg-slate-50 border border-border-color mb-6 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-text-light font-medium flex items-center gap-1.5">
                      <span>🗓️</span> {t('الموعد والتوقيت:', 'Schedule:', 'Horaires :')}
                    </span>
                    <span className="font-bold text-text-dark">
                      {item.schedule[language] || item.schedule.ar}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-slate-200/60">
                    <span className="text-text-light font-medium flex items-center gap-1.5">
                      <span>👥</span> {t('الطاقة الاستيعابية:', 'Capacity:', 'Capacité :')}
                    </span>
                    <span className="font-bold text-primary-blue">
                      {item.capacity}
                    </span>
                  </div>
                </div>

                {/* Trainer Info Footer */}
                <div className="flex items-center gap-3 pt-2 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary-blue text-white flex items-center justify-center font-bold text-sm shadow-sm flex-shrink-0">
                    {item.instructor.en.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs md:text-sm font-extrabold text-text-dark truncate">
                      {item.instructor[language] || item.instructor.ar}
                    </h4>
                    <p className="text-[11px] text-text-light truncate">
                      {item.instructorRole[language] || item.instructorRole.ar}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-border-color flex items-center gap-3">
                <a
                  href={item.enrollUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-primary-blue text-white text-center font-bold text-xs md:text-sm rounded-xl shadow hover:bg-secondary-blue transition-all transform hover:-translate-y-0.5"
                >
                  {t('حجز مقعد في القاعة', 'Reserve Seat', 'Réserver une Place')}
                </a>
                <Link
                  href="/edupath"
                  className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-text-dark font-bold text-xs md:text-sm rounded-xl transition-colors"
                  title={t('استعراض المنهج', 'View Syllabus')}
                >
                  {t('المحتوى', 'Syllabus', 'Programme')}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Technical Specs & Smart Equipment Section ================= */}
      <section className="w-[95%] max-w-7xl mx-auto px-4 mt-20">
        <div className="p-8 md:p-12 rounded-3xl bg-slate-900 text-white shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-accent-yellow uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full">
              {t('البنية التحتية الذكية', 'Smart Classroom Infrastructure', 'Infrastructure Haute Technologie')}
            </span>
            <h2 className="text-2xl md:text-4xl font-black mt-4 mb-4">
              {t(
                'مواصفات القاعات وتقنيات البث الصوتي والمرئي',
                'Enterprise-Grade Streaming & Interactive EdTech Specs'
              )}
            </h2>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-8">
              {t(
                'تم تزويد كافة قاعات أكاديمية تدريب المدربين بأحدث خوادم البث فائق السرعة لضمان استمرارية الجلسة دون أي انقطاع.',
                'Our virtual rooms are architected on low-latency cloud nodes with high-fidelity acoustics to optimize your learning immersion.'
              )}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-800">
              <div className="space-y-1">
                <div className="text-accent-yellow font-extrabold text-lg">🎙️ Hi-Fi Audio</div>
                <p className="text-xs text-slate-400">عزل ضوضاء بالذكاء الاصطناعي لالتقاط نبرات الإلقاء الدقيقة.</p>
              </div>
              <div className="space-y-1">
                <div className="text-accent-yellow font-extrabold text-lg">💻 Smart Board</div>
                <p className="text-xs text-slate-400">سبورة تفاعلية تدعم المشاركة المباشرة والعصف الذهني السحابي.</p>
              </div>
              <div className="space-y-1">
                <div className="text-accent-yellow font-extrabold text-lg">☁️ 24/7 Cloud Archive</div>
                <p className="text-xs text-slate-400">أرشفة سحابية مشفرة لجميع الجلسات بجودة 1080p Full HD.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}