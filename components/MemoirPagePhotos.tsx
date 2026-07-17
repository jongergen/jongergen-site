import PhotoSlot from "./PhotoSlot";

/*
  MEMOIR PAGE PHOTO LAYOUT
  ------------------------
  Filenames (upload to /public/images/):
    memoir-page-image.jpg   (large, PORTRAIT — taller than wide;
                             sized for the lifeguard chair sketch)
    memoir-page-arlo.jpg    (small, secondary — for Arlo, or any other
                             image tied specifically to the memoir)

  This page is built to hold ONE dominant image plus one smaller
  supporting image — unlike Home/About/Musings, which have three
  photos of roughly similar visual weight.
*/

export default function MemoirPagePhotos() {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-12 flex flex-col items-center gap-6">

      {/* Main centerpiece — large, portrait */}
      <div className="w-full max-w-md rounded-lg overflow-hidden shadow-xl">
        <PhotoSlot
          src="/images/memoir-page-image.jpg"
          alt="The Lummi Tabernacle Choir"
          width={800}
          height={1100}
          priority
        />
      </div>

      {/* Secondary image — smaller, e.g. Arlo */}
      <div className="w-48 rounded-lg overflow-hidden shadow-md">
        <PhotoSlot
          src="/images/memoir-page-arlo.jpg"
          alt="Arlo"
          width={400}
          height={400}
        />
      </div>

    </div>
  );
}
