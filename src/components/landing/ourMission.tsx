"use client";
import { motion } from "motion/react";
import { FloatUp } from "@/animations/Float";
interface OurMissionProps {
  title: string;
  text: string;
}

const OurMission = (props: OurMissionProps) => {
  return (
    <div className="bg-shpe-orange-500/50 flex w-full flex-col items-center py-7 text-center">
      <h2 className="font-shpe-beachwood text-shpe-blue-200 mb-2 scale-y-120 text-3xl font-semibold tracking-tight uppercase">
        {props.title}
      </h2>
      <motion.p
        variants={FloatUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="font-shpe-univers-condensed px-10 text-xl md:max-w-7/10"
      >
        {props.text}
      </motion.p>
    </div>
  );
};

export default OurMission;
