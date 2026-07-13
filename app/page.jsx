import Link from "next/link";
import Icon from "@/components/Icon";
import {
  company,
  stats,
  services,
  industries,
  partners,
  values,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern radial-fade opacity-60" />
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand-500/20 blur-[140px]" />
        <div className="absolute top-40 -left-20 h-80 w-80 rounded-full bg-steel-500/20 blur-[140px]" />

        <div className="container-x relative grid items-center gap-12 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-7">
            <span className="eyebrow animate-fade-up">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
              {company.tagline}
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white text-balance sm:text-6xl lg:text-[64px]">
              Engineering the{" "}
              <span className="gradient-text">backbone</span> of heavy industry.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-steel-300">
              Shah Industrial Corporation is a trusted pan-India partner
              delivering integrated bulk material handling, hydraulic, crushing,
              drive, and flow-control solutions to mining, steel, cement, and
              power plants.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href="/products" className="btn-primary">
                Explore Solutions
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-ghost">
                Talk to an Engineer
              </Link>
            </div>

            <div className="mt-12 grid max-w-lg grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl font-bold text-white">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-steel-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-500/20 to-transparent blur-2xl" />
              <div className="relative rounded-3xl border border-white/10 bg-panel/70 p-6 backdrop-blur">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
                    Plant-Ready Systems
                  </span>
                  <Icon name="spark" className="h-5 w-5 text-brand-400" />
                </div>
                <p className="mt-4 font-display text-xl font-semibold text-white">
                  {company.motto}
                </p>
                <div className="mt-6 space-y-3">
                  {services.slice(0, 4).map((s) => (
                    <div
                      key={s.slug}
                      className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/15 text-brand-300">
                        <Icon name={s.icon} className="h-5 w-5" />
                      </span>
                      <span className="text-sm font-medium text-steel-200">
                        {s.title.replace(" Solutions", "")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PARTNERS ===================== */}
      <section className="border-y border-white/10 bg-surface/50">
        <div className="container-x py-10">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-steel-400">
            Strategic partnerships with world-class OEMs
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {partners.map((p) => (
              <span
                key={p}
                className="font-display text-lg font-semibold text-steel-300/80 transition-colors hover:text-white"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== INDUSTRIES ===================== */}
      <section className="container-x py-20 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Industries We Power</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Built for the toughest environments in India
          </h2>
          <p className="mt-4 text-steel-300">
            For over three decades we have served the plants that keep the
            country running — where reliability is not optional.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-panel/50 p-8 text-center transition-all hover:border-brand-400/40"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-300 transition-transform group-hover:scale-110">
                <Icon name={ind.icon} className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-white">
                {ind.name}
              </h3>
              <p className="mt-2 text-sm text-steel-400">
                Mission-critical equipment & lifecycle support.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section className="border-t border-white/10 bg-surface/40">
        <div className="container-x py-20 sm:py-24">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <span className="eyebrow">Our Solutions</span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Nine integrated verticals, one accountable partner
              </h2>
              <p className="mt-4 text-steel-300">
                From power transmission to weighing systems, we engineer,
                supply, install, and support the equipment your operation
                depends on.
              </p>
            </div>
            <Link href="/products" className="btn-ghost shrink-0">
              View all services
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.slug} className="card group">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300 transition-transform group-hover:scale-110">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-400">
                  {s.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHY US / VALUES ===================== */}
      <section className="container-x py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Why Shah Industrial</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              The values that keep plants running
            </h2>
            <p className="mt-4 text-steel-300">
              We combine deep technical expertise with genuine long-term
              partnership. Our promise is simple: reduce your downtime and
              total cost of ownership, every year.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/about" className="btn-primary">
                About the company
              </Link>
              <Link href="/contact" className="btn-ghost">
                Request a plant audit
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-white/10 bg-panel/50 p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500/15 text-brand-300">
                      <Icon name="check" className="h-4 w-4" />
                    </span>
                    <h3 className="font-display font-semibold text-white">
                      {v.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-steel-400">
                    {v.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="container-x pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-brand-400/20 bg-gradient-to-br from-panel to-surface px-8 py-16 text-center sm:px-16">
          <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-500/20 blur-[120px]" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl">
              Ready to improve reliability and cut downtime?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-steel-300">
              Tell us about your plant and challenge. Our engineers will
              recommend the right solution and support plan.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Get a Quote
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <a href={`tel:${company.phones[0]}`} className="btn-ghost">
                <Icon name="phone" className="h-4 w-4" />
                {company.phones[0]}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
