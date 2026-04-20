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
            <p>
                {title}
            </p>
            <p>
                {description}
            </p>
            {/* <Image
                className=""
                src={decoration}
                alt="Decor"
            />
            <Image
                className=""
                src={icon}
                alt="Icon"
            /> */}
            <div className="relative">
                <Image
                    src={decoration}
                    alt="Decor"
                />

                <Image
                    src={icon}
                    alt="Icon"
                    className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
            </div>
        </div>
    );
}

export default TitleBanner;