import discordIcon from "@/public/discord.webp";
import emailIcon from "@/public/email.webp";
import facebookIcon from "@/public/facebook.webp";
import instagramIcon from "@/public/instagram.webp";
import linkedinIcon from "@/public/linkedIn.webp";
import newsIcon from "@/public/news.webp";
import shpeFooterLogo from "@/public/shpeFooterLogo.webp";

import Image from "next/image";

const Footer = () => {
  return (
    <div className="from-shpe-blue-200 to-shpe-blue-050 fixed bottom-0 left-0 flex w-full items-center justify-between bg-gradient-to-r px-[40px] py-[20px]">
      <Image
        src={shpeFooterLogo}
        alt="FooterLogo"
        className="h-[60px] w-[195px]"
      />

      <div className="flex items-center gap-[15px]">
        <Image
          src={instagramIcon}
          alt="Instagram"
          className="h-[50px] w-[50px]"
        />
        <Image src={newsIcon} alt="News" className="h-[50px] w-[50px]" />
        <Image
          src={linkedinIcon}
          alt="LinkedIn"
          className="h-[50px] w-[50px]"
        />
        <Image src={emailIcon} alt="Email" className="h-[50px] w-[50px]" />
        <Image src={discordIcon} alt="Discord" className="h-[50px] w-[50px]" />
        <Image
          src={facebookIcon}
          alt="Facebook"
          className="h-[50px] w-[50px]"
        />
      </div>
    </div>
  );
};

export default Footer;
