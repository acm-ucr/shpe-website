interface GetInvolvedCardProps {
  title: string;
  text?: string | null;
}

const GetInvolvedPopup = ({ title, text }: GetInvolvedCardProps) => {
  return (
    <div className="bg-shpe-blue-200 relative flex flex-col items-center rounded-2xl px-8 text-center text-white md:w-120">
      <div className="font-shpe-beachwood py-8 text-4xl font-semibold">
        {title}
      </div>
      <p className="font-shpe-univers-condensed pb-8 text-xl">{text}</p>
    </div>
  );
};

export default GetInvolvedPopup;
