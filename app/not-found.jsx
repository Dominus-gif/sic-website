import Link from "next/link";
import Icon from "@/components/Icon";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <span className="font-display text-7xl font-bold gradient-text">404</span>
      <h1 className="mt-6 font-display text-2xl font-bold text-white">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-steel-300">
        The page you're looking for doesn't exist or may have moved. Let's get
        you back on track.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to home
        <Icon name="arrow" className="h-4 w-4" />
      </Link>
    </section>
  );
}
