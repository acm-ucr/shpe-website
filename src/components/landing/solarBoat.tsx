interface SolarBoatProps {
  description1: string;
  description2: string;
}

const SolarBoat = (props: SolarBoatProps) => {
  return (
    <div className="flex w-full items-center justify-center px-10 py-10 md:px-20 md:py-14">
      <div className="flex flex-col items-center md:flex-row md:items-center md:gap-0">
        {/* Logo */}
        <div className="flex flex-shrink-0 items-center justify-center md:pr-12">
          <img
            src="/banners/SolarBoat-Alumni.webp"
            alt="SHPE-UCR Solar Boat"
            className="w-64 object-contain drop-shadow-lg md:w-96"
          />
        </div>

        {/* Divider */}
        <div className="bg-shpe-gold-400 my-6 h-0.5 w-3/4 md:my-0 md:h-40 md:w-0.5 md:self-center" />

        {/* Text */}
        <div className="flex flex-col items-center gap-4 text-center md:pl-12">
          <p className="font-shpe-univers-condensed max-w-xl text-sm leading-5 font-medium text-black">
            {props.description1}
          </p>
          <p className="font-shpe-univers-condensed max-w-xl text-sm leading-5 font-medium text-black">
            {props.description2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolarBoat;
