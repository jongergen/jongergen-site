import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import PhotoSlot from "@/components/PhotoSlot";
import { posts } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function MusingPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <Container className="py-16 sm:py-24">
      <article>
        <header className="max-w-prose">
          <Link
            href="/musings"
            className="font-utility text-base font-medium text-cloth hover:underline sm:text-lg"
          >
            &larr; All musings
          </Link>
          <div className="mt-6 flex items-center gap-3 font-utility text-xs uppercase tracking-[0.15em] text-ink-faint">
            <span>{formatDate(post.date)}</span>
            <span aria-hidden="true">&middot;</span>
            <span>{post.topic}</span>
          </div>
          <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            {post.title}
          </h1>
        </header>

        {post.image && (
          <div className="mt-10 overflow-hidden rounded-lg shadow-md sm:mt-12 lg:aspect-[2/1]">
            <PhotoSlot
              src={post.image.src}
              alt={post.image.alt}
              width={post.image.width}
              height={post.image.height}
              className="h-full w-full"
              priority
            />
          </div>
        )}

        <div className="mt-12 max-w-prose space-y-6 font-body text-lg text-ink-muted sm:mt-16">
          {post.body.map((paragraph, i) => (
            <p key={i} className="whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </Container>
  );
}
