



import Link from "next/link";
import Container from "@/components/Container";
import ChapterCard from "@/components/ChapterCard";
import HomePagePhotos from "@/components/HomePagePhotos";
export default function HomePage() {
  return (
    <>
      <HomePagePhotos />
      <section className="border-b border-ink/10">
        <Container className="py-20 sm:py-28">
          <p className="font-utility text-xs uppercase tracking-[0.2em] text-ink-faint">
            Author
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-ink sm:text-6xl">
            Jon Gergen writes the true stories and the made-up ones, in equal
            earnest.
          </h1>
          <div className="mt-6 max-w-prose space-y-4 font-body text-lg text-ink-muted">
            <p>
              His literary memoir, <em>The Lummi Tabernacle Choir</em>, tells
              the story of ten years on Gooseberry Point on the Lummi
              Reservation, where an unlikely community of fishermen, drifters,
              surrogate fathers, neighbors, and one fiercely independent dog
              taught him something about belonging &mdash; and considerably
              less about how to stay.
            </p>
            <p>
              He is also the creator of <em>Gene Drives</em>, a ten-book
              children&apos;s series about a boy who can drive anything &mdash; and
              bring everyone home.
            </p>
          </div>
        </Container>
      </section>
      <section>
        <Container className="grid gap-6 py-16 sm:grid-cols-2 sm:py-20">
          <ChapterCard
            eyebrow="Literary memoir"
            title="The Lummi Tabernacle Choir"
            description="Ten years, one peninsula, and a neighborhood of dogs who howled back at every siren that passed."
            href="/memoir"
            cta="Read more"
          />
          <ChapterCard
            eyebrow="Children's series"
            title="Gene Drives"
            description="Gene can drive anything, and when someone's lost, stuck, or far from home, he's the one who goes to get them."
            href="/childrens-series"
            cta="Meet the series"
            gilt
          />
        </Container>
      </section>

      <section className="border-t border-ink/10">
        <Container className="py-16 sm:py-20">
          <p className="font-utility text-xs uppercase tracking-[0.2em] text-ink-faint">
            What&apos;s next
          </p>
          <h2 className="mt-3 font-display text-2xl text-ink sm:text-3xl">
            <Link href="/janys-praise" className="hover:underline">
              Jany&apos;s Praise
            </Link>
          </h2>
          <p className="mt-3 max-w-prose font-body text-lg text-ink-muted">
            A novel in progress about a girl searching for the love, belonging,
            and God she believes she lost &mdash; and a diary that may change
            what she understands about all three.
          </p>
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
    </>
  );
}
