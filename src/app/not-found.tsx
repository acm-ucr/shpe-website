import Image from "next/image";
import NotFoundImage from "@/public/404Image.webp";
import Link from "next/link";

const NotFound = () => {
  return(
    
    <div className="flex items-center justify-center h-screen flex-col">
      { <Image
        src = {NotFoundImage}
        alt = "404 Image"
        className="z-10 h-auto w-1/2 pb-10"
      />}
      <p className="mt-5 mb-5 w-1/2 font-shpe-beachwood font-semibold text-blue-800 text-4xl text-center">
        UH OH IT LOOKS LIKE THE PAGE YOU ARE LOOKING FOR DOESN'T EXIST
      </p>
      <Link
        href="/"
        className="mt-5 flex justify-center items-center w-30 h-12
        rounded-3xl bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 
        text-white font-shpe-univers font-light text-xl"
      >
        HOME
      </Link>
    </div>
  );
  
};

export default NotFound;
