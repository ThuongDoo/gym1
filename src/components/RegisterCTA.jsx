// Chỉ icon SVG + outline — href đến từng kênh lấy từ data (khác nhau theo client).
const SOCIAL_ICONS = {
  Messenger: {
    outline: false,
    render: () => (
      <path d="M12 2C6.5 2 2 6.19 2 11.5c0 2.98 1.42 5.62 3.7 7.36.19.14.31.37.32.61l.06 2.02a.83.83 0 0 0 1.16.73l2.24-.98c.19-.08.4-.1.6-.05a10.9 10.9 0 0 0 2.92.39c5.5 0 10-4.19 10-9.5S17.5 2 12 2Zm5.94 6.86-3.05 4.82a1.5 1.5 0 0 1-2.16.4l-2.36-1.77a.6.6 0 0 0-.72 0l-3.28 2.49c-.44.33-.99-.19-.7-.66l3.05-4.82a1.5 1.5 0 0 1 2.16-.4l2.36 1.77c.21.16.5.16.72 0l3.28-2.49c.44-.33.99.19.7.66Z" />
    ),
  },
  Zalo: {
    outline: false,
    render: () => (
      <path d="M6 3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H9.8L5 20.5V17H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Zm8.7 5.3-2.4 4.1h2.3v1.1h-4v-.9l2.4-4.1h-2.2V7.4h3.9v.9ZM9.9 7.4v6.1H8.7V7.4h1.2Zm7.6 0h1.2v6.1h-1.2V7.4Z" />
    ),
  },
  Instagram: {
    outline: true,
    render: () => (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  TikTok: {
    outline: false,
    render: () => (
      <path d="M16.5 2h-3v13.5a2.5 2.5 0 1 1-2.5-2.5c.18 0 .35.02.5.05V9.9a5.5 5.5 0 1 0 5.5 5.5V9.14a6.98 6.98 0 0 0 4 1.28V7.3a4 4 0 0 1-4-4V2Z" />
    ),
  },
}

function RegisterCTA({ data }) {
  const { registerCta } = data

  return (
    <section id="register" className="register">
      <div className="container register__inner">
        <div className="register__text">
          <span className="eyebrow eyebrow--light">{registerCta.eyebrow}</span>
          <h2 className="section-title register__title">{registerCta.title}</h2>
          <p className="register__subtitle">{registerCta.subtitle}</p>
        </div>

        <div className="register__contact">
          <a href={registerCta.phoneHref} className="register__phone">
            <svg
              className="register__phone-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2Z" />
            </svg>
            <span>
              <strong>{registerCta.phoneNumber}</strong>
              <small>{registerCta.phoneNote}</small>
            </span>
          </a>

          <div className="register__socials">
            {registerCta.contactLinks.map((c) => {
              const icon = SOCIAL_ICONS[c.label]
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="register__social"
                  aria-label={c.label}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill={icon.outline ? 'none' : 'currentColor'}
                    stroke={icon.outline ? 'currentColor' : 'none'}
                    strokeWidth={icon.outline ? 1.6 : 0}
                  >
                    {icon.render()}
                  </svg>
                  <span>{c.label}</span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegisterCTA
