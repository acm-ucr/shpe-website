import Image, { StaticImageData } from "next/image";

interface WhoWeAreProps {
  title: string;
  text: string;
  image: StaticImageData;
  alt: string;
}

const InfoSection = ({ title, text, image, alt }: WhoWeAreProps) => {
  return (
    <div className="flex w-full items-start justify-between">
      <div className="flex w-1/2 justify-start">
        <Image
          src={image}
          alt={alt}
          className="h-auto max-w-full object-contain shadow-lg"
        />
      </div>
      <div className="flex w-1/2 flex-col items-center px-16">
        <h1 className="font-shpe-beachwood text-shpe-blue-200 mt-15 mb-9 scale-y-140 text-center text-5xl font-semibold tracking-tight uppercase">
          {title}
        </h1>
        <p className="font-shpe-univers-condensed px-10 text-center text-xl leading-7">
          {text}
        </p>
      </div>
    </div>
  );
};
export default InfoSection;
