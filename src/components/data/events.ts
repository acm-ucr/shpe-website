import { StaticImageData } from "next/image";
import Professional from "@/public/home/professional.webp";
import Social from "@/public/home/social.webp";
import General from "@/public/home/general.webp";

export interface eventsData {
  Pictures: StaticImageData;
  Alt: string;
  Description: string;
  PictureTag: string;
  PictureBg: string;
}

export const eventsData: eventsData[] = [
  {
    Pictures: Professional,
    Alt: "Professional SHPE event taking place",
    Description:
      "Our professional events help members prepare for careers in STEM through workshops, networking, industry talks, and company tours. Students gain practical skills, connect with professionals, and explore career opportunities.",
    PictureTag: "PROFESSIONAL",
    PictureBg: "bg-shpe-orange-500/60",
  },
  {
    Pictures: Social,
    Alt: "People socializing outside",
    Description:
      "Social events provide a fun, welcoming space to relax and build friendships. From game nights to crafts and bonding activities, members connect and strengthen the SHPE familia.",
    PictureTag: "SOCIAL",
    PictureBg: "bg-shpe-blue-050/60",
  },
  {
    Pictures: General,
    Alt: "General meetings taking place",
    Description:
      "General meetings share updates, opportunities, and community-building activites. Signature events include Power Brunch (professional development), SHPEtinas Networking Night (supporting Latinas in STEM), and Noche de Ciencias y BNGO (K-12 outreach).",
    PictureTag: "GENERAL",
    PictureBg: "bg-shpe-blue-200/60",
  },
];
