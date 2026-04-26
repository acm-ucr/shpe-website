const CreateWhoWeAre = (props: { title: string; text: string }) => {
  return (
    <div className="flex w-full items-start justify-between py-20">
      <div className="flex w-1/2 justify-start">
        <img
          src="/WhoWeAre.webp"
          alt="Who We Are"
          className="h-auto max-w-full shadow-lg"
        />
      </div>
      <div className="w-1/2 px-16">
        <h1 className="font-shpe-beachwood text-shpe-blue-200 mt-15 mb-9 scale-y-140 text-center text-5xl font-semibold tracking-tight uppercase">
          {props.title}
        </h1>
        <p className="px-10 text-center text-xl leading-8">{props.text}</p>
      </div>
    </div>
  );
};
export default CreateWhoWeAre;
