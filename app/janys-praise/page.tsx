
import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Jany's Praise",
  description: "Jany's Praise, a novel in progress by Jon Gergen.",
};

export default function JanysPraisePage() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="flex items-stretch gap-6">
        <span className="ribbon" aria-hidden="true" />
        <div className="max-w-prose">
          <p className="font-utility text-xs uppercase tracking-[0.15em] text-ink-faint">
            Novel in progress
          </p>
          <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            Jany&apos;s Praise
          </h1>
          <div className="mt-8 space-y-4 font-body text-lg text-ink-muted">
            <p>
              <em>Jany&apos;s Praise</em> is the story of a girl who spends her
              life searching for the love, belonging, and God she believes she
              lost &mdash; only to discover, through the diary of the man who
              raised her, that all three may have been beside her all along.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
