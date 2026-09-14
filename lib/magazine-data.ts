export interface LocalizedString {
  ar: string;
  en: string;
  fr: string;
}

export interface MagazineGroup {
  key: string;
  number: string;
  title: LocalizedString;
  wide?: boolean;
}

export interface MagazineSection {
  n: number;
  group: string;
  slug: string;
  name: LocalizedString;
}

export interface MagazineIssue {
  id: string;
  number: string;
  date: LocalizedString;
  accent: string;
  image: string;
  feature: LocalizedString;
  contents: [string, number][];
  pdfUrl?: string;
}

export interface VideoInfo {
  url: string;
  duration: LocalizedString;
  speaker: LocalizedString;
  provider?: string;
}

export interface StoryLanguageData {
  deck?: string;
  author?: string;
  apaAuthor?: string;
  role?: string;
  date?: string;
  apaDate?: string;
  readTime?: string;
  quote?: string;
  caption1?: string;
  caption2?: string;
  inline1?: string;
  inline2?: string;
  avatar?: string;
  paragraphs?: string[];
  heroImage?: string;
}

export interface ArticleCardData {
  kind?: string;
  image: string;
  eyebrow: LocalizedString;
  title: LocalizedString;
  intro: LocalizedString;
  contentType?: 'article' | 'video';
  video?: VideoInfo;
  story?: {
    ar?: StoryLanguageData;
    en?: StoryLanguageData;
    fr?: StoryLanguageData;
  };
}

export interface EditorialSlide {
  slug: string;
  layout: string;
  accent: string;
  cards: ArticleCardData[];
}

export const coreI18n: Record<'ar' | 'en' | 'fr', Record<string, string>> = {
  ar: {
    page_title: 'مجلة المدرب - TOT Academy',
    top_signup: 'التسجيل',
    nav_classrooms: 'الأقسام التعلمية',
    nav_tracks: 'مجلة المدرب',
    logo_text: "مجلة المدرب / TOT<span class='highlight'>Academy</span>",
    write_with_us: 'اكتب معنا',
    mag_kicker: '✦ معرفة المدرب... بصوت المدرب',
    mag_title: 'مجلة <span>المدرب</span>',
    mag_subtitle: 'منصة معرفية تجمع الرؤية الاستراتيجية بالتجربة الميدانية والابتكار، وتفتح للمدربين نافذة على أفضل الممارسات والاتجاهات العالمية.',
    mag_nav_hint: 'اختر عنواناً للانتقال مباشرة إلى قسمه — آلية جاهزة للعمل داخل Google Sites.',
    strategy_kicker: '✦ القسم الأول',
    strategy_title: 'الرؤية والتوجهات الاستراتيجية',
    strategy_desc: 'قراءات تستشرف التحولات الكبرى، وتضع المدرب في قلب المستقبل المهني والتعليمي.',
    article_details: 'التفاصيل',
    article_read: 'اطلع على المقال',
    issues_kicker: 'الأرشيف الرقمي',
    issues_title: 'إصدارات مجلة المدرب',
    issues_desc: 'أعداد رقمية بصيغة PDF تجمع ملفات معمقة وحوارات ودراسات حالة وأدوات عملية للمدرب المحترف.',
    issues_status: '{current} من {total} أعداد',
    issue_details: 'تفاصيل العدد',
    issue_contents: 'فهرس العدد',
    issue_read_pdf: 'قراءة العدد PDF',
    issue_back: 'الغلاف',
    issue_label: 'العدد {number}',
    issue_pages: 'صفحة {page}',
    issue_quote: 'عدد مصمم ليمنح المدرب معرفة قابلة للتطبيق ورؤية أوسع لمستقبل المهنة.',
    pdf_placeholder: 'سيتم ربط ملف PDF بهذا العدد فور اعتماده ورفعه.',
    future_section_notice: 'تم تجهيز رابط قسم «{section}». سيتم إظهار محتواه هنا في مرحلة بناء الأقسام الثمانية عشر.',
    writer_title: 'اكتب معنا في مجلة المدرب',
    writer_desc: 'أرسل مقالك أو مساهمتك، وسيقوم فريق التحرير بمراجعتها والتواصل معك.',
    writer_full_name: 'الاسم واللقب',
    writer_full_name_placeholder: 'اكتب الاسم واللقب',
    writer_whatsapp: 'رقم الواتساب',
    writer_email: 'البريد الإلكتروني',
    writer_section: 'القسم الذي تريد الكتابة فيه',
    writer_section_placeholder: 'اختر القسم',
    writer_article_title: 'عنوان المقال أو المساهمة',
    writer_article_title_placeholder: 'عنوان واضح ومختصر',
    writer_file: 'تحميل ملف المقال أو المساهمة',
    writer_file_action: 'اختر ملف PDF أو DOCX',
    writer_no_file: 'لم يتم اختيار ملف',
    writer_summary: 'ملخص قصير',
    writer_summary_placeholder: 'عرّف بالفكرة الأساسية والقيمة التي تقدمها للمدربين...',
    writer_terms_accept: 'أوافق على شروط الكتابة والنشر في المجلة.',
    writer_terms_link: 'الاطلاع على شروط الكتابة',
    writer_submit: 'إرسال المساهمة',
    writer_cancel: 'إلغاء',
    writer_success: 'تم استلام مساهمتك بنجاح. رقم المتابعة: {code}',
    writer_error: 'تعذر إرسال المساهمة حالياً. حاول مجدداً.',
    writer_file_too_large: 'حجم الملف يتجاوز 8 ميغابايت.',
    writer_close: 'إغلاق',
    footer_desc: 'أكاديمية متخصصة في تدريب المدربين وبناء المسارات المهنية عالية الجودة.',
    footer_links_title: 'روابط هامة',
    footer_contact_title: 'تواصل معنا',
    footer_phones: 'أرقام الهاتف:',
    footer_address: 'شارع العقيد بوقرة، عمارة رقم 13، الأبيار الجزائر العاصمة',
    footer_newsletter_title: 'النشرة البريدية',
    footer_newsletter_desc: 'اشترك لتصلك دعوات المؤتمرات والندوات',
    footer_copy1: 'أكاديمية تدريب المدربين -- استثمر شغفك واصنع الأثر . جميع الحقوق محفوظة',
    footer_copy2: 'تصميم وتطوير الأستاذ بلال عويش',
    bottom_nav_home: 'الرئيسية',
    bottom_nav_sections: 'المجلة',
    bottom_nav_library: 'المكتبة',
    bottom_nav_schedule: 'المواعيد',
    bottom_nav_videos: 'الفيديوهات',
    bottom_nav_news: 'الأخبار',
    whatsapp_label: 'تواصل معنا',
  },
  en: {
    page_title: 'The Trainer Magazine - TOT Academy',
    top_signup: 'Sign Up',
    nav_classrooms: 'Classrooms',
    nav_tracks: 'Trainer Magazine',
    logo_text: "TOT<span class='highlight'>Academy / Trainer Magazine</span>",
    write_with_us: 'Write with us',
    mag_kicker: '✦ Trainer knowledge... in the trainer’s voice',
    mag_title: 'The <span>Trainer</span> Magazine',
    mag_subtitle: 'A knowledge platform connecting strategic vision, field practice, and innovation—opening a window onto global standards and the future of training.',
    mag_nav_hint: 'Choose a title to jump directly to its section — built to work inside Google Sites.',
    strategy_kicker: '✦ First section',
    strategy_title: 'Vision & Strategic Directions',
    strategy_desc: 'Forward-looking readings that place trainers at the heart of professional and educational change.',
    article_details: 'Details',
    article_read: 'Read the article',
    issues_kicker: 'Digital archive',
    issues_title: 'Trainer Magazine Issues',
    issues_desc: 'PDF editions featuring in-depth stories, interviews, case studies, and practical tools for professional trainers.',
    issues_status: '{current} of {total} issues',
    issue_details: 'Issue details',
    issue_contents: 'Contents',
    issue_read_pdf: 'Read PDF issue',
    issue_back: 'Cover',
    issue_label: 'Issue {number}',
    issue_pages: 'Page {page}',
    issue_quote: 'An issue designed to give trainers applicable knowledge and a wider view of the profession’s future.',
    pdf_placeholder: 'The PDF will be linked as soon as this issue is approved and uploaded.',
    future_section_notice: 'The link for “{section}” is ready. Its content will appear here during the 18-section build phase.',
    writer_title: 'Write for The Trainer Magazine',
    writer_desc: 'Send your article or contribution. The editorial team will review it and contact you.',
    writer_full_name: 'Full name',
    writer_full_name_placeholder: 'Enter your full name',
    writer_whatsapp: 'WhatsApp number',
    writer_email: 'Email address',
    writer_section: 'Section you want to write for',
    writer_section_placeholder: 'Choose a section',
    writer_article_title: 'Article or contribution title',
    writer_article_title_placeholder: 'A clear, concise title',
    writer_file: 'Upload article or contribution',
    writer_file_action: 'Choose a PDF or DOCX file',
    writer_no_file: 'No file selected',
    writer_summary: 'Short abstract',
    writer_summary_placeholder: 'Describe the core idea and value for trainers...',
    writer_terms_accept: 'I agree to the magazine writing and publishing terms.',
    writer_terms_link: 'Read writing terms',
    writer_submit: 'Submit contribution',
    writer_cancel: 'Cancel',
    writer_success: 'Your contribution was received. Tracking code: {code}',
    writer_error: 'We could not submit your contribution. Please try again.',
    writer_file_too_large: 'The file exceeds 8 MB.',
    writer_close: 'Close',
    footer_desc: 'An academy specialized in training trainers and building high-quality professional tracks.',
    footer_links_title: 'Important Links',
    footer_contact_title: 'Contact Us',
    footer_phones: 'Phone Numbers:',
    footer_address: 'Col. Bougara St, Bldg 13, El Biar, Algiers',
    footer_newsletter_title: 'Newsletter',
    footer_newsletter_desc: 'Subscribe to receive conference and seminar invitations',
    footer_copy1: 'TOT Academy -- Invest your passion and make an impact. All rights reserved',
    footer_copy2: 'Designed & Developed by Prof. Bilal Aouiche',
    bottom_nav_home: 'Home',
    bottom_nav_sections: 'Magazine',
    bottom_nav_library: 'Library',
    bottom_nav_schedule: 'Schedule',
    bottom_nav_videos: 'Videos',
    bottom_nav_news: 'News',
    whatsapp_label: 'Contact us',
  },
  fr: {
    page_title: 'Le Magazine du Formateur - TOT Academy',
    top_signup: 'Inscription',
    nav_classrooms: 'Salles de cours',
    nav_tracks: 'Magazine du Formateur',
    logo_text: "TOT<span class='highlight'>Academy / Magazine du Formateur</span>",
    write_with_us: 'Écrivez avec nous',
    mag_kicker: '✦ Le savoir du formateur... par la voix du formateur',
    mag_title: 'Le Magazine du <span>Formateur</span>',
    mag_subtitle: 'Une plateforme de connaissance reliant vision stratégique, pratique de terrain et innovation, ouverte sur les standards mondiaux et l’avenir de la formation.',
    mag_nav_hint: 'Choisissez un titre pour accéder directement à sa rubrique — compatible avec Google Sites.',
    strategy_kicker: '✦ Première section',
    strategy_title: 'Vision et orientations stratégiques',
    strategy_desc: 'Des lectures prospectives qui placent le formateur au cœur des transformations professionnelles et éducatives.',
    article_details: 'Détails',
    article_read: 'Lire l’article',
    issues_kicker: 'Archives numériques',
    issues_title: 'Numéros du Magazine du Formateur',
    issues_desc: 'Des éditions PDF avec dossiers, entretiens, études de cas et outils pratiques pour les formateurs professionnels.',
    issues_status: '{current} sur {total} numéros',
    issue_details: 'Détails du numéro',
    issue_contents: 'Sommaire',
    issue_read_pdf: 'Lire le numéro PDF',
    issue_back: 'Couverture',
    issue_label: 'Numéro {number}',
    issue_pages: 'Page {page}',
    issue_quote: 'Un numéro conçu pour offrir aux formateurs des connaissances applicables et une vision élargie de l’avenir du métier.',
    pdf_placeholder: 'Le PDF sera lié dès que ce numéro sera validé et mis en ligne.',
    future_section_notice: 'Le lien de « {section} » est prêt. Son contenu apparaîtra ici lors de la création des 18 rubriques.',
    writer_title: 'Écrivez pour le Magazine du Formateur',
    writer_desc: 'Envoyez votre article ou contribution. L’équipe éditoriale l’examinera et vous contactera.',
    writer_full_name: 'Nom complet',
    writer_full_name_placeholder: 'Saisissez votre nom complet',
    writer_whatsapp: 'Numéro WhatsApp',
    writer_email: 'Adresse e-mail',
    writer_section: 'Rubrique souhaitée',
    writer_section_placeholder: 'Choisir une rubrique',
    writer_article_title: 'Titre de l’article ou contribution',
    writer_article_title_placeholder: 'Un titre clair et concis',
    writer_file: 'Télécharger l’article ou la contribution',
    writer_file_action: 'Choisir un fichier PDF ou DOCX',
    writer_no_file: 'Aucun fichier sélectionné',
    writer_summary: 'Court résumé',
    writer_summary_placeholder: 'Présentez l’idée centrale et sa valeur pour les formateurs...',
    writer_terms_accept: 'J’accepte les conditions de rédaction et de publication.',
    writer_terms_link: 'Consulter les conditions',
    writer_submit: 'Envoyer la contribution',
    writer_cancel: 'Annuler',
    writer_success: 'Votre contribution a été reçue. Code de suivi : {code}',
    writer_error: 'Impossible d’envoyer la contribution. Veuillez réessayer.',
    writer_file_too_large: 'Le fichier dépasse 8 Mo.',
    writer_close: 'Fermer',
    footer_desc: 'Une académie spécialisée dans la formation des formateurs et les parcours professionnels de qualité.',
    footer_links_title: 'Liens importants',
    footer_contact_title: 'Contactez-nous',
    footer_phones: 'Téléphones :',
    footer_address: 'Rue Colonel Bougara, Immeuble 13, El Biar, Alger',
    footer_newsletter_title: 'Newsletter',
    footer_newsletter_desc: 'Abonnez-vous pour recevoir les invitations aux conférences et séminaires',
    footer_copy1: 'TOT Academy -- Investissez votre passion et créez de l’impact. Tous droits réservés',
    footer_copy2: 'Conçu et développé par Prof. Bilal Aouiche',
    bottom_nav_home: 'Accueil',
    bottom_nav_sections: 'Magazine',
    bottom_nav_library: 'Bibliothèque',
    bottom_nav_schedule: 'Agenda',
    bottom_nav_videos: 'Vidéos',
    bottom_nav_news: 'Actualités',
    whatsapp_label: 'Nous contacter',
  },
};

