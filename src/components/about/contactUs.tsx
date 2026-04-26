import discordIcon from "@/public/footer/discord.webp";
import emailIcon from "@/public/email2.webp";
import facebookIcon from "@/public/footer/facebook.webp";
import instagramIcon from "@/public/footer/instagram.webp";
import linkedinIcon from "@/public/footer/linkedIn.webp";
import newsIcon from "@/public/footer/news.webp";
import gearImage from "@/public/gear.webp";

import Image from "next/image";
import { StaticImageData } from "next/image";

// made these into variables for easier changes if needed/wanted
const iconSize = "md:h-[88px] md:w-[88px] h-[51px] w-[51px]";
const circleStyle =
  "flex flex-col items-center justify-center bg-shpe-orange-500 rounded-full w-[82px] h-[82px] md:h-[140px] md:w-[140px]";
const lineStyle = "h-[3px] w-[45px] bg-shpe-orange-500 mx-[20px] md:w-[82px]";
const subHeaderStyle =
  "font-shpe-univers-condensed text-shpe-blue-200 text-center text-3xl";
const margins = "flex flex-col items-center gap-[20px] mt-[40px]";

// reusable components
type ContactCircleProps = {
  icon: StaticImageData;
  alt: string;
  label: string;
  textSize?: string;
  tweak?: string;
};
const ContactCircle = ({
  icon,
  alt,
  label,
  textSize = "md:text-[17px] text-[10px]",
  tweak = "-md:mt-[5px] pb-[5px]",
}: ContactCircleProps) => (
  <div className={circleStyle}>
    <Image src={icon} alt={alt} className={`${iconSize}`} />
    <div className={`text-center ${textSize} leading-none text-white ${tweak}`}>
      {label}
    </div>
  </div>
);

const Divider = () => <div className={lineStyle} />;

// data for reusable components
const contactQuestions = [
  {
    icon: instagramIcon,
    alt: "Instagram",
    label: "@shpeucr",
    textSize: "md:text-[15px] text-[8px]",
    tweak: "md:-mt-[5px] pb-[10px] -mt-[2px]",
  },
  {
    icon: emailIcon,
    alt: "Email",
    label: "shpeucr@gmail.com",
    textSize: "md:text-[12px] text-[7px]",
    tweak: "md:-mt-[15px] pb-[12px] -mt-[7px]",
  },
];

const socialLinks = [
  { icon: discordIcon, alt: "Discord", label: "Discord" },
  { icon: newsIcon, alt: "Newsletter", label: "Newsletter" },
  { icon: linkedinIcon, alt: "LinkedIn", label: "LinkedIn" },
  { icon: facebookIcon, alt: "Facebook", label: "Facebook" },
];

const ContactUs = () => {
  return (
    <div className="bg-shpe-white-100 relative overflow-hidden pt-[40px] md:pb-[240px]">
      {/* Gears */}
      <Image
        src={gearImage}
        alt="gear"
        className="absolute top-[50px] left-[-100px] hidden w-[300px] scale-x-[-1] opacity-70 lg:block"
      />
      <Image
        src={gearImage}
        alt="gear"
        className="absolute top-[50px] right-[-100px] hidden w-[300px] opacity-70 lg:block"
      />
      {/* Title */}
      <div className="font-shpe-beachwood text-center text-6xl font-semibold">
        CONTACT US
      </div>
      {/* Content */}
      <div className={margins}>
        <div className={subHeaderStyle}>Have Questions?</div>
        <div className="mt-[25px] flex items-center justify-center">
          {contactQuestions.map((item, i) => (
            <div key={i} className="flex items-center justify-center">
              <ContactCircle {...item} />
              {i !== contactQuestions.length - 1 && <Divider />}
            </div>
          ))}
        </div>
      </div>
      <div className={margins}>
        <div className={subHeaderStyle}>Connect With Us!</div>
        <div className="mt-[25px] flex flex-col items-center gap-[20px] md:flex-row">
          {/* row 1 */}
          <div className="flex items-center justify-center pb-[25px] md:pb-[0px]">
            <ContactCircle {...socialLinks[0]} />
            <Divider />
            <ContactCircle {...socialLinks[1]} />
          </div>
          <div className="justify-ceter -mx-[20px] hidden items-center md:block">
            <Divider />
          </div>
          {/* row 2 */}
          <div className="flex items-center justify-center">
            <ContactCircle {...socialLinks[2]} />
            <Divider />
            <ContactCircle {...socialLinks[3]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
