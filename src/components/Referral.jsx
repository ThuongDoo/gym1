import { config } from "../data/siteData";

function Referral() {
  const { referral } = config;

  return (
    <section className="split">
      <div className="container split__inner">
        <div className="split__media">
          <img src={referral.image} alt={referral.imageAlt} />
        </div>
        <div className="split__content">
          <span className="eyebrow">{referral.eyebrow}</span>
          <h2 className="section-title">{referral.title}</h2>
          {referral.paragraphs.map((p, i) => (
            <p className="split__text" key={i}>
              {p}
            </p>
          ))}
          <a href="#register" className="btn btn-primary">
            {referral.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Referral;
