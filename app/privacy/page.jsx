import PageHero from "@/components/PageHero";
import { company } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy",
  description: "How Shah Industrial Corporation handles your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Your privacy matters to us. This policy explains what information we collect and how we use it."
      />
      <section className="container-x py-16">
        <div className="prose-invert mx-auto max-w-3xl space-y-8 text-steel-300">
          <Block title="Information we collect">
            When you contact us through our website, phone, or email, we may
            collect your name, company, email address, phone number, and the
            details of your enquiry. We only collect information you choose to
            share with us.
          </Block>
          <Block title="How we use your information">
            We use your information solely to respond to your enquiries, provide
            quotes and technical support, and maintain our business
            relationship. We do not sell or rent your personal information to
            third parties.
          </Block>
          <Block title="Data security">
            We take reasonable technical and organisational measures to protect
            your information against unauthorised access, loss, or misuse.
          </Block>
          <Block title="Third-party services">
            Our website may use third-party services such as embedded maps.
            These providers have their own privacy policies governing the data
            they process.
          </Block>
          <Block title="Contact">
            For any questions about this policy or your data, contact us at{" "}
            <a href={`mailto:${company.email}`} className="text-brand-300 underline">
              {company.email}
            </a>
            .
          </Block>
        </div>
      </section>
    </>
  );
}

function Block({ title, children }) {
  return (
    <div>
      <h2 className="font-display text-xl font-semibold text-white">{title}</h2>
      <p className="mt-3 leading-relaxed">{children}</p>
    </div>
  );
}
