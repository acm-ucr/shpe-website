"use client";
import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import RecentEventCard, {
  CardInfo,
} from "@/components/landing/RecentEvents/recentEventCard";
import PreviousPageIcon from "@/public/prev_page.svg";
import NextPageIcon from "@/public/next_page.svg";
import { FloatUp } from "@/animations/Float";
import { FadeIn } from "@/animations/Fade";

interface EventsList {
  title: string;
  eventsData: CardInfo[];
}

const EventsList = ({ title, eventsData }: EventsList) => {
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
    <div className="bg-shpe-blue-050 w-full py-8">
      <h2 className="font-shpe-beachwood text-shpe-blue-200 w-full scale-y-120 pb-8 text-center text-5xl font-semibold tracking-tight uppercase">
        {title}
      </h2>
      <motion.div
        variants={FloatUp}
        initial="hidden"
        whileInView="visible"
        className="mx-10 hidden grid-cols-3 gap-10 pb-5 md:grid"
      >
        {eventsData.map(({ image, alt, info }, index) => (
          <RecentEventCard image={image} alt={alt} info={info} key={index} />
        ))}
      </motion.div>
      <motion.div
        variants={FloatUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="flex flex-row justify-center md:hidden"
      >
        <button onClick={handlePrev} className="w-fit p-3">
          <Image className="w-40" src={PreviousPageIcon} alt="Previous" />
        </button>
        <motion.div
          variants={FadeIn}
          key={currentIndex}
          initial="hidden"
          animate="visible"
        >
          <RecentEventCard
            image={currentItem.image}
            alt={currentItem.alt}
            info={currentItem.info}
          />
        </motion.div>
        <button onClick={handleNext} className="w-fit p-3">
          <Image className="w-40" src={NextPageIcon} alt="Next" />
        </button>
      </motion.div>
    </div>
  );
};

export default EventsList;
