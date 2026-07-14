export type Book = {
  number: number;
  title: string;
  blurb: string;
  status: "Published" | "Coming soon" | "In progress";
};

// TODO: replace with your real titles, blurbs, and statuses.
// The "number" field is used as the reading order within the series.
export const books: Book[] = [
  {
    number: 1,
    title: "Book One title goes here",
    blurb:
      "A one- or two-sentence description of what happens in this book and why young readers will love it.",
    status: "In progress",
  },
  {
    number: 2,
    title: "Book Two title goes here",
    blurb: "Placeholder blurb for book two.",
    status: "In progress",
  },
  {
    number: 3,
    title: "Book Three title goes here",
    blurb: "Placeholder blurb for book three.",
    status: "In progress",
  },
  {
    number: 4,
    title: "Book Four title goes here",
    blurb: "Placeholder blurb for book four.",
    status: "In progress",
  },
  {
    number: 5,
    title: "Book Five title goes here",
    blurb: "Placeholder blurb for book five.",
    status: "In progress",
  },
  {
    number: 6,
    title: "Book Six title goes here",
    blurb: "Placeholder blurb for book six.",
    status: "In progress",
  },
  {
    number: 7,
    title: "Book Seven title goes here",
    blurb: "Placeholder blurb for book seven.",
    status: "In progress",
  },
  {
    number: 8,
    title: "Book Eight title goes here",
    blurb: "Placeholder blurb for book eight.",
    status: "In progress",
  },
  {
    number: 9,
    title: "Book Nine title goes here",
    blurb: "Placeholder blurb for book nine.",
    status: "In progress",
  },
  {
    number: 10,
    title: "Book Ten title goes here",
    blurb: "Placeholder blurb for book ten.",
    status: "In progress",
  },
];
