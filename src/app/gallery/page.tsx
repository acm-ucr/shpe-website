import GalleryIcon from "@/public/banners/icons/Picture.webp";
import TitleBanner from "@/components/Title";

const Gallery = () => {
  return (
    <div>
      <TitleBanner title="GALLERY" icon={GalleryIcon} decoration="gears" />
      <p>Gallery</p>
    </div>
  );
};

export default Gallery;
