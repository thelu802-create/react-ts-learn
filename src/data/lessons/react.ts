import type { Lesson } from '../../types/lesson';

export const reactLessons: Lesson[] = [
  {
    id: 'react-01-intro',
    category: 'react',
    order: 1,
    title: 'React là gì? Component đầu tiên',
    summary: 'Triết lý của React và cách viết component đầu tiên.',
    theory: `## React là gì?

**React** là thư viện JavaScript do Facebook tạo, dùng để xây dựng **giao diện người dùng (UI)**.

## Triết lý cốt lõi — Component

Thay vì viết 1 file HTML khổng lồ, React chia giao diện thành các **component** nhỏ có thể tái sử dụng:

\`\`\`
<App>
  <Header />
  <ProductList>
    <ProductCard />
    <ProductCard />
    <ProductCard />
  </ProductList>
  <Footer />
</App>
\`\`\`

Mỗi component là một **function** trả về JSX (sẽ học ngay sau).

## Component đầu tiên

\`\`\`tsx
function Hello() {
  return <h1>Xin chào React!</h1>;
}
\`\`\`

Sử dụng:
\`\`\`tsx
<Hello />
\`\`\`

**Quy tắc:**
- Tên component phải **bắt đầu bằng chữ hoa** (\`Hello\`, không phải \`hello\`)
- Tên file thường dùng \`.tsx\` (TypeScript + JSX)
- Component luôn trả về 1 element JSX duy nhất (có thể bọc trong \`<>...</>\` fragment)

## File App.tsx thông thường

\`\`\`tsx
export default function App() {
  return (
    <div>
      <h1>Trang chủ</h1>
      <p>Chào mừng đến với React!</p>
    </div>
  );
}
\`\`\`

## Vì sao cần TypeScript với React?

- Tự động báo lỗi khi gõ sai tên prop
- IDE gợi ý props/methods khi viết
- Refactor an toàn hơn

Trong khóa này ta dùng **React + TypeScript** (gọi tắt React TS).`,
    example: {
      language: 'react',
      files: [
        {
          filename: '/App.tsx',
          code: `export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>Xin chào React!</h1>
      <p>Đây là component React đầu tiên.</p>
      <Greeting />
    </div>
  );
}

function Greeting() {
  return <p>👋 Mình là component con.</p>;
}
`,
        },
      ],
    },
    exercise: {
      title: 'Bài tập: Tạo 2 component',
      description:
        'Tạo component Header (hiển thị tiêu đề blog) và component Footer (hiển thị "© 2026"). Gọi cả hai trong App.',
      starter: {
        language: 'react',
        files: [
          {
            filename: '/App.tsx',
            code: `export default function App() {
  return (
    <div>
      {/* Gọi Header và Footer ở đây */}
    </div>
  );
}

// Viết Header ở đây

// Viết Footer ở đây
`,
          },
        ],
      },
    },
  },
  {
    id: 'react-02-jsx',
    category: 'react',
    order: 2,
    title: 'JSX — JavaScript + HTML',
    summary: 'Cú pháp kỳ diệu cho phép viết HTML trong JavaScript.',
    theory: `## JSX là gì?

**JSX** là cú pháp mở rộng của JavaScript, cho phép viết HTML-like code:

\`\`\`tsx
const element = <h1>Xin chào</h1>;
\`\`\`

## Nhúng JavaScript vào JSX — \`{}\`

Mọi thứ trong \`{}\` là JavaScript:

\`\`\`tsx
const name = "An";
const age = 20;

return (
  <div>
    <p>Tên: {name}</p>
    <p>Năm sau: {age + 1} tuổi</p>
    <p>Ngày: {new Date().toLocaleDateString()}</p>
    <p>Tính: {5 * 10}</p>
  </div>
);
\`\`\`

## Attribute — viết kiểu camelCase

HTML: \`class\`, \`onclick\`, \`tabindex\`
JSX: \`className\`, \`onClick\`, \`tabIndex\`

\`\`\`tsx
<div className="card" onClick={handleClick} tabIndex={0}>
\`\`\`

⚠️ **Dùng \`className\` thay vì \`class\`** vì \`class\` là keyword trong JavaScript.

## Truyền biểu thức vào attribute

\`\`\`tsx
const url = "https://google.com";
const isActive = true;

<a href={url}>Link</a>
<div className={isActive ? "active" : "inactive"}>...</div>
<img src={url} alt="..." />
\`\`\`

## Inline style — object, không phải string

\`\`\`tsx
<div style={{ color: "red", fontSize: 16, backgroundColor: "#eee" }}>
  Hello
</div>
\`\`\`

Lưu ý:
- Dùng \`{{}}\` — cặp ngoài là JSX expression, cặp trong là object
- Property viết camelCase (\`backgroundColor\`, không \`background-color\`)

## Quy tắc JSX

### 1. Phải có 1 root element
\`\`\`tsx
// ❌ sai
return (
  <h1>A</h1>
  <p>B</p>
);

// ✅ bọc trong div
return (
  <div>
    <h1>A</h1>
    <p>B</p>
  </div>
);

// ✅ hoặc fragment <> (không tạo thẻ thật)
return (
  <>
    <h1>A</h1>
    <p>B</p>
  </>
);
\`\`\`

### 2. Self-closing tag phải đóng
\`\`\`tsx
<img src="..." />    ✅
<br />               ✅
<input />            ✅

<img src="...">      ❌ thiếu /
\`\`\`

### 3. Comment dùng \`{/* ... */}\`
\`\`\`tsx
<div>
  {/* Đây là comment trong JSX */}
  <p>Text</p>
</div>
\`\`\``,
    example: {
      language: 'react',
      files: [
        {
          filename: '/App.tsx',
          code: `export default function App() {
  const name = "An";
  const age = 22;
  const isActive = true;
  const skills = ["React", "TypeScript", "Node"];

  return (
    <div style={{ padding: 24, fontFamily: 'sans-serif' }}>
      <h1 style={{ color: isActive ? 'green' : 'gray' }}>
        {name} — {age} tuổi
      </h1>

      <p>Năm sinh: {2026 - age}</p>
      <p>Kỹ năng có {skills.length} mục</p>

      <div style={{
        padding: 12,
        backgroundColor: '#f0f9ff',
        borderRadius: 8,
      }}>
        {/* Comment trong JSX */}
        <strong>Trạng thái: </strong>
        {isActive ? '✅ Đang hoạt động' : '❌ Nghỉ'}
      </div>
    </div>
  );
}
`,
        },
      ],
    },
    exercise: {
      title: 'Bài tập: Card người dùng',
      description:
        'Tạo 1 biến user (object có name, age, city). Hiển thị trong div có style: padding 16px, border 1px xám, border-radius 8px. Dùng {} để nhúng thông tin vào JSX.',
      starter: {
        language: 'react',
        files: [
          {
            filename: '/App.tsx',
            code: `export default function App() {
  // Tạo object user ở đây

  return (
    <div>
      {/* Hiển thị user ở đây */}
    </div>
  );
}
`,
          },
        ],
      },
    },
  },
  {
    id: 'react-03-props',
    category: 'react',
    order: 3,
    title: 'Props — Truyền data vào component',
    summary: 'Props với TypeScript: component nhận dữ liệu từ component cha.',
    theory: `## Props là gì?

**Props** = "properties" = dữ liệu **cha truyền xuống con**. Giống như tham số của function.

## Ví dụ không có props

\`\`\`tsx
function Greeting() {
  return <h1>Xin chào An</h1>;  // tên cố định
}
\`\`\`

Component này chỉ chào 1 người → không tái sử dụng được.

## Thêm props

\`\`\`tsx
type GreetingProps = {
  name: string;
};

function Greeting(props: GreetingProps) {
  return <h1>Xin chào {props.name}</h1>;
}

// Dùng
<Greeting name="An" />
<Greeting name="Bình" />
<Greeting name="Chi" />
\`\`\`

## Destructuring — Cách viết gọn (khuyên dùng)

\`\`\`tsx
function Greeting({ name }: GreetingProps) {
  return <h1>Xin chào {name}</h1>;
}
\`\`\`

## Nhiều props

\`\`\`tsx
type UserCardProps = {
  name: string;
  age: number;
  isAdmin?: boolean;  // optional
};

function UserCard({ name, age, isAdmin = false }: UserCardProps) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Tuổi: {age}</p>
      {isAdmin && <p>👑 Admin</p>}
    </div>
  );
}

<UserCard name="An" age={20} />
<UserCard name="Bình" age={25} isAdmin={true} />
\`\`\`

## Props đặc biệt: \`children\`

\`children\` là **nội dung giữa 2 thẻ** của component:

\`\`\`tsx
type CardProps = {
  children: React.ReactNode;
};

function Card({ children }: CardProps) {
  return <div className="card">{children}</div>;
}

// Dùng
<Card>
  <h2>Tiêu đề</h2>
  <p>Nội dung</p>
</Card>
\`\`\`

\`React.ReactNode\` là type chuẩn cho bất kỳ thứ gì có thể render (JSX, text, number...).

## Truyền nhiều kiểu dữ liệu

\`\`\`tsx
type ButtonProps = {
  label: string;
  onClick: () => void;        // function
  disabled?: boolean;
  style?: React.CSSProperties; // style object
  icon?: React.ReactNode;      // JSX
};
\`\`\`

## ❗ Props là **read-only**

Component **không được sửa** props:

\`\`\`tsx
function Greeting({ name }: GreetingProps) {
  name = "Khác";  // ❌ TUYỆT ĐỐI KHÔNG LÀM
  return <h1>{name}</h1>;
}
\`\`\`

Muốn thay đổi dữ liệu → dùng **state** (bài tiếp theo).`,
    example: {
      language: 'react',
      files: [
        {
          filename: '/App.tsx',
          code: `type UserCardProps = {
  name: string;
  age: number;
  role?: string;
};

function UserCard({ name, age, role = "Member" }: UserCardProps) {
  return (
    <div style={{
      padding: 16,
      border: '1px solid #e5e7eb',
      borderRadius: 8,
      marginBottom: 12,
    }}>
      <h3 style={{ margin: 0 }}>{name}</h3>
      <p style={{ color: '#666', margin: '4px 0' }}>Tuổi: {age}</p>
      <span style={{
        background: '#dbeafe',
        color: '#1e40af',
        padding: '2px 8px',
        borderRadius: 4,
        fontSize: 12,
      }}>{role}</span>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ padding: 24, fontFamily: 'sans-serif' }}>
      <h1>Danh sách người dùng</h1>
      <UserCard name="Nguyễn An" age={22} role="Admin" />
      <UserCard name="Trần Bình" age={25} />
      <UserCard name="Lê Chi" age={30} role="Editor" />
    </div>
  );
}
`,
        },
      ],
    },
    exercise: {
      title: 'Bài tập: Component ProductCard',
      description:
        'Tạo component ProductCard nhận 3 props: name (string), price (number), inStock (boolean). Nếu inStock=true → hiện badge xanh "Còn hàng". Ngược lại badge xám "Hết hàng". Gọi component 3 lần trong App với dữ liệu khác nhau.',
      starter: {
        language: 'react',
        files: [
          {
            filename: '/App.tsx',
            code: `// Khai báo type ProductCardProps

// Viết component ProductCard

export default function App() {
  return (
    <div>
      <h1>Sản phẩm</h1>
      {/* Gọi ProductCard 3 lần ở đây */}
    </div>
  );
}
`,
          },
        ],
      },
    },
  },
  {
    id: 'react-04-usestate',
    category: 'react',
    order: 4,
    title: 'useState — State của component',
    summary: 'Lưu trữ dữ liệu thay đổi trong component.',
    theory: `## State là gì?

**State** = dữ liệu **bên trong component** có thể thay đổi theo thời gian. Khi state thay đổi, React **tự động render lại** component.

Ví dụ: số đếm click, giá trị input, danh sách todo...

## \`useState\` hook

\`\`\`tsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Số lần click: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
\`\`\`

**Giải thích:**
- \`useState(0)\` — tạo state khởi tạo = 0
- Trả về mảng 2 phần tử: \`[giá trị hiện tại, hàm để set]\`
- Ta destructure đặt tên: \`[count, setCount]\`
- Gọi \`setCount(5)\` → state thành 5 → component render lại → hiển thị 5

## TypeScript với useState

TS thường **tự suy ra type**:

\`\`\`tsx
const [count, setCount] = useState(0);        // count: number
const [name, setName] = useState("");         // name: string
const [active, setActive] = useState(false);  // active: boolean
\`\`\`

Khi khởi tạo là \`null\` hoặc array rỗng, cần khai báo rõ:

\`\`\`tsx
const [user, setUser] = useState<User | null>(null);
const [todos, setTodos] = useState<string[]>([]);
\`\`\`

## State bất biến — **KHÔNG ĐƯỢC SỬA TRỰC TIẾP**

\`\`\`tsx
const [todos, setTodos] = useState<string[]>([]);

todos.push("A");     // ❌ SAI — React không biết state đổi
setTodos(todos);     // ❌ vẫn sai — cùng 1 mảng

// ✅ Luôn tạo mảng/object MỚI
setTodos([...todos, "A"]);
\`\`\`

## Cập nhật dựa trên state cũ

Khi state mới **phụ thuộc vào state cũ**, nên dùng dạng callback:

\`\`\`tsx
// ❌ Có thể sai khi gọi nhiều lần liên tiếp
setCount(count + 1);

// ✅ Đảm bảo luôn đúng
setCount(prev => prev + 1);
\`\`\`

## Ví dụ: Input

\`\`\`tsx
function NameInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Xin chào, {name || "(chưa nhập)"}</p>
    </div>
  );
}
\`\`\`

## Nhiều state trong 1 component

\`\`\`tsx
function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [agree, setAgree] = useState(false);

  // ...
}
\`\`\`

Cứ gọi \`useState\` nhiều lần — mỗi lần là 1 state độc lập.`,
    example: {
      language: 'react',
      files: [
        {
          filename: '/App.tsx',
          code: `import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <div style={{ padding: 24, fontFamily: 'sans-serif' }}>
      <h1>useState demo</h1>

      <section style={{ marginBottom: 24 }}>
        <h2>Counter</h2>
        <p>Đếm: <strong>{count}</strong></p>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)} style={{ marginLeft: 8 }}>-1</button>
        <button onClick={() => setCount(0)} style={{ marginLeft: 8 }}>Reset</button>
      </section>

      <section>
        <h2>Input</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nhập tên..."
          style={{ padding: 8, fontSize: 16 }}
        />
        <p>Xin chào, <strong>{name || "(chưa nhập)"}</strong>!</p>
      </section>
    </div>
  );
}
`,
        },
      ],
    },
    exercise: {
      title: 'Bài tập: Máy tính đơn giản',
      description:
        'Tạo component có 2 input (a và b), một select để chọn phép tính (+, -, *, /), và hiển thị kết quả. Dùng 3 useState: valueA, valueB, operator.',
      starter: {
        language: 'react',
        files: [
          {
            filename: '/App.tsx',
            code: `import { useState } from 'react';

export default function App() {
  // Khai báo 3 state ở đây

  // Tính kết quả

  return (
    <div style={{ padding: 24 }}>
      <h1>Máy tính</h1>
      {/* Input a, select operator, input b, hiển thị kết quả */}
    </div>
  );
}
`,
          },
        ],
      },
    },
  },
  {
    id: 'react-05-events',
    category: 'react',
    order: 5,
    title: 'Event handling với TypeScript',
    summary: 'onClick, onChange, onSubmit với type đầy đủ.',
    theory: `## onClick

Đơn giản nhất — không tham số:

\`\`\`tsx
function App() {
  const handleClick = () => {
    alert('Clicked!');
  };

  return <button onClick={handleClick}>Click</button>;
}
\`\`\`

## onClick với event object

TS cần biết type của event:

\`\`\`tsx
function App() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget);  // chính là button được click
  };

  return <button onClick={handleClick}>Click</button>;
}
\`\`\`

> Mẹo: đa số trường hợp bạn **không cần tự khai báo type** — viết \`onClick={(e) => ...}\` inline và TS tự suy luận.

## onChange — Input

\`\`\`tsx
const [name, setName] = useState("");

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setName(e.target.value);
};

<input value={name} onChange={handleChange} />

// Hoặc inline (TS tự suy):
<input value={name} onChange={(e) => setName(e.target.value)} />
\`\`\`

Các type thường gặp:
- \`React.ChangeEvent<HTMLInputElement>\` — input
- \`React.ChangeEvent<HTMLTextAreaElement>\` — textarea
- \`React.ChangeEvent<HTMLSelectElement>\` — select

## onSubmit — Form

\`\`\`tsx
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();  // QUAN TRỌNG — chặn load lại trang
  console.log('Submit!');
};

<form onSubmit={handleSubmit}>
  <button type="submit">Gửi</button>
</form>
\`\`\`

## Truyền tham số cho handler

Khi cần truyền tham số, bọc trong arrow function:

\`\`\`tsx
const handleDelete = (id: number) => {
  console.log('Xóa', id);
};

// ❌ Chạy ngay khi render
<button onClick={handleDelete(1)}>Xóa</button>

// ✅ Chạy khi click
<button onClick={() => handleDelete(1)}>Xóa</button>
\`\`\`

## Các event thường dùng

| Event | Mô tả |
|-------|-------|
| \`onClick\` | click |
| \`onChange\` | input/select/textarea thay đổi |
| \`onSubmit\` | form submit |
| \`onFocus\` / \`onBlur\` | focus / mất focus |
| \`onKeyDown\` | nhấn phím |
| \`onMouseEnter\` / \`onMouseLeave\` | rê chuột vào/ra |`,
    example: {
      language: 'react',
      files: [
        {
          filename: '/App.tsx',
          code: `import { useState } from 'react';

export default function App() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(name);
    setName("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setName("");
    }
  };

  return (
    <div style={{ padding: 24, fontFamily: 'sans-serif' }}>
      <h1>Form — Event handling</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Nhập tên (ESC để xóa)..."
          style={{ padding: 8, fontSize: 16, marginRight: 8 }}
        />
        <button type="submit">Gửi</button>
      </form>

      {submitted && (
        <div style={{ marginTop: 16, padding: 12, background: '#d1fae5' }}>
          ✅ Đã gửi: <strong>{submitted}</strong>
        </div>
      )}
    </div>
  );
}
`,
        },
      ],
    },
    exercise: {
      title: 'Bài tập: Đăng ký với validation',
      description:
        'Tạo form có 2 input: email và password. Khi submit: nếu email không chứa "@" hoặc password ngắn hơn 6 kí tự → hiện lỗi đỏ. Ngược lại hiện "Đăng ký thành công!" màu xanh.',
      starter: {
        language: 'react',
        files: [
          {
            filename: '/App.tsx',
            code: `import { useState } from 'react';

export default function App() {
  // state cho email, password, error, success

  return (
    <form>
      {/* 2 input và nút submit */}
    </form>
  );
}
`,
          },
        ],
      },
    },
  },
  {
    id: 'react-06-conditional-list',
    category: 'react',
    order: 6,
    title: 'Conditional rendering & List',
    summary: 'Render có điều kiện và render danh sách với map() + key.',
    theory: `## Conditional rendering — Render có điều kiện

### 1. Toán tử ba ngôi \`? :\`
\`\`\`tsx
<p>{isLoggedIn ? "Chào bạn" : "Vui lòng đăng nhập"}</p>
\`\`\`

### 2. Toán tử \`&&\`
\`\`\`tsx
{isAdmin && <button>Xóa</button>}
\`\`\`
Nếu \`isAdmin === true\` → render nút. Nếu false → không render gì.

> Cẩn thận: \`{count && <p>...</p>}\` khi \`count = 0\` sẽ render ra số 0 trên trang! Dùng \`{count > 0 && <p>...</p>}\` cho an toàn.

### 3. Return sớm
\`\`\`tsx
function Profile({ user }: { user: User | null }) {
  if (!user) return <p>Chưa đăng nhập</p>;

  return <div>{user.name}</div>;
}
\`\`\`

## List — Render danh sách với \`.map()\`

Khi có mảng dữ liệu, dùng \`.map()\` để biến mảng thành JSX:

\`\`\`tsx
const fruits = ["táo", "cam", "chuối"];

return (
  <ul>
    {fruits.map((fruit) => (
      <li>{fruit}</li>
    ))}
  </ul>
);
\`\`\`

## \`key\` — Rất quan trọng!

Mỗi phần tử trong list phải có prop \`key\` **duy nhất**:

\`\`\`tsx
{users.map((user) => (
  <UserCard key={user.id} name={user.name} />
))}
\`\`\`

**Tại sao cần key?** Khi list thay đổi (thêm/xóa/sắp xếp), React dùng key để biết item nào là item nào → render hiệu quả và giữ đúng state.

### Chọn key như thế nào?

- **Tốt nhất:** \`id\` duy nhất từ dữ liệu
- **Tạm chấp nhận:** kết hợp field không đổi
- **Không nên:** dùng \`index\` của map (chỉ dùng nếu list không bao giờ sắp xếp/xóa)

\`\`\`tsx
// ❌ Tránh nếu list có thể thay đổi
{items.map((item, index) => <div key={index}>...</div>)}

// ✅ Dùng id từ dữ liệu
{items.map((item) => <div key={item.id}>...</div>)}
\`\`\`

## Kết hợp filter + map

\`\`\`tsx
const users = [
  { id: 1, name: "An", active: true },
  { id: 2, name: "Bình", active: false },
  { id: 3, name: "Chi", active: true },
];

return (
  <ul>
    {users
      .filter((u) => u.active)
      .map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
  </ul>
);
\`\`\`

## Danh sách rỗng

\`\`\`tsx
{users.length === 0 ? (
  <p>Chưa có dữ liệu</p>
) : (
  <ul>
    {users.map((u) => <li key={u.id}>{u.name}</li>)}
  </ul>
)}
\`\`\``,
    example: {
      language: 'react',
      files: [
        {
          filename: '/App.tsx',
          code: `import { useState } from 'react';

type Task = {
  id: number;
  title: string;
  done: boolean;
};

export default function App() {
  const [tasks] = useState<Task[]>([
    { id: 1, title: "Học HTML", done: true },
    { id: 2, title: "Học CSS", done: true },
    { id: 3, title: "Học React", done: false },
    { id: 4, title: "Làm project", done: false },
  ]);
  const [showDone, setShowDone] = useState(true);

  const visibleTasks = showDone ? tasks : tasks.filter((t) => !t.done);

  return (
    <div style={{ padding: 24, fontFamily: 'sans-serif' }}>
      <h1>Todo List</h1>

      <label>
        <input
          type="checkbox"
          checked={showDone}
          onChange={(e) => setShowDone(e.target.checked)}
        />
        {' '}Hiện cả task đã xong
      </label>

      {visibleTasks.length === 0 ? (
        <p>🎉 Không còn task nào!</p>
      ) : (
        <ul>
          {visibleTasks.map((task) => (
            <li key={task.id} style={{
              textDecoration: task.done ? 'line-through' : 'none',
              color: task.done ? '#999' : '#000',
            }}>
              {task.done && '✅ '}{task.title}
            </li>
          ))}
        </ul>
      )}

      <p>Còn {tasks.filter((t) => !t.done).length} task chưa xong</p>
    </div>
  );
}
`,
        },
      ],
    },
    exercise: {
      title: 'Bài tập: Danh sách bạn bè',
      description:
        'Tạo mảng friends (5 object có id, name, online: boolean). Render danh sách: online hiện chấm xanh "●", offline hiện chấm xám. Có nút "Chỉ hiện online" để filter.',
      starter: {
        language: 'react',
        files: [
          {
            filename: '/App.tsx',
            code: `import { useState } from 'react';

type Friend = {
  id: number;
  name: string;
  online: boolean;
};

export default function App() {
  // khai báo mảng friends và state showOnlineOnly

  return (
    <div>
      {/* Nút filter và danh sách */}
    </div>
  );
}
`,
          },
        ],
      },
    },
  },
  {
    id: 'react-07-forms',
    category: 'react',
    order: 7,
    title: 'Forms với useState',
    summary: 'Kết hợp useState với input để tạo form tương tác đầy đủ.',
    theory: `## Controlled component

**Controlled input** = input mà React nắm **toàn quyền**: giá trị từ state, onChange cập nhật state.

\`\`\`tsx
const [name, setName] = useState("");

<input
  type="text"
  value={name}                                   // đọc từ state
  onChange={(e) => setName(e.target.value)}      // cập nhật state
/>
\`\`\`

Lợi ích:
- Dễ validate
- Dễ lấy giá trị hiện tại
- Dễ reset

## Form với nhiều input — 1 object state

Thay vì nhiều \`useState\`, gom vào 1 object:

\`\`\`tsx
type FormData = {
  name: string;
  email: string;
  age: number;
};

const [form, setForm] = useState<FormData>({
  name: "",
  email: "",
  age: 0,
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setForm((prev) => ({ ...prev, [name]: value }));
};

<input name="name" value={form.name} onChange={handleChange} />
<input name="email" value={form.email} onChange={handleChange} />
\`\`\`

**Trick:** dùng \`name\` attribute của input + computed property \`[name]\` để dùng chung 1 handler.

## Checkbox

\`\`\`tsx
const [agreed, setAgreed] = useState(false);

<input
  type="checkbox"
  checked={agreed}
  onChange={(e) => setAgreed(e.target.checked)}
/>
\`\`\`

Lưu ý: dùng \`checked\` và \`e.target.checked\` (không phải \`value\`).

## Select

\`\`\`tsx
const [city, setCity] = useState("hn");

<select value={city} onChange={(e) => setCity(e.target.value)}>
  <option value="hn">Hà Nội</option>
  <option value="hcm">TP. HCM</option>
</select>
\`\`\`

## Radio

\`\`\`tsx
const [gender, setGender] = useState("male");

<label>
  <input
    type="radio"
    value="male"
    checked={gender === "male"}
    onChange={(e) => setGender(e.target.value)}
  />
  Nam
</label>
\`\`\`

## Submit

\`\`\`tsx
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("Form data:", form);
  // Reset hoặc gửi API
};

<form onSubmit={handleSubmit}>
  {/* inputs */}
  <button type="submit">Gửi</button>
</form>
\`\`\`

## Validation cơ bản

\`\`\`tsx
const [errors, setErrors] = useState<Partial<FormData>>({});

const validate = () => {
  const errs: Partial<FormData> = {};
  if (!form.name) errs.name = "Tên bắt buộc";
  if (!form.email.includes("@")) errs.email = "Email không hợp lệ";
  setErrors(errs);
  return Object.keys(errs).length === 0;
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (!validate()) return;
  // tiếp tục gửi
};
\`\`\``,
    example: {
      language: 'react',
      files: [
        {
          filename: '/App.tsx',
          code: `import { useState } from 'react';

type FormData = {
  name: string;
  email: string;
  city: string;
  agree: boolean;
};

export default function App() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    city: "hn",
    agree: false,
  });
  const [submitted, setSubmitted] = useState<FormData | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.agree) {
      alert('Bạn phải đồng ý điều khoản!');
      return;
    }
    setSubmitted(form);
  };

  return (
    <div style={{ padding: 24, fontFamily: 'sans-serif', maxWidth: 400 }}>
      <h1>Đăng ký</h1>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label>Tên: </label>
          <input name="name" value={form.name} onChange={handleChange} required />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Email: </label>
          <input name="email" type="email" value={form.email} onChange={handleChange} required />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Thành phố: </label>
          <select name="city" value={form.city} onChange={handleChange}>
            <option value="hn">Hà Nội</option>
            <option value="hcm">TP.HCM</option>
            <option value="dn">Đà Nẵng</option>
          </select>
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>
            <input name="agree" type="checkbox" checked={form.agree} onChange={handleChange} />
            {' '}Đồng ý điều khoản
          </label>
        </div>

        <button type="submit">Đăng ký</button>
      </form>

      {submitted && (
        <pre style={{ background: '#f3f4f6', padding: 12, marginTop: 16 }}>
{JSON.stringify(submitted, null, 2)}
        </pre>
      )}
    </div>
  );
}
`,
        },
      ],
    },
    exercise: {
      title: 'Bài tập: Form liên hệ có validation',
      description:
        'Tạo form có: name, email, message (textarea). Khi submit: validate cả 3 trường không được rỗng, email phải chứa "@". Hiện lỗi đỏ dưới từng trường sai. Nếu hợp lệ thì hiện "Đã gửi!" và reset form.',
      starter: {
        language: 'react',
        files: [
          {
            filename: '/App.tsx',
            code: `import { useState } from 'react';

export default function App() {
  // state form và errors

  return (
    <form>
      {/* 3 trường + validation */}
    </form>
  );
}
`,
          },
        ],
      },
    },
  },
  {
    id: 'react-08-useeffect',
    category: 'react',
    order: 8,
    title: 'useEffect — Side effects',
    summary: 'Chạy code sau khi render: fetch data, timer, subscribe...',
    theory: `## useEffect là gì?

**useEffect** dùng để chạy **side effect** — những việc không thuộc quá trình render thuần:

- Fetch dữ liệu từ API
- Timer (\`setInterval\`, \`setTimeout\`)
- Subscribe event (scroll, resize)
- Tương tác DOM thủ công
- Log, analytics...

## Cú pháp

\`\`\`tsx
import { useEffect } from 'react';

useEffect(() => {
  // code chạy SAU khi component render
}, [dependencies]);
\`\`\`

## Dependency array — Yếu tố quan trọng nhất

### 1. Không truyền gì — chạy **mỗi lần render**
\`\`\`tsx
useEffect(() => {
  console.log('Render');
});  // không có []
\`\`\`
⚠️ Hầu như không bao giờ dùng (dễ gây loop vô tận).

### 2. Mảng rỗng \`[]\` — chạy **1 lần duy nhất** khi mount
\`\`\`tsx
useEffect(() => {
  console.log('Mount 1 lần');
}, []);
\`\`\`
Hay dùng để fetch data ban đầu.

### 3. \`[value]\` — chạy khi \`value\` thay đổi
\`\`\`tsx
useEffect(() => {
  console.log('count đã đổi:', count);
}, [count]);
\`\`\`

## Ví dụ: Fetch dữ liệu

\`\`\`tsx
type User = { id: number; name: string };

function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);  // chạy 1 lần

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}
\`\`\`

## Cleanup function

Khi effect tạo ra thứ cần dọn dẹp (timer, event listener), **return** 1 function cleanup:

\`\`\`tsx
useEffect(() => {
  const id = setInterval(() => {
    console.log('tick');
  }, 1000);

  return () => {
    clearInterval(id);  // cleanup — chạy khi component unmount hoặc effect chạy lại
  };
}, []);
\`\`\`

**Khi nào cleanup chạy?**
- Trước khi effect chạy lại (nếu dependencies đổi)
- Khi component bị unmount

## Ví dụ: Event listener

\`\`\`tsx
useEffect(() => {
  const handleResize = () => {
    console.log('Width:', window.innerWidth);
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
\`\`\`

## Lưu ý quan trọng

- **Đừng bỏ qua dependency**: nếu effect dùng biến/state nào → phải cho vào \`[]\`
- **Không set state vô điều kiện** trong useEffect không có deps → loop vô tận
- Trong React 18 Strict Mode (dev): effect chạy **2 lần** khi mount — đây là intentional để bạn phát hiện lỗi cleanup`,
    example: {
      language: 'react',
      files: [
        {
          filename: '/App.tsx',
          code: `import { useEffect, useState } from 'react';

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(true);

  // Timer
  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
    return () => clearInterval(id);
  }, [running]);

  // Lưu vào title trang
  useEffect(() => {
    document.title = \`\${seconds}s đã trôi qua\`;
  }, [seconds]);

  return (
    <div style={{ padding: 24, fontFamily: 'sans-serif' }}>
      <h1>Timer: {seconds}s</h1>
      <button onClick={() => setRunning((r) => !r)}>
        {running ? '⏸ Pause' : '▶ Resume'}
      </button>
      <button onClick={() => setSeconds(0)} style={{ marginLeft: 8 }}>
        Reset
      </button>
      <p style={{ color: '#666', marginTop: 16 }}>
        💡 Mở tab này và nhìn title tab — nó cập nhật theo timer.
      </p>
    </div>
  );
}
`,
        },
      ],
    },
    exercise: {
      title: 'Bài tập: Fetch user từ API',
      description:
        'Dùng useEffect fetch từ https://jsonplaceholder.typicode.com/users (trả về mảng user có id, name, email). Hiện "Loading..." khi đang fetch, sau đó render danh sách tên + email.',
      starter: {
        language: 'react',
        files: [
          {
            filename: '/App.tsx',
            code: `import { useEffect, useState } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
};

export default function App() {
  // state users và loading

  // useEffect fetch

  return (
    <div>
      {/* Render loading hoặc list */}
    </div>
  );
}
`,
          },
        ],
      },
    },
  },
  {
    id: 'react-09-custom-hooks',
    category: 'react',
    order: 9,
    title: 'Custom Hooks — Tái sử dụng logic',
    summary: 'Đóng gói logic có state thành function riêng để dùng nhiều nơi.',
    theory: `## Custom hook là gì?

**Custom hook** = 1 function JavaScript/TS đặc biệt:
1. Tên bắt đầu bằng \`use\` (ví dụ: \`useCounter\`, \`useFetch\`)
2. Có thể gọi các hook khác bên trong (\`useState\`, \`useEffect\`)
3. Trả về bất cứ thứ gì bạn muốn component dùng

> Quy tắc đặt tên \`use...\` giúp React/eslint biết đây là hook để áp dụng quy tắc hook.

## Ví dụ 1: useCounter

Thay vì viết logic counter trong mỗi component:

\`\`\`tsx
// hooks/useCounter.ts
import { useState } from 'react';

export function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(initial);

  return { count, increment, decrement, reset };
}
\`\`\`

Dùng ở nhiều component:
\`\`\`tsx
function App() {
  const { count, increment, decrement } = useCounter(10);

  return (
    <>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}
\`\`\`

## Ví dụ 2: useLocalStorage

\`\`\`tsx
import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(key);
    return stored ? (JSON.parse(stored) as T) : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}
\`\`\`

Dùng:
\`\`\`tsx
const [name, setName] = useLocalStorage("username", "");
// Tự động lưu vào localStorage khi name đổi
// Tự động đọc lại khi refresh trang
\`\`\`

## Ví dụ 3: useToggle

\`\`\`tsx
export function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = () => setValue((v) => !v);
  return [value, toggle] as const;
}

// Dùng
const [isOpen, toggleOpen] = useToggle();
<button onClick={toggleOpen}>{isOpen ? 'Đóng' : 'Mở'}</button>
\`\`\`

## Ví dụ 4: useFetch

\`\`\`tsx
export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((r) => r.json())
      .then((d: T) => setData(d))
      .catch((e: Error) => setError(e))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}
\`\`\`

## Khi nào tạo custom hook?

- Logic có **state/effect** được dùng ở **>= 2 component**
- Muốn **tách logic** ra khỏi component để dễ test
- Muốn component gọn gàng, chỉ lo về UI

## Quy tắc của Hook (quan trọng!)

1. **Chỉ gọi hook ở top-level** — không trong if/loop/nested function
2. **Chỉ gọi trong React function component hoặc custom hook** — không trong function thường
3. **Hook bắt đầu bằng \`use\`** — eslint sẽ bắt quy tắc trên`,
    example: {
      language: 'react',
      files: [
        {
          filename: '/App.tsx',
          code: `import { useCounter } from './useCounter';
import { useToggle } from './useToggle';

export default function App() {
  const { count, increment, decrement, reset } = useCounter(5);
  const [isDark, toggleDark] = useToggle(false);

  return (
    <div style={{
      padding: 24,
      minHeight: '100vh',
      background: isDark ? '#1e293b' : '#f9fafb',
      color: isDark ? 'white' : 'black',
      fontFamily: 'sans-serif',
    }}>
      <h1>Custom Hooks Demo</h1>

      <section style={{ marginBottom: 24 }}>
        <h2>Counter (từ useCounter hook)</h2>
        <p>Count: {count}</p>
        <button onClick={increment}>+1</button>
        <button onClick={decrement} style={{ marginLeft: 8 }}>-1</button>
        <button onClick={reset} style={{ marginLeft: 8 }}>Reset</button>
      </section>

      <section>
        <h2>Dark mode (từ useToggle hook)</h2>
        <button onClick={toggleDark}>
          {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>
      </section>
    </div>
  );
}
`,
        },
        {
          filename: '/useCounter.ts',
          code: `import { useState } from 'react';

export function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  return {
    count,
    increment: () => setCount((c) => c + 1),
    decrement: () => setCount((c) => c - 1),
    reset: () => setCount(initial),
  };
}
`,
        },
        {
          filename: '/useToggle.ts',
          code: `import { useState } from 'react';

export function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = () => setValue((v) => !v);
  return [value, toggle] as const;
}
`,
        },
      ],
    },
    exercise: {
      title: 'Bài tập: useLocalStorage',
      description:
        'Viết custom hook useLocalStorage<T>(key, initial) trả về [value, setValue]. Tự động đọc từ localStorage khi khởi tạo và lưu mỗi khi value đổi. Dùng hook này cho 1 input name — khi refresh trang vẫn giữ giá trị.',
      starter: {
        language: 'react',
        files: [
          {
            filename: '/App.tsx',
            code: `import { useLocalStorage } from './useLocalStorage';

export default function App() {
  // const [name, setName] = useLocalStorage('username', '');

  return (
    <div style={{ padding: 24 }}>
      <h1>Nhập tên (tự lưu khi refresh)</h1>
      {/* input */}
    </div>
  );
}
`,
          },
          {
            filename: '/useLocalStorage.ts',
            code: `// Viết custom hook useLocalStorage ở đây
`,
          },
        ],
      },
    },
  },
  {
    id: 'react-10-todo-project',
    category: 'react',
    order: 10,
    title: 'Mini Project: Todo App hoàn chỉnh',
    summary: 'Kết hợp tất cả kiến thức: useState, useEffect, props, list, form, localStorage.',
    theory: `## Mục tiêu

Xây một Todo App đầy đủ:
- ➕ Thêm task mới
- ✅ Đánh dấu hoàn thành
- 🗑 Xóa task
- 🎯 Filter: All / Active / Done
- 💾 Lưu xuống localStorage (refresh vẫn còn)

## Kiến trúc

\`\`\`
App
├── Header (input thêm task)
├── FilterBar (All | Active | Done)
└── TodoList
    └── TodoItem (có checkbox + nút xóa)
\`\`\`

## Data model

\`\`\`ts
type Todo = {
  id: number;
  title: string;
  done: boolean;
};
\`\`\`

## State chính trong App

\`\`\`ts
const [todos, setTodos] = useState<Todo[]>([]);
const [filter, setFilter] = useState<"all" | "active" | "done">("all");
\`\`\`

## Các hàm quan trọng

\`\`\`ts
// Thêm
const addTodo = (title: string) => {
  const newTodo: Todo = { id: Date.now(), title, done: false };
  setTodos((prev) => [...prev, newTodo]);
};

// Toggle xong
const toggleTodo = (id: number) => {
  setTodos((prev) =>
    prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
  );
};

// Xóa
const deleteTodo = (id: number) => {
  setTodos((prev) => prev.filter((t) => t.id !== id));
};
\`\`\`

## localStorage với useEffect

\`\`\`ts
// Load khi mount
useEffect(() => {
  const saved = localStorage.getItem("todos");
  if (saved) setTodos(JSON.parse(saved));
}, []);

// Lưu mỗi khi todos đổi
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);
\`\`\`

## Filter

\`\`\`ts
const visibleTodos = todos.filter((t) => {
  if (filter === "active") return !t.done;
  if (filter === "done") return t.done;
  return true;
});
\`\`\`

## Lời khuyên mở rộng

Sau khi hoàn thành, thử nâng cấp:
- ✏️ Double-click để sửa task
- 🕐 Hiển thị thời gian tạo (dùng \`new Date()\`)
- 🏷 Thêm priority (low/medium/high)
- 📊 Thống kê: đã xong X/Y task
- 🎨 Dark mode (dùng custom hook)

Hoàn thành bài này = bạn đã biết đủ **80% những gì cần** để bắt đầu làm project React TS thực tế! 🎉`,
    example: {
      language: 'react',
      files: [
        {
          filename: '/App.tsx',
          code: `import { useEffect, useState } from 'react';

type Todo = {
  id: number;
  title: string;
  done: boolean;
};

type Filter = 'all' | 'active' | 'done';

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState<Filter>('all');

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('todos');
    if (saved) setTodos(JSON.parse(saved));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = input.trim();
    if (!title) return;
    setTodos((prev) => [...prev, { id: Date.now(), title, done: false }]);
    setInput('');
  };

  const toggle = (id: number) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const remove = (id: number) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const visible = todos.filter((t) => {
    if (filter === 'active') return !t.done;
    if (filter === 'done') return t.done;
    return true;
  });

  const remaining = todos.filter((t) => !t.done).length;

  return (
    <div style={{
      padding: 24,
      maxWidth: 500,
      margin: '0 auto',
      fontFamily: 'sans-serif',
    }}>
      <h1>📝 Todo App</h1>

      <form onSubmit={addTodo} style={{ display: 'flex', gap: 8 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Thêm task mới..."
          style={{ flex: 1, padding: 8, fontSize: 16 }}
        />
        <button type="submit">Thêm</button>
      </form>

      <div style={{ margin: '16px 0' }}>
        {(['all', 'active', 'done'] as Filter[]).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              marginRight: 8,
              background: filter === f ? '#3b82f6' : '#e5e7eb',
              color: filter === f ? 'white' : 'black',
              border: 'none',
              padding: '6px 12px',
              borderRadius: 4,
              cursor: 'pointer',
            }}
          >
            {f === 'all' ? 'Tất cả' : f === 'active' ? 'Chưa xong' : 'Đã xong'}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p style={{ color: '#999' }}>Không có task nào 🎉</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {visible.map((t) => (
            <li key={t.id} style={{
              display: 'flex',
              alignItems: 'center',
              padding: 8,
              borderBottom: '1px solid #eee',
            }}>
              <input
                type="checkbox"
                checked={t.done}
                onChange={() => toggle(t.id)}
              />
              <span style={{
                flex: 1,
                marginLeft: 8,
                textDecoration: t.done ? 'line-through' : 'none',
                color: t.done ? '#999' : '#000',
              }}>
                {t.title}
              </span>
              <button onClick={() => remove(t.id)}>🗑</button>
            </li>
          ))}
        </ul>
      )}

      <p style={{ color: '#666', fontSize: 14 }}>
        Còn {remaining} task chưa xong
      </p>
    </div>
  );
}
`,
        },
      ],
    },
    exercise: {
      title: 'Bài tập cuối: Mở rộng Todo App',
      description:
        'Dựa trên ví dụ, thêm tính năng: (1) Nút "Xóa tất cả task đã xong"; (2) Hiển thị thời gian tạo task (dùng new Date().toLocaleTimeString() khi thêm); (3) Thêm priority (low/medium/high) bằng select, hiển thị bằng màu badge.',
      starter: {
        language: 'react',
        files: [
          {
            filename: '/App.tsx',
            code: `import { useEffect, useState } from 'react';

// Mở rộng type Todo để có createdAt và priority

// Copy code từ ví dụ và mở rộng thêm các tính năng trên

export default function App() {
  return <div>Todo App nâng cao</div>;
}
`,
          },
        ],
      },
    },
  },
];
