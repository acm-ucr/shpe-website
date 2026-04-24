const CreateWhoWeAre = (props: { title: string; text: string}) => {
  return (
    <div className="flex items-start justify-between w-full py-20">
        <div className="w-1/2 flex justify-start">
            <img
            src="/WhoWeAre.jpg"
            alt="Who We Are"
            className="shadow-lg max-w-full h-auto"
            />
        </div>
        <div className="w-1/2 px-16">
            <h1 className="font-shpe-beachwood text-shpe-blue-200 text-center mb-9 mt-15 scale-y-140 text-5xl font-semibold tracking-tight uppercase">{props.title}</h1>
            <p className="text-xl leading-8 text-center px-10">{props.text}</p>
        </div>
    </div>
  );
};
export default CreateWhoWeAre;