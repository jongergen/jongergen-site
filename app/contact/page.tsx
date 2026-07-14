import type { Metadata } from "next";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Jon Gergen.",
};

export default function ContactPage() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="max-w-prose">
        <h1 className="font-display text-3xl text-ink sm:text-4xl">
          Get in touch
        </h1>
        <p className="mt-4 font-body text-lg text-ink-muted">
          For agents, publishers, press, schools, or readers &mdash; use the
          form below, or email{" "}
          <a href="mailto:hello@jongergen.com" className="text-cloth hover:underline">
            hello@jongergen.com
          </a>{" "}
          directly.
        </p>
        <div className="mt-10">
          <ContactForm />
        </div>
      </div>
    </Container>
  );
}
