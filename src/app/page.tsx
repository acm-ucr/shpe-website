import OurMission from "@/components/landing/ourMission";
import Events from "@/components/landing/events";
import RecentEvents from "@/components/landing/recentEvents";

const Home = () => {
  return (
    <div className="w-screen items-center justify-center">
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
