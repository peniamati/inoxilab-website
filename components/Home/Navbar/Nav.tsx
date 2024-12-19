import React, { useEffect, useState } from "react";
import { navLinks } from "../../../constant/Constant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (
    url: string,
    event: React.MouseEvent<HTMLParagraphElement>
  ) => {
    event.preventDefault();
    const section = document.querySelector(url) as HTMLElement | null;
    if (section !== null) {
      const navHeight = document.querySelector("#nav")?.clientHeight ?? 0;
      const sectionRect = section.getBoundingClientRect();
      const sectionTop = sectionRect.top + window.scrollY - navHeight;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed ${
        navBg ? "bg-white shadow-md" : "fixed"
      } w-full transition-all pt-1 duration-200 h-[12.7vh] z-[1000] `}
      id="nav"
    >
      <div className="flex items-center justify-evenly w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <div className="flex justify-between items-center">
          <Link href="/">
            <img src="/images/logo.jpg" alt="logo" className="w-20 h-20 mr-2" />
          </Link>
          <h1 className="text-xl md:text-2xl font-bold">
            <span className="text-3xl md:text-4xl text-blue-600">I</span>noxilab
          </h1>
        </div>
        {/* Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p
                  className="nav__link"
                  onClick={(e) => handleLinkClick(link.url, e)}
                >
                  {link.label}
                </p>{" "}
              </Link>
            );
          })}
        </div>
        {/* Burger menu */}
        <HiBars3BottomRight
          onClick={openNav}
          className="w-8 h-8 cursor-pointer text-black lg:hidden"
        />
      </div>
    </div>
  );
};

export default Nav;
