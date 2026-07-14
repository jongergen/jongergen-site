import type { Metadata } from "next";
import Container from "@/components/Container";
import BookCard from "@/components/BookCard";
import { books } from "@/lib/books";

export const metadata: Metadata = {
  title: "The children's series",
  description: "About Jon Gergen's ten-book children's series.",
};

export default function ChildrensSeriesPage() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="flex items-stretch gap-6">
        <span className="ribbon ribbon-gilt" aria-hidden="true" />
        <div className="max-w-prose">
          <p className="font-utility text-xs uppercase tracking-[0.15em] text-ink-faint">
            Chapter two
          </p>
          {/* TODO: replace with your real series title */}
          <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            Series title goes here
          </h1>
          {/* TODO: replace with your real series description and age range */}
          <p className="mt-6 font-body text-lg text-ink-muted">
            This is a placeholder description of the series as a whole: the
            world it&apos;s set in, the characters at its center, and the
            age range it&apos;s written for. Ten books, one continuing
            story.
          </p>
        </div>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {books.map((book) => (
          <BookCard key={book.number} book={book} />
        ))}
      </div>
    </Container>
  );
}
