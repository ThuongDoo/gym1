# Quy tắc chuyển code cứng sang data

Áp dụng khi thêm section/component mới hoặc chỉnh sửa nội dung trong dự án này.
Toàn bộ data mẫu nằm ở `src/data/siteData.js`.

## 1. Không code cứng nội dung trong component

Mọi text, số liệu, danh sách hiển thị (tiêu đề, mô tả, tên gói, ảnh minh hoạ...)
phải lấy từ data, không viết thẳng trong JSX.

```jsx
// Sai
<h1>GYM CHO MỌI NGƯỜI</h1>

// Đúng
<h1>{hero.titleHighlight}</h1>
```

## 2. Gom toàn bộ data vào 1 object `config` duy nhất

Không tách thành nhiều `const` riêng lẻ. Mỗi key cấp 1 của `config` tương ứng
với đúng 1 section/component (`config.header`, `config.hero`, `config.pricing`...).
Component lấy đúng phần của mình:

```js
import { config } from '../data/siteData'
const { pricing } = config
```

## 3. Mỗi field là chuỗi hoặc mảng — không object lồng cho 1 mục đơn

Một cặp giá trị đơn lẻ (nhãn nút bấm, tiêu đề phụ...) không gói vào 1 object con,
mà tách thành các field riêng cùng cấp.

```js
// Sai
cta: { label: 'Đăng ký ngay', href: '#register' }

// Đúng
ctaLabel: 'Đăng ký ngay'
```

Ngoại lệ: mảng danh sách (`plans`, `features`, `cities`...) vẫn là mảng các
object phẳng, vì mỗi dòng cần nhiều thuộc tính (tên, giá, mô tả...).

## 4. Không mảng lồng mảng

Nếu 1 phần tử trong danh sách cần thêm 1 danh sách con (vd `branches` của từng
city, `features` của từng plan), danh sách con đó gộp thành **1 chuỗi nối bằng
dấu phẩy**, và tách ra (`.split(', ')`) khi render trong component.

```js
// Sai
{ name: 'TP. Hồ Chí Minh', branches: ['Lê Hồng Phong', 'Lý Thường Kiệt'] }

// Đúng
{ name: 'TP. Hồ Chí Minh', branches: 'Lê Hồng Phong, Lý Thường Kiệt' }
```

```jsx
{city.branches.split(', ').map((b) => <li key={b}>{b}</li>)}
```

## 5. Không có `href` nào trong data

Mọi `href` (điều hướng, nút CTA, mạng xã hội, tel:...) được code cứng trực tiếp
trong component, không lấy từ data. Data chỉ giữ phần nội dung hiển thị (label).

```jsx
// Data chỉ có label
ctaLabel: 'Xem trong app'

// Component tự quyết định đích đến
<a href="#app">{training.ctaLabel}</a>
```

Danh sách có số lượng mục **cố định** (ví dụ nav trong Header) không được thêm/
bớt qua data — chỉ label của từng mục lấy từ data, cấu trúc (bao nhiêu mục, thứ
tự, href từng mục) viết cố định trong component.

```jsx
<li><a href="#about">{header.navAboutLabel}</a></li>
<li><a href="#tour">{header.navTourLabel}</a></li>
```

## 6. Icon/hình trang trí không phải nội dung — không bắt buộc phải ở trong data

- Icon vẽ bằng SVG thủ công (vd icon Messenger, Zalo, icon điện thoại) là dữ
  liệu trình bày, định nghĩa trực tiếp trong component (lookup theo `label`),
  không đưa vào data.
- Logo và icon là **ảnh thật** (`<img>`) thì vẫn cần data hoá — dùng field ảnh
  riêng, ví dụ `logoImage` + `logoImageAlt`, hoặc `iconImage` + `iconAlt` cho
  từng phần tử trong danh sách.

```js
// Logo dạng ảnh — cần data
header: { logoImage: '...', logoImageAlt: 'The New Gym' }
```

```jsx
// Icon SVG vẽ tay — định nghĩa trong component, data chỉ giữ label
const SOCIAL_LINKS = { Messenger: { href: '...', render: () => <path d="..." /> } }
```
