


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
    slug: "bear-witness",
    title: "Bear Witness",
    date: "2026-09-26",
    topic: "Life",
    excerpt: "Maybe when an old person repeats a story, they are asking us to help them remember that their life happened.",
    body: [
      "I recently read about a man in his mid-nineties who had lived a remarkable life, the kind of life most people only see in movies. What stayed with me wasn't anything he had accomplished. It was something small. He said he could tell when his grandchildren were only being polite while he talked to them, that they had no real curiosity about what he had to say. If that can be true for someone whose stories strangers would line up to hear, what must it be like for everyone else?",
      "Imagine reaching an age when almost everyone who remembers the younger version of you is gone. The people who knew what your mother's voice sounded like. The friend who remembers what happened that summer when you were sixteen. The person who was standing beside you when you met your wife. The brother who knew the family jokes without having them explained. One by one, the witnesses disappear, until you may be the only person alive who remembers entire rooms of your own life.",
      "That can be the reality for anyone who lives deep into their nineties. It may take all their concentration to cross a room. Their eyes may hurt in ordinary light. Things the young barely notice, like a meal, a night's sleep, or a trip to the bathroom, become the measures of a good day. But the hardest part is not the body. It is being left behind.",
      "Many people as they grow old talk about the past, and some tell the same stories again and again. Maybe when they repeat a story, they aren't simply trying to tell us something. Maybe they are asking us to help them remember that their life happened. The stories come from a time when they had fire in their hearts, when people depended on them, when they fell in love and raised children and earned a living and made mistakes. It was a time when most of life still seemed to be happening in front of them instead of behind them. That is how life feels to most of us when we are younger, and we barely notice how temporary that privilege is.",
      "I wonder if part of the reason we sometimes hesitate to spend time with the very old is that they remind us of our own mortality and of everyone we love. Maybe that is the gift they are offering, if we would only listen: an awareness of how fragile and brief all of this is.",
      "I don't know what to do with that reality without God. I have tried to imagine a universe in which everyone I have ever loved simply disappears and everything we built turns to dust. I find no comfort there. Faith is the only answer I have found that lets me look directly at death without concluding that everything before it was meaningless.",
      "So the next time an old man tells me a story I've already heard, I hope I can resist the urge to hurry him along. Maybe he isn't repeating himself because he forgot he told me. Maybe he simply needs to visit that place again. And perhaps, by listening, I can go there with him.",
      "There might come a day when my own world exists mostly in memory. I hope someone will sit still long enough to let me tell them about it.",
    ],
  },
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
