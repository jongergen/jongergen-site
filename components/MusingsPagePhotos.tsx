import PhotoSlot from "./PhotoSlot";

/*
  MUSINGS PAGE PHOTO LAYOUT
  ------------------------
  Filenames (upload to /public/images/):
    musings-page-center.jpg
    musings-page-left.jpg
    musings-page-right.jpg
*/

export default function MusingsPagePhotos() {
  return (
    <div className="relative w-full max-w-5xl mx-auto px-6 py-12">

      <div className="absolute top-0 left-6 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md z-10">
        <PhotoSlot
          src="/images/musings-page-left.jpg"
          alt="Photo"
          width={128}
          height={128}
        />
      </div>

      <div className="absolute top-0 right-6 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md z-10">
        <PhotoSlot
          src="/images/musings-page-right.jpg"
          alt="Photo"
          width={128}
          height={128}
        />
      </div>

      <div className="w-full max-w-2xl mx-auto mt-20 rounded-lg overflow-hidden shadow-xl">
        <PhotoSlot
          src="/images/musings-page-center.jpg"
          alt="Photo"
          width={800}
          height={1000}
          priority
        />
      </div>

    </div>
  );
}
