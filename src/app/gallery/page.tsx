import GalleryIcon from "@/public/banners/icons/Picture.webp"
import Decor from "@/public/banners/Gallery-MeetTheTeam.webp"
import TitleBanner from "@/components/Title";

const Gallery = () => {
  return (
    <div>
      <TitleBanner
        title="Gallery"
        description=""
        icon={GalleryIcon}
        decoration={Decor}
      />
      <p>Gallery</p>
    </div>
  );
};

export default Gallery;
