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
      <p className="w-1/2 font-shpe-beachwood font-semibold text-blue-800 text-5xl text-center">
        UH OH IT LOOKS LIKE THE PAGE YOU ARE LOOKING FOR DOESN'T EXIST
      </p>
      <Link
        href="/"
        className="mt-5 flex justify-center w-25 h-10 rounded-2xl bg-amber-600 text-white"
      >
        HOME
      </Link>
    </div>
  );
  
};

export default NotFound;
