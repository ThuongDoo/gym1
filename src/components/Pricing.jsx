function Pricing({ data }) {
  const { pricing } = data;

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="pricing__head">
          <span className="eyebrow">{pricing.eyebrow}</span>
          <h2 className="section-title">{pricing.title}</h2>
          <p className="section-subtitle" style={{ margin: '12px auto 0' }}>
            {pricing.subtitle}
          </p>
        </div>
        <div className="pricing__grid">
          {pricing.plans.map((plan) => (
            <div
              className={`pricing__card ${plan.highlight ? 'pricing__card--highlight' : ''}`}
              key={plan.name}
            >
              {plan.badge && (
                <span className="pricing__badge">{plan.badge}</span>
              )}
              <h3>{plan.name}</h3>
              <p className="pricing__price">
                {plan.price}
                <span>{plan.period}</span>
              </p>
              <p className="pricing__note">{plan.note}</p>
              <ul className="pricing__features">
                {plan.features.split(', ').map((f) => (
                  <li key={f}>
                    <span className="split__check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#register"
                className={`btn btn-block ${plan.highlight ? 'btn-primary' : 'btn-outline'}`}
              >
                {plan.ctaLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
