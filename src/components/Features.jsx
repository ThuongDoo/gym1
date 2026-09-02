function Features({ data }) {
  const { features } = data;

  return (
    <section className="features">
      <div className="container">
        <div className="pricing__head">
          <span className="eyebrow">{features.eyebrow}</span>
          <h2 className="section-title">{features.title}</h2>
        </div>
        <div className="features__grid">
          {features.items.map((f) => (
            <div className="features__card" key={f.title}>
              <img className="features__icon" src={f.iconImage} alt={f.iconAlt} />
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
