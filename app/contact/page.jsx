import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import MSym from "@/components/MSym";
import AddressLink from "@/components/AddressLink";
import { Reveal } from "@/components/Motion";
import { company } from "@/lib/site";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Shah Industrial Corporation in Raipur, Chhattisgarh. Request a quote, plant audit, or technical consultation.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Start your next engineering journey"
        subtitle="Whether you need a quote, a plant audit, or technical advice, our team is ready to help. Reach out and an engineer will get back to you."
      />

      <section className="bg-surface py-stack-lg">
        <div className="container-x grid grid-cols-1 gap-stack-lg lg:grid-cols-5">
          {/* Info */}
          <Reveal className="space-y-stack-md lg:col-span-2">
            <span className="eyebrow">Reach us directly</span>
            <h2 className="font-display text-headline-lg font-bold text-primary">
              We&apos;re here to help
            </h2>
            <p className="text-muted">
              Prefer to talk? Call or email us — we respond quickly during
              business hours.
            </p>

            <div className="space-y-4">
              <InfoCard sym="location_on" title="Visit Us">
                <AddressLink className="transition-colors hover:text-brand">
                  {company.address}
                </AddressLink>
              </InfoCard>
              <InfoCard sym="call" title="Call Us">
                <div className="flex flex-col gap-1">
                  {company.phones.map((p) => (
                    <a key={p} href={`tel:${p}`} className="hover:text-brand">
                      {p}
                    </a>
                  ))}
                </div>
              </InfoCard>
              <InfoCard sym="mail" title="Email Us">
                <a href={`mailto:${company.email}`} className="hover:text-brand">
                  {company.email}
                </a>
              </InfoCard>
              <InfoCard sym="schedule" title="Business Hours">
                Monday – Saturday, 10:00 AM – 7:00 PM IST
              </InfoCard>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-3 lg:h-full">
            <div className="flex h-full flex-col justify-center rounded-xl border border-outline bg-white p-8 shadow-sm sm:p-10">
              <h2 className="font-display text-headline-md font-bold text-primary">
                Send us an enquiry
              </h2>
              <p className="mt-2 text-muted">
                Fill in the form and we&apos;ll get back to you with the right
                solution.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="container-x pb-stack-lg">
        <div className="overflow-hidden rounded-xl border border-outline">
          <iframe
            title="Shah Industrial Corporation location"
            src="https://www.google.com/maps?q=Arihant+Complex+Station+Road+Raipur+Chhattisgarh+492001&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

function InfoCard({ sym, title, children }) {
  return (
    <div className="flex gap-4 rounded-xl border border-outline bg-white p-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-accent/10 text-accent">
        <MSym name={sym} />
      </span>
      <div>
        <h3 className="font-bold text-primary">{title}</h3>
        <div className="mt-1 leading-relaxed text-muted">{children}</div>
      </div>
    </div>
  );
}
