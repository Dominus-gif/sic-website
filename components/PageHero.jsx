import { Reveal } from "@/components/Motion";

export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cad to-surface">
      {/* Soft blueprint texture, faded so it never reads as a stray element */}
      <div className="pointer-events-none absolute inset-0 blueprint-pattern opacity-30 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-24 right-[-6rem] h-72 w-72 rounded-full bg-brand/5 blur-[120px]" />

      <div className="container-x relative py-14 sm:py-stack-lg">
        <Reveal>
          {eyebrow && (
            <span className="eyebrow mb-4 inline-flex items-center gap-2">
              <span className="h-px w-8 bg-accent" />
              {eyebrow}
            </span>
          )}
          <h1 className="max-w-3xl font-display text-[26px] font-bold leading-[1.2] tracking-tight text-primary text-balance sm:text-[44px]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-lg">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
