import AlumniCard from "@/components/board/alumniCard";
import { alumni } from "@/data/alumniData";
import GradCap from "@/public/icons/Graduation Cap.webp";
import TitleBanner from "@/components/Title";

const AlumniPage = () => {
  return (
    <div className="flex flex-col justify-center">
      <TitleBanner title="ALUMNI" icon={GradCap} />
      <div className="relative grid gap-10 px-10 pt-10 lg:grid-cols-3 lg:px-30">
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
