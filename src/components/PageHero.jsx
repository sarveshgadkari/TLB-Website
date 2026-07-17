import Link from 'next/link';

export default function PageHero({ eyebrow, title, description, primaryAction, secondaryAction }) {
  return (
    <section className="section section-dark page-hero">
      <div className="container">
        <div className="section-header page-hero-header">
          <div className="section-label reveal-up">{eyebrow}</div>
          <h1 className="section-title text-center reveal-up delay-1">{title}</h1>
          <p className="section-subtitle reveal-up delay-2">{description}</p>
          {(primaryAction || secondaryAction) ? (
            <div className="page-hero-actions reveal-up delay-3">
              {primaryAction ? (
                <Link href={primaryAction.href} className="btn btn-gold btn-lg">
                  {primaryAction.label}
                </Link>
              ) : null}
              {secondaryAction ? (
                <Link href={secondaryAction.href} className="btn btn-outline btn-lg">
                  {secondaryAction.label}
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}