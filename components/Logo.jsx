import Link from "next/link";
import { company } from "@/lib/site";

export default function Logo({ compact = false }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label={company.name}>
      <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 shadow-[0_8px_24px_-8px_rgba(245,158,11,0.7)]">
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-ink" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 20h18" />
          <path d="M5 20V9l7-5 7 5v11" />
          <path d="M9 20v-6h6v6" />
        </svg>
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-base font-bold tracking-tight text-white">
            Shah Industrial
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-400">
            Corporation
          </span>
        </span>
      )}
    </Link>
  );
}
