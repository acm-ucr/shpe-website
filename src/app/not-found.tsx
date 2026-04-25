import Image from "next/image";
import NotFoundImage from "@/public/404Image.svg";
import Link from "next/link";
import Questionmark from "@/public/banners/icons/question mark.webp";
import Gears from "@/public/banners/404.webp";
import TitleBanner from "@/components/Title";

const NotFound = () => {
  return (
    <div>
      <TitleBanner
        title=""
        description=""
        icon={Questionmark}
        decoration={Gears}
      />
      <div className="flex h-screen flex-col items-center justify-center">
        {
          <Image
            src={NotFoundImage}
            alt="404 Image"
            className="z-10 mb-5 h-auto w-4/5 md:mb-10 md:w-1/2"
          />
        }
        <p className="font-shpe-beachwood w-4/5 text-center text-lg font-semibold text-blue-800 md:mt-5 md:mb-5 md:w-1/2 md:text-4xl">
          UH OH IT LOOKS LIKE THE PAGE YOU ARE LOOKING FOR DOESN'T EXIST
        </p>
        <Link
          href="/"
          className="font-shpe-univers mt-5 flex h-12 w-30 items-center justify-center rounded-3xl bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-xl font-light text-white"
        >
          HOME
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
