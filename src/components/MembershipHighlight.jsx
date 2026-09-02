import { config } from "../data/siteData";

function MembershipHighlight() {
  const { membership } = config;

  return (
    <section className="membership">
      <div className="container membership__inner">
        {membership.plans.map((plan) => (
          <div className="membership__card" key={plan.title}>
            <span className="membership__tag">{plan.tag}</span>
            <h3>{plan.title}</h3>
            <p className="membership__price">
              {plan.price}<span>đ/tháng</span>
            </p>
            <p className="membership__desc">{plan.desc}</p>
            <a href="#pricing" className="btn btn-dark btn-block">
              {plan.ctaLabel}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MembershipHighlight
