import React from "react";
import { Link, NavLink } from "react-router-dom";

// rasimla
import headerLogo from "../assets/RestaranLogo.svg";
import telImg from "../assets/TelLogoSvg.svg";
import locationImg from "../assets/Vectorlocation.svg";

const Footer = () => {
  return (
    <footer className="bg-[#292828]  border-t-2 border-orange py-5">
      <div className="containerb flex items-center justify-between h-22 max-middle_screen:flex-col max-middle_screen:items-start max-middle_screen:space-y-1">
        {/* header logsi home sahifaga olib o'tadi */}
        <Link to="/">
          <img
            src={headerLogo}
            alt="Main Logo"
            className="max-md:w-1/2"
            width={88}
            height={46}
          />
        </Link>

        {/* navbar qismi bo'limlar bo'ylab tezkor o'tish */}
        <nav className="w-1/2">
          <ul className="w-full flex items-center justify-between gap-5 text-white h-20 max-md:h-full max-middle_screen:hidden">
            <li>
              <NavLink
                to="/"
                className="text-base font-medium hover:opacity-75 max-my_screen:text-sm max-md:text-black max-lg:text-[10px]"
              >
                Bosh sahifa
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className="text-base font-medium hover:opacity-75 max-my_screen:text-sm max-md:text-black max-lg:text-[10px]"
              >
                Menyu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-base font-medium hover:opacity-75 max-my_screen:text-sm max-md:text-black max-lg:text-[10px]"
              >
                Restoran Haqida
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pic"
                className="text-base font-medium hover:opacity-75 max-my_screen:text-sm max-md:text-black max-lg:text-[10px]"
              >
                Galaeya
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/kontact"
                className="text-base font-medium hover:opacity-75 max-my_screen:text-sm max-md:text-black max-lg:text-[10px]"
              >
                Kontakt
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="ml-5 max-md:w-2/3 flex flex-col items-start  space-y-3 max-middle_screen:ml-0">
          {/* Qo'ngiroq hizmati adminga qo;ng;iroq qilish */}
          <a
            href="+99899453323"
            className="text-base text-white font-semibold flex items-center justify-center gap-5  max-lg:gap-1 max-my_screen:text-sm  max-lg:text-[10px]"
          >
            <img
              src={telImg}
              width={20}
              height={20}
              alt="Telefon svg"
              className="max-lg:w-5"
            />
            +998 678 45 96
          </a>
          <a
            href="https://www.google.com/maps/@41.3106176,69.2518912,12z?entry=ttu"
            target="_blank"
            className="text-base text-white font-semibold flex items-center justify-between gap-5  max-lg:gap-1 max-my_screen:text-sm  max-lg:text-xs"
          >
            <img
              src={locationImg}
              width={20}
              height={25}
              alt="Telefon svg"
              className="max-lg:w-5"
            />
            bizning oshxonaning joylashuvi
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
