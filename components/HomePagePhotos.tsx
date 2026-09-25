import PhotoSlot from "./PhotoSlot";

/*
  HOME PAGE PHOTO LAYOUT
  ------------------------
  Single hero image (upload to /public/images/):
    home-page-center.jpg   (LANDSCAPE — wider than tall)

  The two small author photos that used to sit in the corners now live
  on the About page.
*/

export default function HomePagePhotos() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-12">
      <div className="w-full rounded-lg overflow-hidden shadow-xl">
        <PhotoSlot
          src="/images/home-page-center.jpg"
          alt="Sunrise over the water and mountains"
          width={1200}
          height={700}
          priority
        />
      </div>
    </div>
  );
}
