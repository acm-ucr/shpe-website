"use client";
import { useState } from "react";
import Image from "next/image";
import RecentEventsData from "@/data/recentEventsData";
import RecentEventCard from "@/components/landing/RecentEvents/recentEventCard";
import PreviousPageIcon from "@/public/prev_page.svg";
import NextPageIcon from "@/public/next_page.svg";

const RecentEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? RecentEventsData.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === RecentEventsData.length - 1 ? 0 : prev + 1,
    );
  };

  if (!RecentEventsData || RecentEventsData.length === 0) return null;

  const currentItem = RecentEventsData[currentIndex];
  return (
    <div className="bg-shpe-blue-050 w-screen py-8">
      <h2 className="font-shpe-beachwood text-shpe-blue-200 w-full scale-y-120 pb-8 text-center text-5xl font-semibold tracking-tight uppercase">
        Recent Events
      </h2>
      <div className="mx-10 hidden grid-cols-3 gap-10 pb-5 md:grid">
        {RecentEventsData.map(({ image, alt, info }, index) => (
          <RecentEventCard image={image} alt={alt} info={info} key={index} />
        ))}
      </div>
      <div className="flex flex-row justify-center md:hidden">
        <button onClick={handlePrev} className="w-fit p-3">
          <Image className="w-40" src={PreviousPageIcon} alt="Previous" />
        </button>
        <RecentEventCard image={currentItem.image} alt={currentItem.alt} />
        <button onClick={handleNext} className="w-fit p-3">
          <Image className="w-40" src={NextPageIcon} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default RecentEvents;
