import Image from "next/image";
import Checklist from "@/public/Checklist.webp";
import Cursor from "@/public/icons/Cursor.webp";
import SBConstruction from "@/public/SBConstruction.webp";
import SBQRCode from "@/public/SBQRCode.webp";
import Gear from "@/public/icons/gear.webp";

const Joining = () => {
  return (
    <div className="bg-shpe-blue-050/50 relative flex flex-col items-center">
      <Image
        className="absolute top-10 left-15 hidden w-30 rotate-12 opacity-70 md:block"
        src={Gear}
        alt=""
      />
      <Image
        className="absolute top-10 right-0 hidden w-50 opacity-70 md:block"
        src={Gear}
        alt=""
      />
      <Image
        className="absolute bottom-8 left-0 hidden w-45 -rotate-90 opacity-70 md:block"
        src={Gear}
        alt=""
      />
      <Image
        className="absolute right-15 bottom-8 hidden w-30 -rotate-90 opacity-70 md:block"
        src={Gear}
        alt=""
      />
      <p className="font-shpe-beachwood text-shpe-blue-200 mt-5 mb-3 hidden scale-y-125 text-5xl font-semibold md:block">
        Interested In Joining?
      </p>
      <p className="font-shpe-beachwood text-shpe-blue-200 mt-5 mb-3 scale-y-125 text-4xl font-semibold md:hidden">
        Interested In Joining?
      </p>
      <div className="hidden w-full md:flex md:items-start md:justify-center md:gap-10">
        <div className="flex flex-col items-center">
          <Image
            src={SBConstruction}
            alt="Construction"
            className="z-10 h-auto w-95 rounded-xl"
          />
          <p className="font-shpe-beachwood text-shpe-blue-200 mt-2 mb-5 w-95 scale-y-125 text-center text-2xl font-medium">
            Join us at our next Solar Boat General Meeting!
          </p>
        </div>
        <div className="ml-10 flex flex-col items-center">
          <Image
            src={SBQRCode}
            alt="QR Code"
            className="z-10 h-auto w-65 rounded-xl"
          />
          <div className="mt-4 flex flex-col items-center">
            <p className="font-shpe-beachwood text-shpe-blue-200 mt-2 w-95 scale-y-125 text-center text-2xl font-medium">
              Fill out the interest form here to get started.
            </p>
            <Image
              src={Cursor}
              alt="Cursor"
              className="-mt-5 -ml-55 h-auto w-25"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center md:hidden">
        <Image
          src={SBConstruction}
          alt="Construction"
          className="z-10 mb-6 h-auto w-4/5"
        />
        <p className="font-shpe-beachwood text-shpe-blue-200 scale-y-125 text-center text-lg font-medium">
          Join us at our next Solar Boat General Meeting!
        </p>
        <Image
          src={Checklist}
          alt="Checklist"
          className="z-10 mb-5 h-auto w-4/5"
        />
        <div className="flex flex-row items-center">
          <Image
            src={Cursor}
            alt="Cursor"
            className="-mr-10 -ml-10 h-auto w-15"
          />
          <p className="font-shpe-beachwood text-shpe-blue-200 mb-10 w-55 scale-y-125 text-center text-lg font-medium">
            Fill out the interest form here to get started.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Joining;
