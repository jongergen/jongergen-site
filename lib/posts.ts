

export type Post = {
  slug: string;
  title: string;
  date: string; // ISO format, e.g. "2026-03-01"
  topic: string; // e.g. "Writing", "Farm", "Life"
  excerpt: string;
  body: string[]; // one paragraph per array entry
};

// To add a post, copy the example below into the list, give it a unique
// slug, and fill in your own content. Posts are sorted newest-first
// automatically on the Musings page. For poems, use \n inside a
// paragraph for each line break; each paragraph is one stanza.
//
//  {
//    slug: "my-first-post",
//    title: "My first post",
//    date: "2026-10-01",
//    topic: "Writing",
//    excerpt: "A one-sentence teaser shown on the Musings page.",
//    body: [
//      "First paragraph.",
//      "Second paragraph.",
//    ],
//  },
export const posts: Post[] = [
  {
    slug: "curtains",
    title: "Curtains",
    date: "2026-09-25",
    topic: "Poetry",
    excerpt: "I heard a whisper pass.",
    body: [
      "I heard a whisper pass.\nBreathless.\nIt held me fast.\nFrozen.",
      "Across the ceiling a shadow bloomed.\nMoonlight drained from the room.\nTen thousand shards of silence.\nA quiet\nviolence.",
      "The curtain folds fall still.\nI never will.",
    ],
  },
];
