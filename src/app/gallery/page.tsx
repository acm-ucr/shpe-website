import GalleryIcon from "@/public/icons/Picture.webp";
import TitleBanner from "@/components/Title";

export const metadata = {
  title: "Gallery | SHPE @ UCR",
  description:
    "View the latest photos from SHPE @ UCR events! Browse our gallery to see our engineering projects, professional networking mixers, and student community.",
};

const Gallery = () => {
  return (
    <div>
      <TitleBanner title="GALLERY" icon={GalleryIcon} decoration="gears" />
      <p>Gallery</p>
    </div>
  );
};

export default Gallery;
