export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 grid-pattern radial-fade opacity-70" />
      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-500/20 blur-[120px]" />
      <div className="container-x relative py-20 sm:py-24">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-white text-balance sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-steel-300">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
