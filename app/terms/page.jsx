import PageHero from "@/components/PageHero";
import { company } from "@/lib/site";

export const metadata = {
  title: "Terms & Conditions",
  description: "The terms governing use of the Shah Industrial Corporation website.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using our website and services."
      />
      <section className="bg-surface py-stack-lg">
        <div className="container-x mx-auto max-w-3xl space-y-8 text-muted">
          <Block title="Use of this website">
            The content on this website is provided for general information about
            Shah Industrial Corporation and its solutions. While we strive for
            accuracy, specifications and offerings may change without notice.
          </Block>
          <Block title="Intellectual property">
            All content, logos, and materials on this site are the property of
            Shah Industrial Corporation unless otherwise stated, and may not be
            reproduced without permission.
          </Block>
          <Block title="Products & partners">
            Product names and OEM partner brands referenced on this site belong
            to their respective owners. Availability and specifications are
            subject to confirmation at the time of enquiry.
          </Block>
          <Block title="Limitation of liability">
            Shah Industrial Corporation shall not be liable for any indirect or
            consequential loss arising from the use of information on this
            website. Formal commitments are governed by written agreements.
          </Block>
          <Block title="Contact">
            Questions about these terms can be directed to{" "}
            <a href={`mailto:${company.email}`} className="text-brand underline">
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
      <h2 className="font-display text-headline-md font-semibold text-primary">
        {title}
      </h2>
      <p className="mt-3 leading-relaxed">{children}</p>
    </div>
  );
}
