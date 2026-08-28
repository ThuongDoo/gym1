function SplitSection({
  id,
  eyebrow,
  title,
  paragraphs,
  bullets,
  image,
  imageAlt,
  reverse,
  cta,
  tint,
}) {
  return (
    <section
      id={id}
      className={`split ${reverse ? 'split--reverse' : ''} ${tint ? 'split--tint' : ''}`}
    >
      <div className="container split__inner">
        <div className="split__media">
          <img src={image} alt={imageAlt} />
        </div>
        <div className="split__content">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="section-title">{title}</h2>
          {paragraphs.map((p, i) => (
            <p className="split__text" key={i}>
              {p}
            </p>
          ))}
          {bullets && (
            <ul className="split__bullets">
              {bullets.map((b) => (
                <li key={b}>
                  <span className="split__check">✓</span>
                  {b}
                </li>
              ))}
            </ul>
          )}
          {cta && (
            <a href={cta.href} className="btn btn-primary">
              {cta.label}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

export default SplitSection
