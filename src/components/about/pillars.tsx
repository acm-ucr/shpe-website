import Popup from "@/components/ui/popup";
import Image from "next/image";
import { PILLARS } from "@/data/pillars";

export default function OurPillars() {
  return (
    <div className="bg-shpe-white-100 relative flex w-full flex-col items-center py-10">
      <h2 className="font-shpe-beachwood mb-10 text-6xl font-bold tracking-widest text-black uppercase">
        Our Pillars
      </h2>

      <div className="flex w-full flex-row flex-wrap justify-center gap-10 px-4">
        {PILLARS.map(({ title, color, image, content }, index) => (
          <Popup
            key={index}
            clickableComponent={
              <div
                className={` ${color} flex w-[360px] flex-none flex-col rounded-[2.5rem] px-6 pt-6 pb-6`}
              >
                <div className="relative mx-auto h-[280px] w-[312px] flex-none overflow-hidden rounded-[1.75rem]">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="312px"
                    priority
                  />
                </div>

                <h3 className="font-shpe-beachwood text-shpe-white-100 flex flex-1 items-center justify-center px-2 pt-4 text-center text-2xl leading-none uppercase">
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
    </div>
  );
}
