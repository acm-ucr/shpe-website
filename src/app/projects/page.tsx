import Boat from "@/public/icons/Sail Boat.webp";
import TitleBanner from "@/components/Title";
import Joining from "@/components/projects/Joining";
import InfoSection from "@/components/landing/InfoSection";
import SolarBoat from "@/public/projects/solar_boat.webp";

const Projects = () => {
  return (
    <div>
      <TitleBanner title="SOLAR BOAT PROJECT" icon={Boat} />
      <InfoSection
        text={
          "UCR Solar Boat, a SHPE project, designs, constructs, and races a solar - powered boat for Sacramento Municipal Utility District, SMUD's Solar Regatta, prioritizing sustainability and renewable energy.\n\nWe are committed to empowering both the Hispanic and UCR communities in STEM by engaging in hands on activities that promote sustainability and renewable energy understanding, improve resource access, and offer support to nurture academic and professional development."
        }
        image={SolarBoat}
        alt="Solar Boat Logo"
      />
      <Joining />
    </div>
  );
};

export default Projects;
