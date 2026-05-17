import Image, { StaticImageData } from "next/image";

interface BoardOverlayProps {
  name: string;
  image: StaticImageData | string;
  position: string;
  linkedin: string;
}

const BoardOverlay = ({name, image, position, linkedin}: BoardOverlayProps) => {
  return (
    <div className="bg-shpe-blue-200 text-shpe-white-100 flex max-w-4xl gap-6 rounded-4xl p-6">
      {/* Left Section */}
      <div className="flex w-64 flex-col items-center text-center">
        <div className="font-shpe-univers-condensed mb-2 text-lg">
          {position}
        </div>

        <div className="bg-shpe-white-100 relative aspect-[5/6] w-full overflow-hidden rounded-3xl">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        <div className="font-shpe-univers-condensed mt-3 text-3xl">
          {name}
        </div>

        <a href={linkedin} target="_blank" rel="noreferrer">
          <Image
            src="/LinkedIn.svg"
            alt="LinkedIn"
            width={48}
            height={48}
          />
        </a>
      </div>

      {/* Right Section */}
      <div className="flex-1">
        <p className="text-lg leading-relaxed">
          <p className="text-lg leading-relaxed">
            Replace this text with a board member bio.
            </p>
        </p>
      </div>
    </div>
  );
};

export default BoardOverlay;