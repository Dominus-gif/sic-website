import { company } from "@/lib/site";

export default function WhatsAppButton() {
  const number = company.phones[0].replace(/[^0-9]/g, "");
  return (
    <a
      href={`https://wa.me/${number}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-margin-desktop right-margin-desktop z-[60] flex items-center justify-center rounded-full bg-[#25D366] p-4 text-white shadow-2xl ring-4 ring-[#25D366]/20 transition-all hover:scale-110 active:scale-95"
      aria-label="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden="true">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.048 9.376L1.052 31.3l6.128-1.96A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0Zm9.312 22.596c-.386 1.09-1.918 1.994-3.14 2.258-.836.178-1.928.32-5.604-1.204-4.7-1.948-7.726-6.724-7.962-7.034-.226-.31-1.9-2.53-1.9-4.826 0-2.296 1.166-3.414 1.636-3.894.386-.394.844-.574 1.324-.574.156 0 .296.008.422.014.386.016.58.038.834.646.316.762 1.086 2.658 1.178 2.852.094.194.188.456.056.766-.124.32-.234.44-.428.678-.194.238-.378.42-.572.674-.178.222-.378.462-.154.85.224.38 1 1.646 2.146 2.666 1.478 1.316 2.694 1.726 3.12 1.904.318.132.696.1.928-.146.294-.318.656-.846 1.024-1.366.262-.372.592-.418.938-.288.352.124 2.234 1.054 2.62 1.246.386.194.64.288.734.45.092.164.092.94-.294 2.03Z" />
      </svg>
      <span className="pointer-events-none absolute right-full mr-4 whitespace-nowrap rounded bg-white px-4 py-2 text-label-caps font-semibold uppercase tracking-[0.08em] text-primary opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
        WhatsApp Us
      </span>
    </a>
  );
}
