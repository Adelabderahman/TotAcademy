'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { LocalizedContent } from '@/types';

interface FacultyMember {
  id: string;
  name: LocalizedContent;
  role: LocalizedContent;
  specialtyCategory: 'leadership' | 'pedagogy' | 'ai' | 'speaking';
  specialtyTag: LocalizedContent;
  bio: LocalizedContent;
  credentials: LocalizedContent[];
  experienceYears: number;
  studentsTrained: string;
  avatarInitial: string;
  avatarColor: string;
  contactUrl: string;
  socials: {
    whatsapp?: string;
    email?: string;
    linkedin?: string;
  };
}

const academyFaculty: FacultyMember[] = [
  {
    id: 'trainer-billel-aouiche',
    name: {
      ar: 'أ. بلال عويش',
      en: 'Prof. Billel Aouiche',
      fr: 'Pr. Billel Aouiche',
    },
    role: {
      ar: 'كبير المدربين المعتمدين ومؤسس أكاديمية TOT',
      en: 'Senior Master Trainer & Founder of TOT Academy',
      fr: 'Maître Formateur & Fondateur de l’Académie TOT',
    },
    specialtyCategory: 'speaking',
    specialtyTag: {
      ar: 'كاريزما الإلقاء والتأثير الجماهيري',
      en: 'Stage Rhetoric & Charisma',
      fr: 'Art Oratoire & Présence Scénique',
    },
    bio: {
      ar: 'خبير دولي رائد في هندسة الإلقاء والتأثير القيادي. قاد تأهيل وتخريج المئات من المدربين المحترفين في الجزائر والوطن العربي عبر برامج إعداد المدربين التفاعلية.',
      en: 'Leading international master coach in vocal resonance and executive stage presence. Facilitated the qualification of hundreds of certified trainers across the MENA region.',
      fr: 'Expert international de premier plan en art oratoire et leadership. Il a dirigé la formation de centaines de formateurs certifiés à travers la région.',
    },
    credentials: [
      { ar: 'ماستر دولي معتمد في تدريب المدربين (Master TOT)', en: 'Certified Master of Training of Trainers (TOT)' },
      { ar: 'مستشار التطوير القيادي وتأهيل الكفاءات المؤسسية', en: 'Senior Institutional Capacity Consultant' },
      { ar: 'خبير استراتيجيات الإلقاء والخطابة والتأثير المسرحي', en: 'Specialist in Stage Rhetoric and Charismatic Vocal Dynamics' },
    ],
    experienceYears: 14,
    studentsTrained: '+3,500',
    avatarInitial: 'B',
    avatarColor: 'bg-primary-blue',
    contactUrl: 'https://wa.me/213555989370?text=Consultation_Prof_Billel',
    socials: {
      whatsapp: 'https://wa.me/213555989370',
      email: 'totacademy@gmail.com',
    },
  },
  {
    id: 'trainer-sofiane-benhamouda',
    name: {
      ar: 'د. سفيان بن حمودة',
      en: 'Dr. Sofiane Benhamouda',
      fr: 'Dr. Sofiane Benhamouda',
    },
    role: {
      ar: 'رئيس وحدة المناهج وهندسة الحقائب التدريبية',
      en: 'Head of Curriculum & Instructional Architecture',
      fr: 'Responsable Ingénierie Pédagogique',
    },
    specialtyCategory: 'pedagogy',
    specialtyTag: {
      ar: 'تصميم المناهج ونموذج ADDIE',
      en: 'ADDIE Instructional Framework',
      fr: 'Conception Pédagogique & ADDIE',
    },
    bio: {
      ar: 'باحث ومستشار معتمد في القياس والتقويم وتطوير الحقائب التدريبية الاحترافية للشركات والجامعات، حاصل على دكتوراه في علوم التربية والمناهج المعاصرة.',
      en: 'Doctorate holder in Educational Sciences, specializing in curriculum diagnostics, formative learning rubrics, and high-impact corporate courseware.',
      fr: 'Docteur en sciences de l’éducation, expert en diagnostic pédagogique et conception de référentiels de compétences pour les organisations.',
    },
    credentials: [
      { ar: 'دكتوراه في المناهج والتقويم التربوي المتقدم', en: 'Ph.D. in Advanced Educational Curriculum Design' },
      { ar: 'مؤلف الدليل العربي لمعايير الحقائب التدريبية', en: 'Author of the Arab Guide for Courseware Standards' },
      { ar: 'محكم معتمد لبرامج التدريب المهني المستمر', en: 'Accredited Reviewer for Professional Continuing Ed' },
    ],
    experienceYears: 16,
    studentsTrained: '+2,800',
    avatarInitial: 'S',
    avatarColor: 'bg-emerald-600',
    contactUrl: 'https://wa.me/213555989370?text=Consultation_Dr_Sofiane',
    socials: {
      whatsapp: 'https://wa.me/213555989370',
      email: 'totacademy@gmail.com',
    },
  },
  {
    id: 'trainer-mariam-ettahar',
    name: {
      ar: 'م. مريم الطاهر',
      en: 'Eng. Mariam Ettahar',
      fr: 'Ing. Mariam Ettahar',
    },
    role: {
      ar: 'مسؤولة مختبر الذكاء الاصطناعي وتكنولوجيا التعليم',
      en: 'Lead AI & EdTech Innovation Strategist',
      fr: 'Responsable Innovation IA & EdTech',
    },
    specialtyCategory: 'ai',
    specialtyTag: {
      ar: 'الذكاء الاصطناعي والتدريب الرقمي',
      en: 'Generative AI & Smart EdTech',
      fr: 'IA Générative & Formation Digitale',
    },
    bio: {
      ar: 'مهندسة برمجيات متخصصة في توظيف نماذج الذكاء الاصطناعي التوليدي والمنصات الذكية لتسريع وتجويد إنتاج السيناريوهات التدريبية وإدارة الفصول السحابية.',
      en: 'Software engineer and pedagogical innovator guiding trainers on prompt engineering, automated rubric generation, and hyper-engaging digital suites.',
      fr: 'Ingénieure logicielle spécialisée dans l’intégration des modèles d’IA générative pour concevoir des parcours interactifs de nouvelle génération.',
    },
    credentials: [
      { ar: 'ماجستير هندسة البرمجيات ونظم التعلم الذكية', en: 'M.Sc. in Software & Smart Learning Systems' },
      { ar: 'أخصائية معتمدة في هندسة الأوامر وتوليد المحتوى', en: 'Certified Prompt Engineer for Learning Production' },
      { ar: 'مدربة معتمدة في تصميم الفصول الافتراضية التفاعلية', en: 'Certified Virtual Classroom Gamification Coach' },
    ],
    experienceYears: 9,
    studentsTrained: '+1,900',
    avatarInitial: 'M',
    avatarColor: 'bg-amber-600',
    contactUrl: 'https://wa.me/213555989370?text=Consultation_Eng_Mariam',
    socials: {
      whatsapp: 'https://wa.me/213555989370',
      email: 'totacademy@gmail.com',
    },
  },
  {
    id: 'trainer-karim-essalehi',
    name: {
      ar: 'أ. د. كريم الصالحي',
      en: 'Prof. Karim Essalehi',
      fr: 'Pr. Karim Essalehi',
    },
    role: {
      ar: 'مستشار التدريب التنفيذي وإدارة الأزمات الحوارية',
      en: 'Executive Trainer & High-Stakes Dialogue Coach',
      fr: 'Conseiller en Formation Dirigeants & Négociation',
    },
    specialtyCategory: 'leadership',
    specialtyTag: {
      ar: 'القيادة والتدريب التنفيذي',
      en: 'Executive Leadership & Coaching',
      fr: 'Leadership & Gestion d’Équipe',
    },
    bio: {
      ar: 'مستشار كبرى الشركات والهيئات الحكومية في تدريب مجالس الإدارة والقيادات التنفيذية على فنون التفاوض وإدارة النقاشات الحساسة باقتدار.',
      en: 'Senior advisor to corporate boards and governmental entities in high-stakes negotiations, executive decision workshops, and leadership retreat facilitation.',
      fr: 'Conseiller auprès d’organisations majeures pour la formation des comités de direction aux techniques de négociation stratégique.',
    },
    credentials: [
      { ar: 'دكتوراه فخرية في إدارة المنظمات والسلوك القيادي', en: 'Ph.D. in Organizational Leadership Dynamics' },
      { ar: 'ممارس معتمد للتحليل النفسي والتواصلي في الإدارة', en: 'Certified Behavioral Facilitator & Coach' },
      { ar: 'عضو الاتحاد العالمي للمدربين المحترفين (GFT)', en: 'Member of the Global Federation of Trainers (GFT)' },
    ],
    experienceYears: 20,
    studentsTrained: '+4,200',
    avatarInitial: 'K',
    avatarColor: 'bg-indigo-600',
    contactUrl: 'https://wa.me/213555989370?text=Consultation_Prof_Karim',
    socials: {
      whatsapp: 'https://wa.me/213555989370',
      email: 'totacademy@gmail.com',
    },
  },
];

