import Boat from "@/public/banners/icons/Sail Boat.webp"
import Decor from "@/public/banners/SolarBoat-Alumni.webp"
import TitleBanner from "@/components/Title";

const Projects = () => {
  return (
    <div>
      <TitleBanner
        title="Solar Boat Project"
        description=""
        icon={Boat}
        decoration={Decor}
      />
      <p>Projects</p>
    </div>
  );
};

export default Projects;
