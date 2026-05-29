import InfoSection from "@/components/landing/InfoSection";
import OurMission from "@/components/landing/ourMission";
import Events from "@/components/landing/events";
import LandingHeader from "@/components/landing/Header";
import SolarBoat from "@/components/landing/solarBoat";
import landingInfo from "@/data/landingInfo";

const Home = () => {
  return (
    <div className="items-center justify-center">
      <LandingHeader />
      {landingInfo.map(({ title, text, image, alt }, index) => (
        <InfoSection
          title={title}
          text={text}
          image={image}
          alt={alt}
          key={index}
        />
      ))}
      <OurMission
        title="OUR MISSION"
        text="SHPE changes lives by empowering the Hispanic community to realize its fullest potential and to impact the world through STEM awareness, access, support, and development."
      />
      <SolarBoat
        description1="UCR Solar Boat, a SHPE project, designs, constructs, and races a solar-powered boat for Sacramento Municipal Utility District, SMUD's Solar Regatta, prioritizing sustainability and renewable energy."
        description2="We are committed to empowering both the Hispanic and UCR communities in STEM by engaging in hands-on activities that promote sustainability and renewable energy understanding, improve resource access, and offer support to nurture academic and professional development."
      />
      <Events />
    </div>
  );
};

export default Home;