export const MAG_GROUPS: MagazineGroup[] = [
  {
    key: 'strategy',
    number: '01',
    title: {
      ar: 'الرؤية والتوجهات الاستراتيجية',
      en: 'Vision & Strategic Directions',
      fr: 'Vision et orientations stratégiques',
    },
  },
  {
    key: 'practice',
    number: '02',
    title: {
      ar: 'الممارسات الميدانية والتطوير المهني',
      en: 'Field Practice & Professional Development',
      fr: 'Pratiques de terrain et développement professionnel',
    },
  },
  {
    key: 'innovation',
    number: '03',
    title: {
      ar: 'الابتكار، التكنولوجيا، والأعمال',
      en: 'Innovation, Technology & Business',
      fr: 'Innovation, technologie et business',
    },
  },
  {
    key: 'community',
    number: '04',
    title: {
      ar: 'التفاعل، المجتمع، والوسائط المتعددة',
      en: 'Engagement, Community & Multimedia',
      fr: 'Interaction, communauté et multimédia',
    },
    wide: true,
  },
];

export const MAG_SECTIONS: MagazineSection[] = [
  { n: 1, group: 'strategy', slug: 'training-radar', name: { ar: 'رادار التدريب', en: 'The Radar', fr: 'Radar de la formation' } },
  { n: 2, group: 'strategy', slug: 'cover-story', name: { ar: 'ملف العدد', en: 'Cover Story', fr: 'Dossier du numéro' } },
  { n: 3, group: 'strategy', slug: 'master-interview', name: { ar: 'حوارات المحترفين', en: 'Professional Dialogues', fr: 'Dialogues professionnels' } },
  { n: 4, group: 'strategy', slug: 'global-standards', name: { ar: 'بلا حدود', en: 'Global Standards', fr: 'Sans frontières' } },

  { n: 5, group: 'practice', slug: 'pedagogy-lab', name: { ar: 'مختبر البيداغوجيا', en: 'Pedagogy Lab', fr: 'Laboratoire de pédagogie' } },
  { n: 6, group: 'practice', slug: 'case-studies', name: { ar: 'تشريح النجاح', en: 'Case Studies', fr: 'Anatomie du succès' } },
  { n: 7, group: 'practice', slug: 'bookshelf', name: { ar: 'مكتبة المدرب', en: 'The Bookshelf', fr: 'Bibliothèque du formateur' } },
  { n: 8, group: 'practice', slug: 'debate', name: { ar: 'الرأي والمناظرة', en: 'The Debate', fr: 'Opinion et débat' } },

  { n: 9, group: 'innovation', slug: 'edtech-ai', name: { ar: 'تكنو-تدريب', en: 'EdTech & AI', fr: 'Techno-formation' } },
  { n: 10, group: 'innovation', slug: 'training-business', name: { ar: 'بزنس التدريب', en: 'The Business of Training', fr: 'Business de la formation' } },
  { n: 11, group: 'innovation', slug: 'training-clinic', name: { ar: 'عيادة المدربين', en: 'Training Clinic', fr: 'Clinique des formateurs' } },
  { n: 12, group: 'innovation', slug: 'trainee-voice', name: { ar: 'صوت المتدرب', en: "The Trainee's Voice", fr: 'Voix de l’apprenant' } },
  { n: 13, group: 'innovation', slug: 'ethics-rights', name: { ar: 'ميثاق وحقوق', en: 'Ethics & Legalities', fr: 'Charte et droits' } },

  { n: 14, group: 'community', slug: 'podcast-highlights', name: { ar: 'موجات ملهمة', en: 'The Podcast Highlights', fr: 'Ondes inspirantes' } },
  { n: 15, group: 'community', slug: 'community-planner', name: { ar: 'أجندة المجتمع', en: 'Community Planner', fr: 'Agenda de la communauté' } },
  { n: 16, group: 'community', slug: 'rising-stars', name: { ar: 'مدربون صاعدون', en: 'Rising Stars', fr: 'Formateurs émergents' } },
  { n: 17, group: 'community', slug: 'infographic', name: { ar: 'الكبسولة', en: 'The Infographic', fr: 'La capsule' } },
  { n: 18, group: 'community', slug: 'behind-podium', name: { ar: 'وراء المنصة', en: 'Behind the Podium', fr: 'Dans les coulisses' } },
];

export const ISSUES: MagazineIssue[] = [
  {
    id: 'issue-05',
    number: '05',
    date: { ar: 'سبتمبر 2026', en: 'September 2026', fr: 'Septembre 2026' },
    accent: '#1152cf',
    image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=900&q=88',
    feature: {
      ar: 'المدرب في عصر الذكاء الاصطناعي',
      en: 'The Trainer in the Age of AI',
      fr: 'Le formateur à l’ère de l’IA',
    },
    contents: [
      ['edtech-ai', 12],
      ['training-radar', 20],
      ['training-clinic', 30],
      ['master-interview', 42],
      ['trainee-voice', 56],
      ['ethics-rights', 68],
    ],
    pdfUrl: '',
  },
  {
    id: 'issue-04',
    number: '04',
    date: { ar: 'يونيو 2026', en: 'June 2026', fr: 'Juin 2026' },
    accent: '#059669',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=88',
    feature: {
      ar: 'هندسة تجربة التعلم',
      en: 'Engineering the Learning Experience',
      fr: 'Concevoir l’expérience d’apprentissage',
    },
    contents: [
      ['pedagogy-lab', 10],
      ['case-studies', 22],
      ['global-standards', 34],
      ['bookshelf', 46],
      ['behind-podium', 58],
      ['infographic', 70],
    ],
    pdfUrl: '',
  },
  {
    id: 'issue-03',
    number: '03',
    date: { ar: 'مارس 2026', en: 'March 2026', fr: 'Mars 2026' },
    accent: '#d5803b',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=88',
    feature: {
      ar: 'من الخبرة إلى علامة تدريبية',
      en: 'From Expertise to a Training Brand',
      fr: 'De l’expertise à la marque de formation',
    },
    contents: [
      ['training-business', 8],
      ['cover-story', 18],
      ['debate', 32],
      ['rising-stars', 44],
      ['community-planner', 56],
      ['podcast-highlights', 66],
    ],
    pdfUrl: '',
  },
  {
    id: 'issue-02',
    number: '02',
    date: { ar: 'ديسمبر 2025', en: 'December 2025', fr: 'Décembre 2025' },
    accent: '#8b5cf6',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=88',
    feature: {
      ar: 'قيادة قاعات التدريب',
      en: 'Leading the Training Room',
      fr: 'Diriger la salle de formation',
    },
    contents: [
      ['behind-podium', 9],
      ['master-interview', 19],
      ['training-clinic', 31],
      ['trainee-voice', 43],
      ['case-studies', 55],
      ['bookshelf', 65],
    ],
    pdfUrl: '',
  },
  {
    id: 'issue-01',
    number: '01',
    date: { ar: 'سبتمبر 2025', en: 'September 2025', fr: 'Septembre 2025' },
    accent: '#e56458',
    image: 'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&w=900&q=88',
    feature: {
      ar: 'مستقبل مهنة التدريب',
      en: 'The Future of the Training Profession',
      fr: 'L’avenir du métier de formateur',
    },
    contents: [
      ['training-radar', 6],
      ['cover-story', 16],
      ['global-standards', 28],
      ['pedagogy-lab', 40],
      ['ethics-rights', 52],
      ['infographic', 64],
    ],
    pdfUrl: '',
  },
];

