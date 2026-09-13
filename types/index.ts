export interface LocalizedContent {
  ar: string;
  en: string;
  fr?: string;
}

export interface SpecializationTrack {
  id: string;
  title: LocalizedContent;
  badge: LocalizedContent;
  description: LocalizedContent;
  frontIcon: string;
  curriculum: LocalizedContent[];
  durationWeeks: number;
  actionUrl: string;
}

export interface QuizOption {
  id: string;
  text: LocalizedContent;
}

export interface QuizQuestion {
  id: string;
  question: LocalizedContent;
  options: QuizOption[];
  correctAnswerId: string;
  explanation: LocalizedContent;
  points: number;
}

export interface QuizConfig {
  id: string;
  title: LocalizedContent;
  timeLimitSeconds: number;
  passingScore: number;
  questions: QuizQuestion[];
}