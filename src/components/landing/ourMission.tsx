"use client";
import { motion } from "motion/react";
import { FloatUp } from "@/animations/Float";
interface OurMissionProps {
  title: string;
  text: string;
}

const OurMission = (props: OurMissionProps) => {
  return (
    <div className="bg-shpe-orange-500/50 flex w-full flex-col items-center px-20 py-7 text-center">
      <h2 className="font-shpe-beachwood text-shpe-blue-200 mb-2 scale-y-140 text-3xl font-semibold tracking-tight uppercase">
        {props.title}
      </h2>
      <motion.p
        variants={FloatUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="font-shpe-univers-condensed max-w-4xl text-sm leading-4 font-semibold"
      >
        {props.text}
      </motion.p>
    </div>
  );
};

export default OurMission;
