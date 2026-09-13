'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { QuizPanel } from '@/components/Learning/QuizPanel';
import { QuizConfig } from '@/types';

// Baseline EduPath Curriculum with multi-language support
const courseData = {
  badge: {
    ar: 'المسار التدريبي المعتمد - الفوج الأول',
    en: 'Certified Trainer Pathway - Cohort 1',
    fr: 'Parcours Certifié - Cohorte 1',
  },
  title: {
    ar: 'دبلوم تدريب المدربين المتقدم (TOT Master)',
    en: 'Advanced Training of Trainers Diploma (TOT Master)',
    fr: 'Diplôme Avancé de Formation des Formateurs (TOT Master)',
  },
  description: {
    ar: 'برنامج تطبيقي مكثف يهدف إلى تأهيلك لقيادة القاعات التدريبية الافتراضية والحضورية باحترافية، وصياغة الحقائب التعليمية التفاعلية وفق معايير الجودة العالمية.',
    en: 'An intensive applied diploma designed to equip you to lead in-person and virtual training rooms with mastery, structuring engaging instructional kits benchmarked against global standards.',
    fr: 'Un programme intensif visant à vous qualifier pour diriger des sessions en présentiel et en distanciel avec maîtrise et concevoir des kits pédagogiques d’excellence.',
  },
  instructor: {
    ar: 'إشراف: الأستاذ بلال عويش',
    en: 'Supervised by: Prof. Billel Aouiche',
    fr: 'Sous la direction de : Pr. Billel Aouiche',
  },
  modules: [
    {
      id: 'm1',
      number: 1,
      title: {
        ar: 'كاريزما المدرب ولغة الجسد الاحترافية',
        en: 'Trainer Charisma & Professional Body Language',
        fr: 'Charisme du Formateur & Langage Corporel',
      },
      duration: '45 دقيقة',
      videoUrl: 'https://www.youtube.com/embed/3K-Wx5q7ExA?rel=0&modestbranding=1',
      summary: {
        ar: 'فهم أسرار التأثير الصوتي، حركة اليدين، وتوزيع النظرات داخل القاعة لشد انتباه المتدربين.',
        en: 'Mastering voice modulation, purposeful gestures, and room eye contact to maintain peak engagement.',
        fr: 'Maîtriser la voix, la gestuelle et le contact visuel pour captiver l’auditoire.',
      },
      quiz: {
        id: 'quiz-m1',
        title: {
          ar: 'اختبار تقييم الوحدة الأولى: الكاريزما ولغة الجسد',
          en: 'Module 1 Assessment: Charisma & Body Language',
          fr: 'Évaluation Module 1 : Charisme et Communication',
        },
        timeLimitSeconds: 480, // 8 minutes
        passingScore: 70,
        questions: [
          {
            id: 'q1-1',
            question: {
              ar: 'وفق نموذج ألبرت محرابيان، ما النسبة التي تمثلها لغة الجسد في نقل المشاعر؟',
              en: 'According to Albert Mehrabian’s model, what percentage does body language represent in emotional communication?',
              fr: 'Selon Albert Mehrabian, quel pourcentage représente le langage corporel ?',
            },
            options: [
              { id: 'opt-a', text: { ar: '7% فقط', en: '7% only', fr: '7% seulement' } },
              { id: 'opt-b', text: { ar: '38%', en: '38%', fr: '38%' } },
              { id: 'opt-c', text: { ar: '55%', en: '55%', fr: '55%' } },
              { id: 'opt-d', text: { ar: '100%', en: '100%', fr: '100%' } },
            ],
            correctAnswerId: 'opt-c',
            explanation: {
              ar: 'تؤكد الدراسة أن لغة الجسد وتعبيرات الوجه تمثل 55% من الانطباع عند نقل المشاعر والمواقف.',
              en: 'The study established that 55% of impression in emotional communication relies on body language and facial expressions.',
              fr: 'L’étude démontre que 55% de la communication émotionnelle passe par la gestuelle et les expressions.',
            },
            points: 10,
          },
          {
            id: 'q1-2',
            question: {
              ar: 'ما هي القاعدة الذهبية لتوزيع النظرات بين المتدربين في القاعة التدريبية؟',
              en: 'What is the golden rule for eye contact distribution in a training room?',
              fr: 'Quelle est la règle d’or du balayage visuel en salle de formation ?',
            },
            options: [
              { id: 'opt-2a', text: { ar: 'التركيز على شخص واحد طوال الوقت', en: 'Focus exclusively on one trainee', fr: 'Fixer une seule personne' } },
              { id: 'opt-2b', text: { ar: 'مسح القاعة بشكل دوري بنظام الزجزاج من 3 إلى 5 ثوانٍ لكل متدرب', en: 'Scan cyclically in a zigzag pattern, holding 3 to 5 seconds per trainee', fr: 'Balayer en zigzag de 3 à 5 secondes par participant' } },
              { id: 'opt-2c', text: { ar: 'النظر نحو السقف أو الشرائح لتجنب التوتر', en: 'Look at the ceiling or slides to ease tension', fr: 'Regarder le plafond ou les diapositives' } },
            ],
            correctAnswerId: 'opt-2b',
            explanation: {
              ar: 'المسح الدوري المنتظم يعزز شعور كل متدرب بالاهتمام المباشر ويزيل الحواجز النفسية.',
              en: 'Periodic, balanced scanning makes all participants feel actively acknowledged and included.',
              fr: 'Le balayage régulier favorise l’engagement et brise la distance avec les apprenants.',
            },
            points: 10,
          },
          {
            id: 'q1-3',
            question: {
              ar: 'أي من التالي يُعد من كاسرات الجليد (Icebreakers) الفعالة في افتتاح الدورة؟',
              en: 'Which of the following is an effective opening icebreaker in a training workshop?',
              fr: 'Lequel est un brise-glace efficace pour ouvrir un atelier ?',
            },
            options: [
              { id: 'opt-3a', text: { ar: 'سؤال افتتاحي غير تقليدي يثير الفضول ويرتبط بموضوع التدريب', en: 'An unconventional thought-provoking question linked to the subject', fr: 'Une question insolite et stimulante liée au sujet' } },
              { id: 'opt-3b', text: { ar: 'قراءة السيرة الذاتية للمدرب لمدة نصف ساعة', en: 'Reading the trainer CV for thirty minutes', fr: 'Lire le CV du formateur pendant 30 minutes' } },
              { id: 'opt-3c', text: { ar: 'البدء مباشرة بالاختبار النهائي', en: 'Starting directly with the final exam', fr: 'Commencer directement par l’examen final' } },
            ],
            correctAnswerId: 'opt-3a',
            explanation: {
              ar: 'السؤال التفاعلي يكسر الحاجز النفسي فوراً ويدمج الحضور في موضوع الجلسة بمرونة.',
              en: 'An engaging question breaks psychological barriers and primes curiosity seamlessly.',
              fr: 'Une question interactive élimine les barrières et stimule la participation.',
            },
            points: 10,
          },
        ],
      } as QuizConfig,
    },
    {
      id: 'm2',
      number: 2,
      title: {
        ar: 'تصميم الحقائب التدريبية وفق نموذج ADDIE',
        en: 'Instructional Design via the ADDIE Framework',
        fr: 'Conception Pédagogique selon le Modèle ADDIE',
      },
      duration: '55 دقيقة',
      videoUrl: 'https://www.youtube.com/embed/3K-Wx5q7ExA?rel=0&modestbranding=1',
      summary: {
        ar: 'خطوات التحليل، التصميم، التطوير، التنفيذ، والتقييم لبناء حقيبة تدريبية رصينة ومتماسكة.',
        en: 'Step-by-step walkthrough of Analysis, Design, Development, Implementation, and Evaluation.',
        fr: 'Les 5 étapes clés pour concevoir un programme de formation structuré et percutant.',
      },
      quiz: {
        id: 'quiz-m2',
        title: {
          ar: 'اختبار تقييم الوحدة الثانية: نموذج ADDIE',
          en: 'Module 2 Assessment: ADDIE Model',
          fr: 'Évaluation Module 2 : Modèle ADDIE',
        },
        timeLimitSeconds: 480,
        passingScore: 70,
        questions: [
          {
            id: 'q2-1',
            question: {
              ar: 'ما هي المرحلة الأولى والأهم في نموذج ADDIE لتصميم التدريب؟',
              en: 'What is the first and most critical phase of the ADDIE model?',
              fr: 'Quelle est la première étape cruciale du modèle ADDIE ?',
            },
            options: [
              { id: 'opt-a2', text: { ar: 'التحليل (Analysis) وتحديد الاحتياج التدريبي', en: 'Analysis and training needs assessment', fr: 'L’analyse des besoins de formation' } },
              { id: 'opt-b2', text: { ar: 'التنفيذ (Implementation)', en: 'Implementation', fr: 'La mise en œuvre' } },
              { id: 'opt-c2', text: { ar: 'التقييم فقط (Evaluation only)', en: 'Evaluation only', fr: 'L’évaluation uniquement' } },
            ],
            correctAnswerId: 'opt-a2',
            explanation: {
              ar: 'مرحلة التحليل تحدد الفجوة المعرفية والمهارية التي يُبنى عليها كامل البرنامج.',
              en: 'The Analysis phase defines the skill gaps and core objectives underpinning the curriculum.',
              fr: 'L’analyse cerne précisément les besoins et les objectifs d’apprentissage.',
            },
            points: 10,
          },
        ],
      } as QuizConfig,
    },
  ],
};

