import Link from "next/link";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import { company, values, leadership, partners, stats } from "@/lib/site";

export const metadata = {
  title: "About Us",
  description:
    "Founded by the Shah Brothers in Chhattisgarh, Shah Industrial Corporation has delivered mission-critical industrial solutions across India for over 30 years.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Three decades of building your visions into reality"
        subtitle="From a niche product supplier to a pan-India provider of end-to-end industrial solutions — the Shah Industrial story is one of reliability, integrity, and long-term partnership."
      />

      {/* Story */}
      <section className="container-x py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white">
              A trusted name in Indian heavy industry
            </h2>
            <div className="mt-6 space-y-4 text-steel-300">
              <p>
                Established over 30 years ago in Chhattisgarh by the Shah
                Brothers, Shah Industrial Corporation (SIC) began by supplying
                specialised industrial products to the region&apos;s mining and
                process plants.
              </p>
              <p>
                Over the decades we have evolved into a pan-India partner
                offering comprehensive, end-to-end solutions across bulk
                material handling, hydraulics, crushing, drives, and flow
                control — serving major mining, steel, cement, and power
                facilities.
              </p>
              <p>
                Today our work is defined by engineering excellence,
                operational reliability, and the long-term customer
                partnerships we have earned with some of India&apos;s largest
                industrial groups.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-panel/50 p-6"
                >
                  <div className="font-display text-3xl font-bold text-brand-400">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-steel-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="border-y border-white/10 bg-surface/40">
        <div className="container-x grid gap-6 py-16 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-panel/60 p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
              <Icon name="spark" className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold text-white">
              Our Vision
            </h3>
            <p className="mt-3 leading-relaxed text-steel-300">
              To be India&apos;s most trusted partner for mission-critical
              industrial solutions that enhance plant reliability, safety, and
              efficiency.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-panel/60 p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
              <Icon name="gauge" className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold text-white">
              Our Mission
            </h3>
            <p className="mt-3 leading-relaxed text-steel-300">
              To deliver high-performance products and lifecycle support that
              reduce downtime and total cost of ownership for every plant we
              serve.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-x py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Core Values</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What we stand for
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="card">
              <h3 className="font-display text-lg font-semibold text-white">
                {v.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-steel-400">
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="border-t border-white/10 bg-surface/40">
        <div className="container-x py-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Leadership</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              The people behind SIC
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-3">
            {leadership.map((l) => (
              <div
                key={l.name}
                className="rounded-2xl border border-white/10 bg-panel/50 p-8 text-center"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 font-display text-2xl font-bold text-ink">
                  {l.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {l.name}
                </h3>
                <p className="mt-1 text-sm text-brand-400">{l.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="container-x py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Trusted OEM Partners</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            We represent the best in the business
          </h2>
          <p className="mt-4 text-steel-300">
            Our strategic partnerships with leading global OEMs let us deliver
            proven, warranty-backed technology to your plant.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {partners.map((p) => (
            <span
              key={p}
              className="rounded-full border border-white/10 bg-panel/50 px-6 py-3 font-display text-sm font-semibold text-steel-200"
            >
              {p}
            </span>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/contact" className="btn-primary">
            Partner with us
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
