"use client";
import Image, { StaticImageData } from "next/image";

interface titleData {
  title: string;
  description: string;
  icon: StaticImageData;
  decoration: StaticImageData;
}

const TitleBanner = ({
    title,
    description,
    icon,
    decoration,
}: titleData) =>{
    return(
        <div className="relative flex flex-col items-center justify-center bg-gradient-to-b from-[#00355A] to-[#0070C0] -mt-30 -z-10">
            <div className="relative">
                <Image
                    src={decoration}
                    alt="Decor"
                />
                <div className="flex flex-row items-start absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {icon && <Image
                    className=""
                    src={icon}
                    alt="Icon"
                    />}
                    <div className="mt-7.5 ml-5 flex flex-col items-center justify-center">
                        <p className="text-white font-shpe-beachwood font-semibold text-5xl">
                            {title}
                        </p>
                        <p className="text-white font-shpe-univers text-xl font-light">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TitleBanner;