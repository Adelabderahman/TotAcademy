'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { LocalizedContent } from '@/types';

interface MagazineArticleItem {
  id: string;
  category: 'rhetoric' | 'pedagogy' | 'edtech' | 'leadership';
  categoryLabel: LocalizedContent;
  title: LocalizedContent;
  excerpt: LocalizedContent;
  fullContent: LocalizedContent;
  author: LocalizedContent;
  authorRole: LocalizedContent;
  datePublished: string;
  readTime: LocalizedContent;
  icon: string;
  isFeatured?: boolean;
}

const magazineArticles: MagazineArticleItem[] = [
  {
    id: 'art-ai-training-revolution',
    category: 'edtech',
    categoryLabel: {
      ar: 'مستقبل التدريب والـ AI',
      en: 'Future of EdTech & AI',
      fr: 'Futur de la Formation & IA',
    },
    title: {
      ar: 'ثورة الذكاء الاصطناعي التوليدي في تصميم الحقائب التدريبية: كيف يختصر المدرب 80% من وقت التحضير؟',
      en: 'The Generative AI Revolution in Instructional Design: Cutting Preparation Time by 80%',
      fr: 'La Révolution de l’IA Générative dans la Conception Pédagogique : Réduire le Temps de Préparation de 80%',
    },
    excerpt: {
      ar: 'تحليل منهجي لاستخدام نماذج الذكاء الاصطناعي في صياغة دراسات الحالة، واشتقاق الأهداف السلوكية التفاعلية، دون التضحية باللمسة الإنسانية والروح التربوية للمدرب.',
      en: 'A methodological analysis of utilizing generative AI to architect experiential case studies and scaffold behavioral learning rubrics without losing human empathy.',
      fr: 'Une analyse méthodologique sur l’utilisation de l’IA générative pour concevoir des études de cas percutantes sans sacrifier la dimension humaine.',
    },
    fullContent: {
      ar: `لم يعد الذكاء الاصطناعي التوليدي مجرد أداة مساعدة عابرة، بل أصبح شريكاً حقيقياً في غرفة تحضير المدرب المحترف. إن التحدي الأكبر الذي يواجه المدربين اليوم ليس نقص المعرفة، بل الوقت المستغرق في تحويل المعرفة النظرية إلى أنشطة تطبيقية قابلة للقياس.

من خلال هندسة الأوامر (Prompt Engineering) الموجهة، يمكن للمدرب:
1. صياغة سيناريوهات محاكاة واقعية تتطابق تماماً مع السياق المؤسسي للجمهور المستهدف.
2. تفكيك المفاهيم المعقدة إلى تشبيهات بصرية ملموسة تعزز الفهم السريع.
3. توليد بنوك أسئلة تدريبية واختبارات ذاتية تغطي المستويات الستة لتصنيف بلوم.

ومع ذلك، تظل القيمة المضافة الحقيقية للمدرب هي إضفاء المعنى، والقدرة على قراءة عيون المتدربين داخل القاعة، وتكييف التدريب مع الطاقة النفسية للحضور في اللحظة الآنية.`,
      en: `Generative AI is no longer a peripheral novelty—it is now a co-designer in every modern trainer's preparation lab. The central hurdle for contemporary educators is not information scarcity, but the temporal burden of turning raw insights into measurable, engaging activities.

Through structured prompt engineering, master coaches can:
1. Rapidly scaffold immersive simulation scenarios mirroring authentic organizational challenges.
2. Demystify dense theoretical frameworks into memorable analogical metaphors.
3. Build comprehensive assessment banks spanning all six tiers of Bloom's Taxonomy.

Yet, the ultimate differentiator remains human presence: sensing trainee emotional states and dynamically orchestrating room chemistry.`,
      fr: `L'intelligence artificielle générative n'est plus un simple gadget, mais un véritable partenaire de co-conception. Le défi majeur des formateurs n'est plus l'accès à l'information, mais le temps nécessaire pour la transformer en ateliers pratiques.

Grâce à l'ingénierie de prompts, le formateur peut :
1. Structurer des études de cas immersives reflétant les défis réels du terrain.
2. Schématiser des concepts denses en métaphores mémorables.
3. Générer des banques d'évaluations couvrant l'ensemble de la taxonomie de Bloom.`,
    },
    author: {
      ar: 'أ. بلال عويش',
      en: 'Prof. Billel Aouiche',
      fr: 'Pr. Billel Aouiche',
    },
    authorRole: {
      ar: 'مؤسس أكاديمية TOT وخبير الإلقاء القيادي',
      en: 'Founder of TOT Academy & Senior Master Coach',
      fr: 'Fondateur & Maître Formateur',
    },
    datePublished: '10 سبتمبر 2026',
    readTime: { ar: '6 دقائق قراءة', en: '6 min read', fr: '6 min de lecture' },
    icon: '⚡',
    isFeatured: true,
  },
  {
    id: 'art-vocal-resonance',
    category: 'rhetoric',
    categoryLabel: {
      ar: 'فنون الإلقاء والتأثير',
      en: 'Vocal Rhetoric & Mastery',
      fr: 'Art Oratoire & Voix',
    },
    title: {
      ar: 'فيزياء الصوت التدريبي: كيف تتحكم في طبقات الرنين والوقفات الدرامية لأسر انتباه القاعة؟',
      en: 'Acoustic Mastery in Training: Harnessing Vocal Resonance and Dramatic Pauses',
      fr: 'La Puissance de la Voix en Formation : Résonance et Pauses Dramatiques',
    },
    excerpt: {
      ar: 'دليل عملي للمدربين لتحسين الأداء الصوتي، واستخدام التنفس الحجابي لتجنب الإجهاد الصوتي أثناء الورش الطويلة التي تستمر لساعات.',
      en: 'A physiological guide for trainers to amplify vocal projection and leverage diaphragmatic breathwork to prevent exhaustion during marathon workshops.',
      fr: 'Un guide pratique pour maîtriser son souffle diaphragmatique, moduler sa voix et prévenir la fatigue vocale.',
    },
    fullContent: {
      ar: `الصوت ليس مجرد وسيلة لنقل الكلمات؛ إنه الأداة الموسيقية التي تضبط بها الحالة المزاجية للمتدربين. عندما يتحدث المدرب بنبرة رتيبة واحدة، يدخل دماغ المتلقي تلقائياً في وضع حفظ الطاقة والنعاس.

أهم ثلاث تقنيات يتقنها المدرب المتميز:
1. الوقفات التأكيدية (The Dramatic Pause): التوقف لمدة 3 ثوانٍ بعد طرح سؤال محوري يخلق فراغاً ذهنياً يجبر المتدربين على التفكير وملء الفراغ.
2. النقل بين المقامات الصوتية: استخدام النغمة الدافئة في سرد القصص، والنبرة الحازمة الواضحة عند إعلان القواعد والتعليمات.
3. التنفس البطني العميق: الاعتماد على الحجاب الحاجز يمنح الصوت عمقاً ورنيناً واثقاً يرسل إشارات اللاوعي بالتمكن والسيطرة.`,
      en: `Vocal resonance is the psychological tuning fork of the classroom. Monotonous delivery triggers subconscious cognitive fatigue and disengagement.

Key vocal mechanics of master facilitators:
1. The Dramatic Pause: A 3-second silence following a focal question creates tension that compels critical cognition.
2. Modulating Registers: Shifting into warmer timbres for narrative illustrations versus decisive tones for directives.
3. Diaphragmatic Anchoring: Breathing deeply into the lower belly imparts authority and stamina without strain.`,
    },
    author: {
      ar: 'أ. بلال عويش',
      en: 'Prof. Billel Aouiche',
      fr: 'Pr. Billel Aouiche',
    },
    authorRole: {
      ar: 'كبير المدربين المعتمدين',
      en: 'Senior Master Trainer',
      fr: 'Maître Formateur',
    },
    datePublished: '04 سبتمبر 2026',
    readTime: { ar: '4 دقائق قراءة', en: '4 min read', fr: '4 min de lecture' },
    icon: '🎙️',
  },
  {
    id: 'art-difficult-trainees',
    category: 'leadership',
    categoryLabel: {
      ar: 'إدارة وتيسير القاعات',
      en: 'Room Facilitation & Dynamics',
      fr: 'Dynamique de Groupe',
    },
    title: {
      ar: 'سيكولوجيا التعامل مع المتدرب المشاغب والمعارض داخل ورش العمل الجماعية',
      en: 'Managing Disruptive and Hostile Participants in High-Stakes Workshops',
      fr: 'Gérer les Participants Difficiles et Réfractaires en Atelier',
    },
    excerpt: {
      ar: 'استراتيجيات نفسية وتواصلية ذكية لاحتواء الشخصيات المتحدية داخل القاعة، وتحويل طاقتهم السلبية إلى مساهمة تدريبية إيجابية.',
      en: 'Psychological facilitation blueprints to neutralize hostility, de-escalate ego clashes, and redirect skepticism into constructive debate.',
      fr: 'Techniques psychologiques avancées pour désamorcer les tensions et transformer le scepticisme en contribution constructive.',
    },
    fullContent: {
      ar: `لا توجد قاعة تدريبية تخلو من شخصية تحاول إثبات ذاتها عبر مقاطعة المدرب أو التشكيك في الطرح. المبتدئ يدخل في صدام مباشر، بينما المحترف يعيد توجيه الطاقة.

استراتيجية الالتفاف الذكية:
- قاعدة الإشراك الفوري: تكليف المتدرب المعارض بمهمة قيادة إحدى مجموعات العمل أو تلخيص مخرجات النشاط على السبورة.
- تقنية المرآة: إعادة صياغة اعتراضه بكلمات إيجابية وطرحها على باقي القاعة ("زميلكم يطرح نقطة جوهرية تستحق التأمل، ما رأي المجموعة؟").
- العزل الودي خلال الاستراحة: التحدث معه على انفراد بابتسامة وتقدير لخبرته، مما يزيل حاجته للاستعراض أمام زملائه.`,
      en: `Tension in a workshop is rarely malicious—it is often a misplaced desire for significance. Novices argue; masters redirect.

The Facilitator’s Triad:
- The Leadership Mandate: Assigning the vocal skeptic to lead a breakout team or synthesize room insights.
- The Cognitive Mirror: Reframing objections into exploratory questions for the wider group.
- The Coffee Break Connection: Engaging privately with respect during recess to dissolve the need for stage competition.`,
    },
    author: {
      ar: 'أ. د. كريم الصالحي',
      en: 'Prof. Karim Essalehi',
      fr: 'Pr. Karim Essalehi',
    },
    authorRole: {
      ar: 'مستشار التدريب التنفيذي وإدارة الأزمات',
      en: 'Executive Leadership Advisor',
      fr: 'Conseiller Exécutif & Négociation',
    },
    datePublished: '28 أغسطس 2026',
    readTime: { ar: '5 دقائق قراءة', en: '5 min read', fr: '5 min de lecture' },
    icon: '🛡️',
  },
  {
    id: 'art-addie-secrets',
    category: 'pedagogy',
    categoryLabel: {
      ar: 'هندسة المناهج والحقائب',
      en: 'Curriculum Architecture',
      fr: 'Ingénierie Pédagogique',
    },
    title: {
      ar: 'الأخطاء السبعة القاتلة في صياغة الأهداف السلوكية وفق تصنيف بلوم للتعليم',
      en: 'Seven Fatal Mistakes in Crafting Behavioral Learning Objectives via Bloom',
      fr: 'Les 7 Erreurs Fatales dans la Rédaction des Objectifs Pédagogiques de Bloom',
    },
    excerpt: {
      ar: 'كيف تتجنب الأفعال المبهمة مثل (أن يعرف المتدرب) وتستبدلها بأفعال سلوكية قابلة للملاحظة والقياس الدقيق (أن يشخص، أن يركب، أن يقيم).',
      en: 'How to eliminate vague verbs and construct measurable, observable performance statements calibrated to rigorous industry benchmarks.',
      fr: 'Comment remplacer les verbes flous par des verbes d’action observables et mesurables pour garantir l’efficacité.',
    },
    fullContent: {
      ar: `الهدف التدريبي الضعيف يعني حقيبة تدريبية مشوشة وتقييماً مستحيلاً. أكثر خطأ يقع فيه المدربون الجدد هو استخدام أفعال معرفية باطنية مثل: "أن يفهم المتدرب"، فالفهم حالة ذهنية لا يمكن للمدرب رؤيتها أو قياسها بالعين المجردة.

القاعدة الذهبية لصياغة الهدف الذكي (ABCD Model):
1. Audience: من هو المستهدف بالتدريب تحديداً؟
2. Behavior: ما هو السلوك الإجرائي المتوقع (أن يحلل، أن يبرمج، أن يلقي)؟
3. Condition: ما هي الظروف والأدوات المتاحة له لإنجاز المهمة؟
4. Degree: ما هو المعيار الزمني أو العددي المقبول لاعتبار الأداء ناجحاً؟`,
      en: `An ambiguous learning objective dooms both the syllabus and the post-assessment. Master designers implement the ABCD rubric: Audience, observable Behavior, Condition of execution, and Degree of acceptable precision.`,
    },
    author: {
      ar: 'د. سفيان بن حمودة',
      en: 'Dr. Sofiane Benhamouda',
      fr: 'Dr. Sofiane Benhamouda',
    },
    authorRole: {
      ar: 'رئيس وحدة المناهج والتقويم',
      en: 'Head of Curriculum & Evaluation',
      fr: 'Responsable Évaluation & Programmes',
    },
    datePublished: '21 أغسطس 2026',
    readTime: { ar: '7 دقائق قراءة', en: '7 min read', fr: '7 min de lecture' },
    icon: '📐',
  },
];

