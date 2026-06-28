"use client";
import gearImage from "@/public/icons/gear.webp";
import wrenchImage from "@/public/icons/wrench.webp";
import downArrow from "@/public/AboutUsLandingDownArrow.webp";
import groupPic from "@/public/AboutUsLandingGroupPic.webp";
import { motion } from "motion/react";
import { RotateClockwise, RotateCounterClockwise } from "@/animations/Rotate";
import { FloatUp } from "@/animations/Float";

import Image from "next/image";

const viewport = { once: true, amount: 0.3 };

const Landing = () => {
  return (
    <div className="relative -mt-35">
      {/* DESKTOP */}
      <section className="from-shpe-blue-200 to-shpe-blue-150 relative hidden overflow-hidden bg-gradient-to-b lg:flex lg:min-h-[570px] lg:flex-col lg:items-center lg:justify-center">
        <motion.div
          variants={RotateClockwise}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="absolute top-2 left-10"
        >
          <Image
            src={gearImage}
            alt="gear"
            className="w-[300px] scale-x-[-1]"
          />
        </motion.div>
        <motion.div
          variants={RotateCounterClockwise}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="absolute right-10 bottom-10"
        >
          <Image src={gearImage} alt="gear" className="w-[300px]" />
        </motion.div>
        <motion.div
          className="absolute top-32 right-105"
          variants={FloatUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <Image
            src={wrenchImage}
            alt="wrench"
            className="w-[167px] rotate-[265deg]"
          />
        </motion.div>

        <div className="z-10 flex flex-col items-center pt-50 text-center">
          <h1 className="font-shpe-beachwood text-shpe-white-100 scale-y-125 text-[70px] leading-[70px] font-bold">
            ABOUT US
          </h1>
          <p className="font-shpe-univers-condensed text-shpe-white-100 mt-8 max-w-2xl text-[30px] leading-[35px]">
            Scroll down to learn more about SHPE and what we offer!
          </p>
          <Image src={downArrow} alt="down arrow" className="mt-6 w-[90px]" />
        </div>
      </section>

      {/* MOBILE */}
      <section className="from-shpe-blue-200 to-shpe-blue-150 relative -mt-40 overflow-hidden bg-gradient-to-b px-4 py-10 pt-10 lg:hidden">
        <Image
          src={gearImage}
          alt="gear"
          className="absolute bottom-12 left-[-30px] w-[150px] rotate-6"
        />
        <Image
          src={wrenchImage}
          alt="wrench"
          className="absolute top-12 right-[-40px] w-[200px] rotate-[265deg]"
        />
        <div className="relative z-10 flex flex-col items-center pt-25 text-center">
          <h1 className="font-shpe-beachwood text-shpe-white-100 scale-y-125 text-[50px] font-bold">
            ABOUT US
          </h1>
          <p className="font-shpe-univers-condensed text-shpe-white-100 mt-6 text-[22px] leading-[30px]">
            Scroll down to learn more about SHPE and what we offer!
          </p>
          <Image src={downArrow} alt="down arrow" className="mt-4 w-[30px]" />
        </div>
      </section>

      {/* GROUP IMAGE SECTION */}
      <motion.div
        variants={FloatUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="relative my-10 py-10 md:flex md:justify-center md:px-4"
      >
        <Image
          src={gearImage}
          alt="gear"
          className="absolute top-0 left-1/20 hidden w-[200px] rotate-6 opacity-70 md:block"
        />
        <Image
          src={gearImage}
          alt="gear"
          className="absolute right-1/20 bottom-0 hidden w-[200px] scale-x-[-1] -rotate-10 opacity-70 md:block"
        />
        <Image
          src={groupPic}
          alt="group picture"
          className="relative aspect-[1094/527] object-cover md:max-w-8/10 md:rounded-3xl"
        />
      </motion.div>
    </div>
  );
};

export default Landing;
