import PhotoSlot from "./PhotoSlot";

/*
  HOME PAGE PHOTO LAYOUT
  ------------------------
  Filenames (upload to /public/images/):
    home-page-center.jpg   (large, LANDSCAPE — wider than tall)
    home-page-left.jpg     (small, corner)
    home-page-right.jpg    (small, corner)

  Note: the center image is intentionally landscape-oriented, since it's
  meant to read as a wide banner-style hero rather than a tall portrait
  image. If the photo you use is naturally portrait, consider using it
  on a different page instead (e.g. the Memoir page, which is built for
  a portrait-oriented centerpiece).
*/

export default function HomePagePhotos() {
  return (
    <div className="relative w-full max-w-5xl mx-auto px-6 py-12">

      {/* Upper left corner — small */}
      <div className="absolute top-0 left-6 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md z-10">
        <PhotoSlot
          src="/images/home-page-left.jpg"
          alt="Author photo"
          width={128}
          height={128}
        />
      </div>

      {/* Upper right corner — small */}
      <div className="absolute top-0 right-6 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md z-10">
        <PhotoSlot
          src="/images/home-page-right.jpg"
          alt="Author activity photo"
          width={128}
          height={128}
        />
      </div>

      {/* Main center image — large, LANDSCAPE */}
      <div className="w-full mt-20 rounded-lg overflow-hidden shadow-xl">
        <PhotoSlot
          src="/images/home-page-center.jpg"
          alt="Featured artwork"
          width={1200}
          height={700}
          priority
        />
      </div>

    </div>
  );
}
