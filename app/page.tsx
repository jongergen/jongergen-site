import Link from "next/link";
import Container from "@/components/Container";
import ChapterCard from "@/components/ChapterCard";
import NewsletterForm from "@/components/NewsletterForm";
import HomePagePhotos from "@/components/HomePagePhotos";
export default function HomePage() {
  return (
    <>
      <section className="border-b border-ink/10">
        <Container className="py-20 sm:py-28">
          <p className="font-utility text-xs uppercase tracking-[0.2em] text-ink-faint">
            Author
          </p>
          {/* TODO: replace with your real tagline */}
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-ink sm:text-6xl">
            Jon Gergen writes the true stories and the made-up ones, in equal
            earnest.
          </h1>
          {/* TODO: replace with your real one-paragraph bio */}
          <p className="mt-6 max-w-prose font-body text-lg text-ink-muted">
            A memoir about the life that actually happened, and a ten-book
            series for the readers who still believe in the ones that
            didn&apos;t &mdash; yet. This is a placeholder paragraph; swap in
            your own introduction whenever you&apos;re ready.
          </p>
        </Container>
      </section>
      <HomePagePhotos />
      <section>
        <Container className="grid gap-6 py-16 sm:grid-cols-2 sm:py-20">
          <ChapterCard
            eyebrow="Chapter one"
            title="The memoir"
            description="A book about a real life, told the way it was actually lived. Nearly finished, and looking for the right hands to land in next."
            href="/memoir"
            cta="Read more"
          />
          <ChapterCard
            eyebrow="Chapter two"
            title="The children's series"
            description="Ten books, one world, and a set of characters young readers will want to grow up alongside."
            href="/childrens-series"
            cta="Meet the series"
            gilt
          />
        </Container>
      </section>

      <section className="border-t border-ink/10">
        <Container className="py-16 sm:py-20">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="font-display text-2xl text-ink sm:text-3xl">
              Recent musings
            </h2>
            <Link
              href="/musings"
              className="font-utility text-sm font-medium text-cloth hover:underline"
            >
              All musings &rarr;
            </Link>
          </div>
          <p className="mt-3 max-w-prose font-body text-ink-muted">
            Shorter writing &mdash; notes, observations, and the occasional
            story from the farm.
          </p>
        </Container>
      </section>

      <section className="border-t border-ink/10 bg-paper-dim/40">
        <Container className="py-16 sm:py-20">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl text-ink sm:text-3xl">
              Stay in the loop
            </h2>
            <p className="mt-3 font-body text-ink-muted">
              Occasional updates on the memoir&apos;s progress, the
              children&apos;s series, and news about events or releases. No
              spam, unsubscribe anytime.
            </p>
            <div className="mt-6">
              <NewsletterForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
