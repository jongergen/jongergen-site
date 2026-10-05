import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prologue — The Lummi Tabernacle Choir | Jon Gergen",
  description: "Read the prologue from The Lummi Tabernacle Choir, a memoir by Jon Gergen.",
};

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

const GREEN = "#1F4A36"; // bottle green
const GOLD = "#B08D3C"; // gilt gold
const INK = "#2A2A26";

export default function ProloguePage() {
  const paragraphs = PROLOGUE.trim()
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\s*\n\s*/g, " ").trim())
    .filter(Boolean);

  return (
    <main style={{ padding: "4rem 1.5rem 5rem" }}>
      <article style={{ maxWidth: "36rem", margin: "0 auto", color: INK }}>
        <header style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: "0.8rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: GREEN,
              margin: 0,
            }}
          >
            The Lummi Tabernacle Choir
          </p>

          <h1
            style={{
              fontFamily: "Fraunces, Georgia, serif",
              fontWeight: 500,
              fontSize: "clamp(2.5rem, 7vw, 3.75rem)",
              lineHeight: 1.05,
              color: GREEN,
              margin: "1rem 0 0.5rem",
            }}
          >
            Prologue
          </h1>

          <p
            style={{
              fontFamily: '"Source Serif 4", "Source Serif Pro", Georgia, serif',
              fontStyle: "italic",
              fontSize: "1.05rem",
              color: "#5A5A52",
              margin: 0,
            }}
          >
            from <cite>The Lummi Tabernacle Choir</cite>
          </p>

          {/* ribbon bookmark */}
          <div
            aria-hidden="true"
            style={{
              width: "14px",
              height: "36px",
              margin: "1.75rem auto 0",
              background: GOLD,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 75%, 0 100%)",
            }}
          />
        </header>

        <div
          style={{
            fontFamily: '"Source Serif 4", "Source Serif Pro", Georgia, serif',
            fontSize: "1.15rem",
            lineHeight: 1.75,
          }}
        >
          {paragraphs.map((text, i) => (
            <p
              key={i}
              style={{
                margin: 0,
                textIndent: i === 0 ? 0 : "1.5em",
              }}
            >
              {text}
            </p>
          ))}
        </div>

        <footer
          style={{
            marginTop: "3.5rem",
            paddingTop: "1.5rem",
            borderTop: `1px solid ${GOLD}`,
            textAlign: "center",
          }}
        >
          <Link
            href="/memoir"
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: "0.95rem",
              color: GREEN,
              textDecoration: "underline",
              textUnderlineOffset: "4px",
              textDecorationColor: GOLD,
            }}
          >
            ← Back to The Lummi Tabernacle Choir
          </Link>
        </footer>
      </article>
    </main>
  );
}
