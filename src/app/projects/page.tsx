import Boat from "@/public/icons/Sail Boat.webp";
import TitleBanner from "@/components/Title";
import Joining from "@/components/projects/Joining";

const Projects = () => {
  return (
    <div>
      <TitleBanner title="SOLAR BOAT PROJECT" icon={Boat} />
      <Joining />
    </div>
  );
};

export default Projects;
