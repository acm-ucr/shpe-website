import discordIcon from "@/public/footer/discord.webp";
import emailIcon from "@/public/footer/email.webp";
import facebookIcon from "@/public/footer/facebook.webp";
import instagramIcon from "@/public/footer/instagram.webp";
import linkedinIcon from "@/public/footer/linkedIn.webp";
import newsIcon from "@/public/footer/news.webp";

import Image from "next/image";

const iconSize = "h-[88px] w-[88px]";
const circleStyle = "flex flex-col items-center justify-center bg-shpe-orange-500 rounded-full h-[140px] w-[140px]";
const lineStyle = "h-[3px] w-[82px] bg-shpe-orange-500";

const ContactUs = () => {
  return (
    <div className="bg-shpe-blue-050">
      <div className="font-shpe-beachwood text-center text-6xl font-semibold">
        CONTACT US
      </div>
      <div className="font-shpe-univers text-shpe-blue-200 text-center text-3xl">
        Have Questions?
      </div>
      <div className= "flex items-center justify-center">
        <div className= {circleStyle}>
            <Image src={instagramIcon} alt="Instagram" className={iconSize} />
            <div className= "text-[15px] text-white text-center">
                @shpeucr
            </div>            
        </div>
        <div className={lineStyle}></div>
        <div className= {circleStyle}>
            <Image src={emailIcon} alt="Email" className={iconSize} />
            <div className = "text-white text-center text-[12px]">
                shpeucr@gmail.com
            </div>
        </div>
      </div>
      <div className="font-shpe-univers text-shpe-blue-200 text-center text-3xl">
        Connect With Us!
      </div>
      <div className= "flex items-center justify-center">
        <div className={circleStyle}>
            <Image src={discordIcon} alt="Discord" className={iconSize} />
            <div className="text-white text-center text-[17px]">
                Discord
            </div>
        </div>
        <div className={lineStyle}></div>
        <div className={circleStyle}>
            <Image src={newsIcon} alt="News" className={iconSize} />
            <div className="text-white text-center text-[17px]">
                Newsletter
            </div>
        </div>
        <div className={lineStyle}></div>
        <div className={circleStyle}>
            <Image src={linkedinIcon} alt="LinkedIn" className={iconSize} />
            <div className="text-white text-center text-[17px]">
                LinkedIn
            </div>
        </div>
        <div className={lineStyle}></div>
        <div className={circleStyle}>
            <Image src={facebookIcon} alt="Facebook" className={iconSize} />
            <div className="text-white text-center text-[17px]">
                Facebook
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
