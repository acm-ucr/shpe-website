"use image";
import Image, { StaticImageData } from "next/image";

interface CardInfo {
  image: StaticImageData;
  alt: string;
  info?: string;
}

const RecentEventCard = ({ image, alt, info }: CardInfo) => {
  return (
    <div className="flex flex-col">
      <Image
        src={image}
        alt={alt}
        className="aspect-3/4 rounded-4xl object-cover transition-opacity duration-500 ease-in-out"
      />
      <p className="hidden p-3 text-center lg:block">{info}</p>
    </div>
  );
};
export default RecentEventCard;
