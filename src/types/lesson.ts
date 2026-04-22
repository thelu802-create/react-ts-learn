export type LessonCategory = 'html' | 'css' | 'typescript' | 'react';

export type PlaygroundLanguage = 'html' | 'css' | 'typescript' | 'react';

export interface PlaygroundFile {
  filename: string;
  code: string;
}

export interface Playground {
  language: PlaygroundLanguage;
  files: PlaygroundFile[];
  activeFile?: string;
}

export interface Exercise {
  title: string;
  description: string;
  starter?: Playground;
  hint?: string;
}

export interface Lesson {
  id: string;
  category: LessonCategory;
  order: number;
  title: string;
  summary: string;
  theory: string;
  example?: Playground;
  exercise?: Exercise;
}

export interface CategoryMeta {
  id: LessonCategory;
  title: string;
  description: string;
  emoji: string;
}
