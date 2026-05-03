import Image from "next/image";
import Link from "next/link";
import Banner from "@/public/home/landing.webp";

const LandingHeader = () => {
  return (
      <header className="flex text-shpe-white-100 from-shpe-blue-200 to-shpe-blue-150 relative isolate h-120 w-full overflow-hidden bg-linear-180 pt-25 -mt-30 z-0 justify-between">
        <div className="relative z-10 flex w-full items-start flex-col pl-6 sm:pl-12 lg:pl-24 my-auto ">
          <h1 className="font-shpe-beachwood  text-4xl scale-y-140 leading-[0.93] uppercase font-semibold drop-shadow-[0_5px_2px_rgba(0,0,0,0.35)] sm:text-xl md:text-4xl lg:text-5xl">
            Society of Hispanic <br /> Professional Engineers <br/> @
              <span className="text-[#FFB81C]"> UCR</span>
          </h1>

          <Link
            href="https://www.shpe.org/"
            className="font-shpe-univers-condensed focus-visible:ring-4 focus-visible:outline-none focus-visible:ring-shpe-white-100/70 text-shpe-white-100 mt-10 inline-flex min-h-14 items-center rounded-full from-shpe-orange-500 to-shpe-orange-600 bg-linear-90 px-6 text-lg shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-xl sm:px-8 sm:text-[1.35rem]"
          >
            Join SHPE National
          </Link>
        </div>
        <Image src={Banner} alt="Landing" className=" object-cover w-3xl"/>
      </header>
  );
};

export default LandingHeader;
