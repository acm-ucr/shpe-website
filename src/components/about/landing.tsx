import gearImage from "@/public/gear.webp";
import wrenchImage from "@/public/wrench.webp";
import downArrow from "@/public/AboutUsLandingDownArrow.webp";
import groupPic from "@/public/AboutUsLandingGroupPic.webp";

import Image from "next/image";

const Landing = () => {
    return (
        <div>
            <div className= "from-shpe-blue-200 to-shpe-blue-150 h-[570px] bg-gradient-to-b relative z-0 -mt-30 hidden lg:block">
                <Image src={gearImage} alt="gear" className="absolute top-[-8px] left-[51px] scale-x-[-1] w-[300px]"/>
                <Image src={gearImage} alt="gear" className="absolute top-[197px] left-[1182px] w-[300px]"/>
                <Image src={wrenchImage} alt="wrench" className="absolute top-[153px] left-[917px] rotate-265 w-[167px]"/>
                <div className="py-[275px] font-shpe-beachwood text-center text-shpe-white-100 text-[70px] leading-[70px] scale-y-125 font-bold">
                    ABOUT US
                </div>
                <div className="absolute top-[378px] left-[408px] font-shpe-univers-condensed text-shpe-white-100 text-center text-[30px] leading-[35px]">
                    Scroll down to learn more about SHPE and what we offer!
                </div>
                <Image src={downArrow} alt="down arrow" className="absolute top-[431px] left-[722px] w-[90px]"/>
            </div>

            <div className= "from-shpe-blue-200 to-shpe-blue-150 h-[300px] bg-gradient-to-b relative z-0 -mt-30 lg:hidden">
                <Image src={gearImage} alt="gear" className="absolute top-[140px] left-[-28px] w-[150px] rotate-8"/>
                <Image src={wrenchImage} alt="wrench" className="absolute top-[50px] left-[625px] rotate-265 w-[193px]"/>
                <div className="py-[125px] font-shpe-beachwood text-center text-shpe-white-100 text-[50px] leading-[70px] scale-y-125 font-bold">
                    ABOUT US
                </div>
                <div className="absolute top-[200px] left-[125px] font-shpe-univers-condensed text-shpe-white-100 text-center text-[25px] leading-[35px]">
                    Scroll down to learn more about SHPE and what we offer!
                </div>
                <Image src={downArrow} alt="down arrow" className="absolute top-[250px] left-[375px] w-[30px]"/>
            </div>

            <div className="relative min-h-screen">
                <Image src={gearImage} alt="gear" className="absolute top-[78px] left-[69px] rotate-5.41 w-[200px] opacity-70 hidden lg:block"/>
                <Image src={gearImage} alt="gear" className="absolute top-[341px] left-[1195px] scale-x-[-1] w-[200px] opacity-70 hidden lg:block"/>
                <Image src={groupPic} alt="group picture" className="absolute top-[30px] object-cover h-[527px] left-1/2 -translate-x-1/2 w-[1094px] lg:rounded-3xl z-10"/>
            </div>
        </div>
    )
};

export default Landing;