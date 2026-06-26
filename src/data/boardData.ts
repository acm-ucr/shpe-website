import { StaticImageData } from "next/image";
import imagePlaceholder from "@/public/imagePlaceholder.svg";

export interface BoardMember {
  name: string;
  image: StaticImageData | string;
  position: string;
  linkedin: string;
  title: string;
  quote: string;
}

export const boardData: BoardMember[] = [
  {
    name: "NAME",
    image: imagePlaceholder,
    position: "Advisor",
    linkedin: "https://linkedin.com/in/username",
    title: "Description",
    quote: "",
  },
  {
    name: "Laura Canon",
    image: imagePlaceholder,
    position: "President",
    linkedin: "https://linkedin.com/in/username",
    title: "4th Year Computer Science with Business Administration",
    quote:
      "I joined SHPE because I wanted to meet others who share my passion for STEM and for our community. SHPE gives me a sense of belonging and a change to learn from and support my community.",
  },
  {
    name: "Naima Cano",
    image: imagePlaceholder,
    position: "Vice President",
    linkedin: "https://linkedin.com/in/username",
    title: "3rd Year Computer Science with Business Administration",
    quote:
      "I wanted to join SHPE because of the community and feeling closer to my roots, as well as professionally develop myself and make connections in the industry.",
  },
  {
    name: "Wendy Vargas",
    image: imagePlaceholder,
    position: "Secretary",
    linkedin: "https://linkedin.com/in/username",
    title: "3rd Year Computer Science",
    quote:
      "I wanted to join SHPE to connect with other Hispanic first-gen students to build and be a part of a community where we can support and help each other.",
  },
  {
    name: "Juan Ascencio-Martinez",
    image: imagePlaceholder,
    position: "Treasurer",
    linkedin: "https://linkedin.com/in/username",
    title: "3rd year Mechanical Engineer",
    quote:
      "I joined SHPE for its various professional development opportunities and to be part of the supportive community SHPE members have built.",
  },
  {
    name: "Joshua Rojas",
    image: imagePlaceholder,
    position: "Solar Boat Lead",
    linkedin: "https://linkedin.com/in/username",
    title: "4th year Mechanical Engineer",
    quote:
      "Interested in developing Engineering skills outside of course curriculum.",
  },
  {
    name: "Isabel Brambila",
    image: imagePlaceholder,
    position: "SHPEtinas Director",
    linkedin: "https://linkedin.com/in/username",
    title: "4th Year Bioengineer",
    quote:
      "I joined SHPE to find a community where I felt at home, and to help inspire younger Hispanic students to explore engineering with confidence and pride.",
  },
  {
    name: "Sirajum Munira",
    image: imagePlaceholder,
    position: "Professional Dev. Co-Director",
    linkedin: "https://linkedin.com/in/username",
    title: "4th Year Chemical Engineer",
    quote:
      "I wanted to meet more students outside of my major and ethnicity with high cultural value.",
  },
  {
    name: "Frankie Puentes",
    image: imagePlaceholder,
    position: "Professional Dev. Co-Director",
    linkedin: "https://linkedin.com/in/username",
    title: "2nd Year Mechanical Engineer",
    quote: "Some of my friends recommended I join because there’s cool events.",
  },
  {
    name: "Giselle Avila",
    image: imagePlaceholder,
    position: "Outreach Director",
    linkedin: "https://linkedin.com/in/username",
    title: "3rd year Environmental Engineer",
    quote:
      "I want to focus on professional development and networking. But also, besides engineering, I have a passion for mentorship and community building and SHPE’s Outreach position provides that.",
  },
  {
    name: "Mia Olea",
    image: imagePlaceholder,
    position: "Marketing Manager",
    linkedin: "https://linkedin.com/in/username",
    title: "2nd year Environmental Engineer",
    quote:
      "I joined SHPE to have a supportive community where I feel a sense of belonging and to connect with other Hispanic Engineers who share similar goals and values.",
  },
  {
    name: "Samantha Morales",
    image: imagePlaceholder,
    position: "Social & Mentorship Chair",
    linkedin: "https://linkedin.com/in/username",
    title: "2nd year Mechanical Engineer",
    quote:
      "I joined SHPE my first year because I felt that if I knew more people going through the same things I would not be as nervous! (it worked)",
  },
  {
    name: "Janelle Avila",
    image: imagePlaceholder,
    position: "Fundraising Chair",
    linkedin: "https://linkedin.com/in/username",
    title: "2nd year Environmental Engineer",
    quote:
      "I wanted to be in an environment where I can develop my leadership goals and be around others with similar cultural backgrounds.",
  },
  {
    name: "Diego Alvarez",
    image: imagePlaceholder,
    position: "Recruitment Chairr",
    linkedin: "https://linkedin.com/in/username",
    title: "4th year Chemical Engineer w/ a concentration in Nanotechnology",
    quote:
      "I wanted to join SHPE because I like the fact that everyone in the club is very likeminded to me and we are all engineering majors. In addition, I feel like SHPE does a great job at making its members feel like family and it is one of the main reasons as to why I wanted to join the board.",
  },
];
