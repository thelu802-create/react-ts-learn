# React TS Learn

Ứng dụng học `HTML -> CSS -> TypeScript -> React` được xây bằng `React + TypeScript + Vite`.

## Yêu cầu

- `Node.js` 20 trở lên
- `npm` đi kèm với Node

## Chạy ở máy khác

```bash
npm install
npm run dev
```

Mở trình duyệt tại địa chỉ Vite in ra trong terminal, thường là `http://localhost:5173`.

## Các lệnh chính

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Cấu trúc chính

- `src/data/lessons`: nội dung các bài học
- `src/components`: giao diện và playground
- `src/hooks`: logic điều hướng bài học và lưu tiến độ

## Ghi chú

- Không commit `node_modules` và `dist`
- Nếu clone về máy khác mà `npm install` bị lỗi mạng, cần kiểm tra lại npm registry hoặc proxy/VPN của máy đó
