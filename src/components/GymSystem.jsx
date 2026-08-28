const CITIES = [
  {
    name: 'TP. Hồ Chí Minh',
    count: 12,
    branches: [
      'Lê Hồng Phong',
      'Lý Thường Kiệt',
      'Nam Kỳ Khởi Nghĩa',
      'Quang Trung',
      'Phan Đăng Lưu',
      'Điện Biên Phủ',
      'Ung Văn Khiêm',
      'Hậu Giang',
      'Âu Cơ',
      'Nguyễn Chí Thanh',
      'Nguyễn Thị Thập',
      'Cộng Hòa',
    ],
  },
  { name: 'Đồng Nai', count: 1, branches: ['Biên Hòa'] },
  { name: 'Cần Thơ', count: 1, branches: ['Ninh Kiều'] },
  { name: 'Đà Nẵng', count: 1, branches: ['Hải Châu'] },
]

function GymSystem() {
  return (
    <section id="locations" className="system">
      <div className="container">
        <div className="system__head">
          <span className="eyebrow eyebrow--light">Hệ thống phòng tập</span>
          <h2 className="section-title system__title">
            Hơn 15 phòng tập trên toàn quốc
          </h2>
          <p className="section-subtitle system__subtitle">
            Một thẻ hội viên, tập luyện tại bất kỳ chi nhánh nào trong hệ
            thống với gói Toàn hệ thống.
          </p>
        </div>
        <div className="system__grid">
          {CITIES.map((city) => (
            <div className="system__card" key={city.name}>
              <div className="system__card-head">
                <h3>{city.name}</h3>
                <span>{city.count} chi nhánh</span>
              </div>
              <ul>
                {city.branches.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GymSystem
