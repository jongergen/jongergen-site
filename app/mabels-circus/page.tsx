import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Mabel's Circus",
  description:
    "A children's series in progress about ten-year-old Mabel, who grows up aboard May Belle's Traveling Menagerie and Circus.",
};

export default function MabelsCircusPage() {
  return (
    <section>
      <Container className="py-16 sm:py-24">
        <p className="font-utility text-sm text-ink-faint">
          Children&apos;s series in progress
        </p>
        <h1 className="mt-2 font-display text-4xl leading-tight text-ink sm:text-6xl">
          Mabel&apos;s Circus
        </h1>
        <div className="mt-8 max-w-prose space-y-5 font-body text-lg leading-relaxed text-ink-muted">
          <p>
            <em>Mabel&apos;s Circus</em> is a new children&apos;s series set
            aboard May Belle&apos;s Traveling Menagerie and Circus, where
            ten-year-old Mabel has grown up surrounded by acrobats, elephants,
            tigers, monkeys, and the wonderfully unpredictable people she calls
            family.
          </p>
          <p>
            Traveling from town to town, Mabel helps care for the animals and
            has an unusual way of understanding them &mdash; especially Coco, a
            gentle elephant; Rufus, a fearsome tiger with a soft spot for
            Mabel; and Henry, a mischievous monkey who has a habit of getting
            involved whether anyone wants him to or not.
          </p>
          <p>
            Each new stop brings a new adventure as the circus rolls into town,
            raises the big top, puts on its show, packs everything away, and
            moves on again.
          </p>
          <p>
            At its heart, <em>Mabel&apos;s Circus</em> is a series about
            friendship, courage, belonging, and finding family in unexpected
            places.
          </p>
          <p className="text-ink">
            The series is being created with the imaginative assistance of
            Jon&apos;s eight-year-old son, Eli.
          </p>
        </div>
      </Container>
    </section>
  );
}
