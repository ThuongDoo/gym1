import { useState } from 'react'

function RegisterCTA() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="register" className="register">
      <div className="container register__inner">
        <div className="register__text">
          <span className="eyebrow eyebrow--light">Trải nghiệm miễn phí</span>
          <h2 className="section-title register__title">
            Đăng ký tập thử 7 ngày miễn phí
          </h2>
          <p className="register__subtitle">
            Để lại thông tin, đội ngũ The New Gym sẽ liên hệ tư vấn gói tập
            phù hợp với bạn trong thời gian sớm nhất.
          </p>
        </div>

        {submitted ? (
          <div className="register__success">
            🎉 Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ trong thời gian
            sớm nhất.
          </div>
        ) : (
          <form className="register__form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Họ và tên" required />
            <input type="tel" placeholder="Số điện thoại" required />
            <button type="submit" className="btn btn-primary btn-block">
              Đăng ký ngay
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default RegisterCTA
