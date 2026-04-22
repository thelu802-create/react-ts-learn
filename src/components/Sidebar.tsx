import { categories } from '../data/categories';
import { getLessonsByCategory } from '../data/lessons';

type Props = {
  currentLessonId: string;
  onSelect: (id: string) => void;
  isDone: (id: string) => boolean;
  doneCount: number;
  totalCount: number;
};

export function Sidebar({
  currentLessonId,
  onSelect,
  isDone,
  doneCount,
  totalCount,
}: Props) {
  const pct = totalCount ? Math.round((doneCount / totalCount) * 100) : 0;

  return (
    <aside id="lesson-sidebar" className="sidebar">
      <div className="sidebar__header">
        <h1 className="sidebar__title">🎓 Học React TS</h1>
        <p className="sidebar__subtitle">HTML → CSS → TS → React</p>
        <div className="sidebar__progress">
          <div className="sidebar__bar">
            <div className="sidebar__bar-fill" style={{ width: `${pct}%` }} />
          </div>
          <span className="sidebar__progress-text">
            {doneCount}/{totalCount} bài ({pct}%)
          </span>
        </div>
      </div>

      <nav className="sidebar__nav">
        {categories.map((cat) => {
          const lessons = getLessonsByCategory(cat.id);
          return (
            <div key={cat.id} className="sidebar__group">
              <div className="sidebar__group-title">
                <span className="sidebar__group-emoji">{cat.emoji}</span>
                <span>{cat.title}</span>
                <span className="sidebar__group-count">
                  {lessons.filter((l) => isDone(l.id)).length}/{lessons.length}
                </span>
              </div>
              <ul className="sidebar__list">
                {lessons.map((l) => (
                  <li key={l.id}>
                    <button
                      type="button"
                      className={`sidebar__item ${
                        l.id === currentLessonId ? 'is-current' : ''
                      } ${isDone(l.id) ? 'is-done' : ''}`}
                      onClick={() => onSelect(l.id)}
                      aria-current={l.id === currentLessonId ? 'page' : undefined}
                    >
                      <span className="sidebar__check">
                        {isDone(l.id) ? '✓' : l.order}
                      </span>
                      <span className="sidebar__item-title">{l.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
