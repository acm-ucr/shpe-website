"use client";

import { useState } from "react";
import Image from "next/image";
import { eventsData } from "@/data/events";

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

  return (
    <div className="bg-shpe-white-100 flex h-max w-auto flex-col items-center px-4">
      <div className="font-shpe-beachwood text-shpe-blue-200 pt-16 pb-6 text-center text-4xl font-semibold">
        TYPES OF EVENTS WE HAVE
      </div>

      <div className="hidden flex-row flex-wrap justify-center gap-x-10 md:flex">
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
            <div className="font-shpe-univers-condensed w-80 px-5 pt-7 text-center text-base leading-tight font-light">
              {item.Description}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center md:hidden">
        <div className="relative flex w-72 flex-col items-center">
          <button
            onClick={handlePrev}
            className="absolute top-[8.5rem] -left-12 z-10 -translate-y-1/2 focus:outline-none"
            aria-label="Previous event"
          >
            <Image src="/prev_page.svg" alt="Previous" width={40} height={40} />
          </button>

          <Image
            className="aspect-square h-[17rem] w-full rounded-[30px] object-cover"
            src={currentItem.Pictures}
            alt={currentItem.Alt}
          />

          <button
            onClick={handleNext}
            className="absolute top-[8.5rem] -right-12 z-10 -translate-y-1/2 focus:outline-none"
            aria-label="Next event"
          >
            <Image src="/next_page.svg" alt="Next" width={40} height={40} />
          </button>

          <div
            className={`mx-1 -mt-16 h-14 w-69 rounded-[25px] ${currentItem.PictureBg} font-shpe-beachwood text-shpe-white-100 flex items-center justify-center text-4xl font-semibold italic`}
          >
            {currentItem.PictureTag}
          </div>
        </div>

        <div className="font-shpe-univers-condensed w-80 px-5 pt-7 text-center text-base leading-tight font-light">
          {currentItem.Description}
        </div>
      </div>
    </div>
  );
};

export default Events;
