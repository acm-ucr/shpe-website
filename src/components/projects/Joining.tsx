import Image from "next/image";
import Checklist from "@/public/Checklist.webp";
import Cursor from "@/public/Cursor.webp";
import SBConstruction from "@/public/SBConstruction.webp";
import SBQRCode from "@/public/SBQRCode.webp";

const Joining = () => {
  return (
    <div className="flex flex-col items-center bg-[#72A9BE80]">
      <p className="mt-5 mb-3 text-5xl font-semibold scale-y-125 font-shpe-beachwood text-blue-950">
        Interested In Joining?
      </p>
      <div className="hidden w-full md:flex md:items-start md:justify-center md:gap-10">
        <div className="flex flex-col items-center">
          <Image
            src={SBConstruction}
            alt="Construction"
            className="z-10 h-auto w-96"
          />
          <p className="mt-2 text-2xl font-medium scale-y-125 text-center font-shpe-beachwood text-blue-950">
            Join us at our next Solar Boat General Meeting!
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={SBQRCode}
            alt="QR Code"
            className="z-10 h-auto w-64"
          />
          <div className="mt-4 flex flex-col items-center">
            <p className="mt-2 text-2xl font-medium scale-y-125 text-center font-shpe-beachwood text-blue-950">
              Fill out the interest form here to get started.
            </p>
            <Image
              src={Cursor}
              alt="Cursor"
              className="h-auto w-12"
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
        <p className="text-center text-lg font-medium scale-y-125 font-shpe-beachwood text-blue-950">
          Join us at our next Solar Boat General Meeting!
        </p>
        <Image
          src={Checklist}
          alt="Checklist"
          className="z-10 mb-5 h-auto w-4/5"
        />
        <div></div>
        <p className="text-center text-lg font-medium scale-y-125 font-shpe-beachwood text-blue-950">
          Fill out the interest form here to get started.
        </p>
      </div>
    </div>
  );
};

export default Joining;