import { StaticImageData } from "next/image";
import imagePlaceholder from "@/public/imagePlaceholder.svg";

export interface PastProject {
  image: StaticImageData | string;
  alt: string;
  date: string;
}

export const pastProjectData: PastProject[] = [
  {
    image: imagePlaceholder,
    alt: "Solar Boat 2026 Image",
    date: "Month Day, Year",
  },
  {
    image: imagePlaceholder,
    alt: "Solar Boat 2025 Image",
    date: "Month Day, Year",
  },
  {
    image: imagePlaceholder,
    alt: "Solar Boat 2024 Image",
    date: "Month Day, Year",
  },
];
