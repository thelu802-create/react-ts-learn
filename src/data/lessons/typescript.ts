import type { Lesson } from '../../types/lesson';

export const tsLessons: Lesson[] = [
  {
    id: 'ts-01-intro',
    category: 'typescript',
    order: 1,
    title: 'TypeScript là gì? Types cơ bản',
    summary: 'Tại sao cần TS, và các kiểu cơ bản: string, number, boolean.',
    theory: `## TypeScript là gì?

**TypeScript** (TS) là **JavaScript có thêm kiểu dữ liệu** (types). Do Microsoft phát triển. Code TS được biên dịch về JavaScript để chạy.

## Tại sao JS chưa đủ?

JavaScript thuần không kiểm tra kiểu:

\`\`\`js
function add(a, b) {
  return a + b;
}

add(5, 3);      // 8 ✅
add("5", 3);    // "53" ❌ bug thầm lặng
add(5);         // NaN ❌ không báo lỗi
\`\`\`

Với TypeScript:

\`\`\`ts
function add(a: number, b: number): number {
  return a + b;
}

add(5, 3);    // ✅
add("5", 3);  // ❌ lỗi LUÔN ở editor, trước khi chạy
\`\`\`

> TS phát hiện lỗi **ngay khi bạn đang gõ code** — tiết kiệm hàng giờ debug.

## Các type cơ bản

### \`string\`
\`\`\`ts
const name: string = "An";
const greeting: string = \`Xin chào \${name}\`;
\`\`\`

### \`number\`
\`\`\`ts
const age: number = 25;
const price: number = 99.99;
\`\`\`

### \`boolean\`
\`\`\`ts
const isActive: boolean = true;
const isAdmin: boolean = false;
\`\`\`

## Type inference — TS tự đoán

Bạn **không cần luôn viết type**, TS tự suy luận:

\`\`\`ts
let name = "An";    // TS biết name là string
name = 123;         // ❌ lỗi — không thể gán number
\`\`\`

> Best practice: để TS tự suy luận khi có thể, chỉ viết type khi cần rõ ràng (ví dụ: param của function).

## \`let\` vs \`const\`

- \`const\` — không thể gán lại (dùng 90% thời gian)
- \`let\` — có thể gán lại

\`\`\`ts
const PI = 3.14;
let count = 0;
count = count + 1;  // ok
\`\`\``,
    example: {
      language: 'typescript',
      files: [
        {
          filename: 'index.ts',
          code: `// Types cơ bản
const name: string = "An";
const age: number = 20;
const isStudent: boolean = true;

// Function có type
function greet(person: string, years: number): string {
  return \`Xin chào \${person}, bạn \${years} tuổi!\`;
}

console.log(greet(name, age));
console.log("Đang là sinh viên:", isStudent);

// Type inference — TS tự biết đây là string
const city = "Hà Nội";
console.log(city.toUpperCase());
`,
        },
      ],
    },
    exercise: {
      title: 'Bài tập: Function tính BMI',
      description:
        'Viết function calculateBMI(weight: number, height: number): number. Công thức: BMI = weight / (height * height). Sau đó gọi thử với cân nặng 60kg và chiều cao 1.65m và in kết quả.',
      starter: {
        language: 'typescript',
        files: [
          {
            filename: 'index.ts',
            code: `// Viết function ở đây

// Gọi thử
`,
          },
        ],
      },
    },
  },
  {
    id: 'ts-02-array-object',
    category: 'typescript',
    order: 2,
    title: 'Array, Object, Tuple',
    summary: 'Kiểu mảng, object, tuple và so sánh any với unknown.',
    theory: `## Array — Mảng

Hai cách khai báo:

\`\`\`ts
const numbers: number[] = [1, 2, 3];
const names: string[] = ["An", "Bình"];

// Cách khác (generic): Array<T>
const scores: Array<number> = [85, 90, 78];
\`\`\`

Mảng hỗn hợp:
\`\`\`ts
const mixed: (string | number)[] = ["An", 20, "Bình", 25];
\`\`\`

## Object

\`\`\`ts
const user: { name: string; age: number } = {
  name: "An",
  age: 20,
};
\`\`\`

Object với property tùy chọn (\`?\`):
\`\`\`ts
const user: { name: string; age?: number } = {
  name: "An",
  // age không cần có
};
\`\`\`

Thường ta đặt tên cho object type bằng \`interface\` (học bài sau).

## Tuple — Mảng có số phần tử và type cố định

\`\`\`ts
const point: [number, number] = [10, 20];
const user: [string, number] = ["An", 20];

// point[0] là number, point[1] là number
\`\`\`

Khác mảng thường: tuple có **số phần tử cố định** và **type từng vị trí khác nhau**.

## \`any\` vs \`unknown\`

### \`any\` — "bất kỳ thứ gì"
\`\`\`ts
let x: any = 5;
x = "hello";
x.foo.bar.baz();  // TS không báo lỗi — NGUY HIỂM
\`\`\`

\`any\` = **tắt type checking**. Hạn chế dùng — mất hết lợi ích của TS.

### \`unknown\` — "không biết là gì"
\`\`\`ts
let x: unknown = 5;
x.toFixed();     // ❌ lỗi — phải check type trước

if (typeof x === "number") {
  x.toFixed();   // ✅ bên trong if, TS biết x là number
}
\`\`\`

\`unknown\` **an toàn hơn** \`any\` vì buộc ta kiểm tra type trước khi dùng.

> Quy tắc: tránh \`any\` khi có thể, dùng \`unknown\` nếu thực sự chưa biết kiểu.`,
    example: {
      language: 'typescript',
      files: [
        {
          filename: 'index.ts',
          code: `// Array
const fruits: string[] = ["táo", "cam", "chuối"];
fruits.push("xoài");
console.log("Hoa quả:", fruits);

// Array of numbers
const scores: number[] = [85, 90, 78, 92];
const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
console.log("Điểm trung bình:", avg);

// Object
const user: { name: string; age: number; email?: string } = {
  name: "An",
  age: 22,
};
console.log(user.name);

// Tuple
const point: [number, number] = [10, 20];
console.log(\`Điểm: x=\${point[0]}, y=\${point[1]}\`);

// Mixed array
const data: (string | number)[] = ["Tên", 123, "An", 25];
console.log(data);
`,
        },
      ],
    },
    exercise: {
      title: 'Bài tập: Quản lý danh sách học sinh',
      description:
        'Tạo một mảng students chứa 3 object, mỗi object có: name (string), age (number), score (number). Viết function getAverageScore(students): number trả về điểm trung bình.',
      starter: {
        language: 'typescript',
        files: [
          {
            filename: 'index.ts',
            code: `// Khai báo kiểu object cho học sinh (dùng type literal)

// Mảng học sinh

// Function tính điểm trung bình

// Gọi thử
`,
          },
        ],
      },
    },
  },
  {
    id: 'ts-03-interface-type',
    category: 'typescript',
    order: 3,
    title: 'Interface & Type alias',
    summary: 'Đặt tên cho kiểu dữ liệu để tái sử dụng.',
    theory: `## Interface

\`interface\` dùng để **đặt tên cho một cấu trúc object**, tái sử dụng nhiều chỗ:

\`\`\`ts
interface User {
  name: string;
  age: number;
  email?: string;   // optional
}

const user1: User = { name: "An", age: 20 };
const user2: User = { name: "Bình", age: 22, email: "binh@example.com" };

function printUser(u: User) {
  console.log(\`\${u.name}, \${u.age} tuổi\`);
}
\`\`\`

## Readonly

\`readonly\` = chỉ đọc, không được gán lại:

\`\`\`ts
interface Config {
  readonly apiUrl: string;
}

const cfg: Config = { apiUrl: "https://api.com" };
cfg.apiUrl = "abc"; // ❌ lỗi
\`\`\`

## Kế thừa interface

\`\`\`ts
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const d: Dog = { name: "Milu", breed: "Poodle" };
\`\`\`

## Type alias

Tương tự interface nhưng linh hoạt hơn — có thể đặt tên cho **bất kỳ type gì**:

\`\`\`ts
type ID = string | number;
type User = {
  name: string;
  age: number;
};
type Coordinates = [number, number];
\`\`\`

## Interface vs Type — Chọn cái nào?

| Trường hợp | Nên dùng |
|-----------|----------|
| Object | cả hai đều được (\`interface\` phổ biến hơn) |
| Union type \`a &#124; b\` | \`type\` |
| Tuple | \`type\` |
| Thêm property sau | \`interface\` (có thể extend/declaration merging) |

**Quy tắc đơn giản:** dùng \`interface\` cho object, dùng \`type\` cho union/tuple/primitive alias.

## Nested object

\`\`\`ts
interface Address {
  city: string;
  street: string;
}

interface User {
  name: string;
  address: Address;
}

const u: User = {
  name: "An",
  address: { city: "HN", street: "Láng Hạ" },
};
\`\`\``,
    example: {
      language: 'typescript',
      files: [
        {
          filename: 'index.ts',
          code: `interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
  tags?: string[];
}

const phone: Product = {
  id: 1,
  name: "iPhone 15",
  price: 25000000,
  inStock: true,
  tags: ["new", "popular"],
};

const laptop: Product = {
  id: 2,
  name: "MacBook Air",
  price: 32000000,
  inStock: false,
};

function describe(p: Product): string {
  const stockText = p.inStock ? "còn hàng" : "hết hàng";
  return \`\${p.name} — \${p.price.toLocaleString()}đ (\${stockText})\`;
}

console.log(describe(phone));
console.log(describe(laptop));

// Type alias
type Status = "pending" | "active" | "done";
const s: Status = "active";
console.log("Trạng thái:", s);
`,
        },
      ],
    },
    exercise: {
      title: 'Bài tập: Interface Book',
      description:
        'Tạo interface Book gồm: title (string), author (string), pages (number), published (boolean), genres (string[] optional). Tạo 2 object book tuân theo interface này và viết function getBookInfo(book: Book): string.',
      starter: {
        language: 'typescript',
        files: [
          {
            filename: 'index.ts',
            code: `// Khai báo interface Book

// Tạo 2 object book

// Viết function getBookInfo
`,
          },
        ],
      },
    },
  },
  {
    id: 'ts-04-function-union',
    category: 'typescript',
    order: 4,
    title: 'Function types, Optional params, Union',
    summary: 'Kiểu cho function, tham số tùy chọn, union type, type guard.',
    theory: `## Function types

Định nghĩa kiểu cho function đầy đủ:

\`\`\`ts
function add(a: number, b: number): number {
  return a + b;
}

// Arrow function
const multiply = (a: number, b: number): number => a * b;
\`\`\`

## Tham số tùy chọn (\`?\`)

\`\`\`ts
function greet(name: string, greeting?: string): string {
  return \`\${greeting ?? "Xin chào"}, \${name}!\`;
}

greet("An");                 // "Xin chào, An!"
greet("An", "Good morning"); // "Good morning, An!"
\`\`\`

> \`??\` là **nullish coalescing** — dùng giá trị bên phải nếu bên trái là \`null\` hoặc \`undefined\`.

## Giá trị mặc định

\`\`\`ts
function greet(name: string, greeting: string = "Xin chào"): string {
  return \`\${greeting}, \${name}!\`;
}
\`\`\`

## Rest parameters

\`\`\`ts
function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3);       // 6
sum(1, 2, 3, 4, 5); // 15
\`\`\`

## Union type — \`|\`

Cho phép một biến có **một trong nhiều type**:

\`\`\`ts
type ID = string | number;

function printId(id: ID) {
  console.log("ID:", id);
}

printId(123);     // ok
printId("abc");   // ok
printId(true);    // ❌ lỗi
\`\`\`

## Type guard — Thu hẹp type

Khi dùng union, TS chỉ cho phép truy cập thuộc tính **có ở cả hai nhánh**. Muốn dùng thuộc tính riêng, phải kiểm tra type:

\`\`\`ts
function formatId(id: string | number): string {
  if (typeof id === "string") {
    return id.toUpperCase();  // ✅ biết chắc là string
  }
  return id.toFixed(2);       // ✅ còn lại là number
}
\`\`\`

## Literal types

Có thể union các giá trị cụ thể (không chỉ types):

\`\`\`ts
type Direction = "up" | "down" | "left" | "right";

function move(dir: Direction) { /* ... */ }

move("up");    // ✅
move("down");  // ✅
move("back");  // ❌ không phải 1 trong 4
\`\`\`

Rất hữu ích cho enum-like values.

## Function không trả gì — \`void\`

\`\`\`ts
function log(msg: string): void {
  console.log(msg);
  // không return
}
\`\`\``,
    example: {
      language: 'typescript',
      files: [
        {
          filename: 'index.ts',
          code: `// Union type
type Status = "loading" | "success" | "error";

function getStatusMessage(status: Status): string {
  if (status === "loading") return "⏳ Đang tải...";
  if (status === "success") return "✅ Thành công!";
  return "❌ Lỗi!";
}

console.log(getStatusMessage("loading"));
console.log(getStatusMessage("success"));
console.log(getStatusMessage("error"));

// Optional param
function createUser(name: string, email?: string) {
  return { name, email: email ?? "chưa có" };
}

console.log(createUser("An"));
console.log(createUser("Bình", "binh@mail.com"));

// Rest params
function sum(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}
console.log("Tổng:", sum(1, 2, 3, 4, 5));

// Type guard
function format(value: string | number): string {
  if (typeof value === "string") return value.toUpperCase();
  return value.toFixed(2);
}
console.log(format("hello"));
console.log(format(3.14159));
`,
        },
      ],
    },
    exercise: {
      title: 'Bài tập: Form validation',
      description:
        'Viết function validateInput(value: string | number, type: "email" | "age"): boolean. Nếu type="email" thì value phải là string chứa "@". Nếu type="age" thì value phải là number từ 0-120.',
      starter: {
        language: 'typescript',
        files: [
          {
            filename: 'index.ts',
            code: `// Viết function validateInput ở đây

// Test
// console.log(validateInput("a@b.com", "email")); // true
// console.log(validateInput(25, "age"));          // true
// console.log(validateInput(200, "age"));         // false
`,
          },
        ],
      },
    },
  },
  {
    id: 'ts-05-generics',
    category: 'typescript',
    order: 5,
    title: 'Generics — Type như tham số',
    summary: 'Tái sử dụng logic cho nhiều type khác nhau mà vẫn giữ type safety.',
    theory: `## Vấn đề — Khi nào cần Generics?

Giả sử viết function "lấy phần tử đầu tiên của mảng":

\`\`\`ts
function firstNumber(arr: number[]): number {
  return arr[0];
}

function firstString(arr: string[]): string {
  return arr[0];
}
// ... tiếp tục cho mọi kiểu? 😱
\`\`\`

Dùng \`any\`?
\`\`\`ts
function first(arr: any[]): any {
  return arr[0];
}
const x = first([1, 2, 3]);   // x: any — mất type safety
x.toUpperCase();              // TS không báo lỗi
\`\`\`

## Giải pháp — Generics

Dùng **type parameter** (thường đặt là \`T\`):

\`\`\`ts
function first<T>(arr: T[]): T {
  return arr[0];
}

const a = first([1, 2, 3]);        // a: number
const b = first(["a", "b"]);       // b: string
const c = first<boolean>([true]);  // gọi tường minh
\`\`\`

TS **tự động suy ra** \`T\` từ tham số truyền vào.

## Nhiều type parameter

\`\`\`ts
function pair<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}

const p = pair("An", 20);  // [string, number]
\`\`\`

## Generic constraints — \`extends\`

Ràng buộc \`T\` phải có thuộc tính nhất định:

\`\`\`ts
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(item: T): void {
  console.log(item.length);
}

logLength("hello");        // ✅ string có length
logLength([1, 2, 3]);      // ✅ array có length
logLength(123);            // ❌ number không có length
\`\`\`

## Generic với interface

\`\`\`ts
interface ApiResponse<T> {
  data: T;
  success: boolean;
}

const userResponse: ApiResponse<{ name: string }> = {
  data: { name: "An" },
  success: true,
};

const numberResponse: ApiResponse<number> = {
  data: 42,
  success: true,
};
\`\`\`

## Ứng dụng thực tế — React sau này

Bạn sẽ gặp \`useState<T>\`, \`useRef<T>\`, \`Array<T>\` rất nhiều trong React TypeScript:

\`\`\`ts
const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<User | null>(null);
\`\`\``,
    example: {
      language: 'typescript',
      files: [
        {
          filename: 'index.ts',
          code: `// Generic function
function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

console.log(first([10, 20, 30]));      // 10
console.log(first(["a", "b", "c"]));   // "a"

// Nhiều type parameter
function pair<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}

const p1 = pair("An", 20);
const p2 = pair(true, [1, 2, 3]);
console.log(p1, p2);

// Generic interface
interface Box<T> {
  value: T;
  label: string;
}

const intBox: Box<number> = { value: 42, label: "Số nguyên" };
const strBox: Box<string> = { value: "hello", label: "Chuỗi" };

console.log(intBox.label, intBox.value);
console.log(strBox.label, strBox.value);

// Generic với constraint
function longest<T extends { length: number }>(a: T, b: T): T {
  return a.length >= b.length ? a : b;
}

console.log(longest("hello", "hi"));            // "hello"
console.log(longest([1, 2, 3], [1, 2, 3, 4]));  // [1,2,3,4]
`,
        },
      ],
    },
    exercise: {
      title: 'Bài tập: Generic function filter',
      description:
        'Viết generic function filterBy<T>(arr: T[], predicate: (item: T) => boolean): T[]. Test với mảng số (giữ số chẵn) và mảng string (giữ string có độ dài > 3).',
      starter: {
        language: 'typescript',
        files: [
          {
            filename: 'index.ts',
            code: `// Viết generic function filterBy ở đây

// Test với số
// const evens = filterBy([1,2,3,4,5,6], n => n % 2 === 0);
// console.log(evens); // [2,4,6]

// Test với string
// const long = filterBy(["a","ab","abc","abcd"], s => s.length > 3);
// console.log(long); // ["abcd"]
`,
          },
        ],
      },
    },
  },
];
