import GradCap from "@/public/banners/icons/Graduation Cap.webp"
import Decor from "@/public/banners/SolarBoat-Alumni.webp"
import TitleBanner from "@/components/Title";

const Alumni = () => {
  return (
    <div>
      <TitleBanner
        title="Alumni"
        description=""
        icon={GradCap}
        decoration={Decor}
      />
      <p>Alumni</p>
    </div>
  );
};

export default Alumni;