export default function TrainerMagazinePage() {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'rhetoric' | 'pedagogy' | 'edtech' | 'leadership'>('all');
  const [activeArticleModal, setActiveArticleModal] = useState<MagazineArticleItem | null>(null);

  const filteredArticles = selectedCategory === 'all'
    ? magazineArticles
    : magazineArticles.filter((art) => art.category === selectedCategory);

  const featuredArticle = magazineArticles.find((art) => art.isFeatured);

  const filterTabs = [
    { id: 'all', label: t('جميع مقالات المجلة', 'All Articles', 'Tous les Articles') },
    { id: 'edtech', label: t('الذكاء الاصطناعي و EdTech', 'AI & Digital EdTech', 'IA & EdTech') },
    { id: 'rhetoric', label: t('فنون الإلقاء والصوت', 'Rhetoric & Vocal Art', 'Art Oratoire') },
    { id: 'leadership', label: t('إدارة وتيسير القاعات', 'Facilitation & Dynamics', 'Facilitation') },
    { id: 'pedagogy', label: t('تصميم الحقائب والمناهج', 'Instructional Design', 'Ingénierie') },
  ];

  return (
    <div className="w-full min-h-screen pb-24">
      
      {/* ================= Hero Showcase Section ================= */}
      <section className="bg-gradient-to-br from-[#0b3a96] via-primary-blue to-[#1c61e7] text-white rounded-b-[36px] px-6 md:px-12 pt-12 pb-20 shadow-hero relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-yellow/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="w-[95%] max-w-7xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-accent-yellow text-xs font-black uppercase tracking-wider mb-4 backdrop-blur-md border border-white/20">
            {t('مجلة المدرب المحترف — المنصة المعرفية', 'Professional Trainer Magazine — Knowledge Hub', 'Magazine du Formateur')}
          </span>
          <h1 className="text-3xl md:text-5xl font-black leading-tight max-w-3xl mx-auto mb-6">
            {t(
              'مقالات وبحوث ودراسات معمقة في صناعة التدريب المعاصر',
              'Deep-Dive Research, Insights & Methodologies for Master Trainers',
              'Analyses et Recherches Approfondies sur la Formation Contemporaine'
            )}
          </h1>
          <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto leading-relaxed mb-8 font-medium">
            {t(
              'منصة فكرية متجددة يحررها كبار المدربين والخبراء لتزويدك بأحدث استراتيجيات الإلقاء، أدوات الذكاء الاصطناعي، وهندسة المناهج.',
              'An intellectual forum authored by senior practitioners offering field-tested tactics in stage authority, pedagogical AI, and courseware design.',
              'Un espace de réflexion animé par des experts pour enrichir vos pratiques et perfectionner vos animations.'
            )}
          </p>

          <div className="flex justify-center items-center gap-6 md:gap-12 flex-wrap pt-4 border-t border-white/15 max-w-2xl mx-auto text-center">
            <div>
              <div className="text-2xl md:text-3xl font-black text-accent-yellow">100%</div>
              <div className="text-xs text-white/80 mt-0.5">{t('محتوى علمي تطبيقي', 'Field-Tested Content', 'Contenu Pratique')}</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/20"></div>
            <div>
              <div className="text-2xl md:text-3xl font-black text-accent-yellow">أسبوعياً</div>
              <div className="text-xs text-white/80 mt-0.5">{t('تحديثات ومقالات جديدة', 'Weekly Releases', 'Hebdomadaire')}</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/20"></div>
            <div>
              <div className="text-2xl md:text-3xl font-black text-accent-yellow">مجاني</div>
              <div className="text-xs text-white/80 mt-0.5">{t('متاح لكافة المدربين', 'Open Access', 'Accès Libre')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Featured Editorial Article Spotlight ================= */}
      {featuredArticle && (
        <section className="w-[95%] max-w-7xl mx-auto px-4 -mt-10 relative z-20">
          <div className="bg-white rounded-3xl border-2 border-accent-yellow shadow-xl p-6 md:p-10 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3.5 py-1 bg-accent-yellow text-black font-extrabold text-xs rounded-full uppercase tracking-wider shadow-sm">
                    ⭐ {t('افتتاحية العدد والمقال الأبرز', 'Featured Cover Article', 'À la Une')}
                  </span>
                  <span className="text-xs font-bold text-primary-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    {featuredArticle.categoryLabel[language] || featuredArticle.categoryLabel.ar}
                  </span>
                  <span className="text-xs text-text-light font-mono">
                    ⏱ {featuredArticle.readTime[language] || featuredArticle.readTime.ar}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-text-dark mb-4 leading-snug">
                  {featuredArticle.title[language] || featuredArticle.title.ar}
                </h2>

                <p className="text-xs md:text-sm text-text-light leading-relaxed mb-6 max-w-3xl">
                  {featuredArticle.excerpt[language] || featuredArticle.excerpt.ar}
                </p>

                {/* Author Card */}
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-border-color max-w-md">
                  <div className="w-10 h-10 rounded-full bg-primary-blue text-white flex items-center justify-center font-bold text-sm shadow-sm flex-shrink-0">
                    B
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs md:text-sm font-extrabold text-text-dark truncate">
                      {featuredArticle.author[language] || featuredArticle.author.ar}
                    </h4>
                    <p className="text-[11px] text-text-light truncate">
                      {featuredArticle.authorRole[language] || featuredArticle.authorRole.ar}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Column */}
              <div className="flex flex-col items-center justify-center gap-3 w-full lg:w-auto flex-shrink-0 self-center">
                <button
                  onClick={() => setActiveArticleModal(featuredArticle)}
                  className="w-full lg:w-64 py-4 bg-primary-blue text-white text-center font-extrabold text-sm rounded-2xl shadow-md hover:bg-secondary-blue transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <span>📖</span>
                  <span>{t('قراءة المقال بالكامل', 'Read Full Article', 'Lire l’Article Complet')}</span>
                </button>
                <span className="text-[11px] text-text-light font-medium">
                  {t('نُشر بتاريخ:', 'Published:')} {featuredArticle.datePublished}
                </span>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* ================= Interactive Category Filter ================= */}
      <section className="w-[95%] max-w-7xl mx-auto px-4 mt-16">
        <div className="flex items-center justify-center gap-2 md:gap-3 overflow-x-auto pb-4 scrollbar-none">
          {filterTabs.map((tab) => {
            const isSelected = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as any)}
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

        {/* ================= Articles Grid ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-3xl border border-border-color p-6 md:p-7 shadow-sm hover:shadow-card-elevated hover:border-primary-blue/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category & Time Top Line */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-50 text-primary-blue text-[11px] font-bold rounded-full">
                    {article.categoryLabel[language] || article.categoryLabel.ar}
                  </span>
                  <span className="text-[11px] font-mono text-text-light">
                    ⏱ {article.readTime[language] || article.readTime.ar}
                  </span>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-border-color flex items-center justify-center text-2xl mb-4 shadow-inner">
                  {article.icon}
                </div>

                <h3 className="text-lg font-extrabold text-text-dark mb-3 line-clamp-2 leading-snug">
                  {article.title[language] || article.title.ar}
                </h3>

                <p className="text-xs text-text-light line-clamp-3 leading-relaxed mb-6">
                  {article.excerpt[language] || article.excerpt.ar}
                </p>
              </div>

              {/* Author Info & Read Button */}
              <div className="pt-4 border-t border-border-color flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-text-dark truncate">
                    {article.author[language] || article.author.ar}
                  </h4>
                  <p className="text-[10px] text-text-light font-medium">
                    {article.datePublished}
                  </p>
                </div>

                <button
                  onClick={() => setActiveArticleModal(article)}
                  className="px-4 py-2 bg-slate-100 hover:bg-primary-blue hover:text-white text-text-dark font-bold text-xs rounded-xl transition-all"
                >
                  {t('قراءة', 'Read', 'Lire')} →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= Submit Article & Newsletter Banner ================= */}
      <section className="w-[95%] max-w-7xl mx-auto px-4 mt-20">
        <div className="p-8 md:p-12 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-accent-yellow uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full">
              {t('النشر والمساهمة الفكرية', 'Author Submissions', 'Contribution Pédagogique')}
            </span>
            <h3 className="text-xl md:text-3xl font-black mt-3 mb-2">
              {t('هل تود نشر مقالك أو دراستك التدريبية في مجلة المدرب؟', 'Want to Publish Your Research in Trainer Magazine?')}
            </h3>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              {t(
                'تفتح المجلة أبوابها لكافة المدربين والباحثين لنشر مقالاتهم العلمية وتجاربهم التطبيقية بعد تحكيمها من اللجنة الأكاديمية.',
                'We welcome rigorous submissions from master facilitators to share field-tested methodologies with a wider community.'
              )}
            </p>
          </div>

          <a
            href="https://wa.me/213555989370?text=Submit_Article_Trainer_Magazine"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-accent-yellow text-black font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:bg-white transition-all transform hover:-translate-y-0.5 whitespace-nowrap flex-shrink-0"
          >
            ✍️ {t('إرسال مقال للنشر', 'Submit an Article', 'Soumettre un Article')}
          </a>
        </div>
      </section>

      {/* ================= Full-Screen Article Modal Overlay ================= */}
      {activeArticleModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          <div className="bg-white w-full max-w-3xl rounded-3xl p-6 md:p-10 shadow-2xl border border-border-color my-auto max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between border-b border-border-color pb-4 mb-6">
              <span className="px-3 py-1 bg-blue-50 text-primary-blue text-xs font-bold rounded-full">
                {activeArticleModal.categoryLabel[language] || activeArticleModal.categoryLabel.ar}
              </span>
              <button
                onClick={() => setActiveArticleModal(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-text-dark font-bold text-sm flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <h2 className="text-xl md:text-2xl font-black text-text-dark mb-4 leading-snug">
              {activeArticleModal.title[language] || activeArticleModal.title.ar}
            </h2>

            <div className="flex items-center gap-3 pb-6 border-b border-border-color mb-6 text-xs text-text-light font-medium">
              <span className="font-bold text-text-dark">
                {activeArticleModal.author[language] || activeArticleModal.author.ar}
              </span>
              <span>•</span>
              <span>{activeArticleModal.datePublished}</span>
              <span>•</span>
              <span className="font-mono">{activeArticleModal.readTime[language] || activeArticleModal.readTime.ar}</span>
            </div>

            {/* Content Body */}
            <div className="text-xs md:text-sm text-text-dark leading-relaxed whitespace-pre-line space-y-4">
              {activeArticleModal.fullContent[language] || activeArticleModal.fullContent.ar}
            </div>

            <div className="mt-8 pt-6 border-t border-border-color flex justify-between items-center">
              <span className="text-xs text-text-light font-semibold">
                {t('مجلة المدرب المحترف — أكاديمية TOT', 'TOT Academy Trainer Magazine')}
              </span>
              <button
                onClick={() => setActiveArticleModal(null)}
                className="px-6 py-2.5 bg-primary-blue text-white rounded-xl font-bold text-xs shadow hover:bg-secondary-blue transition-colors"
              >
                {t('إغلاق المقال', 'Close Article', 'Fermer')}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}