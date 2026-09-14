'use client';

import React, { useState } from 'react';
import { ArticleCardData, VideoInfo, ARTICLE_CONTENT, PRACTICE_UI, LocalizedString } from '@/lib/magazine-data';
import {
  RotateCw,
  RotateCcw,
  BookOpen,
  Play,
  Share2,
  ArrowUpRight,
  Sparkles,
  Check,
  Clock,
  ExternalLink,
  Quote,
} from 'lucide-react';

interface MagazineFlipCardProps {
  card: ArticleCardData;
  index: number;
  total: number;
  lang: 'ar' | 'en' | 'fr';
  isRtl: boolean;
  t: Record<string, string>;
  onOpenArticle: (card: ArticleCardData) => void;
  onOpenVideo: (video: { url: string; title: string; speaker: string; duration: string }) => void;
  onOpenShare: (card: ArticleCardData) => void;
  onCopyCitation: (title: string) => void;
}

export const MagazineFlipCard: React.FC<MagazineFlipCardProps> = ({
  card,
  index,
  total,
  lang,
  isRtl,
  t,
  onOpenArticle,
  onOpenVideo,
  onOpenShare,
  onCopyCitation,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const isFeature = card.kind === 'feature' || (index === 0 && total <= 3);
  const colClass = isFeature ? 'feature-col' : total >= 4 ? 'col-4' : 'col-6';
  const isVideo = card.contentType === 'video' && Boolean(card.video);

  const cardTitle = card.title[lang] || card.title.ar;
  const cardIntro = card.intro[lang] || card.intro.ar;
  const cardEyebrow = card.eyebrow[lang] || card.eyebrow.ar;

  // Language texts
  const uiTexts = {
    ar: {
      flip_to_back: 'التحليل الميداني',
      flip_to_front: 'الواجهة الرئيسية',
      flip_hint: 'انقر لاستعراض التحليل الميداني',
      key_insights: 'الرؤية والتحليل الميداني',
      pillar_1: 'التأصيل المعرفي',
      pillar_2: 'التطبيق الإجرائي',
      pillar_3: 'مؤشر الأثر',
      apa_badge: 'توثيق APA معتمد',
      view_full: 'قراءة المقال كاملاً',
      share: 'مشاركة',
      video_duration: 'مدة الفيديو',
      author_default: 'أ. بلال عويش',
      role_default: 'باحث في هندسة التدريب والمناهج',
      apa_copy_btn: 'نسخ APA',
    },
    en: {
      flip_to_back: 'Field Analysis',
      flip_to_front: 'Front Face',
      flip_hint: 'Click to inspect practical takeaways',
      key_insights: 'Practical Insights & Analysis',
      pillar_1: 'Framework',
      pillar_2: 'Execution',
      pillar_3: 'Impact Metric',
      apa_badge: 'APA Ready',
      view_full: 'Read Full Article',
      share: 'Share',
      video_duration: 'Video length',
      author_default: 'Prof. Bilal Aouiche',
      role_default: 'Training Engineering Researcher',
      apa_copy_btn: 'Copy APA',
    },
    fr: {
      flip_to_back: 'Analyse terrain',
      flip_to_front: 'Face avant',
      flip_hint: 'Cliquer pour voir l’analyse pratique',
      key_insights: 'Analyse et points clés',
      pillar_1: 'Cadre théorique',
      pillar_2: 'Application terrain',
      pillar_3: 'Indicateur d’impact',
      apa_badge: 'Citation APA prête',
      view_full: 'Lire l’article complet',
      share: 'Partager',
      video_duration: 'Durée vidéo',
      author_default: 'Pr. Bilal Aouiche',
      role_default: 'Chercheur en ingénierie de formation',
      apa_copy_btn: 'Copier APA',
    },
  }[lang] || {
    flip_to_back: 'التحليل الميداني',
    flip_to_front: 'الواجهة الرئيسية',
    flip_hint: 'انقر لاستعراض التحليل الميداني',
    key_insights: 'الرؤية والتحليل الميداني',
    pillar_1: 'التأصيل المعرفي',
    pillar_2: 'التطبيق الإجرائي',
    pillar_3: 'مؤشر الأثر',
    apa_badge: 'توثيق APA معتمد',
    view_full: 'قراءة المقال كاملاً',
    share: 'مشاركة',
    video_duration: 'مدة الفيديو',
    author_default: 'أ. بلال عويش',
    role_default: 'باحث في هندسة التدريب والمناهج',
    apa_copy_btn: 'نسخ APA',
  };

  // Structured Takeaways generator tailored to card content
  const takeaways = (() => {
    if (lang === 'en') {
      return {
        pillar1: `Analytical framing of «${cardTitle}» aligning field pedagogy with global instructional design standards.`,
        pillar2: `Actionable workshop playbook: executing modular micro-sessions and interactive simulations in live environments.`,
        pillar3: `Measurable impact metrics: assessing Kirkpatrick level 3 behavioral transfer and training ROI.`,
        author: isVideo ? (card.video?.speaker.en || card.video?.speaker.ar || 'Expert Keynote') : (card.story?.en?.author || uiTexts.author_default),
        role: isVideo ? (card.video?.duration.en || 'Master Class') : (card.story?.en?.role || uiTexts.role_default),
        quote: card.story?.en?.quote || 'Training excellence is built on precise behavioral goals rather than merely presenting slide content.',
      };
    }
    if (lang === 'fr') {
      return {
        pillar1: `Cadrage méthodologique de « ${cardTitle} » reliant l’ingénierie pédagogique aux exigences du terrain.`,
        pillar2: `Mise en œuvre concrète : déploiement d’ateliers immersifs et de micro-activités guidées à fort impact.`,
        pillar3: `Mesure d’impact : indicateurs de transfert des compétences selon le modèle Kirkpatrick et satisfaction apprenant.`,
        author: isVideo ? (card.video?.speaker.fr || card.video?.speaker.ar || 'Intervenant Expert') : (card.story?.fr?.author || uiTexts.author_default),
        role: isVideo ? (card.video?.duration.fr || 'Masterclass') : (card.story?.fr?.role || uiTexts.role_default),
        quote: card.story?.fr?.quote || 'La réussite pédagogique réside dans la capacité à transformer le savoir en réflexes opérationnels durables.',
      };
    }
    // Arabic
    return {
      pillar1: `التأصيل المنهجي والمعرفي لمحور «${cardTitle}» وصياغة كفايات المدرب المعاصر وفق معايير الجودة العالمية.`,
      pillar2: `التطبيق الإجرائي الميداني: تصميم مسارات تعلم نشطة وورش تدريب تفاعلية تضمن أقصى درجات الإشراك العملي.`,
      pillar3: `مؤشرات الأثر والقياس: تقييم انتقال أثر التدريب (Transfer of Learning) والعائد المعرفي والسلوكي داخل المؤسسة.`,
      author: isVideo ? (card.video?.speaker.ar || 'خبير ومحاضر دولي') : (card.story?.ar?.author || uiTexts.author_default),
      role: isVideo ? (card.video?.duration.ar || 'جلسة مرئية') : (card.story?.ar?.role || uiTexts.role_default),
      quote: card.story?.ar?.quote || 'التدريب الاستثنائي لا ينتهي بانتهاء البرنامج، بل يبدأ حين ينقل المتدرب ما تعلمه إلى واقع الممارسة اليومية.',
    };
  })();

  const handleToggleFlip = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsFlipped((prev) => !prev);
  };

  return (
    <article
      className={`mag-flip-container ${colClass} ${isFlipped ? 'is-flipped' : ''}`}
      id={`flip-card-${index}`}
    >
      <div className="mag-flip-inner">
        {/* ================= FRONT FACE ================= */}
        <div className="mag-flip-front">
          <div className="mag-card-img-wrap">
            <img
              src={card.image}
              alt={cardTitle}
              className="mag-card-img"
              loading="lazy"
            />
            <div className="mag-card-img-overlay" />

            {/* Content Type Tag */}
            <span className={`mag-type-tag ${isVideo ? 'video' : 'article'}`}>
              {isVideo ? (
                <>
                  <Play size={11} fill="currentColor" />
                  <span>{card.video?.duration[lang] || card.video?.duration.ar || 'فيديو'}</span>
                </>
              ) : (
                <>
                  <BookOpen size={11} />
                  <span>{ARTICLE_CONTENT[lang].readTime}</span>
                </>
              )}
            </span>

            {/* Corner Flip Trigger Badge */}
            <button
              type="button"
              className="mag-flip-badge-btn"
              onClick={handleToggleFlip}
              title={uiTexts.flip_hint}
              aria-label={uiTexts.flip_hint}
            >
              <RotateCw size={13} className="flip-icon-spin" />
              <span>{uiTexts.flip_to_back}</span>
            </button>
          </div>

          <div className="mag-card-body">
            <div className="mag-card-eyebrow">
              {cardEyebrow}
            </div>
            <h3 className="mag-card-title">
              {cardTitle}
            </h3>
            <p className="mag-card-intro">
              {cardIntro}
            </p>

            <div className="mag-card-actions">
              {isVideo ? (
                <button
                  type="button"
                  className="btn-watch-video"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenVideo({
                      url: card.video!.url,
                      title: cardTitle,
                      speaker: card.video!.speaker[lang] || card.video!.speaker.ar,
                      duration: card.video!.duration[lang] || card.video!.duration.ar,
                    });
                  }}
                >
                  <Play size={14} fill="currentColor" />
                  <span>{PRACTICE_UI[lang].watch}</span>
                </button>
              ) : (
                <button
                  type="button"
                  className="btn-read-story"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenArticle(card);
                  }}
                >
                  <BookOpen size={14} />
                  <span>{t.article_read}</span>
                </button>
              )}

              {/* Flip Button in Action Bar */}
              <button
                type="button"
                className="btn-flip-trigger"
                onClick={handleToggleFlip}
                title={uiTexts.flip_hint}
              >
                <RotateCw size={13} />
                <span>{uiTexts.flip_to_back}</span>
              </button>

              <button
                type="button"
                className="btn-card-details"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenArticle(card);
                }}
              >
                <span>{t.article_details}</span>
                <ArrowUpRight size={13} />
              </button>
            </div>
          </div>
        </div>

        {/* ================= BACK FACE ================= */}
        <div className="mag-flip-back">
          <div className="mag-back-header">
            <div className="mag-back-badge">
              <Sparkles size={13} className="text-amber-400" />
              <span>{cardEyebrow}</span>
            </div>

            <button
              type="button"
              className="btn-flip-back"
              onClick={handleToggleFlip}
              title={uiTexts.flip_to_front}
            >
              <span>{uiTexts.flip_to_front}</span>
              <RotateCcw size={13} />
            </button>
          </div>

          <div className="mag-back-content">
            <h4 className="mag-back-title">
              {cardTitle}
            </h4>

            {/* 3 Pillar Practical Takeaways */}
            <div className="mag-takeaways-box">
              <div className="mag-takeaway-item">
                <span className="mag-takeaway-dot pillar-1">1</span>
                <div>
                  <strong className="mag-takeaway-tag">{uiTexts.pillar_1}:</strong>{' '}
                  <span className="mag-takeaway-text">{takeaways.pillar1}</span>
                </div>
              </div>

              <div className="mag-takeaway-item">
                <span className="mag-takeaway-dot pillar-2">2</span>
                <div>
                  <strong className="mag-takeaway-tag">{uiTexts.pillar_2}:</strong>{' '}
                  <span className="mag-takeaway-text">{takeaways.pillar2}</span>
                </div>
              </div>

              <div className="mag-takeaway-item">
                <span className="mag-takeaway-dot pillar-3">3</span>
                <div>
                  <strong className="mag-takeaway-tag">{uiTexts.pillar_3}:</strong>{' '}
                  <span className="mag-takeaway-text">{takeaways.pillar3}</span>
                </div>
              </div>
            </div>

            {/* Author / Speaker Attribution & Quote preview */}
            <div className="mag-back-meta-row">
              <div className="mag-back-author">
                <div className="mag-back-avatar-wrap">
                  <Sparkles size={16} className="text-amber-400" />
                </div>
                <div>
                  <div className="mag-back-author-name">{takeaways.author}</div>
                  <div className="mag-back-author-role">{takeaways.role}</div>
                </div>
              </div>

              <button
                type="button"
                className="mag-apa-badge-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onCopyCitation(cardTitle);
                }}
                title={uiTexts.apa_badge}
              >
                <Check size={12} className="text-emerald-400" />
                <span>{uiTexts.apa_badge}</span>
              </button>
            </div>
          </div>

          {/* Back Action Bar */}
          <div className="mag-back-actions">
            {isVideo ? (
              <button
                type="button"
                className="btn-watch-video"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenVideo({
                    url: card.video!.url,
                    title: cardTitle,
                    speaker: card.video!.speaker[lang] || card.video!.speaker.ar,
                    duration: card.video!.duration[lang] || card.video!.duration.ar,
                  });
                }}
              >
                <Play size={14} fill="currentColor" />
                <span>{PRACTICE_UI[lang].watch}</span>
              </button>
            ) : (
              <button
                type="button"
                className="btn-read-story"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenArticle(card);
                }}
              >
                <BookOpen size={14} />
                <span>{uiTexts.view_full}</span>
              </button>
            )}

            <button
              type="button"
              className="btn-card-details"
              onClick={(e) => {
                e.stopPropagation();
                onOpenShare(card);
              }}
              title={uiTexts.share}
            >
              <Share2 size={13} />
              <span>{uiTexts.share}</span>
            </button>

            <button
              type="button"
              className="btn-flip-back-icon"
              onClick={handleToggleFlip}
              title={uiTexts.flip_to_front}
            >
              <RotateCcw size={14} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
