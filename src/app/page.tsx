import OurMission from "@/components/landing/ourMission";
import LandingHeader from "@/components/landing/Header";

const Home = () => {
  return (
    <div className="items-center justify-center">
      <LandingHeader />
      <OurMission
        title="OUR MISSION"
        text="SHPE changes lives by empowering the Hispanic community to realize its fullest potential and to impact the world through STEM awareness, access, support, and development."
      />
    </div>
  );
};

export default Home;
