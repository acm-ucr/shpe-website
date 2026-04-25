import Image from "next/image";
import { eventsData } from "@/components/data/events";

const Events = () => {
  return (
    <div className="bg-shpe-white-100 flex h-screen w-auto flex-col items-center">
      <div className="font-shpe-beachwood text-shpe-blue-200 pt-10 pb-6 text-4xl font-semibold">
        {" "}
        TYPES OF EVENTS WE HAVE{" "}
      </div>

      <div className="flex flex-row">
        {eventsData.map((item) => (
          <div className="flex flex-col items-center">
            <div className="relative px-10">
              <Image
                className={`${"h-[17rem] w-72 rounded-3xl"}`}
                src={item.Pictures}
                alt={item.Alt}
              />

              <div
                className={`absolute mx-4 -my-16 h-14 w-64 rounded-3xl ${item.PictureBg} flex items-center justify-center`}
              >
                <div className="font-shpe-beachwood text-shpe-white-100 -my-12 -skew-x-12 text-4xl font-semibold">
                  {" "}
                  {item.PictureTag}{" "}
                </div>
              </div>
            </div>
            <div className="font-shpe-univers-condensed w-80 px-5 pt-3.5 text-center text-base leading-tight font-light">
              {" "}
              {item.Description}{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
