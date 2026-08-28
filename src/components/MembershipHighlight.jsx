const PLANS = [
  {
    title: 'Toàn hệ thống',
    price: '399.000',
    desc: 'Tập tại tất cả các chi nhánh The New Gym trên toàn quốc.',
    tag: 'Linh hoạt nhất',
  },
  {
    title: '1 chi nhánh',
    price: '299.000',
    desc: 'Tập không giới hạn tại 1 chi nhánh bạn chọn, gần nơi bạn sống.',
    tag: 'Tiết kiệm nhất',
  },
]

function MembershipHighlight() {
  return (
    <section className="membership">
      <div className="container membership__inner">
        {PLANS.map((plan) => (
          <div className="membership__card" key={plan.title}>
            <span className="membership__tag">{plan.tag}</span>
            <h3>{plan.title}</h3>
            <p className="membership__price">
              {plan.price}<span>đ/tháng</span>
            </p>
            <p className="membership__desc">{plan.desc}</p>
            <a href="#pricing" className="btn btn-dark btn-block">
              Chọn gói này
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MembershipHighlight
