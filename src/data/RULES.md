# Quy tắc chuyển code cứng sang data

Áp dụng khi thêm section/component mới hoặc chỉnh sửa nội dung trong dự án này.

Dữ liệu thật được đọc từ Firestore (`websites/{websiteId}.config`, qua hook
`useWebsiteConfig()` ở `src/lib/content.js`), không phải từ file trong repo.
`src/data/siteData.js` chỉ để tham khảo hình dạng dữ liệu — không được import
hay dùng ở bất kỳ đâu trong code. Mọi quy tắc dưới đây áp dụng cho cả field
`config` trên Firestore lẫn file tham khảo đó.

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

Không tách thành nhiều field rời rạc trên Firestore. Mỗi key cấp 1 của
`config` tương ứng với đúng 1 section/component (`config.header`,
`config.hero`, `config.pricing`...). `App.jsx` đọc `config` qua
`useWebsiteConfig()` rồi truyền nguyên object xuống mọi component qua prop
`data`; mỗi component tự lấy đúng phần của mình:

```jsx
// App.jsx
const { config: data } = useWebsiteConfig()
<Pricing data={data} />

// Pricing.jsx
function Pricing({ data }) {
  const { pricing } = data
  ...
}
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

## 5. Href điều hướng nội bộ code cứng — href bên ngoài lấy từ data

**Điều hướng nội bộ** (nút CTA trỏ tới section khác trong cùng trang, như
`#register`, `#pricing`, `#tour`, `#about`...) code cứng trực tiếp trong
component. Cấu trúc trang (bao nhiêu section, id từng section) không đổi theo
data, nên href này không cần data hoá — data chỉ giữ label hiển thị.

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

**Href tới mạng xã hội hoặc đường dẫn bên ngoài** (Messenger, Zalo, Instagram,
TikTok, số điện thoại, Google Play/App Store...) LẤY TỪ DATA — vì mỗi client
có kênh liên hệ/link tải app khác nhau, không thể code cứng.

```js
// Data giữ cả label lẫn href
contactLinks: [{ label: 'Messenger', href: 'https://m.me/thenewgym' }]
```

```jsx
<a href={c.href} target="_blank" rel="noreferrer">{c.label}</a>
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
// Icon SVG vẽ tay — định nghĩa trong component (lookup theo label).
// href vẫn lấy từ data theo quy tắc 5 (là link bên ngoài), chỉ icon là code cứng.
const SOCIAL_ICONS = { Messenger: { render: () => <path d="..." /> } }
```
