function Hero() {
  return (
    <section id="top" className="hero">
      <img
        className="hero__bg"
        src="https://picsum.photos/seed/thenewgym-hero/1920/1080"
        alt="Phòng tập The New Gym"
      />
      <div className="hero__overlay" />
      <div className="container hero__content">
        <span className="eyebrow eyebrow--light">The New Gym</span>
        <h1 className="hero__title">
          GYM CHO <span>MỌI NGƯỜI</span>
        </h1>
        <p className="hero__subtitle">
          Không gian tập luyện hiện đại, thoải mái, không phán xét. Chỉ từ
          299.000đ/tháng — tập luyện không giới hạn, 24/7.
        </p>
        <div className="hero__cta">
          <a href="#register" className="btn btn-primary">
            Đăng ký ngay
          </a>
          <a href="#pricing" className="btn btn-outline-light">
            Xem bảng giá
          </a>
        </div>
        <div className="hero__stats">
          <div>
            <strong>15+</strong>
            <span>Phòng tập</span>
          </div>
          <div>
            <strong>24/7</strong>
            <span>Hoạt động</span>
          </div>
          <div>
            <strong>299K</strong>
            <span>Từ mỗi tháng</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
