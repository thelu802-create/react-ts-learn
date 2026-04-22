import type { Lesson } from '../../types/lesson';
import { htmlLessons } from './html';
import { cssLessons } from './css';
import { tsLessons } from './typescript';
import { reactLessons } from './react';

export const allLessons: Lesson[] = [
  ...htmlLessons,
  ...cssLessons,
  ...tsLessons,
  ...reactLessons,
];

export function getLessonById(id: string): Lesson | undefined {
  return allLessons.find((l) => l.id === id);
}

export function getLessonsByCategory(category: Lesson['category']): Lesson[] {
  return allLessons
    .filter((l) => l.category === category)
    .sort((a, b) => a.order - b.order);
}
