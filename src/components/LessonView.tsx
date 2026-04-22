import { useMemo, useState } from 'react';
import type { Lesson } from '../types/lesson';
import { CodePlayground } from './CodePlayground';
import { renderMarkdown } from '../utils/markdown';

type Props = {
  lesson: Lesson;
  isDone: boolean;
  onToggleDone: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  prevTitle?: string;
  nextTitle?: string;
};

export function LessonView({
  lesson,
  isDone,
  onToggleDone,
  onPrev,
  onNext,
  prevTitle,
  nextTitle,
}: Props) {
  const [exerciseResetKey, setExerciseResetKey] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const theoryHtml = useMemo(() => renderMarkdown(lesson.theory), [lesson.theory]);

  return (
    <main className="lesson">
      <header className="lesson__header">
        <div className="lesson__meta">
          <span className="lesson__chip">{categoryLabel(lesson.category)}</span>
          <span className="lesson__chip lesson__chip--order">Bài {lesson.order}</span>
        </div>
        <h1 className="lesson__title">{lesson.title}</h1>
        <p className="lesson__summary">{lesson.summary}</p>
      </header>

      <section className="lesson__section">
        <h2 className="lesson__section-title">📖 Lý thuyết</h2>
        <div
          className="lesson__theory"
          dangerouslySetInnerHTML={{ __html: theoryHtml }}
        />
      </section>

      {lesson.example && (
        <section className="lesson__section">
          <h2 className="lesson__section-title">💡 Ví dụ</h2>
          <p className="lesson__hint">Sửa code bên trái để thấy kết quả cập nhật bên phải.</p>
          <CodePlayground playground={lesson.example} />
        </section>
      )}

      {lesson.exercise && (
        <section className="lesson__section lesson__section--exercise">
          <h2 className="lesson__section-title">🎯 {lesson.exercise.title}</h2>
          <p className="lesson__exercise-desc">{lesson.exercise.description}</p>
          {lesson.exercise.hint && (
            <div className="lesson__hint-box">
              <button
                className="lesson__hint-btn"
                type="button"
                onClick={() => setShowHint((v) => !v)}
              >
                {showHint ? 'Ẩn gợi ý' : '💡 Hiện gợi ý'}
              </button>
              {showHint && <p className="lesson__hint-text">{lesson.exercise.hint}</p>}
            </div>
          )}
          {lesson.exercise.starter && (
            <CodePlayground
              playground={lesson.exercise.starter}
              resetKey={exerciseResetKey}
            />
          )}
          <button
            className="lesson__reset-btn"
            type="button"
            onClick={() => setExerciseResetKey((k) => k + 1)}
          >
            ↺ Làm lại từ đầu
          </button>
        </section>
      )}

      <footer className="lesson__footer">
        <button
          className={`lesson__done-btn ${isDone ? 'is-done' : ''}`}
          type="button"
          onClick={onToggleDone}
        >
          {isDone ? '✅ Đã học xong' : '☐ Đánh dấu học xong'}
        </button>

        <div className="lesson__nav">
          <button
            className="lesson__nav-btn"
            type="button"
            onClick={onPrev}
            disabled={!onPrev}
          >
            ← {prevTitle ? `${prevTitle}` : 'Bài trước'}
          </button>
          <button
            className="lesson__nav-btn lesson__nav-btn--next"
            type="button"
            onClick={onNext}
            disabled={!onNext}
          >
            {nextTitle ? `${nextTitle}` : 'Bài tiếp'} →
          </button>
        </div>
      </footer>
    </main>
  );
}

function categoryLabel(cat: Lesson['category']): string {
  switch (cat) {
    case 'html':
      return '📄 HTML';
    case 'css':
      return '🎨 CSS';
    case 'typescript':
      return '🧩 TypeScript';
    case 'react':
      return '⚛️ React + TS';
  }
}
