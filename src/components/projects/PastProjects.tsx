"use client";
import Image from "next/image";
import { pastProjectData } from "@/data/pastProjectsData";
import { motion } from "motion/react";

const PastProjects = () => {
  return (
    <div>
      <h3 className="font-shpe-beachwood text-shpe-blue-200 w-full scale-y-120 p-8 text-center text-2xl font-semibold md:text-5xl">
        Past Solar Boat Projects
      </h3>
      <div className="flex flex-col justify-center gap-5 px-10 pb-8 md:flex-row md:gap-10">
        {pastProjectData.map(({ image, alt, date }, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
            key={index}
            className="flex flex-col items-center"
          >
            <Image
              src={image}
              alt={alt}
              className="aspect-4/3 rounded-2xl bg-gray-400 object-cover"
            />
            <h4 className="font-shpe-univers-condensed w-full text-center font-thin">
              {date}
            </h4>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default PastProjects;
