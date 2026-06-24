import Image from "next/image";
import Popup from "@/components/ui/popup";
import GetInvolvedCard from "@/components/about/get-involved/getInvolvedCard";
import GetInvolvedPopup from "@/components/about/get-involved/getInvolvedPopup";
import GetInvolvedData from "@/data/getInvovled";
import MagnifyingGlass from "@/public/about/magnifying glass.webp";

const GetInvolved = () => {
  return (
    <div className="bg-shpe-blue-050/50 relative flex flex-col items-center gap-8 py-16">
      <Image
        src={MagnifyingGlass}
        alt="magnifying glass"
        className="absolute top-0 left-0 w-30"
      />
      <div className="font-shpe-beachwood relative z-10 text-center text-5xl font-semibold text-black">
        HOW TO GET INVOLVED
      </div>
      <div className="relative z-10 flex w-3/5 flex-col gap-8 md:grid md:grid-cols-2">
        {GetInvolvedData.map(({ image, logo, title, text }, index) => (
          <div key={index} className="relative">
            <Popup
              clickableComponent={
                <GetInvolvedCard image={image} logo={logo} title={title} />
              }
              popupComponent={<GetInvolvedPopup title={title} text={text} />}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetInvolved;
