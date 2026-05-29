"use client";
import Image, { StaticImageData } from "next/image";
import gear from "@/public/icons/gear.webp";
import wrench from "@/public/icons/wrench.webp";

interface titleData {
  title: string;
  description?: string;
  icon?: StaticImageData;
  decoration?: string;
}

const TitleBanner = ({
  title,
  description,
  icon,
  decoration = "wrench",
}: titleData) => {
  return (
    <div className="from-shpe-blue-200 to-shpe-blue-150 relative -mt-35 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b pt-35">
      <div className="relative flex min-w-8/10 flex-row justify-center gap-3 py-5 md:min-w-150 md:px-20">
        <Image
          src={gear}
          alt="Gear Icon"
          width="50"
          height="50"
          className={`absolute left-0 -scale-x-100 -rotate-8 ${
            decoration === "wrench"
              ? "-top-10 w-15 md:-top-18 md:w-30"
              : "bottom-0 w-10 md:w-20"
          }`}
        />
        <Image
          src={decoration === "wrench" ? wrench : gear}
          alt="wrench Icon"
          width="50"
          height="50"
          className={`absolute right-0 ${
            decoration === "wrench"
              ? "-top-5 w-15 -scale-x-100 -rotate-22 md:w-25"
              : "top-0"
          }`}
        />
        {icon && (
          <Image
            className="w-12 object-contain md:w-20"
            src={icon}
            alt="Icon"
          />
        )}
        <div className="flex flex-col items-center justify-center">
          <p className="font-shpe-beachwood scale-y-125 text-2xl font-semibold text-white md:text-5xl">
            {title}
          </p>
          {description && (
            <p className="font-shpe-univers text-sm font-light text-white md:text-xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TitleBanner;
