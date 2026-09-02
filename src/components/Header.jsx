import { useState } from "react";

function Header({ data }) {
  const [open, setOpen] = useState(false);
  const { header } = data;

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="header__logo">
          <img src={header.logoImage} alt={header.logoImageAlt} />
        </a>

        <nav className={`header__nav ${open ? "is-open" : ""}`}>
          <ul>
            <li>
              <a href="#about" onClick={() => setOpen(false)}>
                {header.navAboutLabel}
              </a>
            </li>
            <li>
              <a href="#tour" onClick={() => setOpen(false)}>
                {header.navTourLabel}
              </a>
            </li>
            <li>
              <a href="#locations" onClick={() => setOpen(false)}>
                {header.navLocationsLabel}
              </a>
            </li>
            <li>
              <a href="#app" onClick={() => setOpen(false)}>
                {header.navAppLabel}
              </a>
            </li>
            <li>
              <a href="#pricing" onClick={() => setOpen(false)}>
                {header.navPricingLabel}
              </a>
            </li>
          </ul>
          <div className="header__nav-cta">
            <a href="#register" className="btn btn-primary btn-block">
              {header.trialCtaLabel}
            </a>
          </div>
        </nav>

        <div className="header__actions">
          <a href="#register" className="btn btn-primary header__trial">
            {header.trialCtaFullLabel}
          </a>
          <button
            className={`header__burger ${open ? "is-open" : ""}`}
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
  );
}

export default Header;
