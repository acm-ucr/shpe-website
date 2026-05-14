import gearImage from "@/public/gear.webp";
import wrenchImage from "@/public/wrench.webp";
import downArrow from "@/public/AboutUsLandingDownArrow.webp";
import groupPic from "@/public/AboutUsLandingGroupPic.webp";

import Image from "next/image";

const Landing = () => {
  return (
    <div>
      <div className="from-shpe-blue-200 to-shpe-blue-150 relative z-0 -mt-30 hidden h-[570px] bg-gradient-to-b lg:block">
        <Image
          src={gearImage}
          alt="gear"
          className="absolute top-[-8px] left-[51px] w-[300px] scale-x-[-1]"
        />
        <Image
          src={gearImage}
          alt="gear"
          className="absolute top-[197px] left-[1182px] w-[300px]"
        />
        <Image
          src={wrenchImage}
          alt="wrench"
          className="absolute top-[153px] left-[917px] w-[167px] rotate-265"
        />
        <div className="font-shpe-beachwood text-shpe-white-100 scale-y-125 py-[275px] text-center text-[70px] leading-[70px] font-bold">
          ABOUT US
        </div>
        <div className="font-shpe-univers-condensed text-shpe-white-100 absolute top-[378px] left-[408px] text-center text-[30px] leading-[35px]">
          Scroll down to learn more about SHPE and what we offer!
        </div>
        <Image
          src={downArrow}
          alt="down arrow"
          className="absolute top-[431px] left-[722px] w-[90px]"
        />
      </div>

      <div className="from-shpe-blue-200 to-shpe-blue-150 relative z-0 -mt-30 h-[300px] bg-gradient-to-b lg:hidden">
        <Image
          src={gearImage}
          alt="gear"
          className="absolute top-[140px] left-[-28px] w-[150px] rotate-8"
        />
        <Image
          src={wrenchImage}
          alt="wrench"
          className="absolute top-[50px] left-[625px] w-[193px] rotate-265"
        />
        <div className="font-shpe-beachwood text-shpe-white-100 scale-y-125 py-[125px] text-center text-[50px] leading-[70px] font-bold">
          ABOUT US
        </div>
        <div className="font-shpe-univers-condensed text-shpe-white-100 absolute top-[200px] left-[125px] text-center text-[25px] leading-[35px]">
          Scroll down to learn more about SHPE and what we offer!
        </div>
        <Image
          src={downArrow}
          alt="down arrow"
          className="absolute top-[250px] left-[375px] w-[30px]"
        />
      </div>

      <div className="relative min-h-screen">
        <Image
          src={gearImage}
          alt="gear"
          className="rotate-5.41 absolute top-[78px] left-[69px] hidden w-[200px] opacity-70 lg:block"
        />
        <Image
          src={gearImage}
          alt="gear"
          className="absolute top-[341px] left-[1195px] hidden w-[200px] scale-x-[-1] opacity-70 lg:block"
        />
        <Image
          src={groupPic}
          alt="group picture"
          className="absolute top-[30px] left-1/2 z-10 h-[527px] w-[1094px] -translate-x-1/2 object-cover lg:rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Landing;
