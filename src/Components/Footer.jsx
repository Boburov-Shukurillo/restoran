import React from "react";
import { Link, NavLink } from "react-router-dom";

// rasimla
import headerLogo from "../assets/RestaranLogo.svg";
import telImg from "../assets/TelLogoSvg.svg";
import locationImg from "../assets/Vectorlocation.svg";

const Footer = () => {
  const toTop = () => {
    window.scrollTo({ left: 0, top: "0", behavior: "smooth" });
  };
  return (
    <footer className="bg-[#292828]  border-t-2 border-orange py-5">
      <div className="containerb flex items-center justify-between h-22 max-middle_screen:flex-col max-middle_screen:items-start max-middle_screen:space-y-1">
        {/* header logsi home sahifaga olib o'tadi */}
        <Link to="/">
          <img
            src={headerLogo}
            alt="Main Logo"
            className="w-44 max-md:w-32 mb-4"
            width={88}
            height={46}
          />
        </Link>

        {/* navbar qismi bo'limlar bo'ylab tezkor o'tish */}
        <nav className="w-1/2">
          <ul className="w-full mb-5 flex items-center justify-between gap-2.5 text-white h-20 max-md:h-full max-middle_screen:flex-col max-middle_screen:items-start">
            <li>
              <NavLink
              onClick={toTop}
                to="/"
                className="inter text-base font-medium hover:opacity-75 max-my_screen:text-sm max-lg:text-[10px]"
              >
                Bosh sahifa
              </NavLink>
            </li>
            <li>
              <NavLink
              onClick={toTop}
                to="/menu"
                className="inter text-base font-medium hover:opacity-75 max-my_screen:text-sm max-lg:text-[10px]"
              >
                Menyu
              </NavLink>
            </li>
            <li>
              <NavLink
              onClick={toTop}
                to="/about"
                className="inter text-base font-medium hover:opacity-75 max-my_screen:text-sm max-lg:text-[10px]"
              >
                Restoran Haqida
              </NavLink>
            </li>
            <li>
              <NavLink
              onClick={toTop}
                to="/galareya"
                className="inter text-base font-medium hover:opacity-75 max-my_screen:text-sm max-lg:text-[10px]"
              >
                Galareya
              </NavLink>
            </li>
            <li>
              <NavLink
              onClick={toTop}
                to="/kontakt"
                className="inter text-base font-medium hover:opacity-75 max-my_screen:text-sm max-lg:text-[10px]"
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
            className="inter text-base text-white font-semibold flex items-center justify-center gap-5  max-lg:gap-1 max-my_screen:text-sm  max-lg:text-sm"
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
            className="inter text-base text-white font-semibold flex items-center justify-between gap-5  max-lg:gap-1 max-my_screen:text-sm  max-lg:text-xs"
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
