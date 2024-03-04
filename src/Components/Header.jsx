import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

// chaqirilgan rasimlar
import savatchaImg from "../assets/Buy 3.svg";
import locIcon from '../assets/Vectorlocation.svg'
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

  const [menu, setMenu] = useState("-left-[100%]");
  const [display,setDispaly]=useState("hidden")
  const [jpg, setJpg] = useState(false);
  const openMenu = () => {
    setMenu("left-0");
    setDispaly("flex")
    setJpg(true);
    setJpg(jpg === false ? true : false);
    setMenu(menu === "-left-[100%]" ? "left-0" : "-left-[100%]");
  };
  const closeMenu = () => {
    setMenu("flex");
    setJpg(true);
    setJpg(jpg === false ? true : false);
    setMenu(menu === "-left-[100%]" ? "left-0" : "-left-[100%]");
  };

  return (
    <header
      className={` ${
        headerHome || headerT ? "bg-transparent absolute" : "bg-[#1E1E1E]"
      } w-full py-5 z-50 max-middle_screen:py-0 `}
    >
      <div className="containerb flex items-center justify-between  gap-5">

        <Link t0="/">
          <img
            src={headerLogo}
            className="w-40 h-20 max-my_screen:w-40 max-sm:h-20 max-mini_screen:w-20 max-lg:w-32"
            alt="Hader logo"
          />
        </Link>

        <button onClick={openMenu} className="hidden max-middle_screen:block w-8">
          <img src={MenuBtn} alt="menu icon" />
        </button>

        <div onClick={closeMenu} className={` w-4/5 z-50 transition-all ${menu} max-middle_screen:fixed max-middle_screen:w-full max-middle_screen:h-full max-middle_screen:bg-[#202221aa] max-middle_screen:top-0`}>
          <div
            className={`${menu} surilChap h-full transition-all w-full z-50 gap-10 flex justify-between max-my_screen:justify-evenly items-center max-middle_screen:justify-start max-middle_screen:items-start  max-middle_screen:p-5 max-middle_screen:flex-col max-middle_screen:fixed max-middle_screen:w-full max-middle_screen:bg-white max-middle_screen:top-0 `}
          >
            <a href="https://w.w.w/t.me/@BoburovSh" target="_blank" className="flex items-center max-my_screen:hidden inter">
              <img
                src={telImg}
                alt="tel icon"
                className="w-8 mr-2 max-my_screen:w-5"
              />
              <span className="text-xl text-white font-bold max-my_screen:text-sm max-middle_screen:text-xs">
                +982 98 981 98 98
              </span>
            </a>

            <nav className="max-middle_screen:w-full">
              <ul className="w-full flex items-center justify-between gap-5 max-middle_screen:flex-col max-middle_screen:items-start relative py-2">
                <li className="hidden max-middle_screen:block self-end"><button onClick={closeMenu}><img src={Iks} alt="cross iconf" /></button></li>
                <li className="max-middle_screen:w-full">
                  <NavLink
                    className="max-middle_screen:w-full max-middle_screen:inline-block inter cursor-pointer text-xl font-bold text-white  max-middle_screen:h-5  max-my_screen:text-base max-middle_screen:text-xs max-middle_screen:text-black"
                    to="/"
                  >
                    Bosh Sahifa
                  </NavLink>
                </li>
                <li className="max-middle_screen:w-full">
                  <NavLink
                    className="max-middle_screen:w-full max-middle_screen:inline-block inter cursor-pointer text-xl font-bold text-white  max-middle_screen:h-5  max-my_screen:text-base max-middle_screen:text-xs max-middle_screen:text-black"
                    to="/menu"
                  >
                    Menu
                  </NavLink>
                </li>
                <li className="max-middle_screen:w-full">
                  <NavLink
                    className="max-middle_screen:w-full max-middle_screen:inline-block inter cursor-pointer text-xl font-bold text-white  max-middle_screen:h-5  max-my_screen:text-base max-middle_screen:text-xs max-middle_screen:text-black"
                    to="/about"
                  >
                    Restoran Haqida
                  </NavLink>
                </li>
                <li className="max-middle_screen:w-full">
                  <NavLink
                    className="max-middle_screen:w-full max-middle_screen:inline-block inter cursor-pointer text-xl font-bold text-white  max-middle_screen:h-5  max-my_screen:text-base max-middle_screen:text-xs max-middle_screen:text-black"
                    to="/galareya"
                  >
                    Galareya
                  </NavLink>
                </li>
                <li className="max-middle_screen:w-full">
                  <NavLink
                    className="max-middle_screen:w-full max-middle_screen:inline-block inter cursor-pointer text-xl font-bold text-white  max-middle_screen:h-5  max-my_screen:text-base max-middle_screen:text-xs max-middle_screen:text-black"
                    to="/kontakt"
                  >
                    Kontakt
                  </NavLink>
                </li>
              </ul>
            </nav>

            <Link
              to="/korzinka"
              className={`${headerHome||headerT?"bg-[#5a5a5a]":"middle_screen:bg-[#ffffff3e]"} max-middle_screen:bg-transparent p-3 max-middle_screen:flex max-middle_screen:items-center max-middle_screen:gap-4 rounded-lg relative cursor-pointer max-my_screen:scale max-middle_screen:w-7 max-middle_screen:p-0 `}
            >
              <img
                src={savatchaImg}
                alt="savatcha svg"
                className="w-6 max-middle_screen:hidden"
              />
              <img
                src={qoraSavatchaImg}
                alt="savatcha svg"
                className="w-10 hidden max-middle_screen:block"
              />
              <span className="text-xl flex items-center justify-center text-white font-bold bg-orange rounded-full py-0 px-2 absolute -right-1/4 -bottom-1/4 max-md:-bottom-1/4 max-md:text-sm max-middle_screen:h-5 max-middle_screen:text-black max-middle_screen:p-0 max-middle_screen:w-5 ">
                {cart.length}
              </span>
              <span className="hidden max-middle_screen:block">korzinka</span>
            </Link>

            <a href="https://www/t.me/@BoburovSh" target="_blank" className="hidden max-middle_screen:items-center max-middle_screen:flex">
              <img
                src={telImg}
                alt="tel icon"
                className="w-5"
              />
              <span className="text-xs  font-bold ">
                +982 99 981 98 98
              </span>
            </a>

            <a href="https://www.google.com/google.maps" className="hidden max-middle_screen:items-center max-middle_screen:flex">
              <img
                src={locIcon}
                alt="tel icon"
                className="w-5 mr-2"
              />
              <span className="text-sm  font-light ">
               Andijon viloyati Baliqchi tumani.
              </span>
            </a>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
