import Boat from "@/public/banners/icons/Sail Boat.webp";
import Decor from "@/public/banners/SolarBoat-Alumni.webp";
import TitleBanner from "@/components/Title";
import Joinging from "@/components/projects/Joining";

const Projects = () => {
  return (
    <div>
      <TitleBanner title="SOLAR BOAT PROJECT" icon={Boat} decoration={Decor} />
      <p>Projects</p>
      <Joinging />
    </div>
  );
};

export default Projects;
