import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
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
        title="Let's talk about your plant"
        subtitle="Whether you need a quote, a plant audit, or technical advice, our team is ready to help. Reach out and an engineer will get back to you."
      />

      <section className="container-x py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Info */}
          <div className="lg:col-span-5">
            <span className="eyebrow">Reach us directly</span>
            <h2 className="mt-4 font-display text-2xl font-bold text-white">
              We're here to help
            </h2>
            <p className="mt-3 text-steel-300">
              Prefer to talk? Call or email us — we respond quickly during
              business hours.
            </p>

            <div className="mt-8 space-y-4">
              <InfoCard icon="pin" title="Visit us">
                {company.address}
              </InfoCard>

              <InfoCard icon="phone" title="Call us">
                <div className="flex flex-col gap-1">
                  {company.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p}`}
                      className="transition-colors hover:text-brand-300"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </InfoCard>

              <InfoCard icon="mail" title="Email us">
                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors hover:text-brand-300"
                >
                  {company.email}
                </a>
              </InfoCard>

              <InfoCard icon="clock" title="Business hours">
                Monday – Saturday, 10:00 AM – 7:00 PM IST
              </InfoCard>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-panel/50 p-8 sm:p-10">
              <h2 className="font-display text-xl font-bold text-white">
                Send us an enquiry
              </h2>
              <p className="mt-2 text-sm text-steel-400">
                Fill in the form and we'll get back to you with the right
                solution.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="container-x pb-20">
        <div className="overflow-hidden rounded-3xl border border-white/10">
          <iframe
            title="Shah Industrial Corporation location"
            src="https://www.google.com/maps?q=Arihant+Complex+Station+Road+Raipur+Chhattisgarh+492001&output=embed"
            className="h-[420px] w-full grayscale-[30%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

function InfoCard({ icon, title, children }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-white/10 bg-panel/40 p-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <div>
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <div className="mt-1 text-sm leading-relaxed text-steel-300">
          {children}
        </div>
      </div>
    </div>
  );
}
