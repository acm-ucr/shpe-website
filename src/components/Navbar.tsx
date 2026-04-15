"use client";
import NavbarLogo from "@/public/shpeNavbarLogo.webp";
import NavbarArrow from "@/public/navbar_arrow.webp";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navbarLinks } from "@/components/data/navbarLinks";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState("");

  const toggleMenu = (name) => {
    setOpenMenu(openMenu === name ? "" : name);
  };

  return (
    <div className="bg-shpe-white-100 border-shpe-blue-200 font-shpe-univers-condensed mt-5 flex h-20 w-[76rem] justify-self-center rounded-3xl border p-8">
      <div className="flex flex-row items-center">
        <div className="-mx-5 flex h-14 divide-x divide-black">
          <Image
            className={`${"w-44 pr-2"}`}
            src={NavbarLogo}
            alt="SHPE Logo"
          />
          <div className="flex flex-col py-2 text-sm">
            <div className="px-2.5 text-black"> UC </div>
            <div className="-my-0.5 px-2.5 text-black"> RIVERSIDE </div>
          </div>
        </div>
        <div className="ml-96 flex items-center gap-7 text-lg text-black">
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
                    className={"h-2 w-3"}
                    src={NavbarArrow}
                    alt="Navbar Arrow"
                  />
                </button>
              )}

              {sub && openMenu === name && (
                <div className="divide-shpe-blue-100 bg-shpe-white-100 border-shpe-blue-200 absolute top-full flex h-max w-24 flex-col items-center divide-y rounded-2xl border pt-3 pb-3">
                  {sub.map((item) => (
                    <Link
                      key={item.subname}
                      href={item.sublink}
                      className=""
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
    </div>
  );
};

export default Navbar;
