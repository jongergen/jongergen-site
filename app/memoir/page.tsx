

import type { Metadata } from "next";
import Container from "@/components/Container";
import PhotoSlot from "@/components/PhotoSlot";

export const metadata: Metadata = {
  title: "The Lummi Tabernacle Choir",
  description:
    "The Lummi Tabernacle Choir, a literary memoir by Jon Gergen about ten years on Gooseberry Point on the Lummi Reservation.",
};

export default function MemoirPage() {
  return (
    <Container className="py-16 sm:py-24">
      <figure className="mb-12 max-w-3xl overflow-hidden rounded-sm border border-ink/10 shadow-md sm:mb-16">
        <PhotoSlot
          src="/images/memoir-lifeguard-chair.jpg"
          alt="Pencil sketch of a figure sitting in a tall wooden lifeguard chair among trees"
          width={1400}
          height={1081}
          priority
        />
      </figure>

      <div className="flex items-stretch gap-6">
        <span className="ribbon" aria-hidden="true" />
        <div className="max-w-prose">
          <p className="font-utility text-xs uppercase tracking-[0.15em] text-ink-faint">
            Chapter one
          </p>
          <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            The Lummi Tabernacle Choir
          </h1>
          <p className="mt-3 font-utility text-sm text-cloth">
            A literary memoir
          </p>

          <div className="mt-8 space-y-4 font-body text-lg text-ink-muted">
            <p>
              On Gooseberry Point, whenever a siren wailed down the road, every
              dog in the neighborhood lifted its head and answered. They were
              the Lummi Tabernacle Choir, and for ten years they were the
              soundtrack to Jon Gergen&apos;s life on the Lummi Reservation.
            </p>
            <p>
              He found himself in the company of Ben, Wayne, Joe, Hungarian
              Mike, a man everyone knew only as Spider-Man, and Skip &mdash;
              fishermen, drifters, and the closest thing he had to fathers.
              And there was Arlo, a dog as fiercely independent as any of
              them.
            </p>
            <p>
              <em>The Lummi Tabernacle Choir</em> is a book about an accidental
              community, the strange grace of being taken in, and the harder
              question of whether you can stay somewhere that has already
              accepted you.
            </p>
          </div>

          <div className="mt-10 rounded-sm bg-paper-dim/60 p-6">
            <h2 className="font-display text-xl text-ink">
              For agents and publishers
            </h2>
            <p className="mt-2 font-body text-ink-muted">
              A full manuscript, sample chapters, and a formal query letter
              are available on request.
            </p>
            <a
              href="/contact"
              className="mt-4 inline-block font-utility text-sm font-medium text-cloth hover:underline"
            >
              Get in touch &rarr;
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
