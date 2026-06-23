import ContactUs from "@/components/about/contactUs";
import OurPillars from "@/components/about/pillars";
import GetInvovled from "@/components/about/get-involved/getInvolved";
import OurMission from "@/components/landing/ourMission";
import Landing from "@/components/about/landing";
const About = () => {
  return (
    <div>
      <Landing></Landing>
      <OurMission
        title="OUR History"
        text="history blurb herehistory blurb herehistory blurb herehistory blurb herehistory blurb herehistory blurb herehistory blurb herehistory blurb here."
      />
      <OurPillars />
      <GetInvovled />
      <ContactUs></ContactUs>
    </div>
  );
};

export default About;
