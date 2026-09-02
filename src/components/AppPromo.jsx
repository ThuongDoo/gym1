import { config } from "../data/siteData";

function AppPromo() {
  const { appPromo } = config;

  return (
    <section id="app" className="app-promo">
      <div className="container app-promo__inner">
        <div className="app-promo__phone">
          <img src={appPromo.image} alt={appPromo.imageAlt} />
        </div>
        <div className="app-promo__content">
          <span className="eyebrow">{appPromo.eyebrow}</span>
          <h2 className="section-title">{appPromo.title}</h2>
          <p className="split__text">{appPromo.text}</p>
          <ul className="split__bullets">
            {appPromo.features.map((f) => (
              <li key={f}>
                <span className="split__check">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <div className="app-promo__stores">
            {appPromo.stores.map((s) => (
              <a href="#" className="app-promo__badge" key={s}>
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppPromo
