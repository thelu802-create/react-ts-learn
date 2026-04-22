import { useMemo, useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { LessonView } from './components/LessonView';
import { Welcome } from './components/Welcome';
import { allLessons, getLessonById } from './data/lessons';
import { useProgress } from './hooks/useProgress';
import { useCurrentLesson } from './hooks/useCurrentLesson';
import './App.css';

export default function App() {
  const { lessonId, navigate } = useCurrentLesson();
  const { isDone, toggle, doneCount } = useProgress();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentLesson = useMemo(
    () => (lessonId ? getLessonById(lessonId) : undefined),
    [lessonId]
  );

  const handleNavigate = (id: string) => {
    setSidebarOpen(false);
    navigate(id);
  };

  const currentIndex = currentLesson
    ? allLessons.findIndex((l) => l.id === currentLesson.id)
    : -1;

  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : undefined;
  const nextLesson =
    currentIndex >= 0 && currentIndex < allLessons.length - 1
      ? allLessons[currentIndex + 1]
      : undefined;

  return (
    <div className={`app ${sidebarOpen ? 'app--sidebar-open' : ''}`}>
      <button
        className="app__menu-btn"
        type="button"
        onClick={() => setSidebarOpen((v) => !v)}
        aria-label="Menu"
        aria-expanded={sidebarOpen}
        aria-controls="lesson-sidebar"
      >
        ☰
      </button>

      <Sidebar
        currentLessonId={currentLesson?.id ?? ''}
        onSelect={handleNavigate}
        isDone={isDone}
        doneCount={doneCount}
        totalCount={allLessons.length}
      />

      <div className="app__content">
        {currentLesson ? (
          <LessonView
            key={currentLesson.id}
            lesson={currentLesson}
            isDone={isDone(currentLesson.id)}
            onToggleDone={() => toggle(currentLesson.id)}
            onPrev={prevLesson ? () => handleNavigate(prevLesson.id) : undefined}
            onNext={nextLesson ? () => handleNavigate(nextLesson.id) : undefined}
            prevTitle={prevLesson?.title}
            nextTitle={nextLesson?.title}
          />
        ) : (
          <Welcome onStart={handleNavigate} />
        )}
      </div>
    </div>
  );
}
