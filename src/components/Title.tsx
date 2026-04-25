"use client";
import Image, { StaticImageData } from "next/image";

interface titleData {
  title: string;
  description: string;
  icon?: StaticImageData;
  decoration: StaticImageData;
}

const TitleBanner = ({ title, description, icon, decoration }: titleData) => {
  return (
    <div className="relative -z-10 -mt-35 flex flex-col items-center justify-center bg-gradient-to-b from-[#00355A] to-[#0070C0]">
      <div className="relative">
        <Image
          className="h-auto w-full object-contain"
          src={decoration}
          alt="Decor"
        />
        <div className="absolute top-3/4 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-row items-start">
          {icon && (
            <Image
              className="h-12 w-12 md:h-auto md:w-auto"
              src={icon}
              alt="Icon"
            />
          )}
          <div className="mt-7.5 ml-5 flex flex-col items-center justify-center">
            <p className="font-shpe-beachwood text-5xl font-semibold text-white">
              {title}
            </p>
            <p className="font-shpe-univers text-xl font-light text-white">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleBanner;
