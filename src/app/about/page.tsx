import ContactUs from "@/components/about/contactUs";
import OurPillars from "@/components/about/pillars";
import GetInvovled from "@/components/about/get-invovled/getInvovled";
import Landing from "@/components/about/landing";
const About = () => {
  return (
    <div>
      <p>About</p>
      <Landing></Landing>
      <OurPillars />
      <GetInvovled />
      <ContactUs></ContactUs>
    </div>
  );
};

export default About;
