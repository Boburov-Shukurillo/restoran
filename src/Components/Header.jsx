import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

// chaqirilgan rasimlar
import savatchaImg from "../assets/Buy 3.svg";
import qoraSavatchaImg from "../assets/qoraKorzinka.svg";
import headerLogo from "../assets/RestaranLogo.svg";
import telImg from "../assets/TelLogoSvg.svg";
import MenuBtn from "../assets/hamburgerBtn.svg";
import Iks from "../assets/iks.svg";

const Header = ({ data, setCart, cart }) => {
  const name = useLocation();
  const headerT = name.pathname === "/about";
  const headerHome = name.pathname === "/";
  let nimadir = data.filter((e) => {
    return e.isTrue === true;
  });
  useEffect(() => {
    setCart(nimadir);
  }, []);

  const [menu, setMenu] = useState("hidden");
  const [jpg, setJpg] = useState(false);
  const openMenu = () => {
    setMenu("flex");
    setJpg(true);
    setJpg(jpg === false ? true : false);
    setMenu(menu === "hidden" ? "flex" : "hidden");
  };
  const closeMenu = () => {
    setMenu("flex");
    setJpg(true);
    setJpg(jpg === false ? true : false);
    setMenu(menu === "hidden" ? "flex" : "hidden");
  };

  return (
    <header
      className={`${
        headerT || headerHome
          ? "bg-transparent absolute top-0 w-full px-0 z-50"
          : "bg-[#292828] px-0"
      } `}
    >
      <div className="containerb flex items-center justify-between  py-4 max-sm:py-1 relative">
        {/* header logsi home sahifaga olib o'tadi */}
        <Link to="/" className="">
          <img
            src={headerLogo}
            alt="Main Logo"
            height={100}
            width={150}
            className="w-52 h-28  max-sm:w-2/3 max-sm:h-1/2"
          />
        </Link>

        <button
          onClick={() => setMenu("flex")}
          className="hidden max-middle_screen:block"
        >
          <img
            src={MenuBtn}
            alt="menu btn"
            className={` max-sm:max-sm:w-full`}
          />
        </button>

        <div
          onClick={closeMenu}
          className={`max-middle_screen:${menu} top-0 z-20 w-full h-full max-middle_screen:fixed max-middle_screen:bg-[#00000078] left-0`}
        >
          <div
            className={`w-full h-1/2 max-middle_screen:absolute max-middle_screen:bg-white z-20 max-middle_screen:border-2 max-middle_screen:text-black  max-middle_screen:w-1/2 max-middle_screen:right-0 flex max-middle_screen:flex-col max-middle_screen:top-0 max-middle_screen:items-start items-center  max-middle_screen:justify-start justify-between max-middle_screen:h-full px-5`}
          >
            {/* Qo'ngiroq hizmati adminga qo;ng;iroq qilish */}
            <a
              href="+99899453323"
              target="_blank"
              className="text-xl text-white font-semibold flex items-center justify-between gap-5 max-middle_screen:hidden max-lg:gap-1 max-my_screen:text-base max-middle_screen:text-black max-lg:text-xs"
            >
              <img src={telImg} alt="Telefon svg" className="max-lg:w-5" />
              +998 678 45 96
            </a>
            <button
              onClick={() => setMenu("hidden")}
              className="hidden max-middle_screen:block absolute z-50 right-0 p-5"
            >
              <img
                src={Iks}
                alt="menu btn"
                className={` max-sm:max-sm:w-full px-2`}
              />
            </button>
            {/* navbar qismi bo'limlar bo'ylab tezkor o'tish */}
            <nav className="">
              <ul className=" w-full flex items-center justify-between gap-5 text-white h-20 max-middle_screen:h-full max-middle_screen:flex-col max-middle_screen:items-start max-middle_screen:pt-12">
                <li>
                  <NavLink
                    to="/"
                    className="flex flex-col items-center gap-1 text-xl font-medium hover:opacity-75 max-my_screen:text-base max-middle_screen:text-black max-lg:text-xs  max-middle_screen:flex-row max-middle_screen:after:hidden max-middle_screen:before:block before:hidden"
                  >
                    Bosh sahifa
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/menu"
                    className="flex flex-col items-center gap-1 text-xl font-medium hover:opacity-75 max-my_screen:text-base max-middle_screen:text-black max-lg:text-xs  max-middle_screen:flex-row max-middle_screen:after:hidden max-middle_screen:before:block before:hidden"
                  >
                    Menyu
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className="flex flex-col items-center gap-1 text-xl font-medium hover:opacity-75 max-my_screen:text-base max-middle_screen:text-black max-lg:text-xs  max-middle_screen:flex-row max-middle_screen:after:hidden max-middle_screen:before:block before:hidden"
                  >
                    Restoran Haqida
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/galareya"
                    className="flex flex-col items-center gap-1 text-xl font-medium hover:opacity-75 max-my_screen:text-base max-middle_screen:text-black max-lg:text-xs  max-middle_screen:flex-row max-middle_screen:after:hidden max-middle_screen:before:block before:hidden"
                  >
                    Galareya
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className="flex flex-col items-center gap-1 text-xl font-medium hover:opacity-75 max-my_screen:text-base max-middle_screen:text-black max-lg:text-xs  max-middle_screen:flex-row max-middle_screen:after:hidden max-middle_screen:before:block before:hidden"
                  >
                    Kontakt
                  </NavLink>
                </li>
              </ul>
            </nav>

            {/* kkorzinka ga olib o'tuvchi tugma va link birlashmasi */}
            <Link
              to="/korzinka"
              className="flex items-center justify-between max-middle_screen:mt-5 "
            >
              <div
                className={`w-10 h-10 p-2 rounded-lg relative ${
                  headerT || headerHome ? "bg-[#333]" : "bg-[#5150508f]"
                }  max-middle_screen:bg-transparent max-my_screen:px-1 max-my_screen:py-1 flex items-center justify-center max-middle_screen:w-full`}
              >
                <img
                  src={savatchaImg}
                  alt="Savatcha Svg "
                  className="max-middle_screen:hidden max-my_screen:w-5"
                />
                <img
                  src={qoraSavatchaImg}
                  alt="qoraSavatcha Svg "
                  className="hidden max-my_screen:w-7 max-middle_screen:block  "
                />
                <span className="text-white text-[15px] absolute -right-3 -bottom-3 w-6 h-6 rounded-full flex items-center justify-center bg-[#E98D42] max-my_screen:text-xs max-my_screen:w-4 max-my_screen:h-4 max-my_screen:-right-1 max-my_screen:-bottom-1.5">
                  {cart.length}
                </span>
              </div>
              {<span className="hidden max-middle_screen:block">korzinka</span>}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
