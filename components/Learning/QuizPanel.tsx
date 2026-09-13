'use client';

import React, { useState } from 'react';
import { QuizConfig } from '@/types';
import { useQuizEngine } from '@/hooks/useQuizEngine';
import { useLanguage } from '@/context/LanguageContext';

interface QuizPanelProps {
  quiz: QuizConfig;
  onFinish?: (score: number) => void;
}

export const QuizPanel: React.FC<QuizPanelProps> = ({ quiz, onFinish }) => {
  const { language, t } = useLanguage();
  const [isExporting, setIsExporting] = useState<boolean>(false);

  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    selectedAnswers,
    timeRemaining,
    isSubmitted,
    score,
    percentage,
    isPassed,
    selectAnswer,
    nextQuestion,
    prevQuestion,
    goToQuestion,
    submitQuiz,
    resetQuiz,
  } = useQuizEngine(quiz, onFinish);

  // Time formatter MM:SS
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins}:${rem < 10 ? '0' : ''}${rem}`;
  };

  // Safe client-side PDF certificate generator
  const handleExportPDF = async () => {
    if (typeof window === 'undefined') return;

    try {
      setIsExporting(true);
      // Dynamic import ensures html2pdf runs purely in the browser
      // @ts-ignore
      const html2pdfModule: any = await import('html2pdf.js');
      const html2pdf = html2pdfModule.default;

      const element = document.getElementById('quiz-result-certificate');
      if (!element) {
        setIsExporting(false);
        return;
      }

      const options = {
        margin: [10, 10, 10, 10],
        filename: `TOT_Certificate_${quiz.id}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      };

      await html2pdf().set(options).from(element).save();
    } catch (err) {
      console.error('Failed to generate PDF document:', err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-border-color shadow-sm overflow-hidden p-6 md:p-10 my-8">
      
      {/* ================= Header & Countdown Clock ================= */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border-color">
        <div>
          <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-qz-primary bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
            {t('اختبار المعارف والتقييم الذاتي', 'Self-Assessment & Evaluation', 'Évaluation des Connaissances')}
          </span>
          <h2 className="text-xl md:text-2xl font-black text-text-dark mt-2">
            {quiz.title[language] || quiz.title.ar}
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-xl bg-slate-50 border border-border-color font-mono font-bold text-sm text-text-dark flex items-center gap-2">
            <span className="animate-pulse text-primary-blue">⏱</span>
            <span>{formatTime(timeRemaining)}</span>
          </div>
          <span className="text-xs font-bold text-text-light">
            {t('السؤال', 'Question', 'Question')} {currentQuestionIndex + 1} / {totalQuestions}
          </span>
        </div>
      </div>

      {/* ================= Question Indicator Tabs ================= */}
      <div className="flex gap-2 overflow-x-auto py-4 scrollbar-none">
        {quiz.questions.map((q, idx) => {
          const isAnswered = Boolean(selectedAnswers[q.id]);
          const isCurrent = idx === currentQuestionIndex;
          return (
            <button
              key={q.id}
              onClick={() => goToQuestion(idx)}
              className={`flex-shrink-0 w-9 h-9 rounded-xl font-bold text-xs transition-all ${
                isCurrent
                  ? 'bg-primary-blue text-white shadow-md scale-105'
                  : isAnswered
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                  : 'bg-slate-100 text-text-light hover:bg-slate-200'
              }`}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>
      
      {/* ================= Active Question View ================= */}
      {!isSubmitted ? (
        <div className="py-6">
          <div className="flex items-start justify-between gap-4 mb-6">
            <h3 className="text-base md:text-lg font-bold text-text-dark leading-relaxed">
              {currentQuestion.question[language] || currentQuestion.question.ar}
            </h3>
            <span className="flex-shrink-0 text-xs font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg">
              {currentQuestion.points} {t('نقاط', 'Pts', 'Pts')}
            </span>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((opt) => {
              const isSelected = selectedAnswers[currentQuestion.id] === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => selectAnswer(currentQuestion.id, opt.id)}
                  className={`w-full text-start p-4 rounded-2xl border text-sm font-semibold transition-all flex items-center justify-between ${
                    isSelected
                      ? 'border-primary-blue bg-blue-50/70 text-primary-blue shadow-sm'
                      : 'border-border-color hover:bg-slate-50 text-text-dark'
                  }`}
                >
                  <span>{opt.text[language] || opt.text.ar}</span>
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                      isSelected
                        ? 'border-primary-blue bg-primary-blue text-white'
                        : 'border-slate-300'
                    }`}
                  >
                    {isSelected && <span className="text-[10px]">✓</span>}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border-color">
            <button
              onClick={prevQuestion}
              disabled={currentQuestionIndex === 0}
              className="px-5 py-2.5 rounded-xl border border-border-color text-xs md:text-sm font-semibold disabled:opacity-30 hover:bg-slate-50 transition-colors"
            >
              {t('السابق', 'Previous', 'Précédent')}
            </button>

            {currentQuestionIndex < totalQuestions - 1 ? (
              <button
                onClick={nextQuestion}
                className="px-6 py-2.5 rounded-xl bg-primary-blue text-white text-xs md:text-sm font-bold shadow-md hover:bg-secondary-blue transition-colors"
              >
                {t('التالي', 'Next', 'Suivant')}
              </button>
            ) : (
              <button
                onClick={submitQuiz}
                className="px-8 py-2.5 rounded-xl bg-accent-yellow text-black text-xs md:text-sm font-extrabold shadow-md hover:bg-yellow-400 transition-colors"
              >
                {t('إنهاء وتسليم الاختبار', 'Submit Quiz', 'Terminer')}
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="py-6">
          {/* ================= Results & PDF Printable View ================= */}
          <div
            id="quiz-result-certificate"
            className="p-8 rounded-3xl bg-slate-50 border border-border-color text-center mb-8"
          >
            <div
              className={`w-20 h-20 mx-auto rounded-3xl flex items-center justify-center text-4xl mb-4 shadow-sm ${
                isPassed
                  ? 'bg-emerald-100 text-emerald-600'
                  : 'bg-rose-100 text-rose-600'
              }`}
            >
              {isPassed ? '🏆' : '📝'}
            </div>

            <h3 className="text-2xl font-black text-text-dark mb-2">
              {isPassed
                ? t('تهانينا! لقد اجتزت التقييم بنجاح', 'Congratulations! You Passed', 'Félicitations ! Test réussi')
                : t('لم توفق في اجتياز الاختبار هذه المرة', 'Score Below Passing Threshold', 'Test non validé')}
            </h3>

            <p className="text-sm text-text-light mb-6">
              {t('النتيجة النهائية المحققة:', 'Final Score Achieved:', 'Score Final :')}{' '}
              <strong className="text-text-dark font-black text-lg">{percentage}%</strong>{' '}
              ({score} {t('نقطة', 'Points', 'Points')})
            </p>

            {/* Answer Explanations */}
            <div className="max-w-2xl mx-auto space-y-3 text-start">
              <h4 className="font-extrabold text-xs text-text-dark uppercase tracking-wider mb-2">
                {t('مراجعة الإجابات والتغذية الراجعة', 'Answers & Feedback', 'Réponses & Justifications')}
              </h4>
              {quiz.questions.map((q, idx) => {
                const isCorrect = selectedAnswers[q.id] === q.correctAnswerId;
                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-xl border text-xs leading-relaxed ${
                      isCorrect
                        ? 'bg-emerald-50/70 border-emerald-200'
                        : 'bg-rose-50/70 border-rose-200'
                    }`}
                  >
                    <div className="font-bold text-text-dark mb-1">
                      {idx + 1}. {q.question[language] || q.question.ar}
                    </div>
                    <div className="text-text-light">
                      <strong className="text-text-dark">{t('التوضيح:', 'Note:', 'Explication :')}</strong>{' '}
                      {q.explanation[language] || q.explanation.ar}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={handleExportPDF}
              disabled={isExporting}
              className="px-6 py-3 rounded-xl bg-primary-blue text-white text-xs md:text-sm font-bold shadow-md hover:bg-secondary-blue transition-colors flex items-center gap-2 disabled:opacity-50"
            >
              <span>📄</span>
              <span>
                {isExporting
                  ? t('جاري إنشاء الوثيقة...', 'Generating PDF...', 'Génération...')
                  : t('تحميل تقرير النتيجة (PDF)', 'Download PDF Report', 'Télécharger l’attestation')}
              </span>
            </button>

            <button
              onClick={resetQuiz}
              className="px-6 py-3 rounded-xl border border-border-color text-xs md:text-sm font-bold hover:bg-slate-50 transition-colors"
            >
              {t('إعادة المحاولة', 'Retake Quiz', 'Recommencer')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};