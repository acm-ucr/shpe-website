import Image, { StaticImageData } from "next/image";
import LinkedInIcon from "@/public/linkedIn.webp";

interface BoardCardProps {
  name: string;
  image: StaticImageData | string;
  position: string;
  linkedin: string;
}

const BoardCard = ({ name, image, position, linkedin }: BoardCardProps) => {
  return (
    <div className="flex w-80 flex-col items-center rounded-4xl bg-[#001F5B] p-7 pb-3 text-center text-white">
      <div className="relative mb-3 aspect-[5/6] w-full overflow-hidden rounded-3xl bg-[#D9D9D9]">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      <div className="text-2xl font-bold">{name}</div>
      <div className="text-lg">{position}</div>

      <a href={linkedin} target="_blank" rel="noreferrer">
        <Image src={LinkedInIcon} alt="LinkedIn icon" className="h-12 w-12" />
      </a>
    </div>
  );
};

export default BoardCard;
