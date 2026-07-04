import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import LinkedInIcon from "@/public/LinkedIn.svg";

interface BoardOverlayProps {
  name: string;
  image: StaticImageData | string;
  position: string;
  linkedin: string;
  title: string;
  quote: string;
}

const BoardOverlay = ({
  name,
  image,
  position,
  linkedin,
  title,
  quote,
}: BoardOverlayProps) => {
  return (
    <div className="bg-shpe-blue-200 text-shpe-white-100 flex w-full flex-col items-center rounded-4xl border-2 p-6 md:w-160 md:flex-row md:gap-6">
      {/* Left Section */}
      <div className="flex flex-col justify-center text-left md:w-72">
        <div className="font-shpe-univers-condensed text-center text-2xl md:mb-2 md:text-lg">
          {position}
        </div>

        <div className="bg-shpe-white-100 relative hidden aspect-[5/6] w-full overflow-hidden rounded-3xl md:block">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>

        <div className="font-shpe-univers-condensed mt-3 text-center text-3xl">
          {name}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col md:flex-1 md:pt-12">
        <div className="font-shpe-univers-condensed text-center text-2xl md:text-left md:text-3xl">
          {title}
        </div>

        <div className="text-md text-center italic opacity-80 md:mt-5 md:text-left md:text-lg">
          "{quote}"
        </div>
        <Link
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          className="mt-auto self-end"
        >
          <Image src={LinkedInIcon} alt="LinkedIn" width={48} height={48} />
        </Link>
      </div>
    </div>
  );
};

export default BoardOverlay;
