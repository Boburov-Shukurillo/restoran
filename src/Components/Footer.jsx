import React from "react";
import { Link } from "react-router-dom";

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
      <div className="containerb flex items-center justify-center h-22 max-middle_screen:flex-col max-middle_screen:items-start gap-y-5">
        {/* header logsi home sahifaga olib o'tadi */}
        <Link to="/">
          <img
            src={headerLogo}
            alt="Main Logo"
            className="w-44 max-md:w-32"
            width={88}
            height={46}
          />
        </Link>

        {/* navbar qismi bo'limlar bo'ylab tezkor o'tish */}
        <nav className="w-full text-center">
          <ul className="w-full flex items-center justify-evenly max-middle_screen:flex-col max-middle_screen:w-1/2 max-middle_screen:justify-start max-middle_screen:items-start flex-wrap gap-2.5 text-white h-20 max-md:h-full ">
            <li>
              <Link
                onClick={toTop}
                to="/"
                className="inter text-base font-medium hover:opacity-75 max-my_screen:text-sm"
              >
                Bosh sahifa
              </Link>
            </li>
            <li>
              <Link
                onClick={toTop}
                to="/menu"
                className="inter text-base font-medium hover:opacity-75 max-my_screen:text-sm"
              >
                Menyu
              </Link>
            </li>
            <li>
              <Link
                onClick={toTop}
                to="/about"
                className="inter text-base font-medium hover:opacity-75 max-my_screen:text-sm"
              >
                Restoran Haqida
              </Link>
            </li>
            <li>
              <Link
                onClick={toTop}
                to="/galareya"
                className="inter text-base font-medium hover:opacity-75 max-my_screen:text-sm"
              >
                Galareya
              </Link>
            </li>
            <li className=" max-mini_screen:col-start-1 max-mini_screen:col-end-3">
              <Link
                onClick={toTop}
                to="/kontakt"
                className="inter text-base font-medium hover:opacity-75 max-my_screen:text-sm"
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col items-start max-middle_screen:items-start max-middle_screen:justify-start max-md:gap-x-5 gap-y-2">
          {/* Qo'ngiroq hizmati adminga qo;ng;iroq qilish */}
          <a
            href="https://www.telegram.com/t.me/@BoburovSh"
            target="_blank"
            className="inter text-base text-white font-semibold flex items-center justify-center gap-5 max-lg:gap-1 max-my_screen:text-sm  max-lg:text-sm max-mini_screen:w-full max-middle_screen:justify-start"
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
            className="inter text-base text-white font-semibold flex items-center justify-between gap-5 max-lg:gap-1 max-my_screen:text-sm  max-lg:text-xs "
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
