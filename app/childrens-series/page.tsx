import type { Metadata } from "next";
import Container from "@/components/Container";
import BookCard from "@/components/BookCard";
import { books } from "@/lib/books";

export const metadata: Metadata = {
  title: "Gene Drives",
  description:
    "Gene Drives: Ten Adventures of the Boy Who Brings Everyone Home, an illustrated children's series by Jon Gergen.",
};

// Book cards only appear once a real title has been filled in (lib/books.ts).
const readyBooks = books.filter((book) => !book.title.includes("goes here"));

export default function ChildrensSeriesPage() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="flex items-stretch gap-6">
        <span className="ribbon ribbon-gilt" aria-hidden="true" />
        <div className="max-w-prose">
          <p className="font-utility text-xs uppercase tracking-[0.15em] text-ink-faint">
            Children&apos;s series
          </p>
          <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            Gene Drives
          </h1>
          <p className="mt-3 font-utility text-sm text-cloth">
            Ten Adventures of the Boy Who Brings Everyone Home
          </p>
          <div className="mt-8 space-y-4 font-body text-lg text-ink-muted">
            <p>
              Gene can drive anything. So when someone is lost, stuck, or far
              from home, Gene is the one who goes to get them, with his dog
              Sprocket riding shotgun.
            </p>
            <p>
              Back on the farm, Grandpa Crank keeps things running (mostly),
              Gerald the goat keeps things interesting, and Tulip the cat
              keeps her opinions to herself (rarely). Across ten illustrated
              adventures, every story ends the same way: with everyone home.
            </p>
            <p>
              <em>Gene Drives</em> was created with Jon&apos;s son, Eli, who
              has been a co-conspirator on every book.
            </p>
          </div>
        </div>
      </div>

      {readyBooks.length > 0 && (
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {readyBooks.map((book) => (
            <BookCard key={book.number} book={book} />
          ))}
        </div>
      )}
    </Container>
  );
}