export const ARTICLE_CONTENT: Record<'ar' | 'en' | 'fr', StoryLanguageData & {
  masthead: string;
  edition: string;
  close: string;
  copy: string;
  download: string;
  share: string;
  copied: string;
  downloaded: string;
  shared: string;
  apaTitle: string;
  apaNote: string;
  copyCitation: string;
  citationCopied: string;
  copyFailed: string;
}> = {
  ar: {
    masthead: 'مجلة المدرب',
    edition: 'عدد خاص · رؤى وممارسات',
    deck: 'تحقيق تحليلي يقرأ التحولات الجديدة في مهنة التدريب، ويقترح مسارات عملية لصناعة أثر قابل للقياس دون فقدان البعد الإنساني.',
    author: 'بلال عويش',
    apaAuthor: 'عويش، بلال',
    role: 'كاتب وباحث في هندسة التدريب',
    date: '2 سبتمبر 2026',
    apaDate: '2026، 2 سبتمبر',
    readTime: '8 دقائق قراءة',
    close: 'إغلاق المقال',
    copy: 'نسخ',
    download: 'فتح PDF',
    share: 'مشاركة',
    copied: 'تم نسخ المقال',
    downloaded: 'تم فتح نسخة المقال في صفحة مستقلة لحفظها بصيغة PDF',
    shared: 'تم نسخ بيانات المشاركة',
    apaTitle: 'توثيق المقال وفق APA',
    apaNote: 'هذا التوثيق قابل للنسخ والاستخدام وفق طريقة APA.',
    copyCitation: 'نسخ التوثيق',
    citationCopied: 'تم نسخ توثيق APA',
    copyFailed: 'تعذر النسخ تلقائياً',
    caption1: 'جلسة تصميم جماعي تحوّل المعرفة إلى تجربة تعلم قابلة للتطبيق.',
    caption2: 'البيانات تمنح فريق التدريب رؤية أوضح، لكن القرار المهني يبقى إنسانياً.',
    quote: 'التدريب المؤثر لا يبدأ من الأدوات، بل من سؤال واضح: ما التغيير الذي نريد أن يحدث بعد انتهاء الجلسة؟',
    paragraphs: [
      'تعيش صناعة التدريب مرحلة انتقالية عميقة لم تعد فيها جودة المحتوى وحدها كافية لصناعة برنامج ناجح. المؤسسات اليوم تبحث عن تجربة تعلم مترابطة تبدأ قبل اللقاء، وتستمر أثناءه، ثم تتحول بعده إلى ممارسة يومية يمكن ملاحظتها وقياسها. لهذا أصبح دور المدرب أقرب إلى مهندس تجربة يجمع بين فهم الإنسان، ووضوح الهدف، والقدرة على اختيار الوسيلة المناسبة في اللحظة المناسبة. النجاح هنا لا يعني إغراق المتدرب بالمعلومات، بل مساعدته على رؤية المشكلة من زاوية جديدة، وتجريب حل واقعي، والعودة إلى بيئة العمل بخطوة محددة يمكن تنفيذها فوراً.',
      'تبدأ الرحلة المهنية من تشخيص صادق للسياق. قبل إعداد الشرائح أو اختيار المنصة، يحتاج فريق التدريب إلى الاستماع لأصحاب المصلحة، ومراجعة مؤشرات الأداء، وفهم العوائق التي تمنع السلوك المطلوب. قد يكون التحدي نقصاً في المعرفة، لكنه قد يكون أيضاً غموضاً في الصلاحيات أو ضعفاً في التغذية الراجعة أو خوفاً من الخطأ. عندما نخلط بين هذه الأسباب، نصمم تدريباً جميلاً لا يعالج المشكلة. أما عندما نميز بينها، يصبح البرنامج أكثر خفة ووضوحاً، وتتحول كل دقيقة فيه إلى استثمار له معنى.',
      'التكنولوجيا تضيف إمكانات كبيرة، خصوصاً مع أدوات الذكاء الاصطناعي والتحليلات والتعلم التكيفي. يمكنها اقتراح أمثلة متنوعة، وتلخيص النقاشات، وبناء مسارات مختلفة حسب مستوى المشاركين، كما تساعد على متابعة التقدم بين الجلسات. ومع ذلك يجب أن تبقى الأداة في خدمة القرار التربوي، لا أن تقوده. فالخصوصية، ودقة المعلومات، والإنصاف، وشفافية الاستخدام ليست تفاصيل تقنية، بل جزء من الثقة التي تسمح للمتدرب بالمشاركة والتجريب وطرح الأسئلة دون تردد.',
      'في القاعة أو البيئة الرقمية، يصنع الإيقاع فارقاً حاسماً. يحتاج المشاركون إلى تناوب مدروس بين التفسير، والمثال، والنقاش، والتطبيق، والتأمل. الوحدة القصيرة التي تنتهي بمهمة واضحة قد تكون أقوى من محاضرة طويلة، بشرط أن ترتبط بسياق حقيقي. ومن المفيد أن يتلقى المتدرب تغذية راجعة سريعة تصف ما حدث، وتوضح أثره، وتقترح تحسيناً واحداً قابلاً للتنفيذ. بهذه الطريقة يصبح الخطأ مادة للتعلم، ويتحول التقييم من حكم نهائي إلى بوصلة تساعد على التقدم.',
      'أما القياس فينبغي أن يتجاوز رضا المشاركين في نهاية الجلسة. يمكن البدء بمؤشر بسيط قبل البرنامج، ثم مراقبة تطبيق المهارة بعد أسبوع أو شهر، وجمع قصة قصيرة تشرح كيف تغير القرار أو السلوك. الجمع بين الأرقام والقصص يمنح صورة أكثر عدلاً: الأرقام تكشف الاتجاه، والقصص تفسر لماذا حدث. والأهم أن تعود النتائج إلى التصميم نفسه، فتُحذف الأنشطة الضعيفة، وتُعزز الممارسات الفعالة، وتُبنى نسخة جديدة أفضل من السابقة.',
      'المستقبل لا ينتظر مدرباً يملك إجابات جاهزة، بل محترفاً يجيد التعلم المستمر والعمل مع تخصصات متعددة. يحتاج المدرب إلى مجتمع ممارسة يراجع معه التجارب، ومكتبة صغيرة تتجدد، ووقت مخصص للتأمل بعد كل برنامج. وعندما يجمع بين الفضول والانضباط والتواضع المهني، يستطيع أن يستخدم الأدوات الجديدة بثقة من دون أن يفقد صوته الخاص. عندها يصبح التدريب مساحة آمنة لصناعة المعنى، ومختبراً للقرارات، وجسراً يصل المعرفة بالفعل والأفراد بأهداف مؤسساتهم.',
    ],
  },
  en: {
    masthead: 'Trainer Magazine',
    edition: 'Special Edition · Insight & Practice',
    deck: 'An analytical feature exploring the new forces reshaping professional learning and the practical choices that turn training into measurable, human-centered change.',
    author: 'Billel Aouiche',
    apaAuthor: 'Aouiche, B.',
    role: 'Writer and learning-experience researcher',
    date: 'September 2, 2026',
    apaDate: '2026, September 2',
    readTime: '8 min read',
    close: 'Close article',
    copy: 'Copy',
    download: 'Open PDF',
    share: 'Share',
    copied: 'Article copied',
    downloaded: 'The article opened in a separate page for PDF saving',
    shared: 'Sharing details copied',
    apaTitle: 'APA article citation',
    apaNote: 'This citation can be copied and used in APA format.',
    copyCitation: 'Copy citation',
    citationCopied: 'APA citation copied',
    copyFailed: 'Automatic copy failed',
    caption1: 'Collaborative design turns knowledge into a learning experience people can apply.',
    caption2: 'Data gives learning teams sharper vision, while professional judgment remains human.',
    quote: 'Impactful training does not begin with a tool. It begins with a clear question: what should change after the session ends?',
    paragraphs: [
      'Professional learning is moving through a profound transition in which strong content alone no longer guarantees a successful program. Organizations now expect a connected experience that starts before the session, becomes active during it, and continues afterward as observable practice. The trainer is therefore becoming an experience architect who combines an understanding of people, a precise outcome, and the judgment to choose the right method at the right moment. Success is not measured by how much information enters the room. It is measured by whether participants can see a problem differently, test a realistic response, and return to work with one specific action they are ready to perform.',
      'The journey begins with an honest diagnosis of context. Before building slides or selecting a platform, the learning team should listen to stakeholders, examine performance evidence, and identify the barriers surrounding the desired behavior. A gap may come from missing knowledge, but it may also be caused by unclear authority, weak feedback, conflicting incentives, or fear of making mistakes. When those causes are treated as identical, an elegant course can leave the real problem untouched. When they are separated, the program becomes lighter, more focused, and more useful, because every activity has a reason to exist.',
      'Technology expands what is possible, especially through artificial intelligence, analytics, and adaptive learning. It can generate varied examples, summarize discussion, suggest different routes for different levels of experience, and maintain momentum between sessions. Yet technology should serve the learning decision rather than silently make it. Privacy, accuracy, fairness, and transparent use are not technical footnotes. They are part of the trust that allows participants to experiment, ask difficult questions, and admit uncertainty. A sophisticated tool without that trust can reduce participation instead of strengthening it.',
      'Rhythm matters in both physical and digital rooms. Learners need a deliberate alternation of explanation, example, discussion, practice, and reflection. A short unit ending in a clear assignment can outperform a long lecture when it is connected to a genuine situation. Feedback should also arrive quickly and remain practical: describe what happened, explain its effect, and recommend one improvement that can be attempted immediately. This approach turns errors into useful evidence and changes assessment from a final judgment into a compass for continued progress.',
      'Measurement should move beyond satisfaction at the end of an event. A team can establish a simple indicator before the program, observe application a week or a month later, and collect a brief story explaining how a decision or behavior changed. Numbers and stories work best together. Numbers reveal direction; stories explain why movement occurred. The findings should then return to the design process, where weak activities are removed, effective practices are strengthened, and the next edition is built as an intentional improvement rather than a repetition.',
      'The future favors trainers who keep learning and who can work across disciplines, not those who protect a fixed set of answers. Every professional needs a community that can challenge their experiments, a small library that keeps expanding, and protected time to reflect after each program. By combining curiosity, discipline, and professional humility, trainers can use new tools confidently without losing their distinctive voice. Training then becomes a safe space for meaning, a laboratory for decisions, and a bridge connecting knowledge with action and individual growth with organizational purpose.',
    ],
  },
  fr: {
    masthead: 'Magazine du Formateur',
    edition: 'Édition spéciale · Analyse et pratique',
    deck: 'Une enquête analytique sur les forces qui transforment la formation professionnelle et sur les choix concrets qui produisent un changement mesurable et humain.',
    author: 'Billel Aouiche',
    apaAuthor: 'Aouiche, B.',
    role: 'Auteur et chercheur en ingénierie de formation',
    date: '2 septembre 2026',
    apaDate: '2026, 2 septembre',
    readTime: '8 min de lecture',
    close: 'Fermer l’article',
    copy: 'Copier',
    download: 'Ouvrir le PDF',
    share: 'Partager',
    copied: 'Article copié',
    downloaded: 'L’article est ouvert dans une page séparée pour l’enregistrer en PDF',
    shared: 'Informations de partage copiées',
    apaTitle: 'Référence de l’article selon l’APA',
    apaNote: 'Cette référence peut être copiée et utilisée selon le style APA.',
    copyCitation: 'Copier la référence',
    citationCopied: 'Référence APA copiée',
    copyFailed: 'La copie automatique a échoué',
    caption1: 'La conception collaborative transforme les connaissances en expérience applicable.',
    caption2: 'Les données éclairent l’équipe de formation, mais le jugement professionnel reste humain.',
    quote: 'Une formation utile ne commence pas par un outil, mais par une question claire : quel changement voulons-nous observer après la séance ?',
    paragraphs: [
      'La formation professionnelle traverse une transition profonde dans laquelle la qualité du contenu ne garantit plus, à elle seule, la réussite d’un programme. Les organisations attendent désormais une expérience cohérente qui commence avant la séance, devient active pendant la rencontre et se prolonge ensuite dans des pratiques observables. Le formateur devient ainsi un architecte d’expérience capable de comprendre les personnes, de préciser le résultat attendu et de choisir la bonne méthode au bon moment. Le succès ne dépend pas de la quantité d’informations présentées, mais de la capacité des participants à regarder un problème autrement, à tester une réponse réaliste et à reprendre leur activité avec une action précise.',
      'Le parcours commence par un diagnostic honnête du contexte. Avant de préparer les diapositives ou de choisir une plateforme, l’équipe doit écouter les parties prenantes, examiner les indicateurs disponibles et identifier les obstacles qui entourent le comportement souhaité. Une difficulté peut venir d’un manque de connaissances, mais aussi de responsabilités mal définies, d’un retour insuffisant, d’incitations contradictoires ou de la peur de se tromper. Lorsque ces causes sont confondues, un cours élégant peut laisser le vrai problème intact. Lorsqu’elles sont distinguées, le programme devient plus léger, plus ciblé et réellement utile.',
      'La technologie élargit les possibilités, notamment grâce à l’intelligence artificielle, aux données et à l’apprentissage adaptatif. Elle peut proposer des exemples variés, résumer une discussion, construire des chemins différents selon l’expérience et maintenir la dynamique entre les séances. Elle doit pourtant rester au service de la décision pédagogique. La confidentialité, l’exactitude, l’équité et la transparence ne sont pas des détails techniques : elles font partie de la confiance qui permet aux participants d’expérimenter, de poser des questions difficiles et de reconnaître une incertitude sans craindre le jugement.',
      'Le rythme joue un rôle décisif dans une salle physique comme dans un environnement numérique. Les participants ont besoin d’une alternance réfléchie entre explication, exemple, échange, pratique et recul. Une unité courte qui se termine par une mission claire peut être plus forte qu’un long exposé lorsqu’elle s’appuie sur une situation authentique. Le retour doit aussi être rapide et concret : décrire ce qui s’est passé, expliquer son effet et proposer une amélioration immédiatement testable. L’erreur devient alors une donnée utile et l’évaluation une boussole pour progresser.',
      'La mesure devrait dépasser la satisfaction exprimée à la fin d’un événement. L’équipe peut établir un indicateur simple avant le programme, observer l’application une semaine ou un mois plus tard et recueillir une histoire brève qui explique comment une décision ou un comportement a changé. Les chiffres et les récits se complètent : les premiers révèlent une direction, les seconds expliquent le mouvement. Les résultats doivent enfin revenir dans la conception afin de retirer les activités faibles, de renforcer les pratiques efficaces et de produire une nouvelle édition véritablement meilleure.',
      'L’avenir appartient aux formateurs qui continuent d’apprendre et savent collaborer avec plusieurs disciplines, plutôt qu’à ceux qui protègent un ensemble de réponses figées. Chaque professionnel a besoin d’une communauté capable de questionner ses expériences, d’une petite bibliothèque qui se renouvelle et d’un temps réservé à la réflexion après chaque programme. En associant curiosité, discipline et humilité professionnelle, le formateur peut utiliser les nouveaux outils sans perdre sa voix. La formation devient alors un espace sûr pour créer du sens, un laboratoire de décisions et un pont entre connaissance, action et finalité collective.',
    ],
  },
};

export const ARTICLE_MEDIA = {
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=180&q=85',
  inline1: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=84',
  inline2: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=84',
};

export const ARTICLE_SHARE_COPY = {
  ar: {
    title: 'مشاركة المقال',
    hint: 'اختر المنصة أو الأداة التي تريد مشاركة المقال من خلالها.',
    whatsapp: 'واتساب',
    facebook: 'فيسبوك',
    x: 'إكس',
    telegram: 'تيليغرام',
    linkedin: 'لينكدإن',
    email: 'البريد',
    copy: 'نسخ الرابط',
    native: 'المزيد',
    close: 'إغلاق',
    copied: 'تم نسخ رابط المقال',
  },
  en: {
    title: 'Share article',
    hint: 'Choose a platform or tool to share this article.',
    whatsapp: 'WhatsApp',
    facebook: 'Facebook',
    x: 'X',
    telegram: 'Telegram',
    linkedin: 'LinkedIn',
    email: 'Email',
    copy: 'Copy link',
    native: 'More',
    close: 'Close',
    copied: 'Article link copied',
  },
  fr: {
    title: 'Partager l’article',
    hint: 'Choisissez une plateforme ou un outil pour partager cet article.',
    whatsapp: 'WhatsApp',
    facebook: 'Facebook',
    x: 'X',
    telegram: 'Telegram',
    linkedin: 'LinkedIn',
    email: 'E-mail',
    copy: 'Copier le lien',
    native: 'Plus',
    close: 'Fermer',
    copied: 'Lien de l’article copié',
  },
};

