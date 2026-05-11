import AlumniCard from "@/components/board/alumniCard";
import { alumni } from "@/data/alumniData";
import GradCap from "@/public/banners/icons/Graduation Cap.webp";
import Decor from "@/public/banners/SolarBoat-Alumni.webp";
import TitleBanner from "@/components/Title";

const AlumniPage = () => {
  return (
    <div className="flex flex-col items-center px-20 py-10">
      <h2 className="font-shpe-beachwood text-shpe-blue-200 mb-8 scale-y-140 text-3xl font-semibold tracking-tight uppercase">
        Our Alumni
      </h2>
      <div className="grid grid-cols-3 gap-6">
        {alumni.map(({ name, year, linkedIn }) => (
          <AlumniCard
            key={linkedIn}
            name={name}
            year={year}
            linkedIn={linkedIn}
          />
        ))}
      </div>
    </div>
  );
};

export default AlumniPage;
