
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prologue — The Lummi Tabernacle Choir | Jon Gergen",
  description: "Read the prologue from The Lummi Tabernacle Choir, a memoir by Jon Gergen.",
};

const CHAPTER_TITLE = "The Green Phone";

const PROLOGUE = `
When I was three years old, I believed the world worked in a very simple way: my mother would always come home.

“When will you be home?” I asked.

The olive-green rotary phone was heavy. I leaned my head to hold it in place. Scooby-Doo looked up at me from my pajamas. My fingers curled through the cord.

On the wall, my father’s shadow stretched—long and still. Cigarette smoke gathered in the corner, thickening the air. The room was dim. Almost bedtime. I pressed my toes into the carpet.

“Soon, honey,” my mother said. “I’ll be home soon.”

Somewhere, a clock ticked.

“Okay, Mom. I love you. Bye.”

The receiver fell hard into its cradle.

My father’s shadow shifted on the wall.

I could smell the stale beer.

I held onto the word soon.

It was all I had.

Sometimes I still see him — that small boy holding onto the phone, holding onto a word that was never going to arrive. I want to reach back through all of it and tell him he's going to be okay.

It took a long time.

But he is.
`;

export default function ProloguePage() {
  const paragraphs = PROLOGUE.trim()
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\s*\n\s*/g, " ").trim())
    .filter(Boolean);

  return (
    <main className="px-6 py-16 sm:py-24">
      <article className="mx-auto max-w-xl text-ink">
        <header className="mb-12 text-center">
          <p className="font-utility text-xs uppercase tracking-[0.15em] text-ink-faint">
            The Lummi Tabernacle Choir
          </p>
          <h1 className="mt-4 font-display text-5xl text-[#1F4A36] sm:text-6xl">
            Prologue
          </h1>
          <p className="mt-3 font-body text-lg italic text-ink-muted">
            {CHAPTER_TITLE}
          </p>
          <div
            aria-hidden="true"
            className="mx-auto mt-7 h-9 w-3.5 bg-[#B08D3C]"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 75%, 0 100%)" }}
          />
        </header>

        <div className="font-body text-lg leading-[1.75]">
          {paragraphs.map((text, i) => (
            <p key={i} className={i === 0 ? "" : "indent-6"}>
              {text}
            </p>
          ))}
        </div>

        <footer className="mt-14 border-t border-[#B08D3C] pt-6 text-center">
          <Link
            href="/memoir"
            className="font-utility text-sm text-[#1F4A36] underline decoration-[#B08D3C] underline-offset-4 hover:text-[#B08D3C]"
          >
            ← Back to The Lummi Tabernacle Choir
          </Link>
        </footer>
      </article>
    </main>
  );
}
