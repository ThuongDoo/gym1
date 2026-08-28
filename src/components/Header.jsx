import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Bảng giá hội viên', href: '#pricing' },
  { label: 'Tìm phòng tập', href: '#locations' },
  { label: 'Cơ sở vật chất', href: '#tour' },
  { label: 'Kiến thức tập luyện', href: '#training' },
  { label: 'App The New Gym', href: '#app' },
  { label: 'Giới thiệu', href: '#about' },
]

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="header__logo">
          THE NEW<span>GYM</span>
        </a>

        <nav className={`header__nav ${open ? 'is-open' : ''}`}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="header__nav-cta">
            <a href="#register" className="btn btn-outline btn-block">
              Đăng nhập
            </a>
            <a href="#register" className="btn btn-primary btn-block">
              Trải nghiệm 7 ngày
            </a>
          </div>
        </nav>

        <div className="header__actions">
          <a href="#register" className="btn btn-outline header__login">
            Đăng nhập
          </a>
          <a href="#register" className="btn btn-primary header__trial">
            Trải nghiệm miễn phí 7 ngày
          </a>
          <button
            className={`header__burger ${open ? 'is-open' : ''}`}
            aria-label="Mở menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
