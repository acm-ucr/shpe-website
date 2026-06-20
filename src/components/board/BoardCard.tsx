"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";
import { FloatUp } from "@/animations/Float";

interface BoardCardProps {
  name: string;
  image: StaticImageData | string;
  position: string;
  linkedin: string;
}

const BoardCard = ({ name, image, position, linkedin }: BoardCardProps) => {
  return (
    <motion.div
      variants={FloatUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className="bg-shpe-blue-200 text-shpe-white-100 flex w-full max-w-65 flex-col items-center rounded-4xl p-4 pb-3 text-center"
    >
      <div className="bg-shpe-white-100 relative mb-2 aspect-[5/6] w-full overflow-hidden rounded-3xl">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      <div className="font-shpe-univers-condensed text-2xl">{name}</div>
      <div className="font-shpe-univers-condensed text-lg">{position}</div>

      <a href={linkedin} target="_blank" rel="noreferrer">
        <Image src="/LinkedIn.svg" alt="LinkedIn" width={48} height={48} />
      </a>
    </motion.div>
  );
};

export default BoardCard;