export default function TrainersPage() {
  const { language, t } = useLanguage();
  const [selectedSpecialty, setSelectedSpecialty] = useState<'all' | 'leadership' | 'pedagogy' | 'ai' | 'speaking'>('all');

  const filteredFaculty = selectedSpecialty === 'all'
    ? academyFaculty
    : academyFaculty.filter((member) => member.specialtyCategory === selectedSpecialty);

  const filterTabs = [
    { id: 'all', label: t('هيئة التدريب بأكملها', 'All Faculty Members', 'Tous les Formateurs') },
    { id: 'speaking', label: t('الإلقاء والتأثير المسرحي', 'Stage Rhetoric & Speaking', 'Art Oratoire') },
    { id: 'pedagogy', label: t('تصميم المناهج والحقائب', 'Instructional Design', 'Pédagogie') },
    { id: 'ai', label: t('الذكاء الاصطناعي و EdTech', 'AI & Digital Innovation', 'IA & Digital') },
    { id: 'leadership', label: t('القيادة والتدريب التنفيذي', 'Executive Leadership', 'Leadership') },
  ];

  return (
    <div className="w-full min-h-screen pb-24">
      
      {/* ================= Hero Showcase Section ================= */}
      <section className="bg-gradient-to-br from-[#0b3a96] via-primary-blue to-[#1c61e7] text-white rounded-b-[36px] px-6 md:px-12 pt-12 pb-20 shadow-hero relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-yellow/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="w-[95%] max-w-7xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-accent-yellow text-xs font-black uppercase tracking-wider mb-4 backdrop-blur-md border border-white/20">
            {t('هيئة التدريب والنخبة الأكاديمية', 'Faculty of Master Trainers & Mentors', 'Corps Pédagogique')}
          </span>
          <h1 className="text-3xl md:text-5xl font-black leading-tight max-w-3xl mx-auto mb-6">
            {t(
              'تعلم وتدرب تحت إشراف نخبة من كبار رواد التدريب في الوطن العربي',
              'Learn & Practice Under Renowned International Master Coaches',
              'Formez-vous aux Côtés des Meilleurs Formateurs Professionnels'
            )}
          </h1>
          <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto leading-relaxed mb-8 font-medium">
            {t(
              'فريق تدريبي يجمع بين العمق الأكاديمي، الخبرة الميدانية المتراكمة، والتمكن من أحدث أدوات التدريب التفاعلية والذكية.',
              'A faculty uniting scholarly rigor, decades of applied field leadership, and state-of-the-art interactive pedagogies.',
              'Une équipe combinant rigueur académique, expérience de terrain et maîtrise des méthodologies contemporaines.'
            )}
          </p>

          {/* Quick Metrics Bar */}
          <div className="flex justify-center items-center gap-6 md:gap-12 flex-wrap pt-4 border-t border-white/15 max-w-3xl mx-auto text-center">
            <div>
              <div className="text-2xl md:text-3xl font-black text-accent-yellow">+12,000</div>
              <div className="text-xs text-white/80 mt-0.5">{t('متدرب خريج معتمد', 'Graduates Certified', 'Diplômés')}</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/20"></div>
            <div>
              <div className="text-2xl md:text-3xl font-black text-accent-yellow">60+ سنة</div>
              <div className="text-xs text-white/80 mt-0.5">{t('خبرة تدريبية تراكمية', 'Cumulative Experience', 'Expérience')}</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/20"></div>
            <div>
              <div className="text-2xl md:text-3xl font-black text-accent-yellow">100%</div>
              <div className="text-xs text-white/80 mt-0.5">{t('إشراف ومتابعة شخصية', 'Mentorship Guarantee', 'Mentorat')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Interactive Filtering Bar ================= */}
      <section className="w-[95%] max-w-7xl mx-auto px-4 mt-12">
        <div className="flex items-center justify-center gap-2 md:gap-3 overflow-x-auto pb-4 scrollbar-none">
          {filterTabs.map((tab) => {
            const isSelected = selectedSpecialty === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedSpecialty(tab.id as any)}
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

        {/* ================= Trainer Profile Cards Grid ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          {filteredFaculty.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-3xl border border-border-color p-6 md:p-8 shadow-sm hover:shadow-card-elevated hover:border-primary-blue/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Profile Info */}
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${member.avatarColor} text-white flex items-center justify-center font-black text-2xl md:text-3xl shadow-md flex-shrink-0`}
                  >
                    {member.avatarInitial}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="px-3 py-1 bg-blue-50 text-primary-blue rounded-full text-[11px] font-bold border border-blue-100">
                        {member.specialtyTag[language] || member.specialtyTag.ar}
                      </span>
                      <span className="text-[11px] font-bold text-text-light">
                        {member.experienceYears} {t('سنة خبرة', 'yrs exp', 'ans d’exp')}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-black text-text-dark leading-tight">
                      {member.name[language] || member.name.ar}
                    </h3>

                    <p className="text-xs text-text-light font-medium mt-1 leading-snug">
                      {member.role[language] || member.role.ar}
                    </p>
                  </div>
                </div>

                {/* Bio Excerpt */}
                <p className="text-xs md:text-sm text-text-light leading-relaxed mb-6">
                  {member.bio[language] || member.bio.ar}
                </p>

                {/* Key Credentials List */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-border-color mb-6 space-y-2">
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-text-dark mb-1">
                    {t('أبرز الاعتمادات والشهادات:', 'Accreditations & Honors:', 'Titres & Certifications :')}
                  </div>
                  {member.credentials.map((cred, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-text-light">
                      <span className="text-accent-yellow font-bold mt-0.5">✓</span>
                      <span>{cred[language] || cred.ar}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Controls & Communication */}
              <div className="pt-4 border-t border-border-color flex items-center justify-between gap-3">
                <a
                  href={member.contactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-primary-blue text-white text-center font-bold text-xs md:text-sm rounded-xl shadow hover:bg-secondary-blue transition-all transform hover:-translate-y-0.5"
                >
                  💬 {t('طلب استشارة خاصة', 'Request Consultation', 'Demander un Conseil')}
                </a>
                
                <Link
                  href="/classes"
                  className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-text-dark font-bold text-xs md:text-sm rounded-xl transition-colors"
                >
                  {t('قاعات التدريب', 'View Classes', 'Classes')}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Join Faculty CTA Banner ================= */}
      <section className="w-[95%] max-w-7xl mx-auto px-4 mt-20">
        <div className="p-8 md:p-12 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-accent-yellow uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full">
              {t('الانضمام لهيئة التدريب', 'Faculty Recruitment', 'Rejoindre l’Équipe')}
            </span>
            <h3 className="text-xl md:text-3xl font-black mt-3 mb-2">
              {t('هل تمتلك سيرة تدريبية متميزة وترغب في الانضمام لطاقم الأكاديمية؟', 'Are you a distinguished master trainer looking to join our faculty?')}
            </h3>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              {t(
                'نستقبل طلبات انضمام المستشارين والمدربين المحترفين لتقديم برامج تخصصية مشتركة وتوسيع دائرة الأثر المعرفي.',
                'We welcome applications from certified specialists to lead co-branded cohorts and scale educational impact.'
              )}
            </p>
          </div>

          <a
            href="https://wa.me/213555989370?text=Join_Faculty_TOT_Academy"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-accent-yellow text-black font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:bg-white transition-all transform hover:-translate-y-0.5 whitespace-nowrap flex-shrink-0"
          >
            📋 {t('تقديم السيرة الذاتية (CV)', 'Submit Faculty CV', 'Déposer Votre CV')}
          </a>
        </div>
      </section>

    </div>
  );
}