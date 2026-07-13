import MSym from "@/components/MSym";
import { company } from "@/lib/site";

const variants = {
  cta: "btn-cta",
  primary: "btn-primary",
  outline: "btn-outline",
  dark: "btn border border-white/25 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15",
};

export default function DownloadProfile({ variant = "cta", label = "Download Company Profile", className = "" }) {
  return (
    <a
      href={company.profilePdf}
      download
      target="_blank"
      rel="noopener noreferrer"
      className={`${variants[variant] || variants.cta} ${className}`}
    >
      <MSym name="download" className="text-xl" />
      {label}
    </a>
  );
}
