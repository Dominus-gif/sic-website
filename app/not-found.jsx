import Link from "next/link";
import MSym from "@/components/MSym";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-surface py-stack-lg text-center">
      <div className="absolute inset-0 blueprint-pattern opacity-40" />
      <div className="container-x relative">
        <span className="font-display text-[96px] font-bold leading-none text-brand">
          404
        </span>
        <h1 className="mt-6 font-display text-headline-lg font-bold text-primary">
          Page not found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-muted">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
          Let&apos;s get you back on track.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Back to Home
          <MSym name="arrow_forward" />
        </Link>
      </div>
    </section>
  );
}
