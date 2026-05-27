import Image from "next/image";
import Popup from "@/components/ui/popup";
import GetInvolvedCard from "./getInvolvedCard";
import GetInvolvedData from "@/data/getInvovled";
import MagnifyingGlass from "@/public/about/magnifying glass.webp";

const GetInvolved = () => {
  return (
    <div className="bg-shpe-blue-050/50 flex flex-col items-center gap-8 py-16">
      <Image
        src={MagnifyingGlass}
        alt="magnifying glass"
        className="absolute top-48 left-64 z-10 w-1/12"
      />
      <div className="font-shpe-beachwood text-5xl font-semibold text-black">
        HOW TO GET INVOLVED
      </div>
      <div className="grid w-3/5 grid-cols-2 gap-8">
        {GetInvolvedData.map(({ image, logo, title, text }, index) => (
          <div key={index} className="relative">
            <Popup
              clickableComponent={
                <GetInvolvedCard image={image} logo={logo} title={title} />
              }
              popupComponent={
                <GetInvolvedCard image={image} title={title} text={text} />
              }
              position="fixed w-1/3 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetInvolved;
