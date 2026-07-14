export type Post = {
  slug: string;
  title: string;
  date: string; // ISO format, e.g. "2026-03-01"
  topic: string; // e.g. "Writing", "Farm", "Life"
  excerpt: string;
  body: string[]; // one paragraph per array entry
};

// TODO: replace these with your real posts. To add a new one, copy an
// object below, give it a unique slug, and fill in your own content.
// Posts are sorted newest-first automatically on the Musings page.
export const posts: Post[] = [
  {
    slug: "starting-this-page",
    title: "Starting this page",
    date: "2026-06-01",
    topic: "Writing",
    excerpt:
      "A short note on why this space exists, and what you can expect to find here.",
    body: [
      "This is a placeholder post. Musings is meant for shorter, looser writing than the memoir or the series \u2014 notes, observations, things that don't need to be a whole chapter.",
      "Some of what ends up here will be about writing itself. Some of it, like the post below, might be about the farm, or anything else worth a few paragraphs.",
    ],
  },
  {
    slug: "first-morning-on-the-farm",
    title: "First morning on the farm",
    date: "2026-05-15",
    topic: "Farm",
    excerpt:
      "A placeholder post showing how farm-related writing fits into Musings alongside everything else.",
    body: [
      "This is a placeholder. Farm posts live here rather than in their own section \u2014 replace this with a real story, a photo caption's worth of thought, or a longer reflection.",
      "If you want to include photos in a post like this, add the image file to /public and reference it here; ask me and I can wire up image support in the post template.",
    ],
  },
];
