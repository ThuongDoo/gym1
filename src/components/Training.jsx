import { config } from "../data/siteData";

function Training() {
  const { training } = config;

  return (
    <section id="training" className="split split--reverse split--tint">
      <div className="container split__inner">
        <div className="split__media">
          <img src={training.image} alt={training.imageAlt} />
        </div>
        <div className="split__content">
          <span className="eyebrow">{training.eyebrow}</span>
          <h2 className="section-title">{training.title}</h2>
          {training.paragraphs.map((p, i) => (
            <p className="split__text" key={i}>
              {p}
            </p>
          ))}
          <ul className="split__bullets">
            {training.bullets.map((b) => (
              <li key={b}>
                <span className="split__check">✓</span>
                {b}
              </li>
            ))}
          </ul>
          <a href="#app" className="btn btn-primary">
            {training.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Training;
