import { categories } from '../data/categories';
import { getLessonsByCategory } from '../data/lessons';

type Props = {
  onStart: (lessonId: string) => void;
};

export function Welcome({ onStart }: Props) {
  const firstLesson = getLessonsByCategory('html')[0];

  return (
    <main className="welcome">
      <div className="welcome__hero">
        <h1 className="welcome__title">
          🎓 Học React TypeScript từ con số 0
        </h1>
        <p className="welcome__subtitle">
          Lộ trình 30 bài có lý thuyết + ví dụ chạy được + bài tập thực hành.
        </p>
        <button
          className="welcome__cta"
          onClick={() => onStart(firstLesson.id)}
        >
          🚀 Bắt đầu bài đầu tiên
        </button>
      </div>

      <div className="welcome__path">
        {categories.map((cat, idx) => {
          const lessons = getLessonsByCategory(cat.id);
          return (
            <div key={cat.id} className="welcome__step">
              <div className="welcome__step-num">{idx + 1}</div>
              <div className="welcome__step-body">
                <h2>
                  {cat.emoji} {cat.title}
                </h2>
                <p className="welcome__step-desc">{cat.description}</p>
                <p className="welcome__step-count">
                  {lessons.length} bài • bấm vào bên trái để vào học
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="welcome__tips">
        <h3>📌 Tips học hiệu quả</h3>
        <ul>
          <li>Đọc lý thuyết, sau đó sửa code trong "Ví dụ" để thấy trực tiếp thay đổi.</li>
          <li>Tự làm bài tập trước khi xem gợi ý.</li>
          <li>Đánh dấu "Học xong" khi bạn thực sự hiểu và làm được bài tập.</li>
          <li>Tiến độ được lưu tự động — đóng trình duyệt mở lại vẫn còn.</li>
        </ul>
      </div>
    </main>
  );
}
