import PhotoSlot from "./PhotoSlot";

/*
  JANY'S PRAISE PAGE PHOTO LAYOUT
  ------------------------
  Filename (upload to /public/images/):
    janys-praise-page-image.jpg

  Single prominent image. Orientation flexible.
*/

export default function JanysPraisePagePhotos() {
  return (
    <div className="w-full max-w-2xl mx-auto px-6 py-12">
      <div className="rounded-lg overflow-hidden shadow-xl">
        <PhotoSlot
          src="/images/janys-praise-page-image.jpg"
          alt="Jany's Praise"
          width={900}
          height={900}
          priority
        />
      </div>
    </div>
  );
}
