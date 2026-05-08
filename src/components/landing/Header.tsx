import Image from "next/image";
import Link from "next/link";
import Banner from "@/public/home/landing.webp";

const LandingHeader = () => {
  return (
    <header className="text-shpe-white-100 from-shpe-blue-200 to-shpe-blue-150 relative isolate z-0 -mt-30 flex h-120 w-full justify-between overflow-hidden bg-linear-180 pt-25">
      <div className="relative z-10 my-auto flex w-full flex-col items-start pl-6 sm:pl-12 lg:pl-24">
        <h1 className="font-shpe-beachwood scale-y-140 text-4xl leading-[0.93] font-semibold uppercase drop-shadow-[0_5px_2px_rgba(0,0,0,0.35)] sm:text-xl md:text-4xl lg:text-5xl">
          Society of Hispanic <br /> Professional Engineers <br /> @
          <span className="text-[#FFB81C]"> UCR</span>
        </h1>

        <Link
          href="https://www.shpe.org/"
          className="font-shpe-univers-condensed focus-visible:ring-shpe-white-100/70 text-shpe-white-100 from-shpe-orange-500 to-shpe-orange-600 mt-10 inline-flex min-h-14 items-center rounded-full bg-linear-90 px-6 text-lg shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-xl focus-visible:ring-4 focus-visible:outline-none sm:px-8 sm:text-[1.35rem]"
        >
          Join SHPE National
        </Link>
      </div>
      <Image src={Banner} alt="Landing" className="w-3xl object-cover" />
    </header>
  );
};

export default LandingHeader;
