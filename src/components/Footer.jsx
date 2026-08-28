const FOOTER_COLUMNS = [
  {
    title: 'Về chúng tôi',
    links: ['Giới thiệu', 'Hệ thống phòng tập', 'Tin tức', 'Tuyển dụng', 'Liên hệ'],
  },
  {
    title: 'Chính sách',
    links: ['Chính sách bảo mật', 'Điều khoản sử dụng', 'Chăm sóc khách hàng'],
  },
]

const SOCIALS = [
  { label: 'Facebook', icon: 'f' },
  { label: 'Instagram', icon: '◎' },
  { label: 'TikTok', icon: '♪' },
  { label: 'YouTube', icon: '▶' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#top" className="header__logo footer__logo">
            THE NEW<span>GYM</span>
          </a>
          <p>Gym cho mọi người. Không phán xét, không giới hạn.</p>
          <div className="footer__socials">
            {SOCIALS.map((s) => (
              <a href="#" key={s.label} aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {FOOTER_COLUMNS.map((col) => (
          <div className="footer__col" key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer__col">
          <h4>Tải ứng dụng</h4>
          <div className="footer__stores">
            <a href="#" className="app-promo__badge">
              ▶ Google Play
            </a>
            <a href="#" className="app-promo__badge">
               App Store
            </a>
          </div>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© 2026 The New Gym. All rights reserved.</span>
      </div>
    </footer>
  )
}

export default Footer
