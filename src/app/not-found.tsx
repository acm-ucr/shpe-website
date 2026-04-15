import Image from "next/image";
import NotFoundImage from "@/public/404Image.webp";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      {
        <Image
          src={NotFoundImage}
          alt="404 Image"
          className="z-10 h-auto w-1/2 pb-10"
        />
      }
      <p className="font-shpe-beachwood mt-5 mb-5 w-1/2 text-center text-4xl font-semibold text-blue-800">
        UH OH IT LOOKS LIKE THE PAGE YOU ARE LOOKING FOR DOESN'T EXIST
      </p>
      <Link
        href="/"
        className="font-shpe-univers mt-5 flex h-12 w-30 items-center justify-center rounded-3xl bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-xl font-light text-white"
      >
        HOME
      </Link>
    </div>
  );
};

export default NotFound;
