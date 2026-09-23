// File này CHỈ ĐỂ THAM KHẢO — không được import hay dùng ở bất kỳ đâu trong
// code. Dữ liệu thật được đọc trực tiếp từ Firestore (collection `websites`,
// field `config` của doc `websites/{websiteId}`) qua src/lib/content.js.
// Mục đích của file này là mô tả đầy đủ hình dạng dữ liệu mà field `config`
// trên Firestore cần có, để component render đúng. Xem thêm src/data/RULES.md
// về quy tắc thiết kế data (không code cứng, không mảng lồng mảng, không href
// trong data...) — quy tắc đó áp dụng cho cả doc trên Firestore, không riêng
// gì file này.
//
// Dữ liệu mẫu cho toàn bộ trang, gom vào 1 object config duy nhất.
// Mỗi key cấp 1 tương ứng với 1 section/component.
// Trong mỗi section: field là chuỗi hoặc mảng — không dùng object lồng cho 1 mục đơn.
// Mảng danh sách (plans, features, cities...) vẫn là mảng các object phẳng
// vì mỗi dòng cần nhiều thuộc tính (tên, giá, mô tả...).
// Không dùng mảng lồng mảng: nếu 1 mục trong danh sách cần thêm 1 danh sách con
// (vd branches của từng city, features của từng plan), danh sách con đó được
// gộp thành 1 chuỗi nối bằng dấu phẩy và tách ra khi render trong component.
// Href điều hướng nội bộ (nav, nút CTA trỏ tới section khác trong cùng trang
// như #register, #pricing, #tour...) được code cứng trực tiếp trong component,
// vì cấu trúc trang (bao nhiêu section, id từng section) không đổi theo data.
// Nav trong Header là danh sách cố định (không thêm/bớt được) — chỉ label mới
// lấy từ data.
// Ngược lại, href tới mạng xã hội hoặc đường dẫn bên ngoài (Messenger, Zalo,
// Instagram, TikTok, số điện thoại, Google Play/App Store...) LẤY TỪ DATA,
// vì mỗi client có kênh liên hệ/link tải app khác nhau.

