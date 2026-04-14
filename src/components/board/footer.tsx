import discordIcon from "@/public/discord.webp";
import emailIcon from "@/public/email.webp";
import facebookIcon from "@/public/facebook.webp";
import instagramIcon from "@/public/instagram.webp";
import linkedinIcon from "@/public/linkedIn.webp";
import newsIcon from "@/public/news.webp";
import shpeFooterLogo from "@/public/shpeFooterLogo.webp";

import Image from "next/image";

const Footer = () => {
    return(
        <div className="fixed bottom-0 left-0 w-full flex items-center justify-between px-[40px] py-[20px] bg-gradient-to-r from-shpe-blue-200 to-shpe-blue-050">
            <Image src={shpeFooterLogo} alt="FooterLogo" className="w-[195px] h-[60px]"/>

            <div className="flex items-center gap-[15px]">
                <Image src={instagramIcon} alt="Instagram" className="w-[50px] h-[50px]"/>
                <Image src={newsIcon} alt="News" className="w-[50px] h-[50px]"/>
                <Image src={linkedinIcon} alt="LinkedIn" className="w-[50px] h-[50px]"/>
                <Image src={emailIcon} alt="Email" className="w-[50px] h-[50px]"/>
                <Image src={discordIcon} alt="Discord" className="w-[50px] h-[50px]"/>
                <Image src={facebookIcon} alt="Facebook" className="w-[50px] h-[50px]"/>
            </div>
        </div>
    );
};

export default Footer;