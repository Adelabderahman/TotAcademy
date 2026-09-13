'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { QuizConfig } from '@/types';

export interface QuizScoreBreakdown {
  earnedPoints: number;
  totalPoints: number;
  percentage: number;
  isPassed: boolean;
}

export function useQuizEngine(quiz: QuizConfig, onFinish?: (score: number) => void) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [timeRemaining, setTimeRemaining] = useState<number>(quiz.timeLimitSeconds);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const storageKey = `tot_quiz_${quiz.id}`;

  // 1. Restore cached state from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.selectedAnswers) setSelectedAnswers(parsed.selectedAnswers);
        if (parsed.isSubmitted) setIsSubmitted(true);
      }
    } catch (err) {
      console.warn('Could not retrieve cached quiz progress', err);
    }
  }, [storageKey]);

  // 2. Score computation helper
  const calculateScore = useCallback((): QuizScoreBreakdown => {
    let earnedPoints = 0;
    let totalPoints = 0;

    quiz.questions.forEach((q) => {
      totalPoints += q.points;
      if (selectedAnswers[q.id] === q.correctAnswerId) {
        earnedPoints += q.points;
      }
    });

    const percentage = totalPoints > 0 ? Math.round((earnedPoints / totalPoints) * 100) : 0;
    return {
      earnedPoints,
      totalPoints,
      percentage,
      isPassed: percentage >= quiz.passingScore,
    };
  }, [quiz, selectedAnswers]);

  // 3. Submit quiz handler
  const submitQuiz = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsSubmitted(true);

    const scoreData = calculateScore();
    try {
      localStorage.setItem(
        storageKey,
        JSON.stringify({
          selectedAnswers,
          isSubmitted: true,
          score: scoreData.earnedPoints,
          percentage: scoreData.percentage,
        })
      );
    } catch (e) {
      console.warn('Failed to store quiz submission in cache', e);
    }

    if (onFinish) {
      onFinish(scoreData.earnedPoints);
    }
  }, [storageKey, selectedAnswers, calculateScore, onFinish]);

  // 4. Timer loop
  useEffect(() => {
    if (isSubmitted) return;

    timerRef.current = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          submitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isSubmitted, submitQuiz]);

  // 5. User answer selection
  const selectAnswer = (questionId: string, optionId: string) => {
    if (isSubmitted) return;

    setSelectedAnswers((prev) => {
      const next = { ...prev, [questionId]: optionId };
      try {
        localStorage.setItem(
          storageKey,
          JSON.stringify({ selectedAnswers: next, isSubmitted: false })
        );
      } catch (err) {
        console.warn('Failed to update quiz cache', err);
      }
      return next;
    });
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const goToQuestion = (idx: number) => {
    if (idx >= 0 && idx < quiz.questions.length) {
      setCurrentQuestionIndex(idx);
    }
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setTimeRemaining(quiz.timeLimitSeconds);
    setCurrentQuestionIndex(0);
    try {
      localStorage.removeItem(storageKey);
    } catch (err) {
      console.warn('Failed to clear quiz cache', err);
    }
  };

  const scoreResults = calculateScore();

  return {
    currentQuestion: quiz.questions[currentQuestionIndex],
    currentQuestionIndex,
    totalQuestions: quiz.questions.length,
    selectedAnswers,
    timeRemaining,
    isSubmitted,
    score: scoreResults.earnedPoints,
    percentage: scoreResults.percentage,
    isPassed: scoreResults.isPassed,
    selectAnswer,
    nextQuestion,
    prevQuestion,
    goToQuestion,
    submitQuiz,
    resetQuiz,
  };
}