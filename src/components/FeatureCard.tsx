type Props = {
  image: string
  chip: string
  copy: string
  cta: string
  delay?: string
}

export default function FeatureCard({
  image,
  chip,
  copy,
  cta,
  delay = '480ms',
}: Props) {
  return (
    <article className="panel rise" style={{ animationDelay: delay }}>
      <div className="panel__media">
        <img src={image} alt="" loading="lazy" decoding="async" />
      </div>

      <span className="panel__chip">{chip}</span>

      <p className="panel__copy">{copy}</p>

      <button type="button" className="panel__cta">
        {cta}
      </button>
    </article>
  )
}
