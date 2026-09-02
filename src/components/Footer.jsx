import { config } from "../data/siteData";

function Footer() {
  const { footer } = config;

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#top" className="footer__logo">
            <img src={footer.logoImage} alt={footer.logoImageAlt} />
          </a>
          <p>{footer.tagline}</p>
          <div className="footer__socials">
            {footer.socials.map((s) => (
              <a href="#" key={s.label} aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {footer.columns.map((col) => (
          <div className="footer__col" key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.split(', ').map((label) => (
                <li key={label}>
                  <a href="#">{label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer__col">
          <h4>{footer.storesTitle}</h4>
          <div className="footer__stores">
            {footer.stores.map((s) => (
              <a href="#" className="app-promo__badge" key={s}>
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>{footer.copyright}</span>
      </div>
    </footer>
  )
}

export default Footer
