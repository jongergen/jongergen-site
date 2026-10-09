import PhotoSlot from "./PhotoSlot";

/*
  CHILDREN'S SERIES PAGE PHOTO
  ----------------------------
  Filename (upload to /public/images/):
    childrens-series-page-image.jpg   (vertical, 3:4)

  Sits to the right of the intro on wide screens and below it on phones.
  To swap the photo, upload a new file with the same name.
*/

export default function ChildrensSeriesPagePhotos() {
  return (
    <div className="overflow-hidden rounded-lg shadow-md aspect-[3/4]">
      <PhotoSlot
        src="/images/childrens-series-page-image.jpg"
        alt="A goat standing in a red wagon, looking at the camera"
        width={900}
        height={1200}
        className="h-full w-full"
        priority
      />
    </div>
  );
}
