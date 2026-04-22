import { useEffect, useState, useCallback } from 'react';

const STORAGE_KEY = 'react-ts-learn:progress';

type Progress = Record<string, boolean>;

function readStorage(): Progress {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Progress) : {};
  } catch {
    return {};
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(() => readStorage());

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const toggle = useCallback((lessonId: string) => {
    setProgress((prev) => ({ ...prev, [lessonId]: !prev[lessonId] }));
  }, []);

  const markDone = useCallback((lessonId: string) => {
    setProgress((prev) => ({ ...prev, [lessonId]: true }));
  }, []);

  const isDone = useCallback(
    (lessonId: string) => Boolean(progress[lessonId]),
    [progress]
  );

  const reset = useCallback(() => setProgress({}), []);

  const doneCount = Object.values(progress).filter(Boolean).length;

  return { progress, toggle, markDone, isDone, reset, doneCount };
}
