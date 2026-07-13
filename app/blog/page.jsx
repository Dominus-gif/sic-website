import PageHero from "@/components/PageHero";
import MSym from "@/components/MSym";
import { posts } from "@/lib/site";

export const metadata = {
  title: "Blog",
  description:
    "Insights on bulk material handling, wear protection, drives, and plant reliability from the engineers at Shah Industrial Corporation.",
};

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="Blog & Insights"
        title="Field-tested knowledge from the plant floor"
        subtitle="Practical guidance on reliability, wear protection, drives, and bulk material handling — written by the engineers who install and support these systems every day."
      />

      <section className="bg-surface py-stack-lg">
        <div className="container-x">
          {/* Featured */}
          <article className="group relative overflow-hidden rounded-xl border border-outline bg-white p-8 transition-all hover:border-brand lg:p-12">
            <div className="absolute left-0 top-0 h-1 w-full bg-accent" />
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-3 text-mono-data">
                <span className="rounded bg-accent/10 px-3 py-1 font-semibold uppercase tracking-[0.08em] text-accent">
                  Featured
                </span>
                <span className="text-muted">{featured.category}</span>
                <span className="text-outline">•</span>
                <span className="text-muted">{formatDate(featured.date)}</span>
                <span className="text-outline">•</span>
                <span className="text-muted">{featured.readTime}</span>
              </div>
              <h2 className="mt-5 font-display text-[32px] font-bold leading-tight tracking-tight text-primary text-balance">
                {featured.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                {featured.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-bold text-brand">
                Read article
                <MSym name="arrow_forward" className="transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </article>

          {/* Grid */}
          <div className="mt-gutter grid grid-cols-1 gap-gutter md:grid-cols-3">
            {rest.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col rounded-xl border border-outline bg-white p-7 transition-all hover:border-brand"
              >
                <span className="w-fit rounded bg-cad px-3 py-1 text-mono-data font-medium text-muted">
                  {post.category}
                </span>
                <h3 className="mt-4 font-display text-headline-md font-semibold leading-snug text-primary">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-outline pt-4 text-mono-data text-steel">
                  <span>{formatDate(post.date)}</span>
                  <span className="inline-flex items-center gap-1">
                    <MSym name="schedule" className="text-base" />
                    {post.readTime}
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter */}
          <div className="mt-stack-lg rounded-xl border border-outline bg-cad p-8 text-center sm:p-12">
            <h2 className="font-display text-headline-lg font-bold text-primary">
              Get plant-reliability insights in your inbox
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-muted">
              Occasional, practical notes on reducing downtime and total cost of
              ownership. No spam.
            </p>
            <form className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row" action="/contact">
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="w-full rounded border border-outline bg-white px-5 py-3 text-ink placeholder:text-steel/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
              />
              <button type="submit" className="btn-primary shrink-0">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
