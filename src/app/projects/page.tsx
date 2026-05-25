import Boat from "@/public/banners/icons/Sail Boat.webp";
import TitleBanner from "@/components/Title";
import Joinging from "@/components/projects/Joining";

const Projects = () => {
  return (
    <div>
      <TitleBanner title="SOLAR BOAT PROJECT" icon={Boat} />
      <p>Projects</p>
      <Joinging />
    </div>
  );
};

export default Projects;
