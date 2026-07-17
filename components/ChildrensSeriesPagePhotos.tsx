import PhotoSlot from "./PhotoSlot";

/*
  CHILDREN'S SERIES PAGE PHOTO LAYOUT
  ------------------------
  Filename (upload to /public/images/):
    childrens-series-page-image.jpg

  Single prominent image, like a book-cover-adjacent hero image.
  Orientation flexible — use whatever fits the actual photo/art.
*/

export default function ChildrensSeriesPagePhotos() {
  return (
    <div className="w-full max-w-2xl mx-auto px-6 py-12">
      <div className="rounded-lg overflow-hidden shadow-xl">
        <PhotoSlot
          src="/images/childrens-series-page-image.jpg"
          alt="Gene Drives children's series"
          width={900}
          height={900}
          priority
        />
      </div>
    </div>
  );
}
