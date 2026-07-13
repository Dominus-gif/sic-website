import Link from "next/link";
import PageHero from "@/components/PageHero";
import MSym from "@/components/MSym";
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
      <section className="bg-surface py-stack-lg">
        <div className="container-x grid grid-cols-1 gap-stack-lg lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="eyebrow mb-stack-sm block">Our Story</span>
            <h2 className="font-display text-[32px] font-bold tracking-tight text-primary">
              A trusted name in Indian heavy industry
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-muted">
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
            <div className="grid grid-cols-2 gap-gutter">
              {stats.map((s) => (
                <div key={s.label} className="border-l-4 border-brand bg-cad p-6">
                  <div className="font-display text-display-lg font-bold text-brand">
                    {s.value}
                  </div>
                  <div className="mt-1 text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="border-y border-outline bg-cad">
        <div className="container-x grid grid-cols-1 gap-gutter py-stack-lg md:grid-cols-2">
          <div className="rounded-xl border border-outline bg-white p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded bg-accent/10 text-accent">
              <MSym name="visibility" />
            </span>
            <h3 className="mt-5 font-display text-headline-md font-semibold text-primary">
              Our Vision
            </h3>
            <p className="mt-3 leading-relaxed text-muted">
              To be India&apos;s most trusted partner for mission-critical
              industrial solutions that enhance plant reliability, safety, and
              efficiency.
            </p>
          </div>
          <div className="rounded-xl border border-outline bg-white p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded bg-accent/10 text-accent">
              <MSym name="flag" />
            </span>
            <h3 className="mt-5 font-display text-headline-md font-semibold text-primary">
              Our Mission
            </h3>
            <p className="mt-3 leading-relaxed text-muted">
              To deliver high-performance products and lifecycle support that
              reduce downtime and total cost of ownership for every plant we
              serve.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface py-stack-lg">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow mb-stack-sm block">Core Values</span>
            <h2 className="font-display text-[32px] font-bold tracking-tight text-primary sm:text-display-lg">
              What we stand for
            </h2>
          </div>
          <div className="mt-stack-lg grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="card">
                <h3 className="font-display text-headline-md font-semibold text-primary">
                  {v.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="border-t border-outline bg-cad py-stack-lg">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow mb-stack-sm block">Leadership</span>
            <h2 className="font-display text-[32px] font-bold tracking-tight text-primary sm:text-display-lg">
              The people behind SIC
            </h2>
          </div>
          <div className="mx-auto mt-stack-lg grid max-w-4xl grid-cols-1 gap-gutter sm:grid-cols-3">
            {leadership.map((l) => (
              <div key={l.name} className="rounded-xl border border-outline bg-white p-8 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand font-display text-2xl font-bold text-white">
                  {l.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="mt-5 font-display text-headline-md font-semibold text-primary">
                  {l.name}
                </h3>
                <p className="mt-1 text-mono-data font-medium text-accent">{l.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-surface py-stack-lg">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow mb-stack-sm block">Trusted OEM Partners</span>
            <h2 className="font-display text-[32px] font-bold tracking-tight text-primary sm:text-display-lg">
              We represent the best in the business
            </h2>
            <p className="mt-4 text-muted">
              Our strategic partnerships with leading global OEMs let us deliver
              proven, warranty-backed technology to your plant.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {partners.map((p) => (
              <span
                key={p}
                className="rounded border border-outline bg-cad px-6 py-3 font-display font-semibold text-primary"
              >
                {p}
              </span>
            ))}
          </div>
          <div className="mt-stack-md text-center">
            <Link href="/contact" className="btn-cta">
              Partner With Us
              <MSym name="arrow_forward" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
