import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import MusingsPagePhotos from "@/components/MusingsPagePhotos";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Musings",
  description: "Short writing from Jon Gergen.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function MusingsPage() {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <Container className="py-16 sm:py-24">
      <div className="lg:grid lg:grid-cols-[minmax(0,42rem)_16rem] lg:justify-between lg:gap-16">
        <div>
          <div className="max-w-prose">
            <h1 className="font-display text-3xl text-ink sm:text-4xl">
              Musings
            </h1>
            <p className="mt-4 font-body text-lg text-ink-muted">
              Shorter writing &mdash; essays, poems, and things I&rsquo;m still
              thinking through.
            </p>
            <div className="mt-8 h-px w-16 bg-gilt" aria-hidden="true" />
          </div>

          {sorted.length === 0 && (
            <p className="mt-12 max-w-prose font-body text-ink-muted">
              The first pieces are on their way.
            </p>
          )}

          <div className="mt-14 max-w-prose divide-y divide-ink/10">
            {sorted.map((post) => (
              <Link
                key={post.slug}
                href={`/musings/${post.slug}`}
                className="group block py-6 first:pt-0"
              >
                <div className="flex items-center gap-3 font-utility text-xs uppercase tracking-[0.15em] text-ink-faint">
                  <span>{formatDate(post.date)}</span>
                  <span aria-hidden="true">&middot;</span>
                  <span>{post.topic}</span>
                </div>
                <h2 className="mt-2 font-display text-2xl text-ink group-hover:text-cloth">
                  {post.title}
                </h2>
                <p className="mt-2 font-body text-ink-muted">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>

        <aside className="mt-16 lg:mt-2" aria-label="Photos">
          <MusingsPagePhotos />
        </aside>
      </div>
    </Container>
  );
}
