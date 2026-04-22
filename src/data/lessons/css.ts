import type { Lesson } from '../../types/lesson';

export const cssLessons: Lesson[] = [
  {
    id: 'css-01-intro',
    category: 'css',
    order: 1,
    title: 'CSS là gì? 3 cách gắn CSS',
    summary: 'Hiểu CSS, 3 cách gắn CSS vào HTML, cú pháp cơ bản.',
    theory: `## CSS là gì?

**CSS** (Cascading Style Sheets) là ngôn ngữ **trang trí** cho HTML: màu sắc, font, kích thước, bố cục...

> HTML nói "có gì trên trang", CSS nói "trông nó thế nào".

## Cú pháp CSS

\`\`\`css
selector {
  property: value;
  property: value;
}
\`\`\`

Ví dụ:
\`\`\`css
p {
  color: red;
  font-size: 18px;
}
\`\`\`
→ Tất cả thẻ \`<p>\` sẽ có chữ màu đỏ, cỡ 18px.

## 3 cách gắn CSS vào HTML

### 1. Inline — viết thẳng trong thẻ
\`\`\`html
<p style="color: red;">Chữ đỏ</p>
\`\`\`
❌ Không nên dùng nhiều — rối, khó bảo trì.

### 2. Internal — trong thẻ \`<style>\` ở \`<head>\`
\`\`\`html
<head>
  <style>
    p { color: red; }
  </style>
</head>
\`\`\`
✅ Dùng khi style chỉ áp dụng cho 1 trang.

### 3. External — file \`.css\` riêng (khuyến nghị)
\`\`\`html
<head>
  <link rel="stylesheet" href="style.css" />
</head>
\`\`\`

Và trong \`style.css\`:
\`\`\`css
p { color: red; }
\`\`\`

✅ Dùng trong thực tế — tách HTML và CSS, tái sử dụng được cho nhiều trang.

## "Cascading" là gì?

CSS áp dụng theo thứ tự, và quy tắc sau **ghi đè** quy tắc trước (nếu cùng mức độ cụ thể). Ta sẽ học kỹ ở bài selector.`,
    example: {
      language: 'css',
      files: [
        {
          filename: 'index.html',
          code: `<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Tiêu đề</h1>
    <p>Đoạn văn được style bằng CSS.</p>
    <p>Một đoạn khác.</p>
  </body>
</html>
`,
        },
        {
          filename: 'style.css',
          code: `h1 {
  color: steelblue;
}

p {
  color: #555;
  font-size: 18px;
}
`,
        },
      ],
    },
    exercise: {
      title: 'Bài tập: Trang với CSS cơ bản',
      description:
        'Làm cho h1 có màu đỏ, tất cả p có màu xám (#666) và cỡ chữ 16px. Thêm thuộc tính line-height: 1.6 cho p để dễ đọc.',
      starter: {
        language: 'css',
        files: [
          {
            filename: 'index.html',
            code: `<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Bài viết</h1>
    <p>Đoạn văn 1. Hôm nay mình học CSS, cảm thấy rất thú vị.</p>
    <p>Đoạn văn 2. Học thêm về selector sẽ tốt hơn.</p>
  </body>
</html>
`,
          },
          {
            filename: 'style.css',
            code: `/* Viết CSS ở đây */
`,
          },
        ],
      },
    },
  },
  {
    id: 'css-02-selectors',
    category: 'css',
    order: 2,
    title: 'Selectors — Chọn phần tử',
    summary: 'Tag, class, id, descendant, pseudo-class.',
    theory: `## Các loại selector

### 1. Tag selector — chọn theo tên thẻ
\`\`\`css
p { color: red; }       /* tất cả <p> */
h1 { font-size: 32px; } /* tất cả <h1> */
\`\`\`

### 2. Class selector — dấu chấm \`.\`
\`\`\`css
.warning { color: red; }
.btn { background: blue; }
\`\`\`
Áp dụng cho: \`<p class="warning">\`, \`<button class="btn">\`...

### 3. ID selector — dấu thăng \`#\`
\`\`\`css
#header { background: black; }
\`\`\`
Áp dụng cho: \`<div id="header">\`.

> 👉 Trong thực tế ta dùng **class** nhiều hơn id vì dễ tái sử dụng.

### 4. Universal selector — dấu \`*\`
\`\`\`css
* { margin: 0; padding: 0; }
\`\`\`
Chọn **tất cả** phần tử. Hay dùng để reset CSS.

### 5. Descendant selector — chọn con cháu
\`\`\`css
div p { color: blue; }
\`\`\`
Chọn tất cả \`<p>\` nằm bên trong \`<div>\`.

### 6. Nhóm selector
\`\`\`css
h1, h2, h3 { color: navy; }
\`\`\`
Áp dụng cho cả 3 thẻ.

## Pseudo-class — Trạng thái

Pseudo-class bắt đầu bằng \`:\`, áp dụng khi phần tử ở **trạng thái cụ thể**:

\`\`\`css
a:hover       { color: red; }      /* khi rê chuột */
button:hover  { background: blue; }
input:focus   { border-color: green; } /* khi click vào */
li:first-child { font-weight: bold; }  /* phần tử đầu tiên */
li:last-child  { color: gray; }        /* phần tử cuối */
\`\`\`

## Độ ưu tiên (specificity)

Khi nhiều rule áp dụng cho cùng phần tử, CSS ưu tiên theo:

1. \`id\` (cao nhất)
2. \`class\`, \`pseudo-class\`
3. \`tag\` (thấp nhất)

Ví dụ:
\`\`\`css
p { color: red; }       /* thấp */
.note { color: blue; }  /* cao hơn */
#special { color: gold; } /* cao nhất */
\`\`\`
→ \`<p id="special" class="note">Xin chào</p>\` sẽ có màu **gold**.`,
    example: {
      language: 'css',
      files: [
        {
          filename: 'index.html',
          code: `<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Selectors</h1>
    <p>Đoạn thường</p>
    <p class="warning">Đoạn warning</p>
    <div>
      <p>Đoạn trong div</p>
    </div>
    <a href="#">Rê chuột vào đây</a>
    <ul>
      <li>Mục 1</li>
      <li>Mục 2</li>
      <li>Mục 3</li>
    </ul>
  </body>
</html>
`,
        },
        {
          filename: 'style.css',
          code: `p { color: #333; }

.warning {
  color: white;
  background: crimson;
  padding: 8px;
}

div p {
  color: darkgreen;
  font-style: italic;
}

a:hover {
  color: red;
  font-weight: bold;
}

li:first-child { color: blue; }
li:last-child  { color: gray; }
`,
        },
      ],
    },
    exercise: {
      title: 'Bài tập: Style menu bằng selector',
      description:
        'Style sao cho: tất cả link có màu xanh dương, khi hover chuyển sang đỏ; mục .active có chữ in đậm; mục đầu tiên của ul có viền bên trái 3px solid navy.',
      starter: {
        language: 'css',
        files: [
          {
            filename: 'index.html',
            code: `<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <ul>
      <li><a href="#" class="active">Trang chủ</a></li>
      <li><a href="#">Giới thiệu</a></li>
      <li><a href="#">Liên hệ</a></li>
    </ul>
  </body>
</html>
`,
          },
          {
            filename: 'style.css',
            code: `/* Viết CSS ở đây */
`,
          },
        ],
      },
    },
  },
  {
    id: 'css-03-color-font',
    category: 'css',
    order: 3,
    title: 'Màu sắc, Font, Text',
    summary: 'color, background, font-family, font-size, text-align...',
    theory: `## Màu sắc

4 cách khai báo màu:

\`\`\`css
color: red;                        /* tên */
color: #ff0000;                    /* hex 6 số */
color: #f00;                       /* hex 3 số (viết tắt) */
color: rgb(255, 0, 0);             /* red, green, blue */
color: rgba(255, 0, 0, 0.5);       /* thêm alpha (trong suốt) */
\`\`\`

> Các giá trị rgb đi từ 0–255. Alpha từ 0 (trong suốt) đến 1 (đặc).

**\`background-color\`** dùng cho màu nền:
\`\`\`css
background-color: #f0f0f0;
\`\`\`

## Font

\`\`\`css
body {
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  font-weight: normal;  /* normal, bold, 100-900 */
  font-style: italic;   /* normal, italic */
  line-height: 1.5;
}
\`\`\`

**\`font-family\`**: có thể list nhiều font, trình duyệt dùng font đầu tiên có sẵn:
\`\`\`css
font-family: 'Inter', 'Helvetica', Arial, sans-serif;
\`\`\`

**Đơn vị \`font-size\`**:
- \`px\` — pixel cố định (16px)
- \`em\` — tương đối với phần tử cha (1.2em = 1.2 lần cỡ chữ cha)
- \`rem\` — tương đối với \`<html>\` (1rem = 16px mặc định)

## Text

\`\`\`css
text-align: left | center | right | justify;
text-decoration: none | underline | line-through;
text-transform: uppercase | lowercase | capitalize;
letter-spacing: 2px;
\`\`\`

## Shorthand \`font\`

\`\`\`css
font: italic bold 16px/1.5 Arial, sans-serif;
/*     style  weight size/line-height  family */
\`\`\``,
    example: {
      language: 'css',
      files: [
        {
          filename: 'index.html',
          code: `<!DOCTYPE html>
<html>
  <head><link rel="stylesheet" href="style.css" /></head>
  <body>
    <h1>Typography đẹp</h1>
    <h2 class="subtitle">Phụ đề của trang</h2>
    <p>
      Đây là đoạn văn mẫu để kiểm tra font, màu sắc,
      line-height và các thuộc tính text khác.
    </p>
    <p class="quote">"Học đi đôi với hành" - Hồ Chí Minh</p>
  </body>
</html>
`,
        },
        {
          filename: 'style.css',
          code: `body {
  font-family: Georgia, serif;
  font-size: 17px;
  line-height: 1.7;
  color: #2c3e50;
  background: #fafafa;
  padding: 24px;
}

h1 {
  color: #e74c3c;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.subtitle {
  color: #7f8c8d;
  font-weight: normal;
  font-style: italic;
}

.quote {
  color: #16a085;
  font-size: 20px;
  text-align: center;
  font-style: italic;
}
`,
        },
      ],
    },
    exercise: {
      title: 'Bài tập: Card sản phẩm',
      description:
        'Style trang sao cho: body font Arial, cỡ 16px; h1 màu #333, căn giữa; .price màu đỏ, in đậm, cỡ 24px; .description màu xám (#777), nghiêng.',
      starter: {
        language: 'css',
        files: [
          {
            filename: 'index.html',
            code: `<!DOCTYPE html>
<html>
  <head><link rel="stylesheet" href="style.css" /></head>
  <body>
    <h1>iPhone 15 Pro Max</h1>
    <p class="price">29.990.000đ</p>
    <p class="description">Flagship Apple với chip A17 Pro mạnh mẽ.</p>
  </body>
</html>
`,
          },
          {
            filename: 'style.css',
            code: `/* Viết CSS ở đây */
`,
          },
        ],
      },
    },
  },
  {
    id: 'css-04-box-model',
    category: 'css',
    order: 4,
    title: 'Box Model — Mô hình hộp',
    summary: 'Mọi phần tử HTML là 1 hộp: content + padding + border + margin.',
    theory: `## Box Model

**Mọi phần tử HTML đều là một chiếc hộp.** Hộp này gồm 4 lớp (từ trong ra ngoài):

\`\`\`
┌─────────────── margin ───────────────┐
│   ┌─────────── border ───────────┐   │
│   │   ┌─────── padding ──────┐   │   │
│   │   │       content        │   │   │
│   │   └──────────────────────┘   │   │
│   └──────────────────────────────┘   │
└──────────────────────────────────────┘
\`\`\`

- **content** — nội dung thực (text, ảnh...). Kích thước: \`width\`, \`height\`
- **padding** — khoảng cách **bên trong** viền
- **border** — viền
- **margin** — khoảng cách **bên ngoài** với phần tử khác

## Thuộc tính

\`\`\`css
.box {
  width: 200px;
  height: 100px;
  padding: 10px;
  border: 2px solid black;
  margin: 20px;
}
\`\`\`

**Padding/margin chi tiết:**
\`\`\`css
padding-top: 10px;
padding-right: 15px;
padding-bottom: 10px;
padding-left: 15px;

/* Shorthand: top right bottom left */
padding: 10px 15px 10px 15px;

/* top/bottom | left/right */
padding: 10px 15px;

/* tất cả */
padding: 10px;
\`\`\`

## Border

\`\`\`css
border: 2px solid black;
/*      độ-dày style màu */

border-radius: 8px;  /* bo tròn góc */
\`\`\`

\`style\` có thể là: \`solid\`, \`dashed\`, \`dotted\`, \`double\`, \`none\`.

## \`box-sizing\` — Rất quan trọng!

Mặc định: \`width\` chỉ tính **content**. Padding + border sẽ **cộng thêm** vào → phần tử to hơn dự kiến.

Ví dụ: \`width: 200px; padding: 20px; border: 2px solid;\` → chiều rộng thực tế = 200 + 20*2 + 2*2 = **244px**.

**Fix**: dùng \`box-sizing: border-box\`:
\`\`\`css
* { box-sizing: border-box; }
\`\`\`
Khi đó \`width: 200px\` = đúng 200px (đã bao gồm padding + border).

> 👉 Hầu hết project thực tế luôn đặt rule này ngay đầu file CSS.`,
    example: {
      language: 'css',
      files: [
        {
          filename: 'index.html',
          code: `<!DOCTYPE html>
<html>
  <head><link rel="stylesheet" href="style.css" /></head>
  <body>
    <div class="card">
      <h2>Tiêu đề card</h2>
      <p>Nội dung card. Chú ý khoảng cách bên trong (padding) và bên ngoài (margin).</p>
    </div>
    <div class="card">
      <h2>Card khác</h2>
      <p>Mỗi card có viền, bo góc, và cách nhau bằng margin.</p>
    </div>
  </body>
</html>
`,
        },
        {
          filename: 'style.css',
          code: `* { box-sizing: border-box; }

body {
  background: #ecf0f1;
  font-family: sans-serif;
  padding: 20px;
}

.card {
  width: 400px;
  padding: 20px;
  border: 2px solid #3498db;
  border-radius: 8px;
  margin: 16px 0;
  background: white;
}

.card h2 {
  margin-top: 0;
  color: #2c3e50;
}
`,
        },
      ],
    },
    exercise: {
      title: 'Bài tập: Button đẹp',
      description:
        'Style class .btn sao cho: nền xanh dương, chữ trắng, padding 12px 24px, không có viền, bo góc 6px, font-size 16px, và margin-right 8px giữa các button.',
      starter: {
        language: 'css',
        files: [
          {
            filename: 'index.html',
            code: `<!DOCTYPE html>
<html>
  <head><link rel="stylesheet" href="style.css" /></head>
  <body>
    <button class="btn">Lưu</button>
    <button class="btn">Hủy</button>
    <button class="btn">Xóa</button>
  </body>
</html>
`,
          },
          {
            filename: 'style.css',
            code: `/* Viết CSS ở đây */
`,
          },
        ],
      },
    },
  },
  {
    id: 'css-05-display-position',
    category: 'css',
    order: 5,
    title: 'Display & Position',
    summary: 'block/inline/inline-block và absolute/relative/fixed.',
    theory: `## Display

Mỗi thẻ HTML có \`display\` mặc định:

- **block** — chiếm cả dòng (\`div\`, \`p\`, \`h1\`, \`ul\`, \`form\`...)
- **inline** — nằm trong dòng, không nhận width/height (\`span\`, \`a\`, \`strong\`...)
- **inline-block** — như inline nhưng nhận width/height

\`\`\`css
a { display: inline-block; width: 100px; }
div { display: inline; }
\`\`\`

## \`display: none\` vs \`visibility: hidden\`

- \`display: none\` — **biến mất** hoàn toàn, không chiếm chỗ
- \`visibility: hidden\` — **ẩn** nhưng vẫn chiếm chỗ (để lại ô trống)

## Position

Điều khiển vị trí chính xác của phần tử.

### \`static\` (mặc định)
Phần tử nằm theo dòng chảy bình thường của HTML.

### \`relative\`
Nằm theo dòng chảy, nhưng có thể **dịch chuyển** bằng \`top/right/bottom/left\`:

\`\`\`css
.box { position: relative; top: 10px; left: 20px; }
\`\`\`
→ Dịch xuống 10px và sang phải 20px (so với vị trí gốc).

### \`absolute\`
**Thoát** khỏi dòng chảy, định vị tuyệt đối so với **phần tử cha có \`position: relative\`** gần nhất.

\`\`\`css
.parent { position: relative; }
.child  { position: absolute; top: 0; right: 0; }
\`\`\`
→ Con được đặt ở góc trên-phải của cha.

### \`fixed\`
Cố định trên màn hình (không trôi khi cuộn). Hay dùng cho header/footer.

\`\`\`css
.header { position: fixed; top: 0; left: 0; width: 100%; }
\`\`\`

### \`sticky\`
Kết hợp relative + fixed: nằm bình thường cho đến khi cuộn tới ngưỡng thì "dính" lại.

\`\`\`css
.nav { position: sticky; top: 0; }
\`\`\`

## \`z-index\`

Phần tử có \`position\` (không phải static) có thể chồng lên nhau. \`z-index\` quyết định cái nào ở trên:

\`\`\`css
.modal   { position: fixed; z-index: 100; }
.tooltip { position: absolute; z-index: 50; }
\`\`\`
Số lớn hơn → ở trên.`,
    example: {
      language: 'css',
      files: [
        {
          filename: 'index.html',
          code: `<!DOCTYPE html>
<html>
  <head><link rel="stylesheet" href="style.css" /></head>
  <body>
    <header class="header">Header cố định</header>
    <main>
      <div class="card">
        <span class="badge">NEW</span>
        <h3>Card có badge</h3>
        <p>Nội dung card bình thường.</p>
      </div>
    </main>
  </body>
</html>
`,
        },
        {
          filename: 'style.css',
          code: `body { margin: 0; font-family: sans-serif; }

.header {
  position: fixed;
  top: 0; left: 0;
  width: 100%;
  padding: 16px;
  background: #2c3e50;
  color: white;
  z-index: 10;
}

main { padding-top: 80px; padding-left: 20px; }

.card {
  position: relative;
  width: 300px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.badge {
  position: absolute;
  top: -10px;
  right: -10px;
  background: crimson;
  color: white;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
}
`,
        },
      ],
    },
    exercise: {
      title: 'Bài tập: Nút "Quay về đầu trang"',
      description:
        'Tạo một nút .back-to-top cố định (position: fixed) ở góc phải-dưới màn hình, cách đáy 20px, cách phải 20px. Nền xanh lá, chữ trắng, hình tròn (border-radius: 50%), kích thước 50px x 50px.',
      starter: {
        language: 'css',
        files: [
          {
            filename: 'index.html',
            code: `<!DOCTYPE html>
<html>
  <head><link rel="stylesheet" href="style.css" /></head>
  <body>
    <p>Nội dung trang dài...</p>
    <p>Cuộn xuống sẽ vẫn thấy nút.</p>
    <button class="back-to-top">↑</button>
  </body>
</html>
`,
          },
          {
            filename: 'style.css',
            code: `/* Style .back-to-top ở đây */
`,
          },
        ],
      },
    },
  },
  {
    id: 'css-06-flexbox',
    category: 'css',
    order: 6,
    title: 'Flexbox — Bố cục 1 chiều',
    summary: 'Công cụ mạnh mẽ nhất để căn chỉnh các phần tử theo hàng/cột.',
    theory: `## Flexbox là gì?

Flexbox giúp sắp xếp phần tử **theo 1 chiều** (hàng ngang HOẶC cột dọc) với khả năng căn chỉnh rất linh hoạt. Đây là **công cụ quan trọng nhất** trong layout CSS hiện đại.

## Bật flexbox

Đặt \`display: flex\` lên **phần tử cha**:

\`\`\`css
.container {
  display: flex;
}
\`\`\`

Các **phần tử con trực tiếp** sẽ tự động xếp thành 1 hàng ngang.

## Thuộc tính trên cha (container)

### \`flex-direction\` — Hướng
\`\`\`css
flex-direction: row;            /* mặc định — trái sang phải */
flex-direction: column;         /* trên xuống dưới */
flex-direction: row-reverse;    /* phải sang trái */
\`\`\`

### \`justify-content\` — Căn theo trục chính
\`\`\`css
justify-content: flex-start;    /* trái (mặc định) */
justify-content: center;        /* giữa */
justify-content: flex-end;      /* phải */
justify-content: space-between; /* đẩy ra 2 đầu, cách đều ở giữa */
justify-content: space-around;  /* cách đều, có lề */
justify-content: space-evenly;  /* cách đều tuyệt đối */
\`\`\`

### \`align-items\` — Căn theo trục phụ (vuông góc)
\`\`\`css
align-items: stretch;      /* mặc định — kéo dãn */
align-items: center;       /* căn giữa theo chiều dọc */
align-items: flex-start;   /* trên */
align-items: flex-end;     /* dưới */
\`\`\`

### \`gap\` — Khoảng cách giữa các phần tử
\`\`\`css
gap: 16px;
\`\`\`

### \`flex-wrap\` — Xuống dòng khi chật
\`\`\`css
flex-wrap: nowrap;   /* mặc định — không xuống dòng */
flex-wrap: wrap;     /* xuống dòng khi hết chỗ */
\`\`\`

## Thuộc tính trên con (item)

### \`flex: 1\` — chia đều không gian còn lại
\`\`\`css
.item { flex: 1; }
\`\`\`
Các item có \`flex: 1\` sẽ chia đều chiều rộng còn lại.

## Công thức "thánh địa": căn giữa tuyệt đối

\`\`\`css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
\`\`\`
→ Con được căn **giữa cả ngang và dọc**.

## Ví dụ: Navbar

\`\`\`css
.navbar {
  display: flex;
  justify-content: space-between;  /* logo trái, menu phải */
  align-items: center;
  padding: 16px;
}
\`\`\``,
    example: {
      language: 'css',
      files: [
        {
          filename: 'index.html',
          code: `<!DOCTYPE html>
<html>
  <head><link rel="stylesheet" href="style.css" /></head>
  <body>
    <nav class="navbar">
      <div class="logo">🚀 MySite</div>
      <ul class="menu">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>

    <div class="hero">
      <h1>Căn giữa tuyệt đối bằng Flexbox</h1>
    </div>

    <div class="cards">
      <div class="card">Card 1</div>
      <div class="card">Card 2</div>
      <div class="card">Card 3</div>
    </div>
  </body>
</html>
`,
        },
        {
          filename: 'style.css',
          code: `* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: sans-serif; }

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1e293b;
  color: white;
  padding: 16px 24px;
}
.menu { display: flex; gap: 24px; list-style: none; }

.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  background: #f1f5f9;
}

.cards {
  display: flex;
  gap: 16px;
  padding: 24px;
}
.card {
  flex: 1;
  background: #3b82f6;
  color: white;
  padding: 32px;
  border-radius: 8px;
  text-align: center;
}
`,
        },
      ],
    },
    exercise: {
      title: 'Bài tập: Layout giỏ hàng',
      description:
        'Tạo 3 item trong giỏ hàng. Mỗi item dùng flex để: ảnh sản phẩm bên trái, tên + mô tả ở giữa (flex: 1 để chiếm chỗ còn lại), giá bên phải. align-items: center, gap 16px.',
      starter: {
        language: 'css',
        files: [
          {
            filename: 'index.html',
            code: `<!DOCTYPE html>
<html>
  <head><link rel="stylesheet" href="style.css" /></head>
  <body>
    <div class="cart-item">
      <img src="https://picsum.photos/60" class="thumb" />
      <div class="info">
        <h4>iPhone 15</h4>
        <p>Màu đen - 128GB</p>
      </div>
      <div class="price">25.000.000đ</div>
    </div>

    <div class="cart-item">
      <img src="https://picsum.photos/60?2" class="thumb" />
      <div class="info">
        <h4>MacBook Air</h4>
        <p>M3 - 16GB/512GB</p>
      </div>
      <div class="price">32.000.000đ</div>
    </div>
  </body>
</html>
`,
          },
          {
            filename: 'style.css',
            code: `/* Dùng flexbox để layout .cart-item */
`,
          },
        ],
      },
    },
  },
  {
    id: 'css-07-grid',
    category: 'css',
    order: 7,
    title: 'CSS Grid — Bố cục 2 chiều',
    summary: 'Tạo lưới hàng + cột. Mạnh hơn flexbox cho layout phức tạp.',
    theory: `## Grid khác Flexbox ở chỗ nào?

- **Flexbox** — sắp xếp theo **1 chiều** (hàng hoặc cột)
- **Grid** — sắp xếp theo **2 chiều** (hàng VÀ cột cùng lúc) — như bàn cờ

## Bật Grid

\`\`\`css
.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
  gap: 16px;
}
\`\`\`
→ Tạo lưới 3 cột, mỗi cột 200px.

## \`grid-template-columns\` và \`grid-template-rows\`

### Các giá trị phổ biến

\`\`\`css
grid-template-columns: 200px 1fr 200px;  /* cố định - co giãn - cố định */
grid-template-columns: 1fr 1fr 1fr;      /* 3 cột bằng nhau */
grid-template-columns: repeat(3, 1fr);   /* viết tắt: 3 cột bằng nhau */
grid-template-columns: repeat(4, 200px); /* 4 cột 200px */
\`\`\`

**Đơn vị \`fr\`** = fraction (phần). \`1fr 2fr\` nghĩa là cột 1 chiếm 1 phần, cột 2 chiếm 2 phần.

### Grid tự động responsive

\`\`\`css
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
\`\`\`
→ Tự động chia cột sao cho mỗi cột tối thiểu 200px. Màn hình nhỏ → ít cột; màn hình lớn → nhiều cột.

## \`gap\`

Khoảng cách giữa các ô:
\`\`\`css
gap: 16px;           /* cả hàng lẫn cột */
row-gap: 16px;       /* chỉ hàng */
column-gap: 24px;    /* chỉ cột */
\`\`\`

## Cho ô chiếm nhiều cột/hàng

\`\`\`css
.item-big {
  grid-column: 1 / 3;   /* từ cột 1 đến (trước) cột 3 = chiếm 2 cột */
  grid-row: 1 / 3;      /* chiếm 2 hàng */
}
\`\`\`

Hoặc viết tắt:
\`\`\`css
grid-column: span 2;  /* chiếm 2 cột */
\`\`\`

## Layout kinh điển với Grid

### 3 cột bằng nhau
\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
\`\`\`

### Layout "Holy Grail" (header + sidebar + content + footer)
\`\`\`css
.layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}
.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }
\`\`\``,
    example: {
      language: 'css',
      files: [
        {
          filename: 'index.html',
          code: `<!DOCTYPE html>
<html>
  <head><link rel="stylesheet" href="style.css" /></head>
  <body>
    <h2>Grid 3 cột</h2>
    <div class="grid-3">
      <div>1</div><div>2</div><div>3</div>
      <div>4</div><div>5</div><div>6</div>
    </div>

    <h2>Grid responsive (tự động chia)</h2>
    <div class="grid-auto">
      <div>A</div><div>B</div><div>C</div>
      <div>D</div><div>E</div>
    </div>

    <h2>Ô chiếm nhiều cột</h2>
    <div class="grid-span">
      <div class="big">Big</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </body>
</html>
`,
        },
        {
          filename: 'style.css',
          code: `body { font-family: sans-serif; padding: 20px; }

.grid-3, .grid-auto, .grid-span {
  display: grid;
  gap: 12px;
  margin-bottom: 32px;
}

.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-auto { grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); }
.grid-span { grid-template-columns: repeat(3, 1fr); }
.grid-span .big { grid-column: span 2; background: #f59e0b; }

.grid-3 > div, .grid-auto > div, .grid-span > div {
  background: #60a5fa;
  color: white;
  padding: 24px;
  text-align: center;
  border-radius: 6px;
  font-weight: bold;
}
`,
        },
      ],
    },
    exercise: {
      title: 'Bài tập: Gallery ảnh 4 cột',
      description:
        'Tạo một gallery 4 cột bằng grid. Sử dụng repeat(4, 1fr), gap 12px. Thêm 8 ảnh (dùng https://picsum.photos/200?1 đến ?8). Ảnh đầu tiên (.featured) chiếm 2 cột và 2 hàng.',
      starter: {
        language: 'css',
        files: [
          {
            filename: 'index.html',
            code: `<!DOCTYPE html>
<html>
  <head><link rel="stylesheet" href="style.css" /></head>
  <body>
    <div class="gallery">
      <img src="https://picsum.photos/400?1" class="featured" />
      <img src="https://picsum.photos/200?2" />
      <img src="https://picsum.photos/200?3" />
      <img src="https://picsum.photos/200?4" />
      <img src="https://picsum.photos/200?5" />
      <img src="https://picsum.photos/200?6" />
      <img src="https://picsum.photos/200?7" />
      <img src="https://picsum.photos/200?8" />
    </div>
  </body>
</html>
`,
          },
          {
            filename: 'style.css',
            code: `.gallery img { width: 100%; height: 100%; object-fit: cover; }

/* Style .gallery ở đây */
`,
          },
        ],
      },
    },
  },
  {
    id: 'css-08-responsive',
    category: 'css',
    order: 8,
    title: 'Responsive với Media Query',
    summary: 'Làm trang web đẹp trên mọi kích thước màn hình.',
    theory: `## Responsive là gì?

**Responsive design** = trang web tự thích ứng với mọi kích cỡ màn hình (điện thoại, tablet, laptop).

## Viewport meta tag

Đầu tiên, luôn thêm vào \`<head>\`:
\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
\`\`\`
→ Bắt trang web hiển thị đúng trên mobile, không bị zoom out.

## Media Query

Cú pháp:
\`\`\`css
@media (điều-kiện) {
  /* CSS áp dụng khi điều kiện đúng */
}
\`\`\`

Ví dụ:
\`\`\`css
/* CSS mặc định — áp dụng cho mọi màn hình */
.container { width: 1200px; }

/* Chỉ khi màn hình <= 768px */
@media (max-width: 768px) {
  .container { width: 100%; }
}
\`\`\`

## Breakpoint phổ biến

\`\`\`css
/* Mobile */    @media (max-width: 640px)  { }
/* Tablet */    @media (max-width: 1024px) { }
/* Desktop */   @media (min-width: 1024px) { }
\`\`\`

## Mobile-first approach (khuyên dùng)

Viết CSS cho mobile trước, rồi dùng \`min-width\` để mở rộng ra màn hình lớn hơn:

\`\`\`css
/* Mặc định — mobile */
.grid { grid-template-columns: 1fr; }

/* Tablet: 2 cột */
@media (min-width: 768px) {
  .grid { grid-template-columns: 1fr 1fr; }
}

/* Desktop: 3 cột */
@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}
\`\`\`

## Đơn vị linh hoạt

- \`%\` — phần trăm của cha
- \`vw\` — 1vw = 1% chiều rộng màn hình
- \`vh\` — 1vh = 1% chiều cao màn hình
- \`rem\` — tương đối với font-size gốc

\`\`\`css
.hero { height: 100vh; width: 100vw; }
.title { font-size: 2rem; }
\`\`\`

## Ảnh responsive

\`\`\`css
img {
  max-width: 100%;
  height: auto;
}
\`\`\`
→ Ảnh không bao giờ tràn khỏi cha, giữ nguyên tỉ lệ.`,
    example: {
      language: 'css',
      files: [
        {
          filename: 'index.html',
          code: `<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header class="header">
      <h1>Responsive Demo</h1>
      <p>Kéo thu nhỏ cửa sổ để thấy layout đổi</p>
    </header>
    <div class="grid">
      <div class="card">1</div>
      <div class="card">2</div>
      <div class="card">3</div>
      <div class="card">4</div>
      <div class="card">5</div>
      <div class="card">6</div>
    </div>
  </body>
</html>
`,
        },
        {
          filename: 'style.css',
          code: `* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: sans-serif; }

.header {
  padding: 24px;
  background: #0f172a;
  color: white;
  text-align: center;
}

.grid {
  display: grid;
  gap: 16px;
  padding: 16px;
  grid-template-columns: 1fr;          /* mobile: 1 cột */
}

@media (min-width: 640px) {
  .grid { grid-template-columns: repeat(2, 1fr); } /* tablet: 2 cột */
}

@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(3, 1fr); } /* desktop: 3 cột */
}

.card {
  background: #60a5fa;
  color: white;
  padding: 40px;
  text-align: center;
  border-radius: 8px;
  font-size: 1.5rem;
}
`,
        },
      ],
    },
    exercise: {
      title: 'Bài tập: Navbar responsive',
      description:
        'Tạo navbar: trên desktop (>=768px) dùng flexbox xếp ngang, justify-content: space-between; trên mobile (<768px) xếp dọc bằng flex-direction: column, căn giữa.',
      starter: {
        language: 'css',
        files: [
          {
            filename: 'index.html',
            code: `<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <nav class="navbar">
      <div class="logo">MySite</div>
      <ul class="menu">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  </body>
</html>
`,
          },
          {
            filename: 'style.css',
            code: `/* Style .navbar responsive ở đây */
`,
          },
        ],
      },
    },
  },
];
