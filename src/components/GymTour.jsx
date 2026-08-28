const PHOTOS = [
  { seed: 'gym-tour-1', label: 'Khu tập tạ tự do' },
  { seed: 'gym-tour-2', label: 'Khu cardio' },
  { seed: 'gym-tour-3', label: 'Khu máy tập' },
  { seed: 'gym-tour-4', label: 'Khu giãn cơ' },
  { seed: 'gym-tour-5', label: 'Phòng thay đồ' },
  { seed: 'gym-tour-6', label: 'Quầy lễ tân' },
]

function GymTour() {
  return (
    <section id="tour" className="tour">
      <div className="container">
        <div className="tour__head">
          <span className="eyebrow">Cơ sở vật chất</span>
          <h2 className="section-title">Tham quan phòng tập</h2>
          <p className="section-subtitle">
            Không gian rộng rãi, trang thiết bị hiện đại, hoạt động 24/7 —
            sẵn sàng cho mọi mục tiêu tập luyện của bạn.
          </p>
        </div>
        <div className="tour__grid">
          {PHOTOS.map((p) => (
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
