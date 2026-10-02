



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
    slug: "what-the-touch-is-saying",
    title: "What the Touch Is Saying",
    date: "2026-10-02",
    topic: "Life",
    excerpt: "The touch feels good, but what matters more to me is what the touch is saying.",
    body: [
      "I really desire physical affection. I like hugging, snuggling, spooning, resting my head against someone's shoulder, and feeling someone rest her head against mine.",
      "Some time ago, something caused me to question that desire in a way I never had before. I was confronted with the possibility that my desire for physical closeness might come from some unmet childhood need—that perhaps I was trying to reclaim something I hadn't received as a child.",
      "The idea hurt more than I expected it to.",
      "Maybe because something I had always considered tender and ordinary suddenly felt like evidence that something was wrong with me. Physical affection had always felt adult and mutual to me—two people expressing love, trust, desire, or simply the wish to be close. Seeing that same desire as a child in me reaching for something he had never received made me question something about myself I had never thought needed questioning.",
      "Or maybe because there was enough truth in it to make me wonder.",
      "I had, after all, lost my mother when I was three years old.",
      "It was probably the most consequential event of my life, even though I was too young to understand what had happened. Her death sent my life down a road completely different from the one I would have traveled had she lived. What that other road might have looked like is impossible to know.",
      "It seems likely that I have some unmet childhood needs.",
      "But who doesn't?",
      "Maybe yours came from a parent who wasn't affectionate. Maybe you were bullied, overlooked, abandoned, criticized too much or praised too little. Maybe you grew up surrounded by love and still came away needing something you didn't get. Childhood isn't something any of us emerges from with every need perfectly met.",
      "And more importantly, how could we ever know definitively what is an unmet childhood need and what is simply a normal adult need?",
      "I can understand why viewing physical affection through the lens of an unmet childhood need might make it feel different. It could begin to seem parental rather than romantic. Holding someone might no longer look like two adults seeking closeness, but like one adult being asked to comfort the child still living somewhere inside the other. I can understand why that distinction might matter.",
      "But that's not how I experience it. When I put my head on someone's shoulder, I don't feel like a three-year-old looking for his mother. I feel like a grown man who loves being close to another human being.",
      "And yet maybe that distinction is too easy. Maybe some small part of that three-year-old is there when I put my head on someone's shoulder. I don't know. That's the problem with trying to draw a line between the child we were and the adult we became. I'm not sure there is one.",
      "The more I've thought about it, the less certain I am that the distinction even matters.",
      "Of course, where our needs come from can matter. Childhood wounds can follow us into adulthood in ways that hurt us and the people around us, and those are worth understanding. But wanting something because you once lacked it doesn't automatically make the wanting unhealthy.",
      "I can't completely separate the child from the adult in me, nor am I sure I should try. The three-year-old who lost his mother didn't disappear when I turned eighteen. He grew up. His loss grew up with him. It became part of me, along with everything else that happened in the years that followed.",
      "Maybe some of my desire for affection began there. Maybe all of it did. Maybe none of it did. I'll never know.",
      "We all carry our childhoods with us. They shape what frightens us, what comforts us, what makes us feel safe, and probably the ways we give and receive love. If I enjoy resting my head against someone's shoulder, does it matter whether some psychologist could trace that desire back fifty years? Would knowing its origin make the comfort I feel today any less real?",
      "I don't think so.",
      "There is something wonderfully simple about physical affection. A hand resting on your back. Someone leaning against you on the couch. A long hug from someone who doesn't seem anxious to let go. Falling asleep with another person pressed against you.",
      "And I like both sides of it. I love resting my head against someone's shoulder, but I love feeling someone rest her head against me just as much. There is something deeply satisfying about that small gesture of vulnerability. It feels like trust. Like she feels safe with me. Like, for that moment, I am someone she can let her guard down with.",
      "I've also come to realize that maybe the physical sensation isn't even what I desire most.",
      "It's the intention behind it.",
      "A hand reaches for mine because someone wants to hold it. A head settles onto my shoulder because that's where someone wants to be. An embrace lasts a few seconds longer because neither person is quite ready to let go.",
      "The touch feels good, but what matters more to me is what the touch is saying.",
      "I want to be close to you.",
      "Maybe that's what I've been looking for all along.",
      "All I know is that if I lacked affection and closeness as a child, I sure the hell am going to try to find it as an adult.",
      "I want to hug someone I love. I want to spoon on the couch. I want to rest my head against someone's shoulder and have someone rest hers against mine. I want that special connectedness that doesn't need to be explained or diagnosed. I don't need to know which part of me is asking for it.",
      "Sometimes a person just wants to be held.",
    ],
  },
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
