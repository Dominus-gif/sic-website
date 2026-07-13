import Link from "next/link";
import Image from "next/image";
import { company } from "@/lib/site";

export default function Logo({ variant = "light" }) {
  const textColor = variant === "dark" ? "text-white" : "text-primary";
  return (
    <Link href="/" className="flex items-center gap-3" aria-label={company.name}>
      <Image
        src="/brand/sic-logo.png"
        alt="Shah Industrial Corporation logo"
        width={56}
        height={53}
        priority
        className="h-12 w-auto object-contain"
      />
      <span className="hidden flex-col leading-none sm:flex">
        <span className={`font-display text-lg font-bold tracking-tight ${textColor}`}>
          Shah Industrial
        </span>
        <span className="mt-0.5 text-label-caps font-semibold uppercase tracking-[0.1em] text-accent">
          Corporation
        </span>
      </span>
    </Link>
  );
}
