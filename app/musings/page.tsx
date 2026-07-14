import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
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
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <Container className="py-16 sm:py-24">
      <div className="max-w-prose">
        <h1 className="font-display text-3xl text-ink sm:text-4xl">
          Musings
        </h1>
        <p className="mt-4 font-body text-lg text-ink-muted">
          Shorter writing &mdash; notes, observations, and the occasional
          story from the farm.
        </p>
      </div>

      <div className="mt-12 max-w-prose divide-y divide-ink/10">
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
    </Container>
  );
}
