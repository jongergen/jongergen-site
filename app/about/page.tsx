import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "About",
  description: "About Jon Gergen, author.",
};

export default function AboutPage() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="grid gap-12 sm:grid-cols-[240px_1fr] sm:gap-16">
        <div>
          {/* TODO: replace with a real author photo in /public and swap this div for an <Image /> */}
          <div className="aspect-[4/5] w-full rounded-sm bg-paper-dim" />
        </div>
        <div className="max-w-prose">
          <h1 className="font-display text-3xl text-ink sm:text-4xl">
            About Jon
          </h1>
          {/* TODO: replace with your real long-form bio */}
          <div className="mt-6 space-y-4 font-body text-lg text-ink-muted">
            <p>
              This is a placeholder biography. Write two or three paragraphs
              here about who you are, how you came to writing, and what
              connects the memoir and the children&apos;s series for you as
              an author.
            </p>
            <p>
              A good author bio usually covers: where you&apos;re from or
              based, your background or day job if relevant, what draws you
              to the stories you tell, and a personal detail or two that
              makes you memorable to a reader, agent, or journalist skimming
              this page.
            </p>
            <p>
              Close with something forward-looking &mdash; what you&apos;re
              working on now, or what you hope readers take away from your
              work.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
