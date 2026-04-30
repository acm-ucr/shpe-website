import Image from "next/image";
import { eventsData } from "@/components/data/events";

const Events = () => {
  return (
    <div className="bg-shpe-white-100 flex h-max w-auto flex-col items-center">
      <div className="font-shpe-beachwood text-shpe-blue-200 pt-16 pb-6 text-4xl font-semibold">
        TYPES OF EVENTS WE HAVE
      </div>

      <div className="flex flex-row gap-x-10">
        {eventsData.map((item) => (
          <div className="flex flex-col items-center">
            <div className="flex flex-col w-72 items-center">
              <Image
                className={"h-[17rem] w-full rounded-3xl aspect-square object-cover"}
                src={item.Pictures}
                alt={item.Alt}
              />

              <div
                className={`-mt-16 h-14 w-64 rounded-3xl ${item.PictureBg} flex items-center justify-center font-shpe-beachwood text-shpe-white-100 italic text-4xl font-semibold`}
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
    </div>
  );
};

export default Events;
