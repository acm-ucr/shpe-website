import InfoSection from "@/components/landing/InfoSection";
import OurMission from "@/components/landing/ourMission";
import Events from "@/components/landing/events";
import LandingHeader from "@/components/landing/Header";
import EventsList from "@/components/ui/eventsList";
import RecentEventsData from "@/data/recentEventsData";
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
      <Events></Events>
      <EventsList
        title="Recent Events"
        eventsData={RecentEventsData}
      ></EventsList>
    </div>
  );
};
export default Home;
