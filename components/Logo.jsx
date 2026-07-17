import Link from "next/link";
import Image from "next/image";
import { company } from "@/lib/site";

export default function Logo({ variant = "light" }) {
  const textColor = variant === "dark" ? "text-white" : "text-primary";
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={company.name}>
      <Image
        src="/brand/logo-mark.png"
        alt="Shah Industrial Corporation logo"
        width={66}
        height={40}
        priority
        className="h-10 w-auto object-contain sm:h-11"
      />
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
