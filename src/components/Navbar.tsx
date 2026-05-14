"use client";
//Here I just got svg assets to increase the quality of assets on more screens
import NavbarLogo from "@/public/shpeNavbarLogo.svg";
import NavbarArrow from "@/public/navbar_arrow.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navbarLinks } from "@/components/data/navbarLinks";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState("");
  const [iconRot, changeRot] = useState("rotate-0");
  const toggleMenu = (name: string) => {
    setOpenMenu(openMenu === name ? "" : name);
    if (iconRot == "rotate-0") {
      changeRot("rotate-180");
    } else {
      changeRot("rotate-0");
    }
  };

  return (
    <div className="bg-shpe-white-100 border-shpe-blue-200 z-50 font-shpe-univers-condensed w-fill m-5 flex h-20 flex-row items-center justify-between justify-self-center rounded-3xl border px-5">
      <div className="z-100 flex h-14 w-max divide-x divide-black">
        <Link href="/" aria-label="home">
          <Image
            className="h-full w-fit object-contain pr-2.5"
            src={NavbarLogo}
            alt="SHPE Logo"
          />
        </Link>
        <div className="flex flex-col py-2 text-sm">
          <div className="px-2.5 text-black"> UC </div>
          <div className="-my-0.5 px-2.5 text-black"> RIVERSIDE </div>
        </div>
      </div>
      <div className="flex items-center gap-7 text-lg text-black">
        {navbarLinks.map(({ link, name, sub }) => (
          <div key={name} className="relative flex justify-center">
            {link && !sub ? (
              <Link
                href={link || "/"}
                className={`whitespace-nowrap ${name === "JOIN US" ? "from-shpe-orange-500 to-shpe-orange-600 text-shpe-white-100 rounded-3xl bg-gradient-to-r px-4 py-2 font-bold shadow-md shadow-neutral-700" : ""} `}
              >
                {name}
              </Link>
            ) : (
              <button
                onClick={() => toggleMenu(name)}
                className="flex items-center gap-1"
              >
                {name}
                <Image
                  className={`h-2 w-3 duration-150 ease-in ${iconRot}`}
                  src={NavbarArrow}
                  alt="Navbar Arrow"
                />
              </button>
            )}

            {sub && openMenu === name && (
              <div className="divide-shpe-blue-100 bg-shpe-white-100 border-shpe-blue-200 absolute top-full z-50 flex h-max w-24 flex-col items-center divide-y rounded-2xl border pt-3 pb-3">
                {sub.map((item) => (
                  <Link
                    key={item.subname}
                    href={item.sublink}
                    onClick={() => setOpenMenu("")}
                  >
                    {item.subname}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
