
export type Book = {
  number: number;
  title: string;
  blurb: string;
  status: "Published" | "Coming soon" | "Manuscript complete" | "In progress";
};

// The "number" field is the reading order within the series.
// To change a book's status, use exactly one of:
// "In progress", "Manuscript complete", "Coming soon", or "Published".
export const books: Book[] = [
  {
    number: 1,
    title: "Nature Calls",
    blurb:
      "A moose calf is stranded far from its mother, so Gene takes Grandpa Crank's safari truck, Nature Calls, out to bring it home. The first adventure for a boy, his dog Sprocket, Gerald the goat, and a barn full of remarkable vehicles.",
    status: "Manuscript complete",
  },
  {
    number: 2,
    title: "The Snow Kitty",
    blurb:
      "When Sprocket discovers that Lucille is in trouble, Gene sets out in Snow Kitty, the snowcat, through deep snow and past a bear, to get her home and to help.",
    status: "Manuscript complete",
  },
  {
    number: 3,
    title: "Stelly Helly",
    blurb:
      "A wildfire traps Gene's classmates and their teacher, Ms. Judy. Gene flies Grandpa's helicopter, Stelly Helly, into the fire zone to bring them out, while Sprocket keeps frightened Rainier calm.",
    status: "Manuscript complete",
  },
  {
    number: 4,
    title: "Old Faithful",
    blurb:
      "An earthquake cracks a dam, and Gene takes Old Faithful into the disaster zone. The people downstream aren't the only ones who need him: a bear cub has lost its mother.",
    status: "Manuscript complete",
  },
  {
    number: 5,
    title: "Digger Rigger",
    blurb:
      "A volcanic eruption leaves people trapped, and Gene drives the massive Digger Rigger into the danger zone. Among those he finds is a familiar face: Rainier, whom Gene first rescued in Stelly Helly.",
    status: "Manuscript complete",
  },
  {
    number: 6,
    title: "Old Sandhill",
    blurb:
      "A window washer is stranded high above the ground, and Gene raises Grandpa's crane, Old Sandhill, to make the rescue. Along the way, a cat named Tulip finds a home.",
    status: "Manuscript complete",
  },
  {
    number: 7,
    title: "Lunar Schooner",
    blurb:
      "Gene takes Grandpa's moon rover, Lunar Schooner, into a toxic refinery emergency, where Sprocket becomes the hero of the day, and Gene finally gets to tell her, “Welcome home, girl.”",
    status: "Manuscript complete",
  },
  {
    number: 8,
    title: "Little Bo Deep",
    blurb:
      "Dolphins are trapped, the anchor is broken, and there's a shark in the water. Gene takes Grandpa's submarine, Little Bo Deep, below the surface, and Gerald the goat proves he's far more than comic relief.",
    status: "Manuscript complete",
  },
  {
    number: 9,
    title: "Breathless Wonder",
    blurb:
      "An avalanche leaves people and a baby goat stranded in the mountains. Gene rises to the rescue in Grandpa's hot-air balloon, Breathless Wonder, where Gerald's goat instincts, and his hoof clippers, save the day.",
    status: "Manuscript complete",
  },
  {
    number: 10,
    title: "Over the Moon",
    blurb:
      "A meteor strikes the space station where Gene's father works. This time the person Gene has to bring home is his own dad, so he walks past every vehicle in Grandpa's barn and takes Over the Moon into space.",
    status: "Manuscript complete",
  },
];
