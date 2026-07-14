import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "The memoir",
  description: "About Jon Gergen's forthcoming memoir.",
};

export default function MemoirPage() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="flex items-stretch gap-6">
        <span className="ribbon" aria-hidden="true" />
        <div className="max-w-prose">
          <p className="font-utility text-xs uppercase tracking-[0.15em] text-ink-faint">
            Chapter one
          </p>
          {/* TODO: replace with your real memoir title */}
          <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            Memoir title goes here
          </h1>
          {/* TODO: replace with your real status */}
          <p className="mt-3 font-utility text-sm text-cloth">
            Status: nearing completion &middot; seeking representation
          </p>

          {/* TODO: replace with your real synopsis, a few paragraphs */}
          <div className="mt-8 space-y-4 font-body text-lg text-ink-muted">
            <p>
              This is a placeholder synopsis. Describe the arc of the
              memoir in a few paragraphs: where it begins, the central
              tension or question that drives it, and what a reader walks
              away understanding by the end.
            </p>
            <p>
              Many memoir synopses work well by naming the time period or
              setting, the central relationships involved, and the stakes
              &mdash; what was actually at risk, emotionally or otherwise.
            </p>
            <p>
              If you&apos;re sharing this page with an agent or publisher,
              you may want a shorter, sharper version of this text at the
              top, with the fuller synopsis below it.
            </p>
          </div>

          <div className="mt-10 rounded-sm bg-paper-dim/60 p-6">
            <h2 className="font-display text-xl text-ink">
              For agents and publishers
            </h2>
            <p className="mt-2 font-body text-ink-muted">
              A full manuscript, sample chapters, and a formal query letter
              are available on request.
            </p>
            <a
              href="/contact"
              className="mt-4 inline-block font-utility text-sm font-medium text-cloth hover:underline"
            >
              Get in touch &rarr;
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
