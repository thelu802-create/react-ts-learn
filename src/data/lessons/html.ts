import type { Lesson } from '../../types/lesson';

export const htmlLessons: Lesson[] = [
  {
    id: 'html-01-intro',
    category: 'html',
    order: 1,
    title: 'HTML là gì? Cấu trúc file đầu tiên',
    summary: 'Hiểu HTML là gì, vai trò trong web và cấu trúc cơ bản của một file HTML.',
    theory: `## HTML là gì?

**HTML** (HyperText Markup Language) là ngôn ngữ đánh dấu dùng để tạo ra **khung xương** của trang web. Mọi trang web bạn thấy đều bắt đầu từ HTML.

Hãy nghĩ đơn giản:
- **HTML** = khung nhà (tường, cửa, mái)
- **CSS** = trang trí (sơn, giấy dán tường)
- **JavaScript** = điện, nước, thiết bị thông minh

## Cấu trúc file HTML cơ bản

\`\`\`html
<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <title>Trang của tôi</title>
  </head>
  <body>
    <h1>Xin chào!</h1>
    <p>Đây là đoạn văn đầu tiên.</p>
  </body>
</html>
\`\`\`

**Giải thích từng phần:**
- \`<!DOCTYPE html>\`: khai báo đây là file HTML5
- \`<html>\`: thẻ gốc, bao tất cả nội dung
- \`<head>\`: chứa **thông tin trang** (không hiển thị) — title, charset, link CSS...
- \`<body>\`: chứa **nội dung hiển thị** cho người xem

## Thẻ HTML hoạt động thế nào?

Mỗi thẻ thường có dạng: \`<tên>nội dung</tên>\`

Ví dụ: \`<h1>Tiêu đề</h1>\` → hiện "Tiêu đề" cỡ lớn.

Một số thẻ tự đóng (không có nội dung bên trong): \`<br />\`, \`<hr />\`, \`<img />\`.`,
    example: {
      language: 'html',
      files: [
        {
          filename: 'index.html',
          code: `<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <title>Bài 1</title>
  </head>
  <body>
    <h1>Xin chào HTML!</h1>
    <p>Đây là trang web đầu tiên của mình.</p>
    <p>Hôm nay mình bắt đầu học lập trình web.</p>
  </body>
</html>
`,
        },
      ],
    },
    exercise: {
      title: 'Bài tập: Tạo trang giới thiệu bản thân',
      description:
        'Sửa file dưới đây để tạo một trang giới thiệu bản thân: tiêu đề là tên bạn, và 2-3 đoạn văn mô tả sở thích, công việc, mục tiêu.',
      hint: 'Dùng 1 thẻ <h1> cho tên, và nhiều thẻ <p> cho các đoạn văn.',
      starter: {
        language: 'html',
        files: [
          {
            filename: 'index.html',
            code: `<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <title>Giới thiệu</title>
  </head>
  <body>
    <!-- Viết code của bạn ở đây -->
  </body>
</html>
`,
          },
        ],
      },
    },
  },
  {
    id: 'html-02-text-tags',
    category: 'html',
    order: 2,
    title: 'Các thẻ văn bản',
    summary: 'Heading h1-h6, đoạn văn, in đậm, in nghiêng, xuống dòng, đường kẻ ngang.',
    theory: `## Heading — Tiêu đề

HTML có 6 cấp tiêu đề từ \`<h1>\` (lớn nhất) đến \`<h6>\` (nhỏ nhất).

\`\`\`html
<h1>Tiêu đề trang</h1>
<h2>Tiêu đề phụ</h2>
<h3>Tiêu đề nhỏ hơn</h3>
\`\`\`

**Quy tắc vàng:** mỗi trang nên có **duy nhất 1 thẻ \`<h1>\`** (tiêu đề chính). Các thẻ còn lại dùng theo cấp bậc hợp lý — đừng chọn h4 chỉ vì nó "trông đẹp".

## Đoạn văn \`<p>\`

\`<p>\` (paragraph) dùng cho các đoạn văn bản thường.

\`\`\`html
<p>Đây là một đoạn văn.</p>
<p>Đây là đoạn văn thứ hai.</p>
\`\`\`

## In đậm & in nghiêng

- \`<strong>\` — in **đậm** (nhấn mạnh về mặt ngữ nghĩa)
- \`<em>\` — in *nghiêng* (emphasis)

\`\`\`html
<p>Hôm nay <strong>rất quan trọng</strong>!</p>
<p>Mình <em>thật sự</em> thích học React.</p>
\`\`\`

> Lưu ý: có cặp cũ \`<b>\` và \`<i>\` nhưng nên ưu tiên \`<strong>\` và \`<em>\` vì mang ngữ nghĩa rõ ràng hơn (tốt cho SEO & accessibility).

## Xuống dòng & kẻ ngang

- \`<br />\` — xuống dòng
- \`<hr />\` — vẽ đường kẻ ngang chia phần

\`\`\`html
<p>Dòng 1<br />Dòng 2</p>
<hr />
<p>Phần mới bắt đầu ở đây.</p>
\`\`\``,
    example: {
      language: 'html',
      files: [
        {
          filename: 'index.html',
          code: `<!DOCTYPE html>
<html lang="vi">
  <body>
    <h1>Blog cá nhân</h1>
    <h2>Bài viết mới nhất</h2>
    <p>Hôm nay mình học về <strong>HTML</strong>.</p>
    <p>Mình cảm thấy <em>rất vui</em> khi tạo được trang đầu tiên.</p>
    <hr />
    <h2>Bài viết cũ</h2>
    <p>Dòng 1<br />Dòng 2 sau khi xuống hàng</p>
  </body>
</html>
`,
        },
      ],
    },
    exercise: {
      title: 'Bài tập: Viết bài blog nhỏ',
      description:
        'Tạo một bài blog có: 1 tiêu đề chính, 2 tiêu đề phụ, mỗi phần có 2 đoạn văn. Sử dụng <strong> và <em> ít nhất 1 lần mỗi thẻ. Có 1 đường kẻ <hr /> chia giữa hai phần.',
      starter: {
        language: 'html',
        files: [
          {
            filename: 'index.html',
            code: `<!DOCTYPE html>
<html lang="vi">
  <body>
    <!-- Viết bài blog của bạn ở đây -->
  </body>
</html>
`,
          },
        ],
      },
    },
  },
  {
    id: 'html-03-link-image',
    category: 'html',
    order: 3,
    title: 'Link và Hình ảnh',
    summary: 'Thẻ <a> để tạo liên kết và <img> để chèn ảnh.',
    theory: `## Link với thẻ \`<a>\`

Thẻ \`<a>\` (anchor) tạo liên kết tới trang khác.

\`\`\`html
<a href="https://google.com">Google</a>
\`\`\`

**Thuộc tính quan trọng:**
- \`href\` — đích đến (URL)
- \`target="_blank"\` — mở trong tab mới

\`\`\`html
<a href="https://github.com" target="_blank">GitHub (tab mới)</a>
\`\`\`

## Hình ảnh với \`<img>\`

\`\`\`html
<img src="https://picsum.photos/300/200" alt="Ảnh ngẫu nhiên" />
\`\`\`

**Thuộc tính:**
- \`src\` — đường dẫn ảnh (URL hoặc đường dẫn cục bộ)
- \`alt\` — mô tả ảnh (cho người khiếm thị và khi ảnh lỗi)
- \`width\`, \`height\` — kích thước (px)

> \`<img>\` là thẻ tự đóng — không có \`</img>\`.

## Đường dẫn tương đối vs tuyệt đối

- **Tuyệt đối:** \`https://example.com/logo.png\`
- **Tương đối:** \`./images/logo.png\` (so với file HTML hiện tại)

## Kết hợp link + ảnh

Có thể bọc \`<img>\` trong \`<a>\` để tạo ảnh có link:

\`\`\`html
<a href="https://google.com">
  <img src="https://picsum.photos/100" alt="Click để vào Google" />
</a>
\`\`\``,
    example: {
      language: 'html',
      files: [
        {
          filename: 'index.html',
          code: `<!DOCTYPE html>
<html lang="vi">
  <body>
    <h1>Trang có link và ảnh</h1>

    <p>Truy cập <a href="https://developer.mozilla.org" target="_blank">MDN</a> để đọc tài liệu.</p>

    <img src="https://picsum.photos/400/250" alt="Ảnh ngẫu nhiên" width="400" />

    <p>Click ảnh dưới để vào Google:</p>
    <a href="https://google.com" target="_blank">
      <img src="https://picsum.photos/200/100" alt="Google" />
    </a>
  </body>
</html>
`,
        },
      ],
    },
    exercise: {
      title: 'Bài tập: Trang bookmark yêu thích',
      description:
        'Tạo trang liệt kê 3 website bạn hay vào. Mỗi mục gồm: 1 ảnh (dùng https://picsum.photos/200 để có ảnh ngẫu nhiên), 1 link mở tab mới, 1 đoạn mô tả ngắn.',
      starter: {
        language: 'html',
        files: [
          {
            filename: 'index.html',
            code: `<!DOCTYPE html>
<html lang="vi">
  <body>
    <h1>Trang bookmark của tôi</h1>
    <!-- Viết 3 mục ở đây -->
  </body>
</html>
`,
          },
        ],
      },
    },
  },
  {
    id: 'html-04-lists-tables',
    category: 'html',
    order: 4,
    title: 'Danh sách và Bảng',
    summary: 'Danh sách có thứ tự, không thứ tự, và bảng dữ liệu.',
    theory: `## Danh sách không thứ tự \`<ul>\`

\`ul\` = unordered list — hiển thị dấu chấm tròn.

\`\`\`html
<ul>
  <li>Táo</li>
  <li>Cam</li>
  <li>Chuối</li>
</ul>
\`\`\`

## Danh sách có thứ tự \`<ol>\`

\`ol\` = ordered list — hiển thị số 1, 2, 3...

\`\`\`html
<ol>
  <li>Bật máy tính</li>
  <li>Mở trình duyệt</li>
  <li>Gõ URL</li>
</ol>
\`\`\`

## Danh sách lồng nhau

\`\`\`html
<ul>
  <li>Trái cây
    <ul>
      <li>Táo</li>
      <li>Cam</li>
    </ul>
  </li>
  <li>Rau</li>
</ul>
\`\`\`

## Bảng \`<table>\`

Bảng gồm:
- \`<table>\` — bao ngoài
- \`<tr>\` — dòng (table row)
- \`<th>\` — ô tiêu đề (in đậm, căn giữa)
- \`<td>\` — ô dữ liệu (table data)

\`\`\`html
<table border="1">
  <tr>
    <th>Tên</th>
    <th>Tuổi</th>
  </tr>
  <tr>
    <td>An</td>
    <td>20</td>
  </tr>
  <tr>
    <td>Bình</td>
    <td>22</td>
  </tr>
</table>
\`\`\`

> Trong thực tế ta dùng **CSS** để style bảng thay vì thuộc tính \`border\`, nhưng ở bài này dùng tạm để thấy đường viền.`,
    example: {
      language: 'html',
      files: [
        {
          filename: 'index.html',
          code: `<!DOCTYPE html>
<html lang="vi">
  <body>
    <h2>Todo hôm nay</h2>
    <ol>
      <li>Học HTML</li>
      <li>Học CSS</li>
      <li>Nghỉ ngơi</li>
    </ol>

    <h2>Điểm các môn</h2>
    <table border="1" cellpadding="8">
      <tr>
        <th>Môn</th>
        <th>Điểm</th>
      </tr>
      <tr>
        <td>Toán</td>
        <td>8.5</td>
      </tr>
      <tr>
        <td>Văn</td>
        <td>7.0</td>
      </tr>
    </table>
  </body>
</html>
`,
        },
      ],
    },
    exercise: {
      title: 'Bài tập: Thực đơn nhà hàng',
      description:
        'Tạo một trang thực đơn gồm: danh sách <ul> 3 món khai vị, danh sách <ol> 3 bước pha cà phê, và 1 bảng 3 cột (Tên món - Giá - Ghi chú) có ít nhất 3 dòng dữ liệu.',
      starter: {
        language: 'html',
        files: [
          {
            filename: 'index.html',
            code: `<!DOCTYPE html>
<html lang="vi">
  <body>
    <h1>Thực đơn nhà hàng</h1>
    <!-- Viết nội dung ở đây -->
  </body>
</html>
`,
          },
        ],
      },
    },
  },
  {
    id: 'html-05-div-span-attr',
    category: 'html',
    order: 5,
    title: 'div, span, class và id',
    summary: 'Thẻ nhóm nội dung và cách gắn nhãn để CSS/JS sử dụng.',
    theory: `## \`<div>\` và \`<span>\`

Đây là **hai thẻ quan trọng nhất** để tổ chức layout:

- \`<div>\` — khối (block). Mỗi \`<div>\` chiếm 1 dòng riêng. Dùng để **nhóm nhiều phần tử** lại.
- \`<span>\` — nội dòng (inline). Nằm chung hàng với text. Dùng để **style một phần nhỏ** của text.

\`\`\`html
<div>
  <p>Đây là một khối.</p>
  <p>Có nhiều thẻ bên trong.</p>
</div>

<p>Xin chào <span>bạn</span>!</p>
\`\`\`

Về mặt hiển thị mặc định, \`div\` và \`span\` không làm gì đặc biệt — nhưng chúng là nền tảng để ta gắn CSS vào.

## Thuộc tính \`class\` và \`id\`

Đây là **2 thuộc tính** được dùng nhiều nhất trong HTML.

- \`id\` — định danh **duy nhất** cho 1 phần tử trên trang (như số CMND của người)
- \`class\` — **nhóm** các phần tử có chung đặc điểm (như "học sinh lớp A")

\`\`\`html
<div id="header">Đây là header (duy nhất)</div>

<p class="warning">Cảnh báo 1</p>
<p class="warning">Cảnh báo 2</p>
<p class="info">Thông tin</p>
\`\`\`

**Quy tắc:**
- 1 trang chỉ có **một** phần tử với \`id\` cụ thể
- Nhiều phần tử có thể cùng \`class\`
- Một phần tử có thể có nhiều class, cách nhau bằng dấu cách: \`class="btn btn-primary"\`

## Tại sao cần class/id?

Khi học CSS và JavaScript, ta cần "chọn" đúng phần tử để tác động. \`class\`/\`id\` giúp ta làm điều đó:

\`\`\`css
/* Chọn tất cả phần tử có class "warning" và tô đỏ */
.warning { color: red; }

/* Chọn phần tử có id "header" */
#header { background: black; }
\`\`\``,
    example: {
      language: 'html',
      files: [
        {
          filename: 'index.html',
          code: `<!DOCTYPE html>
<html lang="vi">
  <body>
    <div id="header">
      <h1>Trang chủ</h1>
    </div>

    <div class="card">
      <h2>Tin 1</h2>
      <p>Nội dung tin thứ nhất.</p>
    </div>

    <div class="card">
      <h2>Tin 2</h2>
      <p>Nội dung tin thứ hai.</p>
    </div>

    <p>Giá: <span class="price">150.000đ</span></p>
  </body>
</html>
`,
        },
      ],
    },
    exercise: {
      title: 'Bài tập: Danh sách sản phẩm',
      description:
        'Tạo trang có id="page" bao ngoài, bên trong chứa 3 div class="product". Mỗi product có: tên sản phẩm (h3), giá nằm trong <span class="price">, và 1 đoạn mô tả.',
      starter: {
        language: 'html',
        files: [
          {
            filename: 'index.html',
            code: `<!DOCTYPE html>
<html lang="vi">
  <body>
    <!-- Viết code ở đây -->
  </body>
</html>
`,
          },
        ],
      },
    },
  },
  {
    id: 'html-06-form',
    category: 'html',
    order: 6,
    title: 'Form — Thu thập dữ liệu từ người dùng',
    summary: 'input, label, button, select, textarea.',
    theory: `## Form là gì?

Form là cách HTML cho phép **người dùng nhập dữ liệu** (đăng nhập, đăng ký, tìm kiếm...).

\`\`\`html
<form>
  <label for="name">Tên:</label>
  <input id="name" type="text" />

  <button type="submit">Gửi</button>
</form>
\`\`\`

## \`<input>\` và các type

\`<input>\` là thẻ đa năng nhất, thay đổi qua thuộc tính \`type\`:

\`\`\`html
<input type="text" placeholder="Họ tên" />
<input type="email" placeholder="Email" />
<input type="password" placeholder="Mật khẩu" />
<input type="number" />
<input type="date" />
<input type="checkbox" /> Đồng ý điều khoản
<input type="radio" name="gender" value="male" /> Nam
<input type="radio" name="gender" value="female" /> Nữ
\`\`\`

## \`<label>\` — Nhãn cho input

\`<label>\` giúp người dùng click vào label để focus vào input. Kết nối bằng \`for\`=\`id\`:

\`\`\`html
<label for="email">Email:</label>
<input id="email" type="email" />
\`\`\`

> Best practice: **luôn có \`<label>\`** cho mỗi input, tốt cho accessibility.

## \`<button>\`

\`\`\`html
<button type="submit">Gửi</button>
<button type="button">Nút thường</button>
<button type="reset">Xóa form</button>
\`\`\`

## \`<select>\` — Dropdown

\`\`\`html
<select>
  <option value="hn">Hà Nội</option>
  <option value="hcm">TP. HCM</option>
  <option value="dn">Đà Nẵng</option>
</select>
\`\`\`

## \`<textarea>\` — Vùng text nhiều dòng

\`\`\`html
<textarea rows="4" cols="30" placeholder="Nhận xét..."></textarea>
\`\`\``,
    example: {
      language: 'html',
      files: [
        {
          filename: 'index.html',
          code: `<!DOCTYPE html>
<html lang="vi">
  <body>
    <h2>Đăng ký</h2>
    <form>
      <div>
        <label for="name">Họ tên:</label>
        <input id="name" type="text" placeholder="Nguyễn Văn A" />
      </div>

      <div>
        <label for="email">Email:</label>
        <input id="email" type="email" />
      </div>

      <div>
        <label for="age">Tuổi:</label>
        <input id="age" type="number" min="1" max="120" />
      </div>

      <div>
        <label for="city">Thành phố:</label>
        <select id="city">
          <option value="hn">Hà Nội</option>
          <option value="hcm">TP. HCM</option>
        </select>
      </div>

      <div>
        <label>
          <input type="checkbox" /> Tôi đồng ý điều khoản
        </label>
      </div>

      <button type="submit">Đăng ký</button>
    </form>
  </body>
</html>
`,
        },
      ],
    },
    exercise: {
      title: 'Bài tập: Form liên hệ',
      description:
        'Tạo form liên hệ gồm: họ tên (text), email (email), số điện thoại (tel), chủ đề (select với 3 lựa chọn), nội dung (textarea), và nút gửi. Mỗi trường phải có <label>.',
      starter: {
        language: 'html',
        files: [
          {
            filename: 'index.html',
            code: `<!DOCTYPE html>
<html lang="vi">
  <body>
    <h1>Liên hệ</h1>
    <form>
      <!-- Viết các trường ở đây -->
    </form>
  </body>
</html>
`,
          },
        ],
      },
    },
  },
  {
    id: 'html-07-semantic',
    category: 'html',
    order: 7,
    title: 'Semantic HTML',
    summary: 'header, nav, main, section, article, footer — HTML có ngữ nghĩa.',
    theory: `## Semantic HTML là gì?

**Semantic** = "có ý nghĩa". Thay vì dùng \`<div>\` cho mọi thứ, HTML5 cung cấp các thẻ **có ngữ nghĩa rõ ràng**:

| Thẻ | Dùng cho |
|-----|----------|
| \`<header>\` | Đầu trang / đầu section (logo, menu) |
| \`<nav>\` | Menu điều hướng |
| \`<main>\` | Nội dung chính của trang |
| \`<section>\` | Một phần của trang |
| \`<article>\` | Nội dung độc lập (bài viết, bình luận) |
| \`<aside>\` | Nội dung phụ (sidebar) |
| \`<footer>\` | Cuối trang (copyright, liên hệ) |

## Tại sao cần semantic HTML?

1. **SEO** — Google hiểu trang tốt hơn
2. **Accessibility** — Người khiếm thị dùng screen reader điều hướng dễ hơn
3. **Dễ đọc code** — \`<nav>\` rõ nghĩa hơn \`<div class="nav">\`

## Ví dụ layout phổ biến

\`\`\`html
<body>
  <header>
    <h1>Blog của tôi</h1>
    <nav>
      <a href="/">Trang chủ</a>
      <a href="/about">Giới thiệu</a>
    </nav>
  </header>

  <main>
    <article>
      <h2>Bài viết 1</h2>
      <p>Nội dung...</p>
    </article>
    <article>
      <h2>Bài viết 2</h2>
      <p>Nội dung...</p>
    </article>
  </main>

  <aside>
    <h3>Bài viết nổi bật</h3>
    <ul>
      <li>Bài A</li>
      <li>Bài B</li>
    </ul>
  </aside>

  <footer>
    <p>© 2026 Blog của tôi</p>
  </footer>
</body>
\`\`\`

## Khi nào vẫn dùng \`<div>\`?

Khi bạn **chỉ cần nhóm** các phần tử để style bằng CSS mà không có ý nghĩa đặc biệt. Ví dụ: \`<div class="container">\`, \`<div class="row">\`.`,
    example: {
      language: 'html',
      files: [
        {
          filename: 'index.html',
          code: `<!DOCTYPE html>
<html lang="vi">
  <body>
    <header>
      <h1>📝 Tech Blog</h1>
      <nav>
        <a href="#">Trang chủ</a> |
        <a href="#">Bài viết</a> |
        <a href="#">Liên hệ</a>
      </nav>
    </header>

    <main>
      <article>
        <h2>Học React trong 30 ngày</h2>
        <p>Đăng ngày: 22/04/2026</p>
        <p>React là một thư viện JavaScript rất phổ biến...</p>
      </article>

      <article>
        <h2>TypeScript cho người mới</h2>
        <p>Đăng ngày: 20/04/2026</p>
        <p>TypeScript là phiên bản JavaScript có kiểu...</p>
      </article>
    </main>

    <aside>
      <h3>Xem thêm</h3>
      <ul>
        <li>Tips học code</li>
        <li>Lộ trình fullstack</li>
      </ul>
    </aside>

    <footer>
      <p>© 2026 - Tech Blog. All rights reserved.</p>
    </footer>
  </body>
</html>
`,
        },
      ],
    },
    exercise: {
      title: 'Bài tập: Trang cá nhân theo semantic HTML',
      description:
        'Tạo một trang portfolio cá nhân có đủ: <header> (tên + nav với 3 link), <main> chứa 2 <section> (Giới thiệu, Kỹ năng), mỗi section có <h2> và nội dung, và <footer> có thông tin liên hệ.',
      starter: {
        language: 'html',
        files: [
          {
            filename: 'index.html',
            code: `<!DOCTYPE html>
<html lang="vi">
  <body>
    <!-- Dùng semantic HTML để xây dựng trang -->
  </body>
</html>
`,
          },
        ],
      },
    },
  },
];
