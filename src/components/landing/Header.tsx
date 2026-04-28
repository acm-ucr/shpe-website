import Image from "next/image";
import Link from "next/link";

const LandingHeader = () => {
  return (
    <header className="text-shpe-white-100 relative isolate min-h-[520px] w-full overflow-hidden bg-[linear-gradient(180deg,#003da5_0%,#0072bc_100%)] px-6 py-12 sm:px-12 lg:px-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_48%,rgba(114,169,190,0.28),transparent_34%)]" />

      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-0 w-full opacity-25 sm:opacity-100 lg:w-[58%]"
        aria-hidden="true"
      >
        <Image
          src="/wrench.webp"
          alt=""
          width={679}
          height={736}
          priority
          className="absolute -top-28 -right-36 h-auto w-[19rem] rotate-[-46deg] object-contain drop-shadow-[0_18px_14px_rgba(0,31,91,0.35)] sm:-top-16 sm:-right-24 sm:w-[22rem] lg:-top-8 lg:-right-12 lg:w-[25rem]"
        />
        <Image
          src="/gear.webp"
          alt=""
          width={736}
          height={733}
          priority
          className="absolute right-2 bottom-5 h-auto w-[18rem] rotate-[17deg] object-contain drop-shadow-[0_20px_16px_rgba(0,31,91,0.35)] sm:right-10 sm:bottom-8 sm:w-[21rem] lg:right-28 lg:bottom-10 lg:w-[25rem]"
        />
        <Image
          src="/gear.webp"
          alt=""
          width={736}
          height={733}
          priority
          className="absolute top-14 right-[18rem] hidden h-auto w-[8.75rem] rotate-[-14deg] object-contain drop-shadow-[0_14px_12px_rgba(0,31,91,0.3)] sm:block lg:right-[25rem] lg:w-[10rem]"
        />
        <Image
          src="/home/rocket-transparent.webp"
          alt=""
          width={501}
          height={736}
          priority
          className="absolute right-[17rem] bottom-20 hidden h-auto w-[7.5rem] object-contain drop-shadow-[0_14px_12px_rgba(0,31,91,0.3)] sm:block lg:right-[27rem] lg:bottom-[4.25rem] lg:w-[8.75rem]"
        />
      </div>

      <div className="relative z-10 flex min-h-[420px] max-w-7xl items-center">
        <div className="max-w-[48rem]">
          <h1 className="font-shpe-beachwood text-[2.45rem] leading-[0.93] uppercase drop-shadow-[0_5px_2px_rgba(0,0,0,0.35)] sm:text-[4.2rem] md:text-[5rem] lg:text-[5.75rem] xl:text-[6.25rem]">
            <span className="block">
              <span className="block sm:inline">Society of </span>
              <span className="block sm:inline">Hispanic</span>
            </span>
            <span className="block">
              <span className="block sm:inline">Professional </span>
              <span className="block sm:inline">Engineers</span>
            </span>
            <span className="mt-4 block">
              <span className="text-shpe-white-100">@ </span>
              <span className="text-[#ffcf24]">UCR</span>
            </span>
          </h1>

          <Link
            href="https://www.shpe.org/"
            className="font-shpe-univers-condensed text-shpe-white-100 focus-visible:ring-shpe-white-100/70 mt-10 inline-flex min-h-14 items-center rounded-full bg-[linear-gradient(90deg,#fd652f_0%,#d33a02_100%)] px-6 text-lg leading-none uppercase shadow-[0_7px_10px_rgba(0,31,91,0.32)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_16px_rgba(0,31,91,0.36)] focus-visible:ring-4 focus-visible:outline-none sm:px-8 sm:text-[1.35rem]"
          >
            Join SHPE National
          </Link>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
