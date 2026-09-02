function About({ data }) {
  const { about } = data;

  return (
    <section id="about" className="split">
      <div className="container split__inner">
        <div className="split__media">
          <img src={about.image} alt={about.imageAlt} />
        </div>
        <div className="split__content">
          <span className="eyebrow">{about.eyebrow}</span>
          <h2 className="section-title">{about.title}</h2>
          {about.paragraphs.map((p, i) => (
            <p className="split__text" key={i}>
              {p}
            </p>
          ))}
          <a href="#tour" className="btn btn-primary">
            {about.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
