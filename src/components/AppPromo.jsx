const FEATURES = [
  'Ra vào phòng tập 24/7 bằng mã QR',
  'Đặt lịch lớp học nhóm miễn phí',
  'Theo dõi tiến độ và lịch sử tập luyện',
  'Quản lý hội viên, gia hạn, nâng cấp gói',
]

function AppPromo() {
  return (
    <section id="app" className="app-promo">
      <div className="container app-promo__inner">
        <div className="app-promo__phone">
          <img
            src="https://picsum.photos/seed/thenewgym-app/480/960"
            alt="Ứng dụng The New Gym"
          />
        </div>
        <div className="app-promo__content">
          <span className="eyebrow">The New Gym App</span>
          <h2 className="section-title">
            Cả phòng gym trong lòng bàn tay bạn
          </h2>
          <p className="split__text">
            Đặt lịch, mở khoá cửa, theo dõi tiến độ và quản lý gói tập — tất
            cả chỉ trong một ứng dụng.
          </p>
          <ul className="split__bullets">
            {FEATURES.map((f) => (
              <li key={f}>
                <span className="split__check">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <div className="app-promo__stores">
            <a href="#" className="app-promo__badge">
              ▶ Google Play
            </a>
            <a href="#" className="app-promo__badge">
               App Store
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppPromo
