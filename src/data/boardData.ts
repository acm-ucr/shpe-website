import { StaticImageData } from "next/image";

export interface BoardMember {
  name: string;
  image: StaticImageData | string;
  position: string;
  linkedin: string;
}

export const boardData: BoardMember[] = [
  {
    name: "NAME",
    image: "/imagePlaceholder.svg",
    position: "Advisor",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    name: "Laura Canon",
    image: "/imagePlaceholder.svg",
    position: "President",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    name: "Naima Cano",
    image: "/imagePlaceholder.svg",
    position: "Vice President",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    name: "Wendy Vargas",
    image: "/imagePlaceholder.svg",
    position: "Secretary",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    name: "Juan Ascencio-Martinez",
    image: "/imagePlaceholder.svg",
    position: "Treasurer",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    name: "Joshua Rojas",
    image: "/imagePlaceholder.svg",
    position: "Solar Boat Lead",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    name: "Isabel Brambila",
    image: "/imagePlaceholder.svg",
    position: "SHPEtinas Director",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    name: "Sirajum Munira",
    image: "/imagePlaceholder.svg",
    position: "Professional Dev. Co-Director",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    name: "Frankie Puentes",
    image: "/imagePlaceholder.svg",
    position: "Professional Dev. Co-Director",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    name: "Giselle Avila",
    image: "/imagePlaceholder.svg",
    position: "Outreach Director",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    name: "Mia Olea",
    image: "/imagePlaceholder.svg",
    position: "Marketing Manager",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    name: "Samantha Morales",
    image: "/imagePlaceholder.svg",
    position: "Social & Mentorship Chair",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    name: "Janelle Avila",
    image: "/imagePlaceholder.svg",
    position: "Fundraising Chair",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    name: "Diego Alvarez",
    image: "/imagePlaceholder.svg",
    position: "Recruitment Chairr",
    linkedin: "https://linkedin.com/in/username",
  },
];
