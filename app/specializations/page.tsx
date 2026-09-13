'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { FlipCard } from '@/components/ui/FlipCard';
import { SpecializationTrack } from '@/types';

// Baseline Specialization Tracks migrated with complete fidelity
const specializationTracks: (SpecializationTrack & { category: 'leadership' | 'educational' | 'tech' | 'soft-skills' })[] = [
  {
    id: 'track-leadership',
    category: 'leadership',
    badge: {
      ar: 'مسار القيادة والتدريب التنفيذي',
      en: 'Executive Coaching & Leadership Track',
      fr: 'Leadership & Coaching Exécutif',
    },
    title: {
      ar: 'تدريب المدربين القياديين (Executive TOT)',
      en: 'Executive Trainer Certification (Executive TOT)',
      fr: 'Formation des Formateurs Dirigeants (TOT Exécutif)',
    },
    description: {
      ar: 'تأهيل القيادات والمستشارين لإدارة فرق العمل، قيادة المؤتمرات التنفيذية، وإدارة الحوارات المؤسسية الكبرى بكفاءة وتأثير عميق.',
      en: 'Equipping leaders and consultants to drive high-performance executive teams, lead board presentations, and facilitate strategic dialogues.',
      fr: 'Qualifier les dirigeants et consultants pour animer des équipes de haut niveau et faciliter des dialogues stratégiques.',
    },
    frontIcon: '👔',
    durationWeeks: 8,
    actionUrl: 'https://wa.me/213555989370?text=Executive_TOT_Track',
    curriculum: [
      { ar: 'ديناميكيات القيادة والإقناع الاستراتيجي', en: 'Leadership Dynamics & Strategic Persuasion' },
      { ar: 'إدارة الجلسات الحوارية وحل النزاعات التدريبية', en: 'Facilitating High-Stakes Training Dialogues' },
      { ar: 'بناء الكاريزما القيادية ولغة الجسد التنفيذية', en: 'Executive Presence & Non-Verbal Mastery' },
      { ar: 'قياس الأثر التدريبي المؤسسي (ROI of Training)', en: 'Measuring Institutional Training ROI' },
    ],
  },
  {
    id: 'track-pedagogy',
    category: 'educational',
    badge: {
      ar: 'مسار المناهج والتصميم التعليمي',
      en: 'Instructional Design Track',
      fr: 'Conception Pédagogique & Ingénierie',
    },
    title: {
      ar: 'مهندس الحقائب التدريبية (ADDIE Master)',
      en: 'Instructional Course Architect (ADDIE Master)',
      fr: 'Architecte de Programmes de Formation',
    },
    description: {
      ar: 'المنهجية العلمية الاحترافية لبناء الحقائب التدريبية من الصفر: تحليل الاحتياج، صياغة الأهداف السلوكية، وتصميم الأنشطة التفاعلية.',
      en: 'A rigorous instructional design methodology: needs analysis, behavioral objective mapping, interactive exercise design, and rubric validation.',
      fr: 'Méthodologie rigoureuse pour concevoir des kits de formation percutants : analyse des besoins, objectifs pédagogiques et ateliers.',
    },
    frontIcon: '📐',
    durationWeeks: 6,
    actionUrl: 'https://wa.me/213555989370?text=Instructional_Design_Track',
    curriculum: [
      { ar: 'تحليل الاحتياجات التدريبية (TNA) ونماذج الفجوات', en: 'Training Needs Analysis (TNA) Models' },
      { ar: 'صياغة الأهداف وفق تصنيف بلوم (Bloom’s Taxonomy)', en: 'Crafting Bloom-Compliant Learning Objectives' },
      { ar: 'تأليف دليل المدرب والمذكرة الإرشادية للمتدرب', en: 'Authoring Trainer Manuals & Trainee Handbooks' },
      { ar: 'بناء أدوات واستمارات التقييم القبلي والبعدي', en: 'Designing Pre/Post Formative Evaluation Metrics' },
    ],
  },
  {
    id: 'track-digital-ai',
    category: 'tech',
    badge: {
      ar: 'مسار التدريب الرقمي والذكاء الاصطناعي',
      en: 'Digital Learning & AI Track',
      fr: 'Formation Digitale & IA',
    },
    title: {
      ar: 'المدرب الرقمي المعتمد (Smart Digital TOT)',
      en: 'Certified Smart Digital Trainer (AI & EdTech)',
      fr: 'Formateur Digital Certifié (IA & EdTech)',
    },
    description: {
      ar: 'توظيف أدوات الذكاء الاصطناعي التوليدي في إنتاج المحتوى، وإدارة الفصول الافتراضية، وبناء العروض التقديمية الذكية فائقة التفاعل.',
      en: 'Leveraging modern generative AI for syllabus acceleration, leading dynamic virtual classrooms, and interactive presentation engineering.',
      fr: 'Exploiter l’intelligence artificielle générative pour créer des contenus interactifs et animer des classes virtuelles.',
    },
    frontIcon: '🤖',
    durationWeeks: 6,
    actionUrl: 'https://wa.me/213555989370?text=Digital_AI_TOT_Track',
    curriculum: [
      { ar: 'هندسة الأوامر (Prompt Engineering) لبناء المحتوى', en: 'Prompt Engineering for Rapid Lesson Production' },
      { ar: 'إدارة وتنشيط منصات الفصول الافتراضية (Zoom & Meet)', en: 'Virtual Classroom Facilitation & Gamification' },
      { ar: 'إنتاج الفيديوهات التدريبية والمؤثرات البصرية', en: 'AI-Enhanced Video Production & Motion Visuals' },
      { ar: 'أنظمة إدارة التعلم الحديثة (LMS Integration)', en: 'Modern Learning Management Systems Deployment' },
    ],
  },
  {
    id: 'track-public-speaking',
    category: 'soft-skills',
    badge: {
      ar: 'مسار التحدث الجماهيري والإلقاء',
      en: 'Public Speaking Mastery Track',
      fr: 'Art Oratoire & Prise de Parole',
    },
    title: {
      ar: 'ماستر الخطابة والتأثير الجماهيري',
      en: 'Master of Public Speaking & Stage Presence',
      fr: 'Maître de l’Art Oratoire et de l’Éloquence',
    },
    description: {
      ar: 'كسر حاجز الخوف والرهاب المسرحي، إتقان طبقات الصوت الرنانة، وأسر عقول وقلوب الجمهور عبر فن السرد القصصي التدريبي (Storytelling).',
      en: 'Eliminating stage anxiety, mastering acoustic resonance and vocal modulation, and captivating audiences through structured storytelling.',
      fr: 'Vaincre le trac, maîtriser le débit et le timbre de la voix, et captiver par la puissance du storytelling.',
    },
    frontIcon: '🎙️',
    durationWeeks: 4,
    actionUrl: 'https://wa.me/213555989370?text=Public_Speaking_Track',
    curriculum: [
      { ar: 'التغلب العلمي على رهاب الحديث أمام الجمهور', en: 'Cognitive Techniques to Dissolve Stage Fright' },
      { ar: 'طبقات الصوت، الوقفات التأكيدية، والنغمات التعبيرية', en: 'Vocal Varieties, Dynamic Pauses, & Resonance' },
      { ar: 'هندسة القصة التدريبية (Hero’s Journey Framework)', en: 'Storytelling Architecture & The Hero’s Journey' },
      { ar: 'إدارة الأسئلة المفاجئة والتعامل مع المشاغبين', en: 'Mastering Hostile Q&A & Challenging Participants' },
    ],
  },
  {
    id: 'track-youth-gamification',
    category: 'educational',
    badge: {
      ar: 'مسار ألعاب التدريب والتنشيط',
      en: 'Gamification & Workshop Facilitation',
      fr: 'Ludopédagogie & Animation d’Ateliers',
    },
    title: {
      ar: 'خبير التلعيب والألعاب التدريبية (Gamification)',
      en: 'Training Gamification & Experiential Learning',
      fr: 'Expert en Ludopédagogie et Jeux de Formation',
    },
    description: {
      ar: 'تحويل المفاهيم الجافة إلى ألعاب محاكاة تفاعلية وتجارب حسية ممتعة تضمن ترسيخ المعلومة في الذاكرة طويلة المدى.',
      en: 'Transforming dry concepts into experiential simulations, tactile team challenges, and active learning dynamics that stick.',
      fr: 'Transformer la théorie en expériences ludiques marquantes favorisant l’ancrage mémoriel à long terme.',
    },
    frontIcon: '🎲',
    durationWeeks: 5,
    actionUrl: 'https://wa.me/213555989370?text=Gamification_Track',
    curriculum: [
      { ar: 'نظريات التعلم التجريبي (Experiential Learning Theory)', en: 'Kolb’s Experiential Learning Cycle & Applications' },
      { ar: 'تصميم ألعاب كسر الجليد وحقائب التنشيط الذهني', en: 'Designing Dynamic Icebreakers & Brain Teasers' },
      { ar: 'إدارة ورش العمل الجماعية وعصف الأفكار الإبداعي', en: 'Workshop Team Facilitation & Creative Ideation' },
      { ar: 'آليات استخلاص الدروس (Debriefing Techniques)', en: 'Effective Debriefing to Anchor Key Learnings' },
    ],
  },
  {
    id: 'track-certified-consultant',
    category: 'leadership',
    badge: {
      ar: 'مسار الاستشارات وبناء الشركات التدريبية',
      en: 'Training Consultancy & Business Track',
      fr: 'Consulting & Entrepreneuriat de Formation',
    },
    title: {
      ar: 'المستشار التدريبي ورائد الأعمال المعرفي',
      en: 'Training Business Consultant & Knowledge Entrepreneur',
      fr: 'Consultant Formateur & Entrepreneur du Savoir',
    },
    description: {
      ar: 'تحويل خبراتك المعرفية إلى علامة تجارية مرموقة، وإطلاق مراكز وبرامج استشارية مستدامة ومربحة في الأسواق الإقليمية والدولية.',
      en: 'Translating knowledge into a high-value personal brand, structuring profitable corporate retainers, and scaling educational enterprises.',
      fr: 'Valoriser son expertise, construire une marque personnelle forte et commercialiser des offres de conseil à fort impact.',
    },
    frontIcon: '💼',
    durationWeeks: 8,
    actionUrl: 'https://wa.me/213555989370?text=Training_Consultant_Track',
    curriculum: [
      { ar: 'تسعير البرامج التدريبية وتفاوض العقود المؤسسية', en: 'Pricing High-Ticket Corporate Training Contracts' },
      { ar: 'صناعة الهوية الشخصية للمدرب (Personal Branding)', en: 'Trainer Authority & Strategic Personal Branding' },
      { ar: 'إعداد العروض الفنية والمالية للمناقصات (RFP Proposals)', en: 'Writing Winning Technical & Financial RFP Proposals' },
      { ar: 'تأسيس وإدارة الأكاديميات الرقمية الخاصة', en: 'Launching & Monetizing Independent Digital Academies' },
    ],
  },
];

