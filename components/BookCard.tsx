import type { Book } from "@/lib/books";

export default function BookCard({ book }: { book: Book }) {
  return (
    <div className="flex items-stretch gap-4 rounded-sm bg-paper-dim/60 p-5">
      <span className="ribbon ribbon-gilt" aria-hidden="true" />
      <div className="flex flex-1 flex-col">
        <div className="flex items-center justify-between gap-3">
          <span className="font-utility text-xs uppercase tracking-[0.15em] text-ink-faint">
            Book {book.number}
          </span>
          <span className="font-utility text-xs text-ink-faint">
            {book.status}
          </span>
        </div>
        <h3 className="mt-1 font-display text-lg text-ink">{book.title}</h3>
        <p className="mt-2 font-body text-sm text-ink-muted">{book.blurb}</p>
      </div>
    </div>
  );
}
