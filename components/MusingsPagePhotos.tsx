import PhotoSlot from "./PhotoSlot";

/*
  MUSINGS PAGE PHOTO COLUMN
  -------------------------
  A stacked column of three photos that sits to the right of the
  Musings list on larger screens, and below it on phones.

  Filenames (upload to /public/images/):
    musings-page-top.jpg     (vertical, 3:4)
    musings-page-middle.jpg  (vertical, 3:4)
    musings-page-bottom.jpg  (horizontal, 4:3)

  To swap a photo, upload a new file with the same name.
*/

const photos = [
  {
    src: "/images/musings-page-top.jpg",
    alt: "Sunset over a mountain lake, the sun reflected on the water",
    width: 900,
    height: 1200,
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/musings-page-middle.jpg",
    alt: "Black-and-white photo of a father and his young son by the water",
    width: 900,
    height: 1200,
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/musings-page-bottom.jpg",
    alt: "Rows of young garlic in a field, with an old tractor beyond",
    width: 1200,
    height: 900,
    aspect: "aspect-[4/3]",
  },
];

export default function MusingsPagePhotos() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-1">
      {photos.map((photo, i) => (
        <div
          key={photo.src}
          className={`overflow-hidden rounded-lg shadow-md ${photo.aspect} ${
            i === 2 ? "col-span-2 lg:col-span-1" : ""
          }`}
        >
          <PhotoSlot
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            className="h-full w-full"
          />
        </div>
      ))}
    </div>
  );
}
