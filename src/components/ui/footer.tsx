"use client";
import discordIcon from "@/public/footer/discord.webp";
import emailIcon from "@/public/footer/email.webp";
import facebookIcon from "@/public/footer/facebook.webp";
import instagramIcon from "@/public/footer/instagram.webp";
import linkedinIcon from "@/public/footer/linkedIn.webp";
import newsIcon from "@/public/footer/news.webp";
import shpeFooterLogo from "@/public/footer/shpeFooterLogo.svg";
import SocialLinks from "@/data/socialData";
import Image from "next/image";
import Link from "next/link";

const iconSize = "h-[50px] w-[50px]";

const Footer = () => {
  return (
    <div className="from-shpe-blue-200 to-shpe-blue-150 flex w-full flex-col items-center justify-center bg-gradient-to-r px-[20px] py-[15px] md:flex-row md:justify-between md:px-[40px] md:py-[20px]">
      <Image
        src={shpeFooterLogo}
        alt="FooterLogo"
        className="h-[60px] w-[195px]"
      />

      <div className="flex w-full justify-around md:w-auto md:justify-end md:gap-[15px]">
        <Link href={SocialLinks.instagram}>
          <Image src={instagramIcon} alt="Instagram" className={iconSize} />
        </Link>
        <Link href={SocialLinks.newsletter}>
          <Image src={newsIcon} alt="News" className={iconSize} />
        </Link>
        <Link href={SocialLinks.linkedin}>
          <Image src={linkedinIcon} alt="LinkedIn" className={iconSize} />
        </Link>
        <Link href={SocialLinks.email}>
          <Image src={emailIcon} alt="Email" className={iconSize} />
        </Link>
        <Link href={SocialLinks.discord}>
          <Image src={discordIcon} alt="Discord" className={iconSize} />
        </Link>
        <Link href={SocialLinks.facebook}>
          <Image src={facebookIcon} alt="Facebook" className={iconSize} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
