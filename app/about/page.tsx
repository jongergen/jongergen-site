
import type { Metadata } from "next";
import Container from "@/components/Container";
import PhotoSlot from "@/components/PhotoSlot";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Jon Gergen, author of The Lummi Tabernacle Choir and the Gene Drives children's series.",
};

export default function AboutPage() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="grid gap-12 sm:grid-cols-[320px_1fr] sm:gap-16">
        <div>
          <div className="aspect-[4/5] w-full overflow-hidden rounded-sm shadow-md">
            <PhotoSlot
              src="/images/about-jon.jpg"
              alt="Jon Gergen on the lake at sunset"
              width={800}
              height={1000}
              priority
            />
          </div>
        </div>
        <div className="max-w-prose">
          <h1 className="font-display text-3xl text-ink sm:text-4xl">About</h1>
          <div className="mt-6 space-y-4 font-body text-lg text-ink-muted">
            <p>
              I grew up in Minnesota and moved west in my twenties with a truck
              full of books and not much of a plan. I eventually landed on
              Gooseberry Point, a small waterfront neighborhood on the Lummi
              Reservation in northwest Washington. I expected to stay for a
              while. I stayed for ten years.
            </p>
            <p>
              Those years became the heart of{" "}
              <em>The Lummi Tabernacle Choir</em>, my first literary memoir.
              It&apos;s a book about the people I knew there, but also about
              the life I carried with me when I arrived &mdash; losing my
              mother when I was young, growing up with an alcoholic Vietnam
              veteran father, and learning early how to rely on myself. The
              book follows those threads through addiction, faith, fatherhood,
              friendship, and the complicated distance between finding a place
              where you belong and learning how to stay.
            </p>
            <p>
              For seventeen years, I owned and operated a water-delivery
              business in Whatcom County. I later earned degrees in accounting
              and business administration and now serve as Director of
              Ecommerce at Barlean&apos;s. Writing came less directly. For
              years, I accumulated stories without thinking of myself as
              someone who would eventually put them into a book.
            </p>
            <p>
              I also write for younger readers. <em>Gene Drives</em> is a
              ten-book children&apos;s series about Gene, a boy who can drive
              anything. Whatever the adventure, he finds a way to bring
              everyone home.
            </p>
            <p>
              I live in Ferndale, Washington. When I&apos;m not writing, I
              play music, work on my small farm, and spend as much time
              outdoors as I can.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
