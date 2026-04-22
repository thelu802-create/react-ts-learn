import { useEffect, useState } from 'react';

function readHash(): string {
  if (typeof window === 'undefined') return '';
  return window.location.hash.replace(/^#\/?/, '');
}

export function useCurrentLesson() {
  const [lessonId, setLessonId] = useState<string>(() => readHash());

  useEffect(() => {
    const onHashChange = () => setLessonId(readHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (id: string) => {
    window.location.hash = `/${id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { lessonId, navigate };
}
