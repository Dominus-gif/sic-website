export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden border-b border-outline bg-cad">
      <div className="absolute inset-0 blueprint-pattern opacity-40" />
      <div className="absolute -left-4 top-8 h-24 w-24 border-l-2 border-t-2 border-brand opacity-30" />
      <div className="container-x relative py-stack-lg">
        {eyebrow && <span className="eyebrow mb-stack-sm block">{eyebrow}</span>}
        <h1 className="max-w-3xl font-display text-[32px] font-bold leading-tight tracking-tight text-primary text-balance sm:text-display-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
