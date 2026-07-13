import Link from "next/link";
import { company } from "@/lib/site";

export default function Logo({ variant = "light" }) {
  const textColor = variant === "dark" ? "text-white" : "text-primary";
  return (
    <Link href="/" className="flex items-center gap-3" aria-label={company.name}>
      <span className="flex h-11 w-11 items-center justify-center rounded border border-brand/20 bg-brand">
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 20h18" />
          <path d="M5 20V9l7-5 7 5v11" />
          <path d="M9 20v-6h6v6" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
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