export const config = {
  // Màu theme — ghi đè biến CSS trong src/index.css (xem src/lib/theme.js).
  // Field nào bỏ trống thì dùng màu mặc định.
  theme: {
    primary: "#e4032e",
    primaryDark: "#b5021f",
    dark: "#0d0d0d",
    darkSoft: "#1a1a1a",
    text: "#3a3a3a",
    textLight: "#757575",
    bg: "#ffffff",
    bgSoft: "#f7f7f8",
    border: "#ececec",
  },
  gymSystem: {
    subtitle:
      "Một thẻ hội viên, tập luyện tại bất kỳ chi nhánh nào trong hệ thống với gói Toàn hệ thống.",
    cities: [
      {
        name: "TP. Hồ Chí Minh",
        count: 12,
        branches:
          "Lê Hồng Phong, Lý Thường Kiệt, Nam Kỳ Khởi Nghĩa, Quang Trung, Phan Đăng Lưu, Điện Biên Phủ, Ung Văn Khiêm, Hậu Giang, Âu Cơ, Nguyễn Chí Thanh, Nguyễn Thị Thập, Cộng Hòa",
      },
      {
        branches: "Biên Hòa",
        count: 1,
        name: "Đồng Nai",
      },
      {
        count: 1,
        branches: "Ninh Kiều",
        name: "Cần Thơ",
      },
      {
        count: 1,
        name: "Đà Nẵng",
        branches: "Hải Châu",
      },
    ],
    eyebrow: "Hệ thống phòng tập",
    title: "Hơn 15 phòng tập trên toàn quốc",
  },
  about: {
    eyebrow: "Về The New Gym",
    paragraphs: [
      {
        text: "Chúng tôi tạo ra một môi trường nơi ai cũng có thể tập luyện một cách tự tin — dù bạn là người mới bắt đầu hay đã tập lâu năm — mà không cần lo lắng về ánh nhìn của người khác.",
      },
      {
        text: "The New Gym hướng đến một cộng đồng tập luyện lành mạnh, thân thiện và dễ tiếp cận với mọi mức chi phí.",
      },
    ],
    imageAlt: "Không gian phòng tập The New Gym",
    image: "https://picsum.photos/seed/thenewgym-about/900/700",
    title: "Không gian tập luyện thoải mái, không phán xét",
    ctaLabel: "Khám phá phòng tập",
  },
  pricing: {
    eyebrow: "Bảng giá hội viên",
    plans: [
      {
        features:
          "Tập tại 1 chi nhánh bạn chọn, Không giới hạn số lần tập, Hoạt động 24/7, Lớp học nhóm miễn phí",
        ctaLabel: "Đăng ký ngay",
        period: "đ / tháng",
        highlight: false,
        price: "299.000",
        badge: "",
        name: "1 tháng — 1 chi nhánh",
        note: "Thanh toán hàng tháng",
      },
      {
        highlight: true,
        features:
          "Tập tại tất cả chi nhánh, Không giới hạn số lần tập, Hoạt động 24/7, Lớp học nhóm miễn phí, Hỗ trợ đổi chi nhánh linh hoạt",
        name: "1 tháng — Toàn hệ thống",
        price: "399.000",
        badge: "⭐ Phổ biến nhất",
        note: "Thanh toán hàng tháng",
        period: "đ / tháng",
        ctaLabel: "Đăng ký ngay",
      },
      {
        note: "Trả trước 6 tháng, hỗ trợ trả góp 0%",
        period: "đ / tháng",
        features:
          "Tập tại tất cả chi nhánh, Tiết kiệm hơn 25% so với gói tháng, Không giới hạn số lần tập, Hoạt động 24/7, Ưu tiên đặt lịch lớp học",
        badge: "",
        price: "299.000",
        ctaLabel: "Đăng ký ngay",
        highlight: false,
        name: "6 tháng — Toàn hệ thống",
      },
    ],
    subtitle:
      "Không phí ẩn, không ràng buộc dài hạn. Huỷ hoặc đổi gói bất cứ lúc nào.",
    title: "Chọn gói tập phù hợp với bạn",
  },
  registerCta: {
    phoneNumber: "0123 456 789",
    phoneNote: "Gọi ngay để được tư vấn",
    contactLinks: [
      {
        label: "Messenger",
        href: "https://m.me/thenewgym",
      },
      {
        href: "https://zalo.me/thenewgym",
        label: "Zalo",
      },
      {
        href: "https://instagram.com/thenewgym",
        label: "Instagram",
      },
      {
        href: "https://tiktok.com/@thenewgym",
        label: "TikTok",
      },
    ],
    eyebrow: "Trải nghiệm miễn phí",
    subtitle:
      "Liên hệ ngay với The New Gym qua Messenger, Zalo, Instagram, TikTok hoặc gọi điện trực tiếp — đội ngũ tư vấn sẽ hỗ trợ bạn trong thời gian sớm nhất.",
    title: "Đăng ký tập thử 7 ngày miễn phí",
    phoneHref: "tel:0123456789",
  },
  hero: {
    eyebrow: "The New Gym",
    image: "https://picsum.photos/seed/thenewgym-hero/1920/1080",
    subtitle:
      "Không gian tập luyện hiện đại, thoải mái, không phán xét. Chỉ từ 299.000đ/tháng — tập luyện không giới hạn, 24/7.",
    imageAlt: "Phòng tập The New Gym",
    titleWhite: "GYM CHO",
    titleHighlight: "MỌI NGƯỜI",
    primaryCtaLabel: "Đăng ký ngay",
    stats: [
      {
        label: "Phòng tập",
        value: "15+",
      },
      {
        value: "24/7",
        label: "Hoạt động",
      },
      {
        label: "Từ mỗi tháng",
        value: "299K",
      },
    ],
    secondaryCtaLabel: "Xem bảng giá",
  },
  training: {
    ctaLabel: "Xem trong app",
    title: "Tập đúng kỹ thuật, an toàn ngay từ ngày đầu",
    image: "https://picsum.photos/seed/thenewgym-training/900/700",
    paragraphs: [
      {
        text: "Video hướng dẫn bài tập ngay trong ứng dụng cùng đội ngũ huấn luyện viên luôn sẵn sàng hỗ trợ bạn sử dụng thiết bị đúng cách.",
      },
    ],
    bullets: [
      {
        text: "Video hướng dẫn từng bài tập trong app",
      },
      {
        text: "HLV hỗ trợ trực tiếp tại phòng tập",
      },
      {
        text: "Lộ trình tập luyện theo mục tiêu cá nhân",
      },
    ],
    eyebrow: "Hướng dẫn tập luyện miễn phí",
    imageAlt: "Hướng dẫn tập luyện tại The New Gym",
  },
  footer: {
    logoImageAlt: "The New Gym",
    logoImage: "https://picsum.photos/seed/thenewgym-logo-light/240/64",
    stores: [
      {
        href: "#",
        label: "▶ Google Play",
      },
      {
        label: " App Store",
        href: "#",
      },
    ],
    columns: [
      {
        links: "Giới thiệu, Hệ thống phòng tập, Tin tức, Tuyển dụng, Liên hệ",
        title: "Về chúng tôi",
      },
      {
        links: "Chính sách bảo mật, Điều khoản sử dụng, Chăm sóc khách hàng",
        title: "Chính sách",
      },
    ],
    copyright: "© 2026 The New Gym. All rights reserved.",
    tagline: "Gym cho mọi người. Không phán xét, không giới hạn.",
    socials: [
      {
        href: "#",
        label: "Facebook",
        icon: "f",
      },
      {
        icon: "◎",
        href: "#",
        label: "Instagram",
      },
      {
        label: "TikTok",
        href: "#",
        icon: "♪",
      },
      {
        label: "YouTube",
        href: "#",
        icon: "▶",
      },
    ],
    storesTitle: "Tải ứng dụng",
  },
  features: {
    eyebrow: "Vì sao chọn The New Gym",
    title: "Tiện ích dành cho mọi hội viên",
    items: [
      {
        title: "Thiết bị đa dạng, hiện đại",
        desc: "Đầy đủ máy tập, tạ tự do, khu cardio cho mọi mục tiêu.",
        iconAlt: "Thiết bị đa dạng, hiện đại",
        iconImage: "https://picsum.photos/seed/thenewgym-feature-1/80/80",
      },
      {
        iconAlt: "Hoạt động 24/7",
        title: "Hoạt động 24/7",
        desc: "Tập luyện bất cứ khi nào phù hợp với lịch trình của bạn.",
        iconImage: "https://picsum.photos/seed/thenewgym-feature-2/80/80",
      },
      {
        iconAlt: "Lớp học nhóm miễn phí",
        iconImage: "https://picsum.photos/seed/thenewgym-feature-3/80/80",
        title: "Lớp học nhóm miễn phí",
        desc: "Yoga, Zumba, HIIT... đa dạng lớp học mỗi tuần.",
      },
      {
        iconAlt: "Wifi, nước uống, chỗ để xe",
        iconImage: "https://picsum.photos/seed/thenewgym-feature-4/80/80",
        title: "Wifi, nước uống, chỗ để xe",
        desc: "Tiện ích miễn phí giúp buổi tập thoải mái hơn.",
      },
      {
        iconAlt: "Khám sức khoẻ & tư vấn dáng",
        desc: "Đánh giá thể trạng và tư thế trước khi bắt đầu.",
        title: "Khám sức khoẻ & tư vấn dáng",
        iconImage: "https://picsum.photos/seed/thenewgym-feature-5/80/80",
      },
      {
        iconAlt: "HLV chuyên nghiệp hỗ trợ",
        title: "HLV chuyên nghiệp hỗ trợ",
        desc: "Hướng dẫn kỹ thuật đúng, an toàn khi sử dụng thiết bị.",
        iconImage: "https://picsum.photos/seed/thenewgym-feature-6/80/80",
      },
    ],
  },
  referral: {
    ctaLabel: "Giới thiệu ngay",
    image: "https://picsum.photos/seed/thenewgym-referral/900/700",
    title: "Rủ bạn tập cùng, nhận ngay ưu đãi",
    paragraphs: [
      {
        text: "Giới thiệu bạn bè đăng ký thành công gói Toàn hệ thống, cả bạn và người được giới thiệu đều nhận 2 tuần tập luyện miễn phí.",
      },
    ],
    eyebrow: "Thêm bạn, thêm vui",
    imageAlt: "Chương trình giới thiệu bạn bè",
  },
  gymTour: {
    title: "Tham quan phòng tập",
    subtitle:
      "Không gian rộng rãi, trang thiết bị hiện đại, hoạt động 24/7 — sẵn sàng cho mọi mục tiêu tập luyện của bạn.",
    eyebrow: "Cơ sở vật chất",
    photos: [
      {
        seed: "gym-tour-1",
        label: "Khu tập tạ tự do",
      },
      {
        label: "Khu cardio",
        seed: "gym-tour-2",
      },
      {
        label: "Khu máy tập",
        seed: "gym-tour-3",
      },
      {
        seed: "gym-tour-4",
        label: "Khu giãn cơ",
      },
      {
        seed: "gym-tour-5",
        label: "Phòng thay đồ",
      },
      {
        label: "Quầy lễ tân",
        seed: "gym-tour-6",
      },
    ],
  },
  header: {
    navAppLabel: "App The New Gym",
    navPricingLabel: "Bảng giá hội viên",
    trialCtaLabel: "Trải nghiệm 7 ngày",
    navLocationsLabel: "Tìm phòng tập",
    logoImage: "https://picsum.photos/seed/thenewgym-logo/240/64",
    navAboutLabel: "Giới thiệu",
    navTourLabel: "Cơ sở vật chất",
    logoImageAlt: "The New Gym",
    trialCtaFullLabel: "Trải nghiệm miễn phí 7 ngày",
  },
  membership: {
    plans: [
      {
        title: "Toàn hệ thống",
        ctaLabel: "Chọn gói này",
        desc: "Tập tại tất cả các chi nhánh The New Gym trên toàn quốc.",
        price: "399.000",
        tag: "Linh hoạt nhất",
      },
      {
        title: "1 chi nhánh",
        tag: "Tiết kiệm nhất",
        desc: "Tập không giới hạn tại 1 chi nhánh bạn chọn, gần nơi bạn sống.",
        ctaLabel: "Chọn gói này",
        price: "299.000",
      },
    ],
  },
  appPromo: {
    eyebrow: "The New Gym App",
    text: "Đặt lịch, mở khoá cửa, theo dõi tiến độ và quản lý gói tập — tất cả chỉ trong một ứng dụng.",
    features: [
      {
        text: "Ra vào phòng tập 24/7 bằng mã QR",
      },
      {
        text: "Đặt lịch lớp học nhóm miễn phí",
      },
      {
        text: "Theo dõi tiến độ và lịch sử tập luyện",
      },
      {
        text: "Quản lý hội viên, gia hạn, nâng cấp gói",
      },
    ],
    stores: [
      {
        href: "#",
        label: "▶ Google Play",
      },
      {
        href: "#",
        label: " App Store",
      },
    ],
    image: "https://picsum.photos/seed/thenewgym-app/480/960",
    title: "Cả phòng gym trong lòng bàn tay bạn",
    imageAlt: "Ứng dụng The New Gym",
  },
};
