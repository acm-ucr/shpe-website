import discordIcon from "@/public/footer/discord.webp";
import emailIcon from "@/public/footer/email.webp";
import facebookIcon from "@/public/footer/facebook.webp";
import instagramIcon from "@/public/footer/instagram.webp";
import linkedinIcon from "@/public/footer/linkedIn.webp";
import newsIcon from "@/public/footer/news.webp";
import shpeFooterLogo from "@/public/footer/shpeFooterLogo.svg";

import Image from "next/image";

const iconSize = "h-[50px] w-[50px]";

const Footer = () => {
  return (
    <div className="from-shpe-blue-200 to-shpe-blue-150 mt-5 flex w-full flex-col items-center justify-center bg-gradient-to-r px-[20px] py-[15px] md:flex-row md:justify-between md:px-[40px] md:py-[20px]">
      <Image
        src={shpeFooterLogo}
        alt="FooterLogo"
        className="h-[60px] w-[195px]"
      />

      <div className="flex w-full justify-around md:w-auto md:justify-end md:gap-[15px]">
        <Image src={instagramIcon} alt="Instagram" className={iconSize} />
        <Image src={newsIcon} alt="News" className={iconSize} />
        <Image src={linkedinIcon} alt="LinkedIn" className={iconSize} />
        <Image src={emailIcon} alt="Email" className={iconSize} />
        <Image src={discordIcon} alt="Discord" className={iconSize} />
        <Image src={facebookIcon} alt="Facebook" className={iconSize} />
      </div>
    </div>
  );
};

export default Footer;
