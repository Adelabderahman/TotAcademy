'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useFirestoreSync } from '@/hooks/useFirestoreSync';

type StudioCMSData = {
  hero: {
    title: Record<string, string>;
    subtitle: Record<string, string>;
    desc: Record<string, string>;
    videoUrl: string;
  };
  modules: unknown[];
  specializations: unknown[];
  events: unknown[];
  magazine: unknown[];
};

const defaultLandingData: StudioCMSData = {
  hero: {
    title: {
      ar: 'أكاديمية تدريب المدربين — استثمر شغفك واصنع الأثر',
      en: 'TOT Academy — Empower Your Passion & Create Impact',
      fr: 'Académie TOT — Valorisez Votre Passion & Créez l’Impact',
    },
    subtitle: {
      ar: 'المنصة الرائدة في تأهيل وإعداد الكفاءات التدريبية المعتمدة',
      en: 'The premier ecosystem for accredited master coaches & trainers',
      fr: 'La plateforme d’excellence pour formateurs professionnels certifiés',
    },
    desc: {
      ar: 'منظومة تدريبية وتطبيقية متكاملة تشمل الفصول التفاعلية الذكية، مسارات التخصص المتقدمة بالأبعاد الثلاثية، منصة الاختبارات والشهادات الرقمية، ومجلة معرفية متجددة لنقل الخبرات.',
      en: 'A comprehensive applied ecosystem uniting smart virtual classrooms, interactive 3D specialization tracks, digital credential evaluations, and a contemporary thought-leadership publication.',
      fr: 'Un écosystème pédagogique intégré combinant classes virtuelles immersives, spécialisations interactives en 3D, attestations numériques et revue d’expertise.',
    },
    videoUrl: 'https://www.youtube.com/embed/3K-Wx5q7ExA?rel=0&modestbranding=1',
  },
  modules: [],
  specializations: [],
  events: [],
  magazine: [],
};

