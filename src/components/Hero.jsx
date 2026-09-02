function Hero({ data }) {
  const { hero } = data;

  return (
    <section id="top" className="hero">
      <img className="hero__bg" src={hero.image} alt={hero.imageAlt} />
      <div className="hero__overlay" />
      <div className="container hero__content">
        <span className="eyebrow eyebrow--light">{hero.eyebrow}</span>
        <h1 className="hero__title">
          <span className="hero__title-white">{hero.titleWhite}</span>{" "}
          <span>{hero.titleHighlight}</span>
        </h1>
        <p className="hero__subtitle">{hero.subtitle}</p>
        <div className="hero__cta">
          <a href="#register" className="btn btn-primary">
            {hero.primaryCtaLabel}
          </a>
          <a href="#pricing" className="btn btn-outline-light">
            {hero.secondaryCtaLabel}
          </a>
        </div>
        <div className="hero__stats">
          {hero.stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
