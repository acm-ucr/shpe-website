import AlumniCard from "@/components/board/alumni";
import { alumni } from "@/components/data/alumni";

const AlumniPage = () => {
  return (
    <div className="flex flex-col items-center px-20 py-10">
      <h2 className="font-shpe-beachwood text-shpe-blue-200 mb-8 scale-y-140 text-3xl font-semibold tracking-tight uppercase">
        Our Alumni
      </h2>
      <div className="grid grid-cols-3 gap-6">
        {alumni.map((alum) => (
          <AlumniCard
            key={alum.linkedIn}
            name={alum.name}
            year={alum.year}
            linkedIn={alum.linkedIn}
          />
        ))}
      </div>
    </div>
  );
};

export default AlumniPage;