export default function SpecializationsPage() {
  const { language, t } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'leadership' | 'educational' | 'tech' | 'soft-skills'>('all');

  const filteredTracks = selectedFilter === 'all'
    ? specializationTracks
    : specializationTracks.filter((track) => track.category === selectedFilter);

  const filterTabs = [
    { id: 'all', label: t('جميع المسارات والتخصصات', 'All Specializations', 'Toutes les Pistes') },
    { id: 'leadership', label: t('القيادة والاستشارات', 'Leadership & Consulting', 'Leadership') },
    { id: 'educational', label: t('تصميم المناهج والتلعيب', 'Instructional & Gamification', 'Pédagogie') },
    { id: 'tech', label: t('التدريب الرقمي والذكاء الاصطناعي', 'Digital & AI EdTech', 'Digital & IA') },
    { id: 'soft-skills', label: t('الخطابة والتأثير الجماهيري', 'Public Speaking', 'Art Oratoire') },
  ];

  return (
    <div className="w-full min-h-screen pb-24">
      
      {/* ================= Hero Showcase Section ================= */}
      <section className="bg-gradient-to-br from-[#0b3a96] via-primary-blue to-[#1c61e7] text-white rounded-b-[36px] px-6 md:px-12 pt-12 pb-20 shadow-hero relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-yellow/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="w-[95%] max-w-7xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-accent-yellow text-xs font-black uppercase tracking-wider mb-4 backdrop-blur-md border border-white/20">
            {t('مسارات التخصص والاحتراف التدريبي', 'Professional Specialization Pathways', 'Parcours de Spécialisation')}
          </span>
          <h1 className="text-3xl md:text-5xl font-black leading-tight max-w-3xl mx-auto mb-6">
            {t(
              'اختر تخصصك التدريبي واستكشف المنهج بتقنية الأبعاد الثلاثية',
              'Select Your Domain & Explore Syllabi in Interactive 3D',
              'Choisissez Votre Spécialité et Explorez le Programme en 3D'
            )}
          </h1>
          <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto leading-relaxed mb-8 font-medium">
            {t(
              'كل مسار مصمم بعناية ليمنحك الأدوات المعرفية والتطبيقية اللازمة لنيل الاعتماد الاحترافي وتصدر سوق التدريب الإقليمي.',
              'Each track is calibrated to deliver both theoretical mastery and hands-on toolkits for market-leading credibility.',
              'Chaque parcours est conçu pour vous doter des compétences clés et vous démarquer sur le marché.'
            )}
          </p>

          <div className="flex justify-center gap-3 flex-wrap">
            <a
              href="#tracks-grid-section"
              className="px-8 py-3.5 bg-accent-yellow text-black font-extrabold rounded-xl shadow-lg hover:bg-white transition-all transform hover:-translate-y-0.5 text-xs md:text-sm"
            >
              🎓 {t('استعراض المسارات المتاحة', 'Browse Available Tracks', 'Explorer les Parcours')}
            </a>
            <Link
              href="/edupath"
              className="px-8 py-3.5 bg-white/10 border border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all text-xs md:text-sm"
            >
              📚 {t('المسار التعليمي الشامل', 'Master EduPath', 'Parcours Général')}
            </Link>
          </div>
        </div>
      </section>

      {/* ================= Interactive Filtering Bar ================= */}
      <section id="tracks-grid-section" className="w-[95%] max-w-7xl mx-auto px-4 mt-12">
        <div className="flex items-center justify-center gap-2 md:gap-3 overflow-x-auto pb-4 scrollbar-none">
          {filterTabs.map((tab) => {
            const isSelected = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id as any)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-xl text-xs md:text-sm font-extrabold transition-all border ${
                  isSelected
                    ? 'bg-primary-blue text-white border-primary-blue shadow-md scale-105'
                    : 'bg-white text-text-dark border-border-color hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ================= 3D Flip Cards Grid ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filteredTracks.map((track) => (
            <div key={track.id} className="w-full">
              <FlipCard track={track} />
            </div>
          ))}
        </div>

        {/* ================= Flip Instruction Toast Banner ================= */}
        <div className="mt-12 p-5 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-center justify-center gap-3 text-xs md:text-sm text-primary-blue font-bold text-center">
          <span className="text-xl animate-bounce">💡</span>
          <span>
            {t(
              'تلميح: انقر على أي بطاقة لقلبها بزاوية 180 درجة وقراءة مفردات المنهج والتسجيل المباشر.',
              'Tip: Click or tap any card to flip it in 3D, inspect curriculum units, and register directly.',
              'Astuce : Cliquez sur une carte pour la retourner en 3D et découvrir son programme complet.'
            )}
          </span>
        </div>
      </section>

      {/* ================= Pathway Guarantee FAQ Section ================= */}
      <section className="w-[95%] max-w-5xl mx-auto px-4 mt-20">
        <div className="text-center mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-primary-blue bg-blue-50 px-3 py-1 rounded-full">
            {t('الأسئلة المتكررة حول التخصصات', 'Frequently Asked Questions', 'Questions Fréquentes')}
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-text-dark mt-3">
            {t('كل ما تود معرفته عن شهادات واعتمادات المسارات', 'Track Certifications & Accreditations')}
          </h2>
        </div>

        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-white border border-border-color shadow-sm">
            <h3 className="font-extrabold text-sm md:text-base text-text-dark mb-2">
              {t('هل تمنح الأكاديمية شهادة معتمدة بعد إتمام المسار؟', 'Are the track certifications officially accredited?')}
            </h3>
            <p className="text-xs md:text-sm text-text-light leading-relaxed">
              {t(
                'نعم، يحصل كل خريج على شهادة تخصص رقمية مؤكدة برمز QR كودي معتمد، بالإضافة إلى إمكانية استخراج بطاقة عضوية المدرب المعتمد.',
                'Yes, graduates receive a verifiable digital credential with a secure QR code verification system and certified trainer membership eligibility.',
                'Oui, chaque lauréat reçoit une attestation vérifiable par QR code et une carte de membre certifié.'
              )}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-border-color shadow-sm">
            <h3 className="font-extrabold text-sm md:text-base text-text-dark mb-2">
              {t('هل يمكن التسجيل في أكثر من تخصص تدريبي في نفس الوقت؟', 'Can I enroll in multiple tracks simultaneously?')}
            </h3>
            <p className="text-xs md:text-sm text-text-light leading-relaxed">
              {t(
                'نوصي بالتركيز على مسار واحد في البداية لضمان الاستيعاب والتطبيق العملي، ولكن المنصة تتيح للمتدربين الطموحين الجمع بين مسارين بالتنسيق مع المشرف.',
                'We recommend taking one track at a time for optimal applied depth, though dual enrollment is permitted with mentor alignment.',
                'Nous conseillons de suivre un parcours à la fois, mais l’inscription double est possible en coordination avec votre mentor.'
              )}
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}