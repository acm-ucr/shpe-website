import React from "react";
import { StaticImageData } from "next/image";
import pillarsImg from "@/public/pillars.jpg";

export interface Pillar {
  title: string;
  color: string;
  image: StaticImageData;
  content: React.ReactNode;
}

export const PILLARS: Pillar[] = [
  {
    title: "Community Building",
    color: "bg-shpe-orange-500",
    image: pillarsImg,
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
    image: pillarsImg,
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
    image: pillarsImg,
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
