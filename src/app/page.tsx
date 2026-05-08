import WhoWeAre from "@/components/landing/CreateWhoWeAre";
import OurMission from "@/components/landing/ourMission";
import Events from "@/components/landing/events";
import RecentEvents from "@/components/landing/recentEvents";
import LandingHeader from "@/components/landing/Header";

const Home = () => {
  return (
    <div className="items-center justify-center">
      <LandingHeader />
      <WhoWeAre
        title="Who We Are"
        text={
          "SHPE @ UCR is an interdisciplinary engineering organization. We pride ourselves in not only being able to improve ourselves in a professional, academic, and innovatice way, but in our ability to give back to the community through outreach. Overall, we have proved that we can prepare members for the real world, outside of their undergraduate career, whether it be in graduate schook, the industry, or anything else."
        }
      />
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
