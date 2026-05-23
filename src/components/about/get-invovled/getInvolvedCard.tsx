import { StaticImageData } from "next/image";
import Image from "next/image";

interface GetInvolvedCardProps {
  image: StaticImageData;
  logo?: StaticImageData | null;
  title: string;
  text?: string | null;
}

const GetInvolvedCard = ({
  image,
  logo,
  title,
  text,
}: GetInvolvedCardProps) => {
  return (
    <div className="relative">
      {text ? (
        <div className="bg-shpe-blue-200 min-h-[50vh] rounded-2xl">
          <div className="relative flex flex-col items-center px-8 text-center text-white">
            <div className="font-shpe-beachwood py-8 text-4xl font-semibold">
              {title}
            </div>
            <p className="font-shpe-univers-condensed text-xl">{text}</p>
          </div>
        </div>
      ) : (
        <div>
          <Image src={image} alt={title} className="rounded-2xl" />
          <div
            className={`absolute bottom-0 left-1/2 mb-4 -translate-x-1/2 ${logo ? `w-11/12` : ""}`}
          >
            <div className="bg-shpe-blue-200/70 rounded-2xl px-10 py-3">
              {logo ? (
                <Image src={logo} alt={title} />
              ) : (
                <div className="font-shpe-beachwood text-center text-5xl font-semibold text-white">
                  {title}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetInvolvedCard;