export default function EduPathPage() {
  const { language, t } = useLanguage();
  const [activeModuleIndex, setActiveModuleIndex] = useState<number>(0);
  const [completedModules, setCompletedModules] = useState<string[]>(['m1']);

  const activeModule = courseData.modules[activeModuleIndex];

  const handleModuleQuizComplete = (earnedPoints: number) => {
    if (!completedModules.includes(activeModule.id)) {
      setCompletedModules((prev) => [...prev, activeModule.id]);
    }
  };

  return (
    <div className="w-full min-h-screen pb-20">
      
      {/* ================= Hero & Video Showcase Section ================= */}
      <section className="bg-gradient-to-br from-[#0b3a96] via-primary-blue to-[#1c61e7] text-white rounded-b-[36px] px-4 md:px-10 pt-10 pb-16 shadow-hero relative overflow-hidden">
        {/* Subtle background radial lights matching original template */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent-yellow/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="w-[95%] max-w-7xl mx-auto">
          {/* Header Title Bar */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex-1 max-w-2xl text-start">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-accent-yellow text-xs font-black uppercase tracking-wider mb-4 backdrop-blur-md border border-white/20">
                {courseData.badge[language] || courseData.badge.ar}
              </span>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight mb-4">
                {courseData.title[language] || courseData.title.ar}
              </h1>
              <p className="text-sm md:text-base text-white/90 leading-relaxed mb-6 font-medium">
                {courseData.description[language] || courseData.description.ar}
              </p>

              <div className="flex items-center gap-4 text-xs font-bold text-accent-yellow pb-4">
                <span>{courseData.instructor[language] || courseData.instructor.ar}</span>
                <span>•</span>
                <span>{courseData.modules.length} {t('وحدات متخصصة', 'Master Modules', 'Modules Experts')}</span>
              </div>

              {/* Quick Jump CTAs */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="#active-quiz-section"
                  className="px-6 py-3 bg-accent-yellow text-black font-extrabold rounded-xl shadow-lg hover:bg-white transition-all transform hover:-translate-y-0.5 text-xs md:text-sm"
                >
                  ⚡ {t('الانتقال للاختبار التفاعلي', 'Jump to Quiz Assessment', 'Passer le Quiz')}
                </a>
                <Link
                  href="/classes"
                  className="px-6 py-3 bg-white/10 border border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all text-xs md:text-sm"
                >
                  🏛️ {t('قاعات الفصول التفاعلية', 'Interactive Classes', 'Salles de Classe')}
                </Link>
              </div>
            </div>

            {/* Video Player Container */}
            <div className="flex-1 w-full max-w-2xl">
              <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-black group">
                <iframe
                  src={activeModule.videoUrl}
                  title={activeModule.title[language] || activeModule.title.ar}
                  className="w-full h-full border-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-white/80 px-2">
                <span className="font-bold">
                  {t('المحاضرة الحالية:', 'Current Lecture:', 'Leçon Active :')}{' '}
                  <span className="text-accent-yellow font-extrabold">
                    {activeModule.title[language] || activeModule.title.ar}
                  </span>
                </span>
                <span className="font-mono bg-white/10 px-2 py-0.5 rounded">
                  ⏱ {activeModule.duration}
                </span>
              </div>
            </div>
          </div>

          {/* ================= Metrics Grid ================= */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/15">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-2xl font-black text-accent-yellow">100%</div>
              <div className="text-xs text-white/80 mt-1">{t('منهاج تطبيقي عملي', 'Applied Pedagogy', 'Pratique')}</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-2xl font-black text-accent-yellow">4K HD</div>
              <div className="text-xs text-white/80 mt-1">{t('جودة تصوير ومحتوى', 'Ultra HD Video', 'Qualité 4K')}</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-2xl font-black text-accent-yellow">PDF</div>
              <div className="text-xs text-white/80 mt-1">{t('شهادة إتمام معتمدة', 'PDF Certificate', 'Attestation PDF')}</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-2xl font-black text-accent-yellow">TOT</div>
              <div className="text-xs text-white/80 mt-1">{t('معايير تدريب دولية', 'Global Standards', 'Standards')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Main Curriculum & Quiz Section ================= */}
      <main className="w-[95%] max-w-7xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Modules Sidebar Syllabus */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white rounded-3xl border border-border-color p-6 shadow-sm">
            <h2 className="text-lg font-black text-text-dark mb-4 flex items-center justify-between">
              <span>{t('فهرس وحدات المسار', 'Pathway Syllabus', 'Sommaire du Parcours')}</span>
              <span className="text-xs font-bold text-primary-blue bg-blue-50 px-2.5 py-1 rounded-full">
                {courseData.modules.length} {t('وحدات', 'Modules')}
              </span>
            </h2>

            <div className="space-y-3">
              {courseData.modules.map((mod, index) => {
                const isActive = index === activeModuleIndex;
                const isCompleted = completedModules.includes(mod.id);

                return (
                  <button
                    key={mod.id}
                    onClick={() => setActiveModuleIndex(index)}
                    className={`w-full text-start p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                      isActive
                        ? 'border-primary-blue bg-blue-50/70 shadow-sm'
                        : 'border-border-color hover:bg-slate-50'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-xl font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        isCompleted
                          ? 'bg-emerald-100 text-emerald-800'
                          : isActive
                          ? 'bg-primary-blue text-white shadow'
                          : 'bg-slate-100 text-text-light'
                      }`}
                    >
                      {isCompleted ? '✓' : mod.number}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-[11px] font-bold text-text-light">
                          {t('الوحدة التدريبية', 'Module')} {mod.number}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 bg-white px-1.5 py-0.5 rounded border border-border-color">
                          {mod.duration}
                        </span>
                      </div>
                      <h3 className="text-xs md:text-sm font-bold text-text-dark truncate">
                        {mod.title[language] || mod.title.ar}
                      </h3>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Support Note */}
            <div className="mt-6 pt-4 border-t border-border-color text-xs text-text-light leading-relaxed">
              💡 {t('اجتياز الاختبارات التفاعلية شرط أساسي لفتح الشهادة النهائية لكل وحدة.', 'Passing the interactive quiz is required to unlock your completion certificate.')}
            </div>
          </div>
        </div>

        {/* Active Lecture Details & Quiz Section */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Module Information Card */}
          <div className="bg-white rounded-3xl border border-border-color p-6 md:p-8 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200 px-3 py-1 rounded-full">
                {t('الوحدة المختارة حالياً', 'Active Module', 'Module Sélectionné')} {activeModule.number}
              </span>
              <span className="text-xs font-mono text-text-light font-bold">
                {activeModule.duration}
              </span>
            </div>

            <h2 className="text-xl md:text-2xl font-black text-text-dark mb-3">
              {activeModule.title[language] || activeModule.title.ar}
            </h2>

            <p className="text-sm text-text-light leading-relaxed mb-6">
              {activeModule.summary[language] || activeModule.summary.ar}
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-border-color flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xl">🏆</span>
                <div>
                  <div className="text-xs font-bold text-text-dark">
                    {t('حالة إتمام الوحدة', 'Module Progress Status')}
                  </div>
                  <div className="text-[11px] text-text-light">
                    {completedModules.includes(activeModule.id)
                      ? t('تم الاجتياز بنجاح واستحقاق الوثيقة', 'Passed successfully')
                      : t('في انتظار إكمال الاختبار أدناه', 'Pending quiz completion below')}
                  </div>
                </div>
              </div>

              {completedModules.includes(activeModule.id) ? (
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-lg">
                  ✓ {t('مكتمل', 'Completed', 'Validé')}
                </span>
              ) : (
                <span className="px-3 py-1 bg-slate-200 text-slate-700 text-xs font-bold rounded-lg">
                  ⏳ {t('قيد الدراسة', 'In Progress', 'En cours')}
                </span>
              )}
            </div>
          </div>

          {/* Dedicated Quiz Panel Anchor */}
          <div id="active-quiz-section">
            {activeModule.quiz ? (
              <QuizPanel
                key={activeModule.quiz.id}
                quiz={activeModule.quiz}
                onFinish={handleModuleQuizComplete}
              />
            ) : (
              <div className="p-8 bg-white rounded-3xl border border-border-color text-center text-text-light">
                {t('لا يوجد اختبار مخصص لهذه الوحدة حالياً.', 'No quiz required for this module.')}
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}