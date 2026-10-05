import Link from "next/link";
import Container from "@/components/Container";
import ChapterCard from "@/components/ChapterCard";
import HomePagePhotos from "@/components/HomePagePhotos";
import NewsletterForm from "@/components/NewsletterForm";
import { posts } from "@/lib/posts";

export default function HomePage() {
  const latestPosts = [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <>
      <HomePagePhotos />
      <section className="border-b border-ink/10">
        <Container className="pt-10 pb-20 sm:pt-14 sm:pb-28">
          <h1 className="mt-0 max-w-3xl font-display text-4xl leading-tight text-ink sm:text-6xl">
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
            Shorter writing &mdash; essays, poems, and things I&rsquo;m still
            thinking through.
          </p>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/musings/${post.slug}`}
                className="group block"
              >
                <p className="font-utility text-sm text-ink-faint">
                  {post.topic}
                </p>
                <h3 className="mt-2 font-display text-xl text-ink group-hover:text-cloth sm:text-2xl">
                  {post.title}
                </h3>
                <p className="mt-2 font-body text-ink-muted">{post.excerpt}</p>
                <p className="mt-3 font-utility text-sm font-medium text-cloth group-hover:underline">
                  Read
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-ink/10">
        <Container className="py-16 sm:py-20">
             <h2 className="font-display text-2xl text-ink sm:text-3xl">
     What&apos;s next
   </h2>
          <div className="mt-8 grid gap-10 sm:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl text-ink sm:text-3xl">
                <Link href="/janys-praise" className="hover:underline">
                  Jany&apos;s Praise
                </Link>
              </h2>
              <p className="mt-1 font-utility text-sm text-ink-faint">
                Novel in progress
              </p>
              <p className="mt-3 max-w-prose font-body text-lg text-ink-muted">
                A girl searches for the love, belonging, and God she believes
                she lost &mdash; and a diary may change what she understands
                about all three.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-ink sm:text-2xl">
                <Link href="/mabels-circus" className="hover:underline">
                  Mabel&apos;s Circus
                </Link>
              </h2>
              <p className="mt-1 font-utility text-sm text-ink-faint">
                Children&apos;s series in progress
              </p>
              <p className="mt-3 max-w-prose font-body text-lg text-ink-muted">
                Ten-year-old Mabel grows up aboard a traveling circus with an
                unusual gift for understanding animals. Created with his
                eight-year-old son, Eli.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-ink/10 bg-paper-dim/40">
        <Container className="py-16 sm:py-20">
          <div className="max-w-xl">
            <h3 className="font-display text-xl text-ink sm:text-2xl">
              Stay in the loop
            </h2>
            <p className="mt-3 font-body text-ink-muted">
              News about the memoir, the children&apos;s books, and Jany&apos;s
              Praise &mdash; only when there&apos;s something worth telling.
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
