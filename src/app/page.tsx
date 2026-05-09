import WhoWeAre from "@/components/landing/whoWeAre";
import OurMission from "@/components/landing/ourMission";
import Events from "@/components/landing/events";
import RecentEvents from "@/components/landing/recentEvents";
import LandingHeader from "@/components/landing/Header";
import landingInfo from "@/components/data/landingInfo";

const Home = () => {
  return (
    <div className="items-center justify-center">
      <LandingHeader />
      {landingInfo.map(({ title, text }) => (
        <WhoWeAre title={title} text={text} />
      ))}
      <OurMission
        title="OUR MISSION"
        text="SHPE changes lives by empowering the Hispanic community to realize its fullest potential and to impact the world through STEM awareness, access, support, and development."
      />
      <Events></Events>
      <RecentEvents></RecentEvents>
    </div>
  );
};
export default Home;