export const ARTICLE_PRINT_COPY = {
  ar: {
    pageTitle: 'نسخة المقال للطباعة',
    save: 'حفظ أو تحميل PDF',
    close: 'إغلاق الصفحة',
    hint: 'هذه نسخة مستقلة خارج Google Sites. اضغط الزر لحفظ المقال كاملاً بصيغة PDF.',
    loading: 'جار تحميل الصور…',
  },
  en: {
    pageTitle: 'Printable article',
    save: 'Save or download PDF',
    close: 'Close page',
    hint: 'This independent page opens outside Google Sites. Use the button to save the complete article as a PDF.',
    loading: 'Loading images…',
  },
  fr: {
    pageTitle: 'Article imprimable',
    save: 'Enregistrer ou télécharger le PDF',
    close: 'Fermer la page',
    hint: 'Cette page indépendante s’ouvre hors de Google Sites. Utilisez le bouton pour enregistrer l’article complet en PDF.',
    loading: 'Chargement des images…',
  },
};

export const PRACTICE_UI = {
  ar: {
    kicker: '✦ القسم الثاني',
    title: 'الممارسات الميدانية والتطوير المهني',
    desc: 'مختبر تطبيقي يجمع أدوات المدرب، ودراسات الحالة، والقراءة المهنية، والمناظرة الواعية.',
    watch: 'شاهد الفيديو',
    video: 'فيديو',
    open: 'فتح الفيديو على YouTube',
    unavailable: 'أضف رابط الفيديو من استوديو المحتوى ليظهر هنا.',
    close: 'إغلاق الفيديو',
    speaker: 'المتحدث',
    duration: 'المدة',
  },
  en: {
    kicker: '✦ Second section',
    title: 'Field Practice & Professional Development',
    desc: 'A hands-on lab bringing together trainer tools, cases, professional reading, and informed debate.',
    watch: 'Watch video',
    video: 'Video',
    open: 'Open video on YouTube',
    unavailable: 'Add the video link in Content Studio to display it here.',
    close: 'Close video',
    speaker: 'Speaker',
    duration: 'Duration',
  },
  fr: {
    kicker: '✦ Deuxième section',
    title: 'Pratiques de terrain et développement professionnel',
    desc: 'Un laboratoire pratique réunissant outils, études de cas, lecture professionnelle et débat éclairé.',
    watch: 'Voir la vidéo',
    video: 'Vidéo',
    open: 'Ouvrir la vidéo sur YouTube',
    unavailable: 'Ajoutez le lien vidéo dans le Studio de contenu pour l’afficher ici.',
    close: 'Fermer la vidéo',
    speaker: 'Intervenant',
    duration: 'Durée',
  },
};

export const INNOVATION_UI = {
  ar: {
    kicker: '✦ القسم الثالث',
    title: 'الابتكار، التكنولوجيا والأعمال',
    desc: 'مختبر للمستقبل يوازن بين التقنية، الحكم البشري، واستدامة أعمال التدريب.',
  },
  en: {
    kicker: '✦ Third section',
    title: 'Innovation, Technology & Business',
    desc: 'A future-facing lab balancing technology, human judgment, and sustainable training business.',
  },
  fr: {
    kicker: '✦ Troisième section',
    title: 'Innovation, technologie et business',
    desc: 'Un laboratoire tourné vers l’avenir, entre technologie, jugement humain et activité durable.',
  },
};

export const COMMUNITY_UI = {
  ar: {
    kicker: '✦ القسم الرابع',
    title: 'التفاعل، المجتمع والوسائط المتعددة',
    desc: 'مساحات تجمع الصوت والصورة واللقاء لصناعة مجتمع مهني يتعلم ويشارك ويترك أثراً.',
  },
  en: {
    kicker: '✦ Fourth section',
    title: 'Engagement, Community & Multimedia',
    desc: 'Audio, visual, and live spaces that help a professional community learn, contribute, and create impact.',
  },
  fr: {
    kicker: '✦ Quatrième section',
    title: 'Interaction, communauté et multimédia',
    desc: 'Des espaces sonores, visuels et vivants pour apprendre, contribuer et produire un impact collectif.',
  },
};

export const STRATEGIC_SLIDES: EditorialSlide[] = [
  {
    slug: 'training-radar',
    layout: 'radar',
    accent: '#ffd166',
    cards: [
      {
        kind: 'feature',
        image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=86',
        eyebrow: { ar: 'التحولات الكبرى', en: 'Major shifts', fr: 'Grandes mutations' },
        title: { ar: 'خمس إشارات ستعيد تشكيل سوق التدريب في 2027', en: 'Five signals reshaping the training market in 2027', fr: 'Cinq signaux qui redessineront la formation en 2027' },
        intro: { ar: 'قراءة استشرافية في تغير احتياجات المؤسسات، ونماذج التعلم، والأدوار الجديدة التي تنتظر المدرب المحترف.', en: 'A forward look at changing organizational needs, learning models, and the trainer’s emerging roles.', fr: 'Une lecture prospective des besoins des organisations, des modèles d’apprentissage et des nouveaux rôles du formateur.' },
      },
      {
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=84',
        eyebrow: { ar: 'ذكاء اصطناعي', en: 'Artificial intelligence', fr: 'Intelligence artificielle' },
        title: { ar: 'من مساعد رقمي إلى شريك في تصميم التدريب', en: 'From digital assistant to training design partner', fr: 'De l’assistant numérique au partenaire de conception' },
        intro: { ar: 'كيف يستخدم المدرب الذكاء الاصطناعي لتخصيص المسارات دون التفريط في اللمسة الإنسانية؟', en: 'How can trainers personalize learning with AI without losing the human touch?', fr: 'Comment personnaliser les parcours avec l’IA sans perdre la dimension humaine ?' },
      },
      {
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=84',
        eyebrow: { ar: 'تصميم التعلم', en: 'Learning design', fr: 'Design pédagogique' },
        title: { ar: 'التعلم المصغر يفرض إيقاعاً جديداً', en: 'Microlearning sets a new pace', fr: 'Le microlearning impose un nouveau rythme' },
        intro: { ar: 'وحدات قصيرة، نتائج واضحة، وتجربة تتكيف مع وقت المتدرب وسياقه الحقيقي.', en: 'Short units, clear outcomes, and learning that adapts to the trainee’s real context.', fr: 'Des unités courtes, des résultats clairs et une expérience adaptée au contexte réel.' },
      },
      {
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=84',
        eyebrow: { ar: 'نموذج هجين', en: 'Hybrid model', fr: 'Modèle hybride' },
        title: { ar: 'المدرب الهجين: حضور يتجاوز القاعة', en: 'The hybrid trainer beyond the room', fr: 'Le formateur hybride au-delà de la salle' },
        intro: { ar: 'بناء حضور تدريبي واحد يربط المنصة الرقمية بالتفاعل المباشر دون انقطاع.', en: 'Creating one coherent experience across digital platforms and live interaction.', fr: 'Créer une expérience cohérente entre plateformes numériques et interaction directe.' },
      },
      {
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=84',
        eyebrow: { ar: 'مهارات المستقبل', en: 'Future skills', fr: 'Compétences d’avenir' },
        title: { ar: 'المهارات الخضراء تدخل قاعة التدريب', en: 'Green skills enter the training room', fr: 'Les compétences vertes entrent en formation' },
        intro: { ar: 'لماذا أصبحت الاستدامة كفاءة مشتركة يجب أن تظهر في البرامج مهما كان تخصصها؟', en: 'Why sustainability is becoming a shared competency across every specialty.', fr: 'Pourquoi la durabilité devient une compétence commune à toutes les spécialités.' },
      },
    ],
  },
  {
    slug: 'cover-story',
    layout: 'cover',
    accent: '#65d6c3',
    cards: [
      {
        kind: 'feature',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1500&q=88',
        eyebrow: { ar: 'ملف العدد', en: 'Cover story', fr: 'Dossier du numéro' },
        title: { ar: 'كيف نبني مدرباً يقود التحول ولا يكتفي بملاحقته؟', en: 'How do we build trainers who lead change instead of chasing it?', fr: 'Comment former des formateurs qui conduisent le changement ?' },
        intro: { ar: 'ملف معمق يرسم رحلة المدرب من امتلاك المعرفة إلى صناعة القرار والتأثير في ثقافة المؤسسة، مع نموذج عملي من سبع محطات.', en: 'An in-depth feature mapping the trainer’s journey from knowledge holder to decision maker and culture shaper, through a seven-stage model.', fr: 'Un dossier approfondi sur le passage du détenteur de savoir au décideur qui transforme la culture, selon un modèle en sept étapes.' },
      },
    ],
  },
  {
    slug: 'master-interview',
    layout: 'interviews',
    accent: '#f3a55b',
    cards: [
      {
        kind: 'feature',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1100&q=86',
        eyebrow: { ar: 'حوار القيادة', en: 'Leadership dialogue', fr: 'Dialogue de leadership' },
        title: { ar: 'من المنصة إلى صناعة الأثر المستدام', en: 'From the podium to sustainable impact', fr: 'De la scène à un impact durable' },
        intro: { ar: 'حوار مع خبير في تطوير القيادات حول ما يجعل التدريب بداية لتغيير طويل الأمد لا حدثاً عابراً.', en: 'A leadership expert explains what makes training the start of lasting change rather than a one-off event.', fr: 'Un expert en leadership explique comment faire de la formation le début d’un changement durable.' },
      },
      {
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=84',
        eyebrow: { ar: 'فلسفة التدريب', en: 'Training philosophy', fr: 'Philosophie de formation' },
        title: { ar: 'المهنة تحتاج فلسفة قبل الأدوات', en: 'The profession needs philosophy before tools', fr: 'Le métier exige une philosophie avant les outils' },
        intro: { ar: 'عن بناء موقف مهني واضح يقود اختيار المنهج والأداة وطريقة التفاعل.', en: 'On building a clear professional stance that guides methods, tools, and interaction.', fr: 'Construire une posture professionnelle qui guide méthodes, outils et interaction.' },
      },
      {
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=84',
        eyebrow: { ar: 'هوية المدرب', en: 'Trainer identity', fr: 'Identité du formateur' },
        title: { ar: 'كيف تصنع لغة تدريب لا تُنسى؟', en: 'How do you create a memorable training voice?', fr: 'Comment créer une voix pédagogique mémorable ?' },
        intro: { ar: 'حوار حول السرد، والإيقاع، والحضور الذي يحول المحتوى إلى تجربة لها بصمة.', en: 'A dialogue on storytelling, rhythm, and presence that turns content into a signature experience.', fr: 'Un échange sur le récit, le rythme et la présence qui transforment le contenu en expérience.' },
      },
    ],
  },
  {
    slug: 'global-standards',
    layout: 'global',
    accent: '#8be0ff',
    cards: [
      {
        image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=900&q=84',
        eyebrow: { ar: 'فنلندا', en: 'Finland', fr: 'Finlande' },
        title: { ar: 'التعلم القائم على الظواهر', en: 'Phenomenon-based learning', fr: 'L’apprentissage par phénomènes' },
        intro: { ar: 'كيف تبنى التجربة حول سؤال واقعي عابر للتخصصات بدل مادة منفصلة؟', en: 'Building learning around real multidisciplinary questions rather than isolated subjects.', fr: 'Construire l’apprentissage autour de questions réelles et multidisciplinaires.' },
      },
      {
        image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=900&q=84',
        eyebrow: { ar: 'سنغافورة', en: 'Singapore', fr: 'Singapour' },
        title: { ar: 'المدرب كمهندس للمهارات', en: 'The trainer as skills architect', fr: 'Le formateur architecte des compétences' },
        intro: { ar: 'ربط كل نشاط بمؤشر أداء ومسار واضح لتطور الكفاءة.', en: 'Linking every activity to performance evidence and a clear skills pathway.', fr: 'Relier chaque activité à une preuve de performance et à un parcours de compétence.' },
      },
      {
        image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=84',
        eyebrow: { ar: 'كندا', en: 'Canada', fr: 'Canada' },
        title: { ar: 'الشمول يبدأ من لحظة التصميم', en: 'Inclusion starts at design', fr: 'L’inclusion commence dès la conception' },
        intro: { ar: 'ممارسات تجعل الوصول والاختلاف جزءاً أصيلاً من البرنامج لا إضافة متأخرة.', en: 'Practices that make access and difference part of the program from the start.', fr: 'Des pratiques qui intègrent l’accessibilité et la diversité dès le départ.' },
      },
      {
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=84',
        eyebrow: { ar: 'ألمانيا', en: 'Germany', fr: 'Allemagne' },
        title: { ar: 'قوة النموذج التدريبي المزدوج', en: 'The power of dual training', fr: 'La force de la formation duale' },
        intro: { ar: 'توازن منظم بين التعلم في المؤسسة والتطبيق داخل بيئة العمل.', en: 'A structured balance between institutional learning and workplace practice.', fr: 'Un équilibre structuré entre apprentissage institutionnel et pratique en entreprise.' },
      },
      {
        image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=900&q=84',
        eyebrow: { ar: 'اليابان', en: 'Japan', fr: 'Japon' },
        title: { ar: 'كايزن: التحسن الصغير المستمر', en: 'Kaizen: continuous small improvement', fr: 'Kaizen : la petite amélioration continue' },
        intro: { ar: 'تحويل التقييم إلى عادات تطوير قصيرة ومتكررة يشارك فيها الجميع.', en: 'Turning evaluation into short, repeated improvement habits shared by everyone.', fr: 'Transformer l’évaluation en habitudes courtes et répétées d’amélioration.' },
      },
      {
        image: 'https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=900&q=84',
        eyebrow: { ar: 'رواندا', en: 'Rwanda', fr: 'Rwanda' },
        title: { ar: 'التعلم محركاً للتنمية', en: 'Learning as a development engine', fr: 'L’apprentissage moteur du développement' },
        intro: { ar: 'كيف تقترن البرامج التدريبية بالمجتمع وريادة الأعمال والأثر المحلي؟', en: 'How training connects community, entrepreneurship, and measurable local impact.', fr: 'Comment la formation relie communauté, entrepreneuriat et impact local mesurable.' },
      },
    ],
  },
];

