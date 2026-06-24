import { StaticImageData } from "next/image";
import Image from "next/image";

interface GetInvolvedCardProps {
  image: StaticImageData;
  logo?: StaticImageData | null;
  title: string;
  text?: string | null;
}

const GetInvolvedCard = ({ image, logo, title }: GetInvolvedCardProps) => {
  return (
    <div className="relative">
      <Image src={image} alt={title} className="rounded-2xl" />
      <div
        className={`absolute bottom-0 left-1/2 mb-4 -translate-x-1/2 ${logo ? `w-11/12` : ""}`}
      >
        <div className="bg-shpe-blue-200/70 rounded-2xl px-10 py-3">
          {logo ? (
            <Image src={logo} alt={title} />
          ) : (
            <div className="font-shpe-beachwood text-center text-4xl font-semibold text-white md:text-2xl lg:text-4xl">
              {title}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetInvolvedCard;