export default function HomePage() {
  const { language, t } = useLanguage();
  const { data } = useFirestoreSync<StudioCMSData>(
    'cms_studio',
    'master_content',
    defaultLandingData
  );

  const heroContent = data.hero || defaultLandingData.hero;

  const pillars = [
    {
      href: '/classes',
      icon: '🏛️',
      title: t('الفصول والقاعات الذكية', 'Interactive Classrooms', 'Salles & Classes'),
      badge: t('بث حي ومحاكاة', 'Live Streaming', 'En Direct'),
      desc: t(
        'قاعات تدريب افتراضية مجهزة بأحدث أدوات العرض والمحاكاة لتمكين المتدرب من الإلقاء الحقيقي ونيل التقييم الفوري.',
        'Virtual smart rooms equipped with real-time feedback tools to simulate live stage delivery and micro-teaching drills.',
        'Des salles virtuelles équipées d’outils interactifs pour s’entraîner à la prise de parole en conditions réelles.'
      ),
      color: 'hover:border-primary-blue group-hover:text-primary-blue',
      badgeBg: 'bg-blue-50 text-primary-blue',
    },
    {
      href: '/specializations',
      icon: '🎓',
      title: t('التخصصات والمسارات 3D', '3D Specialization Tracks', 'Pistes de Spécialisation 3D'),
      badge: t('بطاقات تفاعلية', '3D Flip Cards', 'Cartes 3D'),
      desc: t(
        'استكشف مفردات ومناهج التخصص في القيادة، هندسة الحقائب، والذكاء الاصطناعي عبر بطاقات ثلاثية الأبعاد تنقلب 180 درجة.',
        'Explore comprehensive curricula across leadership, ADDIE courseware, and generative AI via tactile 3D cards.',
        'Explorez les programmes en leadership, ingénierie pédagogique et IA via des fiches interactives pivotant à 180°.'
      ),
      color: 'hover:border-primary-green group-hover:text-primary-green',
      badgeBg: 'bg-emerald-50 text-primary-green',
    },
    {
      href: '/edupath',
      icon: '⚡',
      title: t('المسار التعليمي والاختبارات', 'EduPath & Quizzes', 'Parcours & Quiz'),
      badge: t('تقييم وشهادة PDF', 'PDF Certification', 'Attestation PDF'),
      desc: t(
        'مشغل فيديو عالي الدقة ونظام اختبارات ذكي مع مؤقت زمني، وتغذية راجعة، وإمكانية استخراج شهادة رقمية فورية.',
        'HD video player and adaptive quiz engine with timed questions, rationales, and automated PDF certificate generation.',
        'Lecteur vidéo HD et système de quiz chronométré avec explications détaillées et téléchargement d’attestation PDF.'
      ),
      color: 'hover:border-amber-500 group-hover:text-amber-500',
      badgeBg: 'bg-amber-50 text-amber-800',
    },
    {
      href: '/events',
      icon: '📅',
      title: t('الفعاليات والمؤتمرات', 'Academy Events Calendar', 'Agenda & Événements'),
      badge: t('مواعيد حية', 'Live Dates', 'Dates Clés'),
      desc: t(
        'جدول زمني متكامل للمؤتمرات السنوية، والورش العملية المكثفة، والندوات المفتوحة مع إمكانية الحجز والإضافة لتقويم Google.',
        'Real-time agenda for annual summits, hands-on clinics, and guest masterclasses with Google Calendar synchronization.',
        'Calendrier complet des sommets, ateliers pratiques et webinaires avec synchronisation Google Calendar.'
      ),
      color: 'hover:border-indigo-500 group-hover:text-indigo-500',
      badgeBg: 'bg-indigo-50 text-indigo-800',
    },
    {
      href: '/trainers',
      icon: '👨‍🏫',
      title: t('هيئة التدريب والنخبة', 'Master Faculty Directory', 'Corps Pédagogique'),
      badge: t('خبرات دولية', 'Global Mentors', 'Mentors Experts'),
      desc: t(
        'تعرف على المدربين المعتمدين وسيرهم الذاتية واعتماداتهم الدولية، واطلب استشارات خاصة لتطوير مسارك التدريبي.',
        'Meet distinguished certified mentors, inspect global credentials, and book targeted advisory sessions.',
        'Découvrez le profil de nos formateurs certifiés et réservez des consultations privées sur mesure.'
      ),
      color: 'hover:border-rose-500 group-hover:text-rose-500',
      badgeBg: 'bg-rose-50 text-rose-800',
    },
    {
      href: '/trainer-magazine',
      icon: '📖',
      title: t('مجلة المدرب المحترف', 'Trainer Thought Magazine', 'Magazine du Formateur'),
      badge: t('بحوث ودراسات', 'Insights & Studies', 'Recherches'),
      desc: t(
        'مقالات ودراسات متجددة أسبوعياً تتناول أسرار الصوت، كسر رهاب المسرح، وتوظيف الذكاء الاصطناعي في التدريب المعاصر.',
        'Weekly curated editorial insights covering acoustic mastery, stage fright remedies, and instructional AI adoption.',
        'Articles et analyses hebdomadaires sur la résonance vocale, la gestion du trac et l’intégration de l’IA.'
      ),
      color: 'hover:border-teal-500 group-hover:text-teal-500',
      badgeBg: 'bg-teal-50 text-teal-800',
    },
  ];

  const testimonials = [
    {
      quote: {
        ar: 'نقلة نوعية حقيقية في مسيرتي المهنية. دمج التدريب على الإلقاء مع تقنيات الذكاء الاصطناعي في الأكاديمية مكنني من إطلاق برنامجي التدريبي الخاص بثقة مطلقة.',
        en: 'A profound milestone in my career. Blending stage rhetoric with pedagogical AI enabled me to launch my independent training business with total confidence.',
      },
      name: { ar: 'أ. حسام الدين بلقاسم', en: 'Prof. Houssam Belkacem' },
      role: { ar: 'مدرب تنفيذي معتمد — خريج الفوج الثالث', en: 'Certified Executive Coach — Cohort 3' },
    },
    {
      quote: {
        ar: 'أفضل استثمار معرفي قمت به. نظام القاعات التفاعلية والملاحظات الفورية من الأستاذ بلال عويش أزال رهاب الحديث أمام الجمهور نهائياً.',
        en: 'The finest educational investment I ever made. Real-time feedback in virtual rooms completely dissolved my public speaking anxieties.',
      },
      name: { ar: 'د. فاطمة الزهراء مرزوق', en: 'Dr. Fatima Marzouk' },
      role: { ar: 'استشارية تربوية ومحاضرة جامعية', en: 'Educational Consultant & University Lecturer' },
    },
  ];

  return (
    <div className="w-full min-h-screen pb-24">
      
      {/* ================= Master Hero Showcase ================= */}
      <section className="bg-gradient-to-br from-[#0b3a96] via-primary-blue to-[#1c61e7] text-white rounded-b-[40px] px-6 md:px-12 pt-12 pb-20 shadow-hero relative overflow-hidden">
        {/* Ambient Radial Lights */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-yellow/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="w-[95%] max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Hero Left Content */}
            <div className="flex-1 max-w-2xl text-start">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-accent-yellow text-xs font-black uppercase tracking-wider mb-4 backdrop-blur-md border border-white/20">
                {heroContent.subtitle[language] || heroContent.subtitle.ar}
              </span>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                {heroContent.title[language] || heroContent.title.ar}
              </h1>

              <p className="text-sm md:text-base lg:text-lg text-white/90 leading-relaxed mb-8 font-medium">
                {heroContent.desc[language] || heroContent.desc.ar}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/edupath"
                  className="px-8 py-4 bg-accent-yellow text-black font-extrabold rounded-2xl shadow-lg hover:bg-white transition-all transform hover:-translate-y-0.5 text-xs md:text-sm"
                >
                  🚀 {t('ابدأ رحلة التعلم الآن', 'Start Learning Path', 'Commencer')}
                </Link>
                <Link
                  href="/specializations"
                  className="px-8 py-4 bg-white/10 border border-white/30 text-white font-bold rounded-2xl hover:bg-white/20 transition-all transform hover:-translate-y-0.5 text-xs md:text-sm"
                >
                  🎓 {t('استكشف التخصصات 3D', 'Explore 3D Tracks', 'Spécialisations 3D')}
                </Link>
              </div>
            </div>

            {/* Hero Right Video Embed */}
            <div className="flex-1 w-full max-w-xl aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-black">
              <iframe
                src={heroContent.videoUrl}
                title="TOT Academy Presentation"
                className="w-full h-full border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* ================= Vision, Mission & Values (VMO Grid) ================= */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-10 border-t border-white/15">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-black text-accent-yellow mb-2">
                {t('رؤيتنا المستدامة', 'Our Strategic Vision', 'Notre Vision')}
              </h3>
              <p className="text-xs md:text-sm text-white/85 leading-relaxed">
                {t(
                  'الريادة الإقليمية في صناعة وتأهيل المدربين القادرين على قيادة التحول المعرفي والإبداعي في المؤسسات والمجتمعات.',
                  'To be the regional benchmark for qualifying master educators who transform knowledge and inspire human potential.'
                )}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-black text-accent-yellow mb-2">
                {t('رسالتنا التعليمية', 'Our Educational Mission', 'Notre Mission')}
              </h3>
              <p className="text-xs md:text-sm text-white/85 leading-relaxed">
                {t(
                  'تقديم برامج تطبيقية بمعايير عالمية تعزز ثقة المتدرب وتمنحه أدوات الإلقاء القيادي وهندسة المناهج والتكنولوجيا المعاصرة.',
                  'Delivering hands-on curricula benchmarked against international pedagogical standards to equip trainers with charisma and rigor.'
                )}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="text-3xl mb-3">💎</div>
              <h3 className="text-lg font-black text-accent-yellow mb-2">
                {t('قيمنا الجوهرية', 'Our Core Pillars', 'Nos Valeurs')}
              </h3>
              <p className="text-xs md:text-sm text-white/85 leading-relaxed">
                {t(
                  'الأثر المستدام، الابتكار التدريبي المستمر، النزاهة العلمية والمهنية، والتمكين المجتمعي الشامل لكل خريج.',
                  'Enduring impact, pedagogical innovation, scholarly integrity, and the active lifelong empowerment of every graduate.'
                )}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= Impact Metrics Counter Bar ================= */}
      <section className="w-[95%] max-w-7xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-3xl border border-border-color shadow-lg p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-black text-primary-blue">+12,000</div>
            <div className="text-xs font-bold text-text-light mt-1">
              {t('متدرب خريج معتمد', 'Certified Graduates', 'Diplômés Certifiés')}
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black text-primary-blue">+450</div>
            <div className="text-xs font-bold text-text-light mt-1">
              {t('ورشة عمل ودورة تدريبية', 'Master Workshops Held', 'Ateliers Animés')}
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black text-primary-blue">99.4%</div>
            <div className="text-xs font-bold text-text-light mt-1">
              {t('نسبة رضا المستفيدين', 'Satisfaction Rate', 'Taux de Satisfaction')}
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black text-primary-blue">14+ دولة</div>
            <div className="text-xs font-bold text-text-light mt-1">
              {t('حضور دولي للأفواج', 'Countries Represented', 'Pays Représentés')}
            </div>
          </div>
        </div>
      </section>

      {/* ================= Ecosystem Pillars Navigation Grid ================= */}
      <section className="w-[95%] max-w-7xl mx-auto px-4 mt-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-primary-blue bg-blue-50 px-3 py-1 rounded-full">
            {t('منظومة الأكاديمية المتكاملة', 'Comprehensive Ecosystem', 'Écosystème Intégré')}
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-text-dark mt-3">
            {t('بوابات المعرفة والتطبيق في أكاديمية تدريب المدربين', 'Gateways to Knowledge, Mastery & Practice')}
          </h2>
          <p className="text-xs md:text-sm text-text-light mt-2">
            {t(
              'اختر القسم المناسب لاحتياجك واستكشف المحتوى التفاعلي المتاح للجميع.',
              'Select any gateway to explore our interactive resources, live sessions, and publications.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className={`bg-white rounded-3xl border border-border-color p-8 shadow-sm hover:shadow-card-elevated transition-all duration-300 flex flex-col justify-between group ${item.color}`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-border-color flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[11px] font-extrabold ${item.badgeBg}`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-text-dark mb-3 leading-snug transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs md:text-sm text-text-light leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-primary-blue">
                <span>{t('استعراض القسم', 'Explore Section', 'Découvrir')}</span>
                <span className="text-base group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= Testimonials Section ================= */}
      <section className="w-[95%] max-w-7xl mx-auto px-4 mt-24">
        <div className="p-8 md:p-14 rounded-3xl bg-slate-50 border border-border-color">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-wider text-primary-blue bg-blue-50 px-3 py-1 rounded-full">
              {t('شهادات وآراء الخريجين', 'Graduate Testimonials', 'Avis des Diplômés')}
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-text-dark mt-3">
              {t('قصص نجاح من صناع الأثر في الوطن العربي', 'Success Stories from Our Master Cohorts')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((tItem, idx) => (
              <div key={idx} className="bg-white p-6 md:p-8 rounded-2xl border border-border-color shadow-sm space-y-4">
                <div className="text-2xl text-accent-yellow font-serif">“</div>
                <p className="text-xs md:text-sm text-text-dark leading-relaxed font-medium">
                  {(tItem.quote as any)[language] || tItem.quote.en || tItem.quote.ar}
                </p>
                <div className="pt-4 border-t border-slate-100">
                  <div className="font-black text-xs md:text-sm text-text-dark">
                    {(tItem.name as any)[language] || tItem.name.en || tItem.name.ar}
                  </div>
                  <div className="text-[11px] text-text-light">
                    {(tItem.role as any)[language] || tItem.role.en || tItem.role.ar}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}