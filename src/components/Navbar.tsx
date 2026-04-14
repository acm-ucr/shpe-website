import NavbarLogo from "@/public/shpeNavbarLogo.webp";
import NavbarArrow from "@/public/navbar_arrow.webp";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-shpe-white-100 border-shpe-blue-200 mt-5 flex h-20 w-[76rem] justify-self-center rounded-3xl border p-8">
      <div className="flex flex-row items-center">
        <div className="-mx-5 flex h-14 divide-x divide-black">
          <Image className={`${"pr-2"}`} src={NavbarLogo} alt="SHPE Logo" />
          <div className="flex flex-col py-2 text-sm">
            <div className="px-2.5 text-black"> UC </div>
            <div className="-my-0.5 px-2.5 text-black"> RIVERSIDE </div>
          </div>
        </div>
        <div className="ml-64 flex items-center gap-7 text-lg whitespace-nowrap text-black">
          <div> ABOUT US </div>
          <div className=""> BOARD </div>
          <Image
            className={`${"-ml-6 h-2 w-3"}`}
            src={NavbarArrow}
            alt="Navbar Arrow"
          />
          <div> CALENDAR </div>
          <div> GALLERY </div>
          <div> PROJECTS </div>
          <div className="bg-shpe-orange-500 flex h-12 items-center rounded-3xl px-5">
            <div className="text-shpe-white-100 text-xl"> JOIN US </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
