"use client";
//Here I just got svg assets to increase the quality of assets on more screens
import NavbarLogo from "@/public/shpeNavbarLogo.svg";
import NavbarArrow from "@/public/navbar_arrow.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navbarLinks } from "@/data/navbarLinks";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    <div className="font-shpe-univers-condensed relative z-[100] m-5">
      <div className="bg-shpe-white-100 border-shpe-blue-200 w-full flex lg:h-20 h-16 flex-row items-center justify-between justify-self-center lg:rounded-3xl rounded-2xl border lg:px-5">
        <div className="flex items-center h-full pr-20 lg:pr-0">
          <Link href="/" aria-label="home" className="h-full flex">
            <Image
              className="h-full w-auto object-contain lg:py-3.5 py-4 pr-2.5 lg:-ml-1 pl-1.5"
              src={NavbarLogo}
              alt="SHPE Logo"
            />
          </Link>

          <div className="h-10 w-[1px] bg-black lg:h-14"></div>

          <div className="flex flex-col px-2.5 py-2 :text-sm text-black">
            <div> UC </div>
            <div className="-my-0.5"> RIVERSIDE </div>
          </div>
        </div>

        <div className="hidden items-center ml-44 gap-7 text-lg text-black lg:flex">
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

        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="pr-3"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute justify-self-center text-center z-[99] flex flex-col gap-1 rounded-3xl border bg-white p-6 text-lg lg:hidden">
          {navbarLinks
          .filter(({ name }) => name !== "JOIN US")
          .map(({ link, name, sub }) => (
            <div key={name} className="flex flex-col items-center">
              {link && !sub ? (
                <Link
                  href={link || "/"}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {name}
                </Link>
              ) : (
                <div className="flex flex-col">
                  <button
                    onClick={() => toggleMenu(name)}
                    className="flex gap-1 items-center text-black"
                  >
                    {name}
                    <Image
                      className={`h-2 w-2 transition-transform duration-150 ease-in ${iconRot}`}
                      src={NavbarArrow}
                      alt="Navbar Arrow"
                    />
                  </button>

                  {sub && openMenu === name && (
                    <div className="flex flex-col divide-y divide-shpe-blue-150">
                      {sub.map((item) => (
                        <Link
                          key={item.subname}
                          href={item.sublink}
                          className="py-1"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setOpenMenu("");
                          }}
                        >
                          {item.subname}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
