function Training({ data }) {
  const { training } = data;

  return (
    <section id="training" className="split split--reverse split--tint">
      <div className="container split__inner">
        <div className="split__media">
          <img src={training.image} alt={training.imageAlt} />
        </div>
        <div className="split__content">
          <span className="eyebrow">{training.eyebrow}</span>
          <h2 className="section-title">{training.title}</h2>
          {training.paragraphs.map((p) => (
            <p className="split__text" key={p.text}>
              {p.text}
            </p>
          ))}
          <ul className="split__bullets">
            {training.bullets.map((b) => (
              <li key={b.text}>
                <span className="split__check">✓</span>
                {b.text}
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
