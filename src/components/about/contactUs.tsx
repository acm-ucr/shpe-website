import discordIcon from "@/public/footer/discord.webp";
import emailIcon from "@/public/footer/email.webp";
import facebookIcon from "@/public/footer/facebook.webp";
import instagramIcon from "@/public/footer/instagram.webp";
import linkedinIcon from "@/public/footer/linkedIn.webp";
import newsIcon from "@/public/footer/news.webp";
import gearImage from "@/public/gear.webp";

import Image from "next/image";

// made these into variables for easier changes if needed/wanted
const iconSize = "h-[88px] w-[88px]";
const circleStyle = "flex flex-col items-center justify-center bg-shpe-orange-500 rounded-full h-[140px] w-[140px]";
const lineStyle = "h-[3px] w-[82px] bg-shpe-orange-500 mx-[20px]";
const subHeaderStyle = "font-shpe-univers text-shpe-blue-200 text-center text-3xl";
const margins = "flex flex-col items-center gap-[20px] mt-[40px]";

const ContactUs = () => {
  return (
    <div className="bg-shpe-white-100 relative overflow-hidden pb-[240px] pt-[40px]">
        <Image src={gearImage} alt="gear" className="absolute left-[-100px] top-[50px] w-[300px] opacity-40 scale-x-[-1]"/>
        <Image src={gearImage} alt="gear" className="absolute right-[-100px] top-[50px] w-[300px] opacity-40"/>
      <div className="font-shpe-beachwood text-center text-6xl font-semibold">
        CONTACT US
      </div>
      <div className= {margins}>
        <div className= {subHeaderStyle}>
            Have Questions?
        </div>
        <div className="flex items-center justify-center mt-[25px]">
            <div className={circleStyle}>
                <Image src={instagramIcon} alt="Instagram" className={iconSize} />
                <div className="text-center text-[15px] text-white leading-none -mt-[5px] pb-[10px]">
                    @shpeucr
                </div>
            </div>
            <div className={lineStyle}></div>
            <div className={circleStyle}>
                <Image src={emailIcon} alt="Email" className= {iconSize} />
                <div className="text-center text-[12px] text-white -mt-[15px] pb-[10px]">
                    shpeucr@gmail.com
                </div>
            </div>
        </div>
      </div>
      <div className={margins}>
        <div className={subHeaderStyle}>
            Connect With Us!
        </div>
        <div className="flex items-center justify-center mt-[25px]">
            <div className={circleStyle}>
                <Image src={discordIcon} alt="Discord" className={iconSize} />
                <div className="text-center text-[17px] text-white -mt-[7px] pb-[5px]">Discord</div>
            </div>
            <div className={lineStyle}></div>
            <div className={circleStyle}>
                <Image src={newsIcon} alt="News" className={iconSize} />
                <div className="text-center text-[17px] text-white -mt-[7px] pb-[5px]">Newsletter</div>
            </div>
            <div className={lineStyle}></div>
            <div className={circleStyle}>
                <Image src={linkedinIcon} alt="LinkedIn" className={iconSize} />
                <div className="text-center text-[17px] text-white -mt-[7px] pb-[5px]">LinkedIn</div>
            </div>
            <div className={lineStyle}></div>
            <div className={circleStyle}>
                <Image src={facebookIcon} alt="Facebook" className={iconSize} />
                <div className="text-center text-[17px] text-white -mt-[7px] pb-[5px]">Facebook</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
