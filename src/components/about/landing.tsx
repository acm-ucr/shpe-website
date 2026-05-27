import gearImage from "@/public/gear.webp";
import wrenchImage from "@/public/wrench.webp";
import downArrow from "@/public/AboutUsLandingDownArrow.webp";
import groupPic from "@/public/AboutUsLandingGroupPic.webp";

import Image from "next/image";

const Landing = () => {
  return (
    <div>
      {/* DESKTOP */}
      <section className="from-shpe-blue-200 to-shpe-blue-150 -mt-30 relative hidden overflow-hidden bg-gradient-to-b lg:flex lg:min-h-[570px] lg:flex-col lg:items-center lg:justify-center">
        <Image
          src={gearImage}
          alt="gear"
          className="absolute left-10 top-2 w-[300px] scale-x-[-1]"
        />
        <Image
          src={gearImage}
          alt="gear"
          className="absolute right-10 bottom-10 w-[300px]"
        />
        <Image
          src={wrenchImage}
          alt="wrench"
          className="absolute right-105 top-32 w-[167px] rotate-[265deg]"
        />
        <div className="z-10 flex flex-col items-center pt-50 text-center">
          <h1 className="font-shpe-beachwood text-shpe-white-100 scale-y-125 text-[70px] leading-[70px] font-bold">
            ABOUT US
          </h1>
          <p className="font-shpe-univers-condensed text-shpe-white-100 mt-8 max-w-2xl text-[30px] leading-[35px]">
            Scroll down to learn more about SHPE and what we offer!
          </p>
          <Image
            src={downArrow}
            alt="down arrow"
            className="mt-6 w-[90px]"
          />
        </div>
      </section>

      {/* MOBILE */}
      <section className="from-shpe-blue-200 to-shpe-blue-150 -mt-30 relative overflow-hidden bg-gradient-to-b px-4 py-10 lg:hidden">
        <Image
          src={gearImage}
          alt="gear"
          className="absolute bottom-12 left-[-30px] w-[150px] rotate-6"
        />
        <Image
          src={wrenchImage}
          alt="wrench"
          className="absolute right-[-40px] top-12 w-[200px] rotate-[265deg]"
        />
        <div className="relative z-10 flex flex-col pt-15 items-center text-center">
          <h1 className="font-shpe-beachwood text-shpe-white-100 scale-y-125 text-[50px] font-bold">
            ABOUT US
          </h1>
          <p className="font-shpe-univers-condensed text-shpe-white-100 mt-6 text-[22px] leading-[30px]">
            Scroll down to learn more about SHPE and what we offer!
          </p>
          <Image
            src={downArrow}
            alt="down arrow"
            className="mt-4 w-[30px]"
          />
        </div>
      </section>

      {/* GROUP IMAGE SECTION */}
      <section className="relative lg:flex lg:justify-center px-4 py-20">
        <Image
          src={gearImage}
          alt="gear"
          className="absolute left-24 top-25 hidden w-[200px] rotate-6 opacity-70 lg:block"
        />
        <Image
          src={gearImage}
          alt="gear"
          className="absolute right-24 bottom-22 hidden w-[200px] -rotate-10 scale-x-[-1] opacity-70 lg:block"
        />
        <div className="relative z-10 w-full lg:max-w-[1094px] aspect-[1094/527]">
          <Image
            src={groupPic}
            alt="group picture"
            fill
            className="object-cover lg:rounded-3xl"
          />
        </div>
      </section>
    </div>
  );
};

export default Landing;