import Image from "next/image";

interface AlumniCardProps {
  name: string;
  year: string;
  linkedIn: string;
}

const AlumniCard = (props: AlumniCardProps) => {
  return (
      <a
      href={props.linkedIn}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-shpe-blue-200 flex flex-col items-center justify-center rounded-xl px-10 py-4 text-center text-white transition-opacity hover:opacity-90"
    >
      <span className="font-shpe-beachwood scale-y-140 text-lg font-semibold tracking-tight">
        {props.name}
      </span>
      <span className="font-shpe-univers-condensed text-sm font-semibold">
        {props.year}
      </span>
      <div className="mt-2 flex items-center justify-center rounded-md not-[]:p-1">
        <Image
          src="/LinkedIn.svg"
          alt="LinkedIn"
          width={20}
          height={20}
        />
      </div>
    </a>
  );
};

export default AlumniCard;