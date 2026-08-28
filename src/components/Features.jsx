const FEATURES = [
  { icon: '🏋️', title: 'Thiết bị đa dạng, hiện đại', desc: 'Đầy đủ máy tập, tạ tự do, khu cardio cho mọi mục tiêu.' },
  { icon: '⏰', title: 'Hoạt động 24/7', desc: 'Tập luyện bất cứ khi nào phù hợp với lịch trình của bạn.' },
  { icon: '🤸', title: 'Lớp học nhóm miễn phí', desc: 'Yoga, Zumba, HIIT... đa dạng lớp học mỗi tuần.' },
  { icon: '📶', title: 'Wifi, nước uống, chỗ để xe', desc: 'Tiện ích miễn phí giúp buổi tập thoải mái hơn.' },
  { icon: '🩺', title: 'Khám sức khoẻ & tư vấn dáng', desc: 'Đánh giá thể trạng và tư thế trước khi bắt đầu.' },
  { icon: '🧑‍🏫', title: 'HLV chuyên nghiệp hỗ trợ', desc: 'Hướng dẫn kỹ thuật đúng, an toàn khi sử dụng thiết bị.' },
]

function Features() {
  return (
    <section className="features">
      <div className="container">
        <div className="pricing__head">
          <span className="eyebrow">Vì sao chọn The New Gym</span>
          <h2 className="section-title">Tiện ích dành cho mọi hội viên</h2>
        </div>
        <div className="features__grid">
          {FEATURES.map((f) => (
            <div className="features__card" key={f.title}>
              <span className="features__icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
