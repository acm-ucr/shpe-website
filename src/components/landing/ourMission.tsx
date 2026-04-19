const OurMission = (props: { title: string; text: string }) => {
  return (
    <div className="bg-shpe-orange-500/50 flex w-full flex-col items-center px-20 py-7 text-center">
      <h2 className="font-shpe-beachwood text-shpe-blue-200 mb-2 scale-y-140 text-3xl font-semibold tracking-tight uppercase">
        {props.title}
      </h2>
      <p className="font-shpe-univers-condensed max-w-4xl text-sm leading-4 font-semibold">
        {props.text}
      </p>
    </div>
  );
};

export default OurMission;