export const PRACTICE_SLIDES: EditorialSlide[] = [
  {
    slug: 'pedagogy-lab',
    layout: 'lab',
    accent: '#ffb45c',
    cards: [
      {
        kind: 'feature',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=86',
        eyebrow: { ar: 'هندسة الجلسة', en: 'Session engineering', fr: 'Ingénierie de séance' },
        title: { ar: 'من التشخيص إلى النشاط: بروتوكول لجلسة لا تهدر دقيقة', en: 'From diagnosis to activity: a protocol for sessions that waste no minute', fr: 'Du diagnostic à l’activité : un protocole pour ne perdre aucune minute' },
        intro: { ar: 'لوحة عملية تربط فجوة الأداء بالسلوك المستهدف، ثم تحوّل كل دقيقة في الجلسة إلى ممارسة لها دليل واضح.', en: 'A practical canvas links the performance gap to a target behavior, turning every minute into evidence-producing practice.', fr: 'Un canevas pratique relie l’écart de performance au comportement cible et transforme chaque minute en pratique observable.' },
        contentType: 'article',
      },
      {
        image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'تشخيص سريع', en: 'Rapid diagnosis', fr: 'Diagnostic rapide' },
        title: { ar: 'سبع دقائق تكشف ما يعرفه المتدرب فعلاً', en: 'Seven minutes that reveal what learners really know', fr: 'Sept minutes pour révéler ce que les apprenants savent vraiment' },
        intro: { ar: 'افتتاحية قصيرة تجمع التصويت، سؤال الحالة، وخريطة الثقة لتعديل مستوى الجلسة قبل فوات الأوان.', en: 'A short opening combines polling, a case question, and a confidence map to calibrate the session before it is too late.', fr: 'Une ouverture courte combine sondage, cas et carte de confiance pour calibrer la séance à temps.' },
        contentType: 'article',
      },
      {
        image: 'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'فيديو مختار', en: 'Selected video', fr: 'Vidéo sélectionnée' },
        title: { ar: 'قوة الإيمان بإمكانية التطور', en: 'The power of believing you can improve', fr: 'Le pouvoir de croire que l’on peut progresser' },
        intro: { ar: 'كارول دويك تشرح كيف تغيّر عقلية النمو علاقة المتعلم بالتحدي والخطأ والتغذية الراجعة.', en: 'Carol Dweck explains how a growth mindset changes the learner’s relationship with challenge, error, and feedback.', fr: 'Carol Dweck explique comment l’état d’esprit de développement transforme le rapport au défi, à l’erreur et au feedback.' },
        contentType: 'video',
        video: {
          url: 'https://www.youtube.com/watch?v=J-swZaKN2Ic',
          duration: { ar: '10:25 دقيقة', en: '10:25 min', fr: '10:25 min' },
          speaker: { ar: 'كارول دويك', en: 'Carol Dweck', fr: 'Carol Dweck' },
          provider: 'TED · YouTube',
        },
      },
      {
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'مهارة المدرب', en: 'Trainer craft', fr: 'Geste du formateur' },
        title: { ar: 'تغذية راجعة تصحح الأداء وتحفظ الكرامة', en: 'Feedback that corrects performance and protects dignity', fr: 'Un feedback qui corrige la performance et préserve la dignité' },
        intro: { ar: 'صيغة من ثلاث خطوات تصف السلوك والأثر والخطوة التالية من دون أحكام شخصية أو رسائل غامضة.', en: 'A three-step formula describes behavior, impact, and the next move without personal judgment or vague messages.', fr: 'Une formule en trois étapes décrit le comportement, son effet et la prochaine action sans jugement personnel.' },
        contentType: 'article',
      },
      {
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'تقويم الأداء', en: 'Performance evidence', fr: 'Preuve de performance' },
        title: { ar: 'متى يصبح النشاط دليلاً على التعلم؟', en: 'When does an activity become evidence of learning?', fr: 'Quand une activité devient-elle une preuve d’apprentissage ?' },
        intro: { ar: 'الفرق بين مشاركة تبدو ناجحة ومهمة قصيرة تنتج أثراً يمكن فحصه واتخاذ قرار تعليمي على أساسه.', en: 'The difference between lively participation and a short task that produces inspectable evidence for an instructional decision.', fr: 'La différence entre une participation animée et une tâche courte produisant une preuve exploitable.' },
        contentType: 'article',
      },
    ],
  },
  {
    slug: 'case-studies',
    layout: 'cases',
    accent: '#61d6ad',
    cards: [
      {
        kind: 'feature',
        image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=86',
        eyebrow: { ar: 'حالة موثقة', en: 'Documented case', fr: 'Cas documenté' },
        title: { ar: 'كيف أنقذت إعادة التصميم برنامج قيادة متعثراً', en: 'How a redesign rescued a struggling leadership program', fr: 'Comment une refonte a sauvé un programme de leadership en difficulté' },
        intro: { ar: 'من حضور منخفض ومحتوى مزدحم إلى مسار قصير مبني على قرارات حقيقية ومتابعة بين الجلسات.', en: 'From low attendance and crowded content to a short pathway built around real decisions and between-session follow-up.', fr: 'D’une faible participation et d’un contenu surchargé à un parcours court fondé sur de vraies décisions.' },
        contentType: 'article',
      },
      {
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'فيديو حالة', en: 'Case video', fr: 'Vidéo de cas' },
        title: { ar: 'كيف يلهم القادة العظماء العمل؟', en: 'How great leaders inspire action', fr: 'Comment les grands leaders inspirent l’action' },
        intro: { ar: 'سيمون سينك يقدّم نموذج الدائرة الذهبية لفهم لماذا تبدأ الرسائل المؤثرة من الغاية قبل المنتج أو الإجراء.', en: 'Simon Sinek presents the Golden Circle to show why influential messages begin with purpose before product or process.', fr: 'Simon Sinek présente le Cercle d’or et montre pourquoi les messages influents commencent par la raison d’être.' },
        contentType: 'video',
        video: {
          url: 'https://www.youtube.com/watch?v=qp0HIF3SfI4',
          duration: { ar: '18:04 دقيقة', en: '18:04 min', fr: '18:04 min' },
          speaker: { ar: 'سيمون سينك', en: 'Simon Sinek', fr: 'Simon Sinek' },
          provider: 'TED · YouTube',
        },
      },
      {
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'قياس الأثر', en: 'Impact measurement', fr: 'Mesure de l’impact' },
        title: { ar: 'من 18٪ إلى 61٪: حين أصبح نقل الأثر مسؤولية مشتركة', en: 'From 18% to 61%: when transfer became a shared responsibility', fr: 'De 18 % à 61 % : quand le transfert devient une responsabilité partagée' },
        intro: { ar: 'دراسة حالة تربط عقداً سلوكياً بسيطاً بدور المدير والتذكير المتدرج ولوحة متابعة بلا تعقيد.', en: 'A case study links a simple behavioral contract with manager support, spaced reminders, and a lightweight dashboard.', fr: 'Une étude relie contrat comportemental, soutien du manager, rappels espacés et tableau de suivi léger.' },
        contentType: 'article',
      },
      {
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'إدارة الموقف', en: 'Situation management', fr: 'Gestion de situation' },
        title: { ar: 'حين تعطلت المنصة ونجحت الخطة البديلة', en: 'When the platform failed and the backup plan worked', fr: 'Quand la plateforme est tombée en panne et que le plan B a réussi' },
        intro: { ar: 'تفاصيل قرار المدرب في أول عشر دقائق من عطل تقني، وكيف حافظ على الهدف باستخدام أدوات بسيطة.', en: 'The trainer’s first ten minutes during a technical failure, and how simple tools preserved the learning goal.', fr: 'Les dix premières minutes d’une panne technique et la manière dont des outils simples ont préservé l’objectif.' },
        contentType: 'article',
      },
    ],
  },
  {
    slug: 'bookshelf',
    layout: 'shelf',
    accent: '#8fc5ff',
    cards: [
      {
        kind: 'feature',
        image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1400&q=86',
        eyebrow: { ar: 'دليل قراءة', en: 'Reading guide', fr: 'Guide de lecture' },
        title: { ar: 'خمسة كتب تبني عقلية المصمم التعليمي', en: 'Five books that build an instructional designer’s mindset', fr: 'Cinq livres pour construire l’esprit du designer pédagogique' },
        intro: { ar: 'اختيار تحريري لا يكتفي بالتلخيص؛ بل يربط كل كتاب بسؤال تصميم وتجربة ميدانية قابلة للاختبار.', en: 'An editorial selection that goes beyond summary, linking each book to a design question and a field experiment.', fr: 'Une sélection éditoriale qui relie chaque livre à une question de conception et à une expérimentation.' },
        contentType: 'article',
      },
      {
        image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'كتاب إلى ممارسة', en: 'Book to practice', fr: 'Du livre à la pratique' },
        title: { ar: 'قراءة تطبيقية في «اجعلها تلتصق»', en: 'An applied reading of Make It Stick', fr: 'Lecture appliquée de « Make It Stick »' },
        intro: { ar: 'كيف تتحول الاسترجاعات المتباعدة والمزج بين المهارات إلى قرارات بسيطة داخل برامج التدريب القصيرة؟', en: 'How retrieval, spacing, and interleaving become simple decisions inside short training programs.', fr: 'Comment le rappel, l’espacement et l’entrelacement deviennent des décisions simples dans les formations courtes.' },
        contentType: 'article',
      },
      {
        image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'فيديو وكتاب', en: 'Video & ideas', fr: 'Vidéo et idées' },
        title: { ar: 'لغز التحفيز: ما الذي تقوله العلوم للمدرب؟', en: 'The puzzle of motivation: what science tells trainers', fr: 'L’énigme de la motivation : ce que la science dit aux formateurs' },
        intro: { ar: 'دان بينك يراجع حدود المكافآت الخارجية ويقترح الاستقلالية والإتقان والغاية كعدسات لتصميم التعلم.', en: 'Dan Pink reviews the limits of external rewards and proposes autonomy, mastery, and purpose as design lenses.', fr: 'Dan Pink examine les limites des récompenses externes et propose autonomie, maîtrise et finalité.' },
        contentType: 'video',
        video: {
          url: 'https://www.youtube.com/watch?v=rrkrvAUbU9Y',
          duration: { ar: '18:36 دقيقة', en: '18:36 min', fr: '18:36 min' },
          speaker: { ar: 'دان بينك', en: 'Dan Pink', fr: 'Dan Pink' },
          provider: 'TED · YouTube',
        },
      },
    ],
  },
  {
    slug: 'debate',
    layout: 'debate',
    accent: '#ff8ea3',
    cards: [
      {
        kind: 'feature',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=86',
        eyebrow: { ar: 'الرأي والمناظرة', en: 'Opinion & debate', fr: 'Opinion et débat' },
        title: { ar: 'هل يحتاج المدرب إلى شهادة أم إلى سجل أثر؟', en: 'Does a trainer need a certificate or a record of impact?', fr: 'Le formateur a-t-il besoin d’un certificat ou d’un dossier d’impact ?' },
        intro: { ar: 'مقارنة متوازنة بين قيمة الاعتماد المهني وقيمة الأدلة المتراكمة من الأداء والنتائج والتحسين المستمر.', en: 'A balanced comparison of professional credentials and accumulated evidence from performance, results, and improvement.', fr: 'Une comparaison équilibrée entre certification professionnelle et preuves issues de la performance et des résultats.' },
        contentType: 'article',
      },
      {
        image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'فيديو للنقاش', en: 'Debate video', fr: 'Vidéo-débat' },
        title: { ar: 'كيف تتحدث حتى يرغب الآخرون في الاستماع؟', en: 'How to speak so that people want to listen', fr: 'Comment parler pour donner envie d’écouter' },
        intro: { ar: 'جوليان تريجر يقدّم مبادئ للصوت والحضور والصدق يمكن اختبارها مباشرة في أداء المدرب.', en: 'Julian Treasure presents principles of voice, presence, and integrity that trainers can test immediately.', fr: 'Julian Treasure présente des principes de voix, de présence et d’intégrité que le formateur peut tester.' },
        contentType: 'video',
        video: {
          url: 'https://www.youtube.com/watch?v=eIho2S0ZahI',
          duration: { ar: '9:58 دقائق', en: '9:58 min', fr: '9:58 min' },
          speaker: { ar: 'جوليان تريجر', en: 'Julian Treasure', fr: 'Julian Treasure' },
          provider: 'TED · YouTube',
        },
      },
      {
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'وجهتا نظر', en: 'Two viewpoints', fr: 'Deux points de vue' },
        title: { ar: 'حياد المدرب: مهنية ضرورية أم وهم مريح؟', en: 'Trainer neutrality: professional necessity or comforting myth?', fr: 'Neutralité du formateur : nécessité professionnelle ou mythe rassurant ?' },
        intro: { ar: 'متى يحمي الحياد مساحة التعلم، ومتى يصبح إخفاء الافتراضات أكثر تأثيراً من إعلانها بشفافية؟', en: 'When does neutrality protect learning, and when do hidden assumptions become more influential than transparent positioning?', fr: 'Quand la neutralité protège-t-elle l’apprentissage et quand les présupposés cachés deviennent-ils plus influents ?' },
        contentType: 'article',
      },
      {
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'مناظرة مهنية', en: 'Professional debate', fr: 'Débat professionnel' },
        title: { ar: 'الذكاء الاصطناعي: مساعد للمدرب أم بديل عنه؟', en: 'AI: trainer’s assistant or replacement?', fr: 'IA : assistante du formateur ou remplaçante ?' },
        intro: { ar: 'تفكيك السؤال بعيداً عن التهويل: ما الذي يمكن أتمتته، وما الذي يحتاج حكماً وسياقاً ومسؤولية بشرية؟', en: 'A sober examination of what can be automated and what still requires judgment, context, and human accountability.', fr: 'Une analyse sobre de ce qui peut être automatisé et de ce qui exige jugement, contexte et responsabilité humaine.' },
        contentType: 'article',
      },
      {
        image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'فيديو للنقاش', en: 'Debate video', fr: 'Vidéo-débat' },
        title: { ar: 'قوة الهادئين داخل قاعة التدريب', en: 'The power of introverts in the training room', fr: 'La force des introvertis dans la salle de formation' },
        intro: { ar: 'سوزان كين تدعو إلى إعادة التفكير في البيئات التي تكافئ الصوت الأعلى وتهمّش وقت التأمل والعمل الفردي.', en: 'Susan Cain invites us to rethink environments that reward the loudest voice and overlook reflection and individual work.', fr: 'Susan Cain invite à repenser les environnements qui récompensent la voix la plus forte et négligent la réflexion.' },
        contentType: 'video',
        video: {
          url: 'https://www.youtube.com/watch?v=c0KYU2j0TM4',
          duration: { ar: '19:04 دقيقة', en: '19:04 min', fr: '19:04 min' },
          speaker: { ar: 'سوزان كين', en: 'Susan Cain', fr: 'Susan Cain' },
          provider: 'TED · YouTube',
        },
      },
    ],
  },
];

