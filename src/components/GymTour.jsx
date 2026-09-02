import { config } from "../data/siteData";

function GymTour() {
  const { gymTour } = config;

  return (
    <section id="tour" className="tour">
      <div className="container">
        <div className="tour__head">
          <span className="eyebrow">{gymTour.eyebrow}</span>
          <h2 className="section-title">{gymTour.title}</h2>
          <p className="section-subtitle">{gymTour.subtitle}</p>
        </div>
        <div className="tour__grid">
          {gymTour.photos.map((p) => (
            <div className="tour__item" key={p.seed}>
              <img
                src={`https://picsum.photos/seed/${p.seed}/600/600`}
                alt={p.label}
              />
              <span>{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GymTour
