import { StaticImageData } from "next/image";

import MentorSHPE_Logo from "@/public/about/MentorSHPE Logo.webp";
import MentorSHPE_Image from "@/public/about/MentorSHPE Image.webp";
import SHPEtina_Logo from "@/public/about/SHPEtina Logo.webp";
import SHPEtina_Image from "@/public/about/SHPEtina Image.webp";
import Outreach_Image from "@/public/about/Outreach Image.webp";
import Recruitment_Image from "@/public/about/Recruitment Image.webp";

type InvolvedItem = {
  image: StaticImageData;
  logo?: StaticImageData | null;
  title: string;
  text: string;
};

const getInvovledData: InvolvedItem[] = [
  {
    image: MentorSHPE_Image,
    logo: MentorSHPE_Logo,
    title: "MENTORSHPE",
    text: "The MentorSHPE program connects members through mentorship by pairing students who want guidance with those who can share their experience. Mentees gain support with academics, internships, and navigating college, while mentors develop leadership and communication skills while helping others succeed.",
  },
  {
    image: SHPEtina_Image,
    logo: SHPEtina_Logo,
    title: "SHPETINA",
    text: "The SHPEtinas committee focuses on empowering and supporting Latinas in STEM through networking events, professional development opportunities, and community-building initiatives.",
  },
  {
    image: Outreach_Image,
    logo: null,
    title: "OUTREACH",
    text: "Support SHPE’s mission of “reaching back” by helping organize and lead STEM activities for local K-12 students. Committee members help plan outreach events, coordinate activities, and inspire younger students to pursue STEM.",
  },
  {
    image: Recruitment_Image,
    logo: null,
    title: "RECRUITMENT COMMITTEE",
    text: "Help grow the SHPE UCR community by supporting recruitment efforts. Members assist with tabling, promoting SHPE on campus, and increasing visibility so more students can learn about and join our organization.",
  },
];

export default getInvovledData;
