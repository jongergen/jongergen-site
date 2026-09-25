import PhotoSlot from "./PhotoSlot";

/*
  HOME PAGE HERO
  ------------------------
  One full-width banner photo at the top of the home page.
  File (upload to /public/images/):
    home-hero.jpg   (wide landscape, about 2:1)
*/

export default function HomePagePhotos() {
  return (
    <div className="relative h-[42vh] min-h-[260px] w-full overflow-hidden sm:h-[60vh] sm:max-h-[720px]">
      <PhotoSlot
        src="/images/home-hero.jpg"
        alt="A fishing rod bent against a sunrise over the water"
        width={1920}
        height={960}
        priority
      />
    </div>
  );
}
