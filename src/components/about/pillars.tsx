import Popup from "@/components/ui/popup";
import Image from "next/image";

const PILLARS = [
  {
    title: "Community Building",
    color: "bg-shpe-orange-500",
    content: (
      <>
        At SHPE UCR, we believe that community is the foundation of success. Our
        chapter is a familia where students can find support, mentorship, and
        lifelong friendships. Through social events, bonding activities, and
        collaborative spaces, we create an environment where members feel
        welcomed and empowered to grow both personally and academically.
        <br />
        <br />
        Whether you're a first-year student looking for guidance or an
        upperclassman seeking to give back, SHPE UCR provides a space where
        everyone belongs.
      </>
    ),
  },
  {
    title: "Professional Development",
    color: "bg-shpe-blue-050",
    content: (
      <>
        SHPE UCR connects students with the resources and networks needed to
        succeed in STEM careers. Through our events and industry partnerships,
        members gain exposure to career opportunities, develop essential
        professional skills, and build meaningful connections.
        <br />
        <br />
        Our professional development programming includes:
        <ul className="mt-2 ml-6 list-disc space-y-1">
          <li>Resume and LinkedIn workshops</li>
          <li>Networking events with industry professionals</li>
          <li>Industry guest speakers and technical talks</li>
          <li>Company tours and recruiting opportunities</li>
          <li>
            Career preparation sessions for internships and full-time roles
          </li>
        </ul>
        <br />
        By engaging with the broader SHPE network, members can connect with
        professionals and peers who share similar backgrounds, goals, and
        aspirations.
      </>
    ),
  },
  {
    title: "Outreach",
    color: "bg-shpe-blue-200",
    content: (
      <>
        A core value of SHPE is “reaching back.” At SHPE UCR, we are committed
        to inspiring the next generation of STEM leaders by engaging with local
        K-12 students in our surrounding communities.
        <br />
        <br />
        Through outreach events and partnerships with local schools, our
        members:
        <ul className="mt-2 ml-6 list-disc space-y-1">
          <li>Introduce students to STEM careers</li>
          <li>Lead hands-on engineering and science activities</li>
          <li>Provide mentorship and guidance for future college students</li>
          <li>Promote access and representation in STEM fields</li>
        </ul>
        <br />
        By sharing our experiences and passion for STEM, we aim to empower
        younger students to pursue their own academic and professional dreams.
      </>
    ),
  },
];

export default function OurPillars() {
  return (
    <section className="bg-shpe-white-100 flex flex-col items-center py-20">
      <h2 className="font-shpe-beachwood mb-16 text-6xl font-bold tracking-widest text-black uppercase">
        Our Pillars
      </h2>

      <div className="flex justify-center gap-12 px-4">
        {PILLARS.map((pillar) => (
          <Popup
            key={pillar.title}
            clickableComponent={
              <div
                className={` ${pillar.color} flex h-[320px] w-[360px] flex-none flex-col rounded-[2.5rem] px-6 pt-6 pb-2`}
              >
                <div className="relative mx-auto h-[210px] w-[312px] flex-none overflow-hidden rounded-[1.75rem]">
                  <Image
                    src="/pillars.jpg"
                    alt={pillar.title}
                    fill
                    className="object-cover"
                    sizes="312px"
                    priority
                  />
                </div>

                <div className="flex flex-1 items-center justify-center px-2 text-center">
                  <h3 className="font-shpe-beachwood text-shpe-white-100 text-2xl leading-none uppercase">
                    {pillar.title}
                  </h3>
                </div>
              </div>
            }
            popupComponent={
              <div
                className={`${pillar.color} text-shpe-white-100 max-w-5xl rounded-3xl p-10`}
              >
                <div className="font-shpe-univers text-lg">
                  {pillar.content}
                </div>
              </div>
            }
            overlayColor="bg-shpe-blue-200/40"
          />
        ))}
      </div>
    </section>
  );
}