export const INNOVATION_SLIDES: EditorialSlide[] = [
  {
    slug: 'edtech-ai',
    layout: 'circuit',
    accent: '#61ecff',
    cards: [
      {
        kind: 'feature',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=86',
        eyebrow: { ar: 'ذكاء اصطناعي مسؤول', en: 'Responsible AI', fr: 'IA responsable' },
        title: { ar: 'من مساعد ذكي إلى شريك تصميم: سير عمل يحافظ على الحكم البشري', en: 'From AI assistant to design partner: a workflow that keeps human judgment', fr: 'De l’assistant IA au partenaire de conception : préserver le jugement humain' },
        intro: { ar: 'خمس محطات تفصل بين التوليد السريع والقرار التربوي الموثوق: تحديد المهمة، بناء السياق، التحقق، التجريب، ثم الاعتماد البشري.', en: 'Five checkpoints separate fast generation from a trustworthy learning decision: define, contextualize, verify, test, and approve.', fr: 'Cinq étapes séparent la génération rapide d’une décision pédagogique fiable : cadrer, contextualiser, vérifier, tester et valider.' },
        contentType: 'article',
      },
      {
        image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'فيديو تفسيري', en: 'Explainer video', fr: 'Vidéo explicative' },
        title: { ar: 'داخل الصندوق الأسود: شرح بصري يبسّط الشبكات العصبية', en: 'Inside the black box: a visual explanation of neural networks', fr: 'Dans la boîte noire : comprendre visuellement les réseaux neuronaux' },
        intro: { ar: 'مشاهدة موجهة تحول المفاهيم الرياضية المعقدة إلى أسئلة يستطيع المدرب استخدامها لفهم حدود النماذج قبل توظيفها.', en: 'Guided viewing turns complex mathematics into questions trainers can use to understand model limits before adoption.', fr: 'Un visionnage guidé transforme des notions mathématiques complexes en questions utiles avant toute adoption.' },
        contentType: 'video',
        video: {
          url: 'https://www.youtube.com/watch?v=aircAruvnKk',
          duration: { ar: '19:13 دقيقة', en: '19:13 min', fr: '19:13 min' },
          speaker: { ar: 'غرانت ساندرسون', en: 'Grant Sanderson', fr: 'Grant Sanderson' },
          provider: 'TED · YouTube',
        },
      },
      {
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'مختبر سريع', en: 'Rapid lab', fr: 'Laboratoire express' },
        title: { ar: 'بروتوتايب بلا كود في 90 دقيقة', en: 'A no-code prototype in 90 minutes', fr: 'Un prototype no-code en 90 minutes' },
        intro: { ar: 'من فكرة على ورقة إلى تجربة تعلم قابلة للنقر تختبر الرحلة قبل استهلاك ميزانية التطوير.', en: 'From a paper idea to a clickable learning experience that tests the journey before development budget is spent.', fr: 'D’une idée sur papier à une expérience cliquable qui teste le parcours avant d’engager le budget.' },
        contentType: 'article',
      },
      {
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'تحليلات إنسانية', en: 'Human analytics', fr: 'Analytique humaine' },
        title: { ar: 'لوحة تعلم تتنبأ بالتعثر دون مراقبة مفرطة', en: 'A learning dashboard that spots risk without over-surveillance', fr: 'Un tableau de bord qui détecte le risque sans sur-surveillance' },
        intro: { ar: 'ثلاث إشارات كافية لتقديم الدعم في الوقت المناسب، مع حدود واضحة لما لا ينبغي جمعه أو تفسيره.', en: 'Three signals can trigger timely support while keeping clear boundaries around what should never be collected or inferred.', fr: 'Trois signaux suffisent pour soutenir à temps, avec des limites claires sur ce qu’il ne faut jamais collecter ni déduire.' },
        contentType: 'article',
      },
      {
        image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'فيديو مختبر', en: 'Lab video', fr: 'Vidéo laboratoire' },
        title: { ar: 'هل يصنع الواقع الممتد تجربة أم مجرد انبهار؟', en: 'Does extended reality create experience or merely spectacle?', fr: 'La réalité étendue crée-t-elle une expérience ou seulement un effet spectaculaire ?' },
        intro: { ar: 'اختبار عملي يفرّق بين حضور بصري باهظ ومحاكاة تمنح المتعلم قراراً يصعب تدريبه بأمان في الواقع.', en: 'A practical test separates expensive visual presence from simulation that enables decisions too risky to rehearse in reality.', fr: 'Un test distingue la présence visuelle coûteuse d’une simulation utile pour des décisions difficiles à répéter en réel.' },
        contentType: 'video',
        video: {
          url: 'https://www.youtube.com/watch?v=YJg02ivYzSs',
          duration: { ar: '11:42 دقيقة', en: '11:42 min', fr: '11:42 min' },
          speaker: { ar: 'مختبر الوسائط الغامرة', en: 'Immersive Media Lab', fr: 'Laboratoire des médias immersifs' },
          provider: 'TED · YouTube',
        },
      },
    ],
  },
  {
    slug: 'training-business',
    layout: 'venture',
    accent: '#72f2b4',
    cards: [
      {
        kind: 'feature',
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=86',
        eyebrow: { ar: 'هندسة العرض', en: 'Offer architecture', fr: 'Architecture de l’offre' },
        title: { ar: 'من دورة منفردة إلى منتج تعلم قابل للتوسع', en: 'From one-off course to scalable learning product', fr: 'D’une formation isolée à un produit d’apprentissage évolutif' },
        intro: { ar: 'خريطة تحول الخبرة إلى نتيجة واضحة، وحدات قابلة لإعادة الاستخدام، وخدمة متابعة تحمي الجودة أثناء النمو.', en: 'A map turns expertise into a clear outcome, reusable modules, and follow-up that protects quality while the offer grows.', fr: 'Une carte transforme l’expertise en résultat clair, modules réutilisables et suivi qui protège la qualité pendant la croissance.' },
        contentType: 'article',
      },
      {
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'فيديو أعمال', en: 'Business video', fr: 'Vidéo business' },
        title: { ar: 'لماذا تبدأ القيمة قبل السعر؟', en: 'Why value comes before price', fr: 'Pourquoi la valeur précède le prix' },
        intro: { ar: 'إعادة قراءة الدائرة الذهبية كأداة لصياغة وعد تدريبي يربط الغاية بالنتيجة قبل الحديث عن الساعات والمحتوى.', en: 'A business reading of the Golden Circle helps frame a learning promise around purpose and outcome before hours and content.', fr: 'Une lecture business du Cercle d’or formule une promesse autour de la finalité et du résultat avant les heures et le contenu.' },
        contentType: 'video',
        video: {
          url: 'https://www.youtube.com/watch?v=qp0HIF3SfI4',
          duration: { ar: '18:04 دقيقة', en: '18:04 min', fr: '18:04 min' },
          speaker: { ar: 'سيمون سينك', en: 'Simon Sinek', fr: 'Simon Sinek' },
          provider: 'TED · YouTube',
        },
      },
      {
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'أرقام ذكية', en: 'Smart numbers', fr: 'Chiffres utiles' },
        title: { ar: 'اقتصاد الدفعة الواحدة: الربح الذي لا يلتهم الجودة', en: 'Cohort economics: profit without consuming quality', fr: 'Économie d’une cohorte : rentabilité sans sacrifier la qualité' },
        intro: { ar: 'نموذج بسيط يحسب تكلفة الاكتساب والتحضير والدعم ونقطة التعادل، ثم يربط كل رقم بقرار تعليمي.', en: 'A simple model combines acquisition, preparation, support, and break-even, linking every number to a learning decision.', fr: 'Un modèle simple réunit acquisition, préparation, soutien et seuil de rentabilité, puis relie chaque chiffre à une décision pédagogique.' },
        contentType: 'article',
      },
      {
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'عقد أثر', en: 'Impact contract', fr: 'Contrat d’impact' },
        title: { ar: 'عرض تجاري يحمي الجودة قبل توقيع العقد', en: 'A proposal that protects quality before signature', fr: 'Une proposition commerciale qui protège la qualité avant signature' },
        intro: { ar: 'بنود قصيرة تحدد مسؤولية العميل والمدرب، شروط القياس، وحدود التخصيص حتى لا يتحول الوعد إلى عبء غامض.', en: 'Short clauses define client and trainer responsibilities, measurement conditions, and customization limits before the promise becomes vague burden.', fr: 'Des clauses courtes précisent responsabilités, mesure et limites de personnalisation avant que la promesse ne devienne une charge floue.' },
        contentType: 'article',
      },
    ],
  },
  {
    slug: 'training-clinic',
    layout: 'clinic',
    accent: '#a6a8ff',
    cards: [
      {
        kind: 'feature',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=86',
        eyebrow: { ar: 'تشخيص تصميمي', en: 'Design diagnosis', fr: 'Diagnostic de conception' },
        title: { ar: 'عيادة برنامج مزدحم: ماذا نحذف أولاً؟', en: 'Clinic for an overloaded program: what should go first?', fr: 'Clinique d’un programme surchargé : que supprimer en premier ?' },
        intro: { ar: 'جلسة مراجعة تكشف المحتوى الذي لا يخدم قراراً أو أداءً، وتعيد توزيع الوقت حول الممارسة والتغذية الراجعة.', en: 'A review exposes content that serves no decision or performance and reallocates time around practice and feedback.', fr: 'Une revue révèle le contenu sans lien avec décision ou performance et réalloue le temps à la pratique et au feedback.' },
        contentType: 'article',
      },
      {
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'استشارة سريعة', en: 'Rapid consultation', fr: 'Consultation express' },
        title: { ar: 'الحضور مكتمل والتفاعل منخفض: أين الخلل؟', en: 'Attendance is full but engagement is low: where is the fault?', fr: 'Présence complète, engagement faible : où se situe le problème ?' },
        intro: { ar: 'شجرة تشخيص تميّز بين صمت مفيد، تعليمات غامضة، مخاطرة اجتماعية، ومهمة لا تستحق المشاركة.', en: 'A diagnostic tree separates useful silence, unclear instructions, social risk, and tasks that do not merit participation.', fr: 'Un arbre distingue silence utile, consignes floues, risque social et tâche qui ne mérite pas l’engagement.' },
        contentType: 'article',
      },
      {
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'فيديو عيادة', en: 'Clinic video', fr: 'Vidéo clinique' },
        title: { ar: 'خريطة إنقاذ التعلم الهجين في عشر دقائق', en: 'A ten-minute rescue map for hybrid learning', fr: 'Une carte de secours en dix minutes pour l’apprentissage hybride' },
        intro: { ar: 'بروتوكول يعيد وصل الحضور في القاعة وعن بعد عندما تتعطل الشاشة أو يختفي الصوت أو ينقسم الانتباه.', en: 'A protocol reconnects room and remote participants when screens fail, sound disappears, or attention splits.', fr: 'Un protocole reconnecte salle et distance lorsque l’écran tombe, le son disparaît ou l’attention se divise.' },
        contentType: 'video',
        video: {
          url: 'https://www.youtube.com/watch?v=HAnw168huqA',
          duration: { ar: '12:08 دقيقة', en: '12:08 min', fr: '12:08 min' },
          speaker: { ar: 'فريق التعلم الهجين', en: 'Hybrid Learning Team', fr: 'Équipe apprentissage hybride' },
          provider: 'TED · YouTube',
        },
      },
    ],
  },
  {
    slug: 'trainee-voice',
    layout: 'voice',
    accent: '#ff9bd2',
    cards: [
      {
        kind: 'feature',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=86',
        eyebrow: { ar: 'صوت حي', en: 'Living voice', fr: 'Voix vivante' },
        title: { ar: 'يوميات التجربة تكشف نقاط الاحتكاك التي لا يراها الاستبيان', en: 'Experience diaries reveal friction surveys miss', fr: 'Les journaux d’expérience révèlent les frictions invisibles aux questionnaires' },
        intro: { ar: 'ملاحظات قصيرة عبر أسبوع التعلم ترصد لحظة الحيرة والانتظار والنجاح بدل الاعتماد على ذاكرة نهاية البرنامج.', en: 'Short notes across the learning week capture confusion, waiting, and success instead of relying on end-of-program memory.', fr: 'De brèves notes pendant la semaine saisissent hésitation, attente et réussite au lieu de dépendre du souvenir final.' },
        contentType: 'article',
      },
      {
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'إنصاف المشاركة', en: 'Participation equity', fr: 'Équité de participation' },
        title: { ar: 'كيف نسمع الأقل مشاركة دون إجبارهم على الكلام؟', en: 'How to hear less-visible learners without forcing speech', fr: 'Comment entendre les moins visibles sans imposer la prise de parole' },
        intro: { ar: 'قنوات مجهولة وكتابة فردية ومجموعات صغيرة تجعل الصمت خياراً للتفكير لا دليلاً على الغياب.', en: 'Anonymous channels, individual writing, and small groups make silence a thinking choice rather than proof of absence.', fr: 'Canaux anonymes, écriture individuelle et petits groupes font du silence un choix de réflexion plutôt qu’une absence.' },
        contentType: 'article',
      },
      {
        image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'فيديو تجربة', en: 'Experience video', fr: 'Vidéo expérience' },
        title: { ar: 'التصميم الشامل يبدأ من الحواف', en: 'Inclusive design begins at the edges', fr: 'La conception inclusive commence par les marges' },
        intro: { ar: 'قصة تطبيقية توضح كيف تكشف احتياجات الوصول حلولاً تجعل التجربة أبسط وأفضل للجميع.', en: 'An applied story shows how accessibility needs reveal solutions that make the experience simpler and better for everyone.', fr: 'Une histoire appliquée montre comment l’accessibilité révèle des solutions plus simples et meilleures pour tous.' },
        contentType: 'video',
        video: {
          url: 'https://www.youtube.com/watch?v=20SHvU2PKsM',
          duration: { ar: '14:20 دقيقة', en: '14:20 min', fr: '14:20 min' },
          speaker: { ar: 'مختبر التصميم الشامل', en: 'Inclusive Design Lab', fr: 'Laboratoire de design inclusif' },
          provider: 'TED · YouTube',
        },
      },
      {
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'حلقة استجابة', en: 'Response loop', fr: 'Boucle de réponse' },
        title: { ar: 'من الشكوى إلى قرار تصميم يمكن تتبعه', en: 'From complaint to traceable design decision', fr: 'De la plainte à une décision de conception traçable' },
        intro: { ar: 'سجل شفاف يحول الملاحظة إلى فرضية واختبار وقرار، ثم يعود إلى المتعلم ليشرح ما تغير وما لم يتغير.', en: 'A transparent log turns feedback into hypothesis, test, and decision, then closes the loop by explaining what changed and what did not.', fr: 'Un registre transparent transforme le retour en hypothèse, test et décision, puis explique ce qui a changé ou non.' },
        contentType: 'article',
      },
    ],
  },
  {
    slug: 'ethics-rights',
    layout: 'charter',
    accent: '#ffd36f',
    cards: [
      {
        kind: 'feature',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=86',
        eyebrow: { ar: 'حوكمة عملية', en: 'Practical governance', fr: 'Gouvernance pratique' },
        title: { ar: 'ميثاق استخدام الذكاء الاصطناعي في التدريب على صفحة واحدة', en: 'A one-page charter for AI use in training', fr: 'Une charte d’une page pour l’usage de l’IA en formation' },
        intro: { ar: 'قواعد واضحة للإفصاح والبيانات والتحقق وحق الاعتراض تحول الأخلاق من شعار إلى سلوك يومي.', en: 'Clear rules for disclosure, data, verification, and objection turn ethics from slogan into daily behavior.', fr: 'Des règles claires sur transparence, données, vérification et opposition transforment l’éthique en comportement quotidien.' },
        contentType: 'article',
      },
      {
        image: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'ملكية فكرية', en: 'Intellectual property', fr: 'Propriété intellectuelle' },
        title: { ar: 'من يملك المادة؟ حقوق المدرب والمتعلم والعميل', en: 'Who owns the material? Rights of trainer, learner, and client', fr: 'À qui appartient le contenu ? Droits du formateur, de l’apprenant et du client' },
        intro: { ar: 'مصفوفة تفصل بين المعرفة السابقة، الإنتاج المتعاقد عليه، مساهمة المشاركين، وترخيص إعادة الاستخدام.', en: 'A matrix separates prior knowledge, commissioned work, participant contributions, and reuse licenses.', fr: 'Une matrice distingue savoir antérieur, production commandée, contribution des participants et licence de réutilisation.' },
        contentType: 'article',
      },
      {
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'فيديو حقوق', en: 'Rights video', fr: 'Vidéo droits' },
        title: { ar: 'الخصوصية ليست مربع موافقة', en: 'Privacy is not a consent checkbox', fr: 'La vie privée n’est pas une case de consentement' },
        intro: { ar: 'مادة للنقاش حول علاقة الحرية بالبيانات، ولماذا يبدأ التصميم المسؤول بتقليل الجمع لا بتطويل سياسة الخصوصية.', en: 'A discussion on freedom and data, showing why responsible design begins by collecting less rather than lengthening the policy.', fr: 'Une discussion sur liberté et données : concevoir responsable commence par collecter moins, non par allonger la politique.' },
        contentType: 'video',
        video: {
          url: 'https://www.youtube.com/watch?v=pcSlowAhvUk',
          duration: { ar: '20:42 دقيقة', en: '20:42 min', fr: '20:42 min' },
          speaker: { ar: 'غلين غرينوالد', en: 'Glenn Greenwald', fr: 'Glenn Greenwald' },
          provider: 'TED · YouTube',
        },
      },
    ],
  },
];

