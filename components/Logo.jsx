import Link from "next/link";
import Image from "next/image";
import { company } from "@/lib/site";

export default function Logo({ variant = "light" }) {
  const textColor = variant === "dark" ? "text-white" : "text-primary";
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={company.name}>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded border border-outline bg-white">
        <Image
          src="/brand/sic-logo-wide.png"
          alt="Shah Industrial Corporation logo"
          width={44}
          height={30}
          priority
          className="h-8 w-auto object-contain"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[15px] font-bold leading-tight tracking-tight sm:text-lg ${textColor}`}>
          Shah Industrial
        </span>
        <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-accent sm:text-label-caps">
          Corporation
        </span>
      </span>
    </Link>
  );
}
