import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "In the works",
  description: "What Jon Gergen is working on next.",
};

// TODO: replace with your real current/upcoming projects.
// Keep entries short — this page is meant to signal momentum, not
// deliver full synopses (those belong on their own page once ready).
const projects = [
  {
    title: "Project title goes here",
    note: "A line or two about what this is and roughly where it stands.",
  },
  {
    title: "Another project idea",
    note: "Even early-stage ideas are fine here — this page is about showing you're actively working.",
  },
];

export default function InTheWorksPage() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="flex items-stretch gap-6">
        <span className="ribbon" aria-hidden="true" />
        <div className="max-w-prose">
          <p className="font-utility text-xs uppercase tracking-[0.15em] text-ink-faint">
            Chapter three
          </p>
          <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            In the works
          </h1>
          <p className="mt-6 font-body text-lg text-ink-muted">
            A running note on what&apos;s next &mdash; some of this is
            further along than the rest.
          </p>

          <div className="mt-10 space-y-8">
            {projects.map((project) => (
              <div key={project.title}>
                <h2 className="font-display text-xl text-ink">
                  {project.title}
                </h2>
                <p className="mt-2 font-body text-ink-muted">
                  {project.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
