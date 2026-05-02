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
      <span className="font-shpe-beachwood scale-y-140 text-lg font-semibold tracking-tight uppercase">
        {props.name}
      </span>
      <span className="font-shpe-univers-condensed text-sm font-semibold">
        {props.year}
      </span>
      <div className="mt-2 flex items-center justify-center rounded-md bg-white/20 p-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="h-5 w-5"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.061-1.865-3.061-1.867 0-2.154 1.459-2.154 2.967v5.698h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.002 3.604 4.604v5.592z" />
        </svg>
      </div>
    </a>
  );
};

export default AlumniCard;
