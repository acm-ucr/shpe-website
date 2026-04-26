import OurMission from "@/components/landing/ourMission";
import ContactUs from "@/components/about/contactUs";

const Home = () => {
  return (
    <div className="w-screen items-center justify-center">
      <OurMission
        title="OUR MISSION"
        text="SHPE changes lives by empowering the Hispanic community to realize its fullest potential and to impact the world through STEM awareness, access, support, and development."
      />
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
