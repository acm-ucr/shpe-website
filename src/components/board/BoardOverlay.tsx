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
    <div className="bg-shpe-blue-200 text-shpe-white-100 flex max-w-2xl gap-6 rounded-4xl p-6">
      {/* Left Section */}
      <div className="flex w-64 flex-col items-center text-left">
        <div className="font-shpe-univers-condensed mb-2 text-lg">
          {position}
        </div>

        <div className="bg-shpe-white-100 relative aspect-[5/6] w-full overflow-hidden rounded-3xl">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>

        <div className="font-shpe-univers-condensed mt-3 text-center text-3xl">
          {name}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-1 flex-col pt-12">
        <div className="font-shpe-univers-condensed text-3xl">{title}</div>

        <div className="mt-5 text-lg italic opacity-80">"{quote}"</div>
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
  );
};

export default BoardOverlay;
