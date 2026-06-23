"use client";

import { useState } from "react";
import Image from "next/image";
import { eventsData } from "@/data/events";
import NextIcon from "@/public/next_page.svg";
import PrevIcon from "@/public/prev_page.svg";
import { motion } from "motion/react";
import { FadeIn } from "@/animations/Fade";
import { FloatUp } from "@/animations/Float";

const Events = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? eventsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === eventsData.length - 1 ? 0 : prev + 1));
  };

  if (!eventsData || eventsData.length === 0) return null;

  const currentItem = eventsData[currentIndex];
  const viewport = { once: true, amount: 0.3 };
  return (
    <div className="bg-shpe-white-100 flex h-max w-auto flex-col items-center px-4">
      <div className="font-shpe-beachwood text-shpe-blue-200 pt-10 pb-6 text-center text-4xl font-semibold">
        TYPES OF EVENTS WE HAVE
      </div>

      <motion.div
        variants={FloatUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="hidden flex-row flex-wrap justify-center gap-x-10 md:flex"
      >
        {eventsData.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex w-72 flex-col items-center">
              <Image
                className="aspect-square h-[17rem] w-full rounded-[30px] object-cover"
                src={item.Pictures}
                alt={item.Alt}
              />
              <div
                className={`mx-1 -mt-16 h-14 w-69 rounded-[25px] ${item.PictureBg} font-shpe-beachwood text-shpe-white-100 flex items-center justify-center text-4xl font-semibold italic`}
              >
                {item.PictureTag}
              </div>
            </div>
            <div className="font-shpe-univers-condensed w-80 px-5 py-7 text-center text-base leading-tight font-light">
              {item.Description}
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div
        variants={FloatUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="flex flex-col items-center md:hidden"
      >
        <div className="relative flex w-72 flex-col items-center">
          <button
            onClick={handlePrev}
            className="absolute top-[8.5rem] -left-12 z-10 -translate-y-1/2 focus:outline-none"
            aria-label="Previous event"
          >
            <Image src={PrevIcon} alt="Previous" width={40} height={40} />
          </button>
          <motion.div
            variants={FadeIn}
            key={currentIndex}
            initial="hidden"
            animate="visible"
            className="relative aspect-square h-[17rem] w-full"
          >
            <Image
              className="aspect-square h-[17rem] rounded-[30px] object-cover"
              src={currentItem.Pictures}
              alt={currentItem.Alt}
            />
            <div
              className={`relative mx-auto -mt-16 h-14 w-69 rounded-[25px] ${currentItem.PictureBg} font-shpe-beachwood text-shpe-white-100 z-10 flex items-center justify-center text-4xl font-semibold italic`}
            >
              {currentItem.PictureTag}
            </div>
          </motion.div>
          <button
            onClick={handleNext}
            className="absolute top-[8.5rem] -right-12 z-10 -translate-y-1/2 focus:outline-none"
            aria-label="Next event"
          >
            <Image src={NextIcon} alt="Next" width={40} height={40} />
          </button>
        </div>

        <motion.div
          variants={FadeIn}
          initial="hidden"
          animate="visible"
          key={currentIndex}
          className="font-shpe-univers-condensed w-80 px-5 py-7 text-center text-base leading-tight font-light"
        >
          {currentItem.Description}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Events;
