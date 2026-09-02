function GymSystem({ data }) {
  const { gymSystem } = data;

  return (
    <section id="locations" className="system">
      <div className="container">
        <div className="system__head">
          <span className="eyebrow eyebrow--light">{gymSystem.eyebrow}</span>
          <h2 className="section-title system__title">{gymSystem.title}</h2>
          <p className="section-subtitle system__subtitle">{gymSystem.subtitle}</p>
        </div>
        <div className="system__grid">
          {gymSystem.cities.map((city) => (
            <div className="system__card" key={city.name}>
              <div className="system__card-head">
                <h3>{city.name}</h3>
                <span>{city.count} chi nhánh</span>
              </div>
              <ul>
                {city.branches.split(', ').map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GymSystem
