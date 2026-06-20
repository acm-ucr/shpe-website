"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";
import { FloatRight, FloatUp } from "@/animations/Float";

interface WhoWeAreProps {
  title?: string;
  text: string;
  image: StaticImageData;
  alt: string;
}

const InfoSection = ({ title, text, image, alt }: WhoWeAreProps) => {
  const viewport = { once: true };
  return (
    <div className="flex w-full flex-col items-stretch justify-between gap-8 overflow-hidden md:flex-row md:gap-4">
      <motion.div
        variants={FloatRight}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="flex min-h-0 min-w-0 flex-1 items-center justify-center"
      >
        <Image src={image} alt={alt} className="h-full w-full object-cover" />
      </motion.div>

      <div className="flex flex-1 flex-col items-center justify-center p-10 md:p-8">
        {title && (
          <h1 className="font-shpe-beachwood text-shpe-blue-200 scale-y-140 pb-8 text-center text-5xl font-semibold tracking-tight uppercase">
            {title}
          </h1>
        )}
        <motion.p
          variants={FloatUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="font-shpe-univers-condensed text-center text-xl leading-7 whitespace-pre-line"
        >
          {text}
        </motion.p>
      </div>
    </div>
  );
};

export default InfoSection;
