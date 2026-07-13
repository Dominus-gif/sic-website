import Link from "next/link";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
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

      <section className="container-x py-20">
        {/* Featured */}
        <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-panel/50 p-8 transition-all hover:border-brand-400/40 lg:p-12">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-500/10 blur-[100px]" />
          <div className="relative max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="rounded-full bg-brand-500/15 px-3 py-1 font-semibold text-brand-300">
                Featured
              </span>
              <span className="text-steel-400">{featured.category}</span>
              <span className="text-steel-500">•</span>
              <span className="text-steel-400">{formatDate(featured.date)}</span>
              <span className="text-steel-500">•</span>
              <span className="text-steel-400">{featured.readTime}</span>
            </div>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white text-balance">
              {featured.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-steel-300">
              {featured.excerpt}
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-300">
              Read article
              <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </article>

        {/* Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {rest.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col rounded-2xl border border-white/10 bg-panel/40 p-7 transition-all hover:border-brand-400/40"
            >
              <div className="flex items-center gap-2 text-xs">
                <span className="rounded-full bg-white/5 px-3 py-1 font-medium text-steel-300">
                  {post.category}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-white">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-steel-400">
                {post.excerpt}
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-steel-500">
                <span>{formatDate(post.date)}</span>
                <span className="inline-flex items-center gap-1">
                  <Icon name="clock" className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-surface/60 p-8 text-center sm:p-12">
          <h2 className="font-display text-2xl font-bold text-white">
            Get plant-reliability insights in your inbox
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-steel-300">
            Occasional, practical notes on reducing downtime and total cost of
            ownership. No spam.
          </p>
          <form
            className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
            action="/contact"
          >
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="w-full rounded-full border border-white/15 bg-ink/60 px-5 py-3 text-sm text-white placeholder:text-steel-500 focus:border-brand-400/60 focus:outline-none"
            />
            <button type="submit" className="btn-primary shrink-0">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