export const COMMUNITY_SLIDES: EditorialSlide[] = [
  {
    slug: 'podcast-highlights',
    layout: 'waves',
    accent: '#ffcf70',
    cards: [
      {
        kind: 'feature',
        image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1400&q=86',
        eyebrow: { ar: 'موجة مختارة', en: 'Selected wave', fr: 'Onde choisie' },
        title: { ar: 'فن الإصغاء الذي يصنع حواراً يستحق المشاركة', en: 'The listening craft that creates conversations worth sharing', fr: 'L’art d’écouter pour créer des conversations qui méritent d’être partagées' },
        intro: { ar: 'حلقة مصغرة تحول نصائح الحوار إلى بروتوكول إعداد وأسئلة متابعة وصمت مقصود داخل المقابلة.', en: 'A short episode turns conversation advice into an interview protocol with preparation, follow-up questions, and intentional silence.', fr: 'Un épisode court transforme les conseils en protocole d’entretien avec préparation, relances et silence intentionnel.' },
        contentType: 'video',
        video: {
          url: 'https://www.youtube.com/watch?v=R1vskiVDwl4',
          duration: { ar: '11:45 دقيقة', en: '11:45 min', fr: '11:45 min' },
          speaker: { ar: 'سيليست هيدلي', en: 'Celeste Headlee', fr: 'Celeste Headlee' },
          provider: 'TED · YouTube',
        },
      },
      {
        image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'بعد الاستماع', en: 'After listening', fr: 'Après écoute' },
        title: { ar: 'حلقة واحدة تتحول إلى مختبر مجتمع', en: 'One episode becomes a community lab', fr: 'Un épisode devient un laboratoire communautaire' },
        intro: { ar: 'تصميم لقاء قصير يربط دقيقة صوتية بسؤال خبرة، مجموعات ثلاثية، وتجربة يلتزم بها المشاركون لأسبوع.', en: 'A short gathering links one audio minute to an experience question, triads, and a one-week participant experiment.', fr: 'Une rencontre courte relie une minute audio, une question d’expérience, des triades et une expérience d’une semaine.' },
        contentType: 'article',
      },
      {
        image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'فيديو وحوار', en: 'Video & dialogue', fr: 'Vidéo et dialogue' },
        title: { ar: 'الشجاعة في القصة: كيف نشارك دون استعراض؟', en: 'Courage in story: how to share without performing', fr: 'Le courage du récit : partager sans se mettre en scène' },
        intro: { ar: 'مدخل إلى بناء الأمان النفسي وحدود الإفصاح حين تتحول القصة الشخصية إلى مادة تعلم جماعية.', en: 'An entry point to psychological safety and disclosure boundaries when a personal story becomes shared learning material.', fr: 'Une entrée vers la sécurité psychologique et les limites de dévoilement lorsque le récit personnel devient apprentissage collectif.' },
        contentType: 'video',
        video: {
          url: 'https://www.youtube.com/watch?v=iCvmsMzlF7o',
          duration: { ar: '20:19 دقيقة', en: '20:19 min', fr: '20:19 min' },
          speaker: { ar: 'برينيه براون', en: 'Brené Brown', fr: 'Brené Brown' },
          provider: 'TED · YouTube',
        },
      },
      {
        image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'أثر صوتي', en: 'Audio impact', fr: 'Impact audio' },
        title: { ar: 'دفتر ما بعد الاستماع: من الإعجاب إلى أثر موثق', en: 'The post-listening notebook: from admiration to documented impact', fr: 'Le carnet après écoute : de l’admiration à l’impact documenté' },
        intro: { ar: 'صفحة واحدة تحفظ الفكرة والسؤال والشخص الذي ستناقشه معه والتجربة التي ستعود إليها بعد سبعة أيام.', en: 'One page captures the idea, question, conversation partner, and experiment to revisit seven days later.', fr: 'Une page conserve idée, question, partenaire de discussion et expérience à revoir sept jours plus tard.' },
        contentType: 'article',
      },
    ],
  },
  {
    slug: 'community-planner',
    layout: 'calendar',
    accent: '#8ce1d0',
    cards: [
      {
        kind: 'feature',
        image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1400&q=86',
        eyebrow: { ar: 'خريطة الموسم', en: 'Season map', fr: 'Carte de saison' },
        title: { ar: 'أجندة 90 يوماً تبني إيقاع المجتمع', en: 'A 90-day agenda that builds community rhythm', fr: 'Un agenda de 90 jours qui construit le rythme communautaire' },
        intro: { ar: 'تناوب ذكي بين لقاء معرفة، مختبر ممارسة، مساحة تعارف، ونافذة عرض يمنع المجتمع من التحول إلى رزنامة مزدحمة.', en: 'A rhythm of knowledge, practice, connection, and showcase keeps the community from becoming a crowded calendar.', fr: 'Un rythme entre savoir, pratique, lien et démonstration évite de transformer la communauté en calendrier surchargé.' },
        contentType: 'article',
      },
      {
        image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'تصميم لقاء', en: 'Event design', fr: 'Conception de rencontre' },
        title: { ar: 'فعالية صغيرة تصنع شبكة كبيرة', en: 'A small event can build a large network', fr: 'Un petit événement peut construire un grand réseau' },
        intro: { ar: 'ستون دقيقة منظمة حول ثلاثة تعارفات ذات معنى وسؤال ممارسة واحد أفضل من مؤتمر لا يترك علاقة قابلة للاستمرار.', en: 'Sixty minutes built around three meaningful connections and one practice question can outperform a conference with no durable relationship.', fr: 'Soixante minutes autour de trois liens significatifs et d’une question de pratique valent mieux qu’une conférence sans relation durable.' },
        contentType: 'article',
      },
      {
        image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'فيديو تخطيط', en: 'Planning video', fr: 'Vidéo planification' },
        title: { ar: 'الهجين بلا جمهور من الدرجة الثانية', en: 'Hybrid events without a second-class audience', fr: 'Des événements hybrides sans public de seconde zone' },
        intro: { ar: 'قواعد إنتاج تجعل المشارك عن بعد مرئياً في القرارات والأسئلة والشبكات، لا مجرد نافذة صامتة على الجدار.', en: 'Production rules make remote participants visible in decisions, questions, and networking rather than silent windows on a wall.', fr: 'Des règles rendent les participants à distance visibles dans décisions, questions et réseau, non comme fenêtres silencieuses.' },
        contentType: 'video',
        video: {
          url: 'https://www.youtube.com/watch?v=F4Zu5ZZAG7I',
          duration: { ar: '13:36 دقيقة', en: '13:36 min', fr: '13:36 min' },
          speaker: { ar: 'فريق تصميم الفعاليات', en: 'Event Design Team', fr: 'Équipe de conception événementielle' },
          provider: 'TED · YouTube',
        },
      },
    ],
  },
  {
    slug: 'rising-stars',
    layout: 'stars',
    accent: '#ff9c8a',
    cards: [
      {
        kind: 'feature',
        image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1400&q=86',
        eyebrow: { ar: 'مدربون صاعدون', en: 'Rising trainers', fr: 'Formateurs émergents' },
        title: { ar: 'ملف أثر يتحدث أقوى من سيرة طويلة', en: 'An impact portfolio speaks louder than a long résumé', fr: 'Un portfolio d’impact parle plus fort qu’un long CV' },
        intro: { ar: 'خمس قطع مختارة تعرض المشكلة وقرار التصميم ودليل الأداء والتعديل التالي، بدل قائمة دورات بلا سياق.', en: 'Five curated artifacts show the problem, design decision, performance evidence, and next revision instead of a context-free course list.', fr: 'Cinq pièces choisies montrent problème, décision, preuve de performance et prochaine amélioration au lieu d’une liste sans contexte.' },
        contentType: 'article',
      },
      {
        image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'تموضع مهني', en: 'Professional positioning', fr: 'Positionnement professionnel' },
        title: { ar: 'أول تخصص صغير يمكن للسوق تذكره', en: 'The first small specialty a market can remember', fr: 'La première petite spécialité dont le marché se souvient' },
        intro: { ar: 'تقاطع مشكلة محددة وجمهور واضح ودليل شخصي يصنع بداية أقوى من وعد يخاطب الجميع.', en: 'The intersection of a precise problem, clear audience, and personal evidence creates a stronger start than a promise for everyone.', fr: 'Le croisement d’un problème précis, d’un public clair et d’une preuve personnelle est plus fort qu’une promesse pour tous.' },
        contentType: 'article',
      },
      {
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'فيديو أداء', en: 'Performance video', fr: 'Vidéo performance' },
        title: { ar: 'خمس دقائق على المنصة: حضور يخدم الرسالة', en: 'Five minutes on stage: presence that serves the message', fr: 'Cinq minutes sur scène : une présence au service du message' },
        intro: { ar: 'تمرين مشاهدة وتسجيل يساعد المدرب الصاعد على موازنة الجسد والصوت والوقفة دون تقليد شخصية ليست شخصيته.', en: 'A viewing and recording exercise helps emerging trainers balance body, voice, and pause without copying another persona.', fr: 'Un exercice de visionnage et d’enregistrement équilibre corps, voix et pause sans copier une personnalité étrangère.' },
        contentType: 'video',
        video: {
          url: 'https://www.youtube.com/watch?v=Ks-_Mh1QhMc',
          duration: { ar: '21:02 دقيقة', en: '21:02 min', fr: '21:02 min' },
          speaker: { ar: 'إيمي كادي', en: 'Amy Cuddy', fr: 'Amy Cuddy' },
          provider: 'TED · YouTube',
        },
      },
      {
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'شبكة نمو', en: 'Growth network', fr: 'Réseau de croissance' },
        title: { ar: 'من المتابعة إلى الإرشاد المتبادل', en: 'From following to mutual mentoring', fr: 'Du suivi au mentorat réciproque' },
        intro: { ar: 'ثنائيات لمدة ستة أسابيع تتبادل الملاحظة والتجربة والفرص، مع عقد بسيط يحمي التوازن والسرية.', en: 'Six-week pairs exchange observation, experiments, and opportunities under a simple agreement protecting balance and confidentiality.', fr: 'Des binômes de six semaines échangent observation, expériences et opportunités avec un accord protégeant équilibre et confidentialité.' },
        contentType: 'article',
      },
    ],
  },
  {
    slug: 'infographic',
    layout: 'capsule',
    accent: '#9fc4ff',
    cards: [
      {
        kind: 'feature',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=86',
        eyebrow: { ar: 'الكبسولة', en: 'The capsule', fr: 'La capsule' },
        title: { ar: 'إنفوغرافيك رحلة الأثر من الدقيقة الأولى إلى اليوم الثلاثين', en: 'An impact journey infographic from minute one to day thirty', fr: 'Une infographie du parcours d’impact, de la première minute au trentième jour' },
        intro: { ar: 'خريطة بصرية تربط التوقع والممارسة والتغذية الراجعة ونقل السلوك في صورة واحدة قابلة للنقاش.', en: 'A visual map connects expectation, practice, feedback, and behavior transfer in one discussable picture.', fr: 'Une carte visuelle relie attente, pratique, feedback et transfert comportemental dans une image à discuter.' },
        contentType: 'article',
      },
      {
        image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'محو الأمية البيانية', en: 'Data literacy', fr: 'Littératie des données' },
        title: { ar: 'سبعة أرقام تحكي الحقيقة دون تضليل', en: 'Seven numbers that tell the truth without distortion', fr: 'Sept chiffres qui racontent sans tromper' },
        intro: { ar: 'قائمة تحقق تراجع المقام والمصدر والفترة والمقارنة وعدم اليقين قبل تحويل الرقم إلى عنوان كبير.', en: 'A checklist reviews denominator, source, period, comparison, and uncertainty before a number becomes a headline.', fr: 'Une checklist vérifie dénominateur, source, période, comparaison et incertitude avant de transformer un chiffre en titre.' },
        contentType: 'article',
      },
      {
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'فيديو بصري', en: 'Visual video', fr: 'Vidéo visuelle' },
        title: { ar: 'كيف تحكي البيانات قصة صادقة؟', en: 'How can data tell an honest story?', fr: 'Comment les données racontent-elles une histoire honnête ?' },
        intro: { ar: 'قراءة نقدية للعرض البصري الذي يجعل النمط واضحاً من دون إخفاء الاستثناءات أو تضخيم الفروق.', en: 'A critical reading of visualization that clarifies patterns without hiding exceptions or exaggerating differences.', fr: 'Une lecture critique de la visualisation qui clarifie les tendances sans cacher les exceptions ni exagérer les écarts.' },
        contentType: 'video',
        video: {
          url: 'https://www.youtube.com/watch?v=hVimVzgtD6w',
          duration: { ar: '18:35 دقيقة', en: '18:35 min', fr: '18:35 min' },
          speaker: { ar: 'هانس روسلينغ', en: 'Hans Rosling', fr: 'Hans Rosling' },
          provider: 'TED · YouTube',
        },
      },
    ],
  },
  {
    slug: 'behind-podium',
    layout: 'backstage',
    accent: '#d7a7ff',
    cards: [
      {
        kind: 'feature',
        image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1400&q=86',
        eyebrow: { ar: 'وراء المنصة', en: 'Behind the podium', fr: 'Dans les coulisses' },
        title: { ar: 'قبل البث بثلاثين دقيقة: قائمة هدوء للفريق', en: 'Thirty minutes before broadcast: a calm-team checklist', fr: 'Trente minutes avant le direct : la checklist d’une équipe sereine' },
        intro: { ar: 'تسلسل قصير للصوت والصورة والروابط والأدوار والخطة البديلة يمنع الارتجال المتوتر حين يبدأ العد التنازلي.', en: 'A short sequence for sound, image, links, roles, and fallback prevents anxious improvisation when the countdown begins.', fr: 'Une séquence courte pour son, image, liens, rôles et secours évite l’improvisation tendue au compte à rebours.' },
        contentType: 'article',
      },
      {
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'حرفة الإنتاج', en: 'Production craft', fr: 'Métier de production' },
        title: { ar: 'الهندسة الخفية للمشهد الذي يبدو بسيطاً', en: 'The hidden engineering behind a simple-looking scene', fr: 'L’ingénierie cachée derrière une scène qui paraît simple' },
        intro: { ar: 'الضوء والصوت والخلفية ومسار العين قرارات تعلم، وليست زينة منفصلة عن وضوح الرسالة.', en: 'Light, sound, background, and eye path are learning decisions, not decoration separate from message clarity.', fr: 'Lumière, son, fond et parcours du regard sont des décisions d’apprentissage, non une décoration séparée du message.' },
        contentType: 'article',
      },
      {
        image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'فيديو صناعة', en: 'Making-of video', fr: 'Vidéo making-of' },
        title: { ar: 'من نص جامد إلى قصة بصرية قابلة للتذكر', en: 'From rigid script to memorable visual story', fr: 'D’un texte rigide à une histoire visuelle mémorable' },
        intro: { ar: 'تفكيك المشهد إلى وعد وتوتر وتحول ودليل يجعل الوسائط في خدمة الفكرة لا بديلاً عنها.', en: 'Breaking a scene into promise, tension, turn, and proof keeps media in service of the idea rather than replacing it.', fr: 'Décomposer la scène en promesse, tension, bascule et preuve met le média au service de l’idée.' },
        contentType: 'video',
        video: {
          url: 'https://www.youtube.com/watch?v=Nj-hdQMa3uA',
          duration: { ar: '12:54 دقيقة', en: '12:54 min', fr: '12:54 min' },
          speaker: { ar: 'استوديو السرد البصري', en: 'Visual Story Studio', fr: 'Studio de narration visuelle' },
          provider: 'TED · YouTube',
        },
      },
      {
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'إدارة البث', en: 'Live recovery', fr: 'Reprise du direct' },
        title: { ar: 'خطة دقيقة واحدة عندما يفشل كل شيء', en: 'The one-minute plan when everything fails', fr: 'Le plan d’une minute quand tout échoue' },
        intro: { ar: 'عبارات وأدوار ومسار بديل يحافظ على ثقة الجمهور عندما ينقطع الضيف أو العرض أو الاتصال.', en: 'Phrases, roles, and a fallback path preserve audience trust when the guest, deck, or connection disappears.', fr: 'Phrases, rôles et voie de secours préservent la confiance lorsque invité, support ou connexion disparaît.' },
        contentType: 'article',
      },
      {
        image: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=1000&q=84',
        eyebrow: { ar: 'مسؤولية الوسيط', en: 'Media responsibility', fr: 'Responsabilité éditoriale' },
        title: { ar: 'أخلاق المونتاج: أين ينتهي الاختصار ويبدأ التحريف؟', en: 'Editing ethics: where brevity ends and distortion begins', fr: 'Éthique du montage : où finit la concision et commence la déformation ?' },
        intro: { ar: 'قواعد تحفظ سياق القول وموافقة الضيف والتمييز بين إعادة الترتيب وتغيير المعنى.', en: 'Rules preserve context, guest consent, and the distinction between rearranging material and changing its meaning.', fr: 'Des règles préservent contexte, consentement et distinction entre réorganisation et changement de sens.' },
        contentType: 'article',
      },
    ],
  },
];

export const EDITORIAL_SLIDES: EditorialSlide[] = [
  ...STRATEGIC_SLIDES,
  ...PRACTICE_SLIDES,
  ...INNOVATION_SLIDES,
  ...COMMUNITY_SLIDES,
];
