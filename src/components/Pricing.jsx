const PLANS = [
  {
    name: '1 tháng — 1 chi nhánh',
    price: '299.000',
    period: 'đ / tháng',
    note: 'Thanh toán hàng tháng',
    features: [
      'Tập tại 1 chi nhánh bạn chọn',
      'Không giới hạn số lần tập',
      'Hoạt động 24/7',
      'Lớp học nhóm miễn phí',
    ],
    highlight: false,
  },
  {
    name: '1 tháng — Toàn hệ thống',
    price: '399.000',
    period: 'đ / tháng',
    note: 'Thanh toán hàng tháng',
    features: [
      'Tập tại tất cả chi nhánh',
      'Không giới hạn số lần tập',
      'Hoạt động 24/7',
      'Lớp học nhóm miễn phí',
      'Hỗ trợ đổi chi nhánh linh hoạt',
    ],
    highlight: true,
    badge: '⭐ Phổ biến nhất',
  },
  {
    name: '6 tháng — Toàn hệ thống',
    price: '299.000',
    period: 'đ / tháng',
    note: 'Trả trước 6 tháng, hỗ trợ trả góp 0%',
    features: [
      'Tập tại tất cả chi nhánh',
      'Tiết kiệm hơn 25% so với gói tháng',
      'Không giới hạn số lần tập',
      'Hoạt động 24/7',
      'Ưu tiên đặt lịch lớp học',
    ],
    highlight: false,
  },
]

function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="pricing__head">
          <span className="eyebrow">Bảng giá hội viên</span>
          <h2 className="section-title">Chọn gói tập phù hợp với bạn</h2>
          <p className="section-subtitle" style={{ margin: '12px auto 0' }}>
            Không phí ẩn, không ràng buộc dài hạn. Huỷ hoặc đổi gói bất cứ
            lúc nào.
          </p>
        </div>
        <div className="pricing__grid">
          {PLANS.map((plan) => (
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
                {plan.features.map((f) => (
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
                Đăng ký ngay
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
