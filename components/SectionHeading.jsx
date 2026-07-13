import { Reveal } from "@/components/Motion";

/**
 * Unified section heading used across every page for a consistent look.
 * align: "center" | "left"
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  invert = false,
  className = "",
}) {
  const isCenter = align === "center";
  return (
    <Reveal
      className={`${isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow && (
        <span
          className={`mb-4 inline-flex items-center gap-2 text-label-caps font-semibold uppercase tracking-[0.1em] text-accent ${
            isCenter ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-8 bg-accent" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-[30px] font-bold leading-tight tracking-tight text-balance sm:text-[40px] ${
          invert ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            invert ? "text-svariant" : "text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
