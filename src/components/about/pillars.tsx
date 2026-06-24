import Popup from "@/components/ui/popup";
import Image from "next/image";
import { PILLARS } from "@/data/pillars";
import gearIcon from "@/public/icons/gear.webp";
import wrenchIcon from "@/public/icons/wrench.webp";

export default function OurPillars() {
  return (
    <div className="bg-shpe-white-100 relative flex w-full flex-col items-center py-10 md:pb-30">
      <h2 className="font-shpe-beachwood mb-10 text-center text-6xl font-bold tracking-widest text-black uppercase">
        Our Pillars
      </h2>

      <div className="relative z-10 flex w-full flex-row flex-wrap justify-center gap-10 px-4">
        {PILLARS.map(({ title, color, image, content }, index) => (
          <Popup
            key={index}
            clickableComponent={
              <div
                className={` ${color} flex w-50 flex-none flex-col rounded-[2.5rem] px-6 pt-6 pb-6 md:w-100`}
              >
                <div className="relative mx-auto w-full flex-none overflow-hidden rounded-[1.75rem]">
                  <Image
                    src={image}
                    alt={title}
                    className="aspect-square w-full object-cover"
                    priority
                  />
                </div>

                <h3 className="font-shpe-beachwood text-shpe-white-100 flex items-center justify-center px-2 pt-4 text-center text-2xl leading-none text-wrap uppercase">
                  {title}
                </h3>
              </div>
            }
            popupComponent={
              <div
                className={`${color} text-shpe-white-100 max-w-5xl rounded-3xl p-10`}
              >
                <div className="font-shpe-univers text-lg">{content}</div>
              </div>
            }
            overlayColor="bg-shpe-blue-200/40"
          />
        ))}
      </div>
      <Image
        src={gearIcon}
        alt="gear icon"
        className="absolute top-5 left-3 hidden w-50 -rotate-6 md:block"
      />
      <Image
        src={gearIcon}
        alt="gear icon"
        className="absolute right-3 bottom-5 hidden w-45 -rotate-6 md:block"
      />
      <Image
        src={wrenchIcon}
        alt="wrench icon"
        className="absolute top-5 right-3 hidden w-45 rotate-89 md:block"
      />
    </div>
  );
}
