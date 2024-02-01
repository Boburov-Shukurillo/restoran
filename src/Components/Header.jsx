import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

// chaqirilgan rasimlar
import savatchaImg from "../assets/Buy 3.svg";
import qoraSavatchaImg from "../assets/qoraKorzinka.svg";
import headerLogo from "../assets/RestaranLogo.svg";
import telImg from "../assets/TelLogoSvg.svg";
import MenuBtn from "../assets/hamburgerBtn.svg";

const Header = ({ data, setCart, cart }) => {
  // console.log(props.data);
  let nimadir = data.filter((e) => {
    return e.isTrue === true;
  });
  useEffect(() => {
    setCart(nimadir);
  }, []);

  const [menu, setMenu] = useState(false);
  const openMenu = () => {
    setMenu(true);
    alert(1);
  };

  return (
    <header className="bg-[#292828] ">
      <div className="containerb flex items-center justify-between py-2.5 h-32">
        {/* header logsi home sahifaga olib o'tadi */}
        <Link to="/">
          <img
            src={headerLogo}
            alt="Main Logo"
            className="w-52 max-lg:w-20 max-my_screen:w-32"
          />
        </Link>

        <button onClick={openMenu} className="hidden max-md:block">
          <img src={MenuBtn} alt="" />
        </button>

        <div className="w-full max-md:absolute max-md:bg-white max-md:border-2 max-md:text-black max-md:w-2/4 max-sm:w-2/3 max-md:right-0 max-md:rounded-bl-3xl max-md:py-5 flex max-md:flex-col max-md:top-0 max-md:items-start items-ctart  justify-between px-5">
          {/* Qo'ngiroq hizmati adminga qo;ng;iroq qilish */}
          <a
            href="+99899453323"
            className="text-xl text-white font-semibold flex items-center justify-between gap-5 max-md:hidden max-lg:gap-1 max-my_screen:text-base max-md:text-black max-lg:text-xs"
          >
            <img src={telImg} alt="Telefon svg" className="max-lg:w-5" />
            +998 678 45 96
          </a>

          {/* navbar qismi bo'limlar bo'ylab tezkor o'tish */}
          <nav className="">
            <ul className="flex  justify-between gap-5 text-white max-md:flex-col max-md:items-start ">
              <li>
                <NavLink
                  to="/"
                  className="text-xl font-medium hover:opacity-75 max-my_screen:text-base max-md:text-black max-lg:text-xs"
                >
                  Bosh sahifa
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu"
                  className="text-xl font-medium hover:opacity-75 max-my_screen:text-base max-md:text-black max-lg:text-xs"
                >
                  Menyu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-xl font-medium hover:opacity-75 max-my_screen:text-base max-md:text-black max-lg:text-xs"
                >
                  Restoran Haqida
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pic"
                  className="text-xl font-medium hover:opacity-75 max-my_screen:text-base max-md:text-black max-lg:text-xs"
                >
                  Galaeya
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/kontact"
                  className="text-xl font-medium hover:opacity-75 max-my_screen:text-base max-md:text-black max-lg:text-xs"
                >
                  Kontakt
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* kkorzinka ga olib o'tuvchi tugma va link birlashmasi */}
          <Link to="/korzinka" className="flex items-center justify-between">
            <button className="w-10 h-10 p-2 rounded-lg relative bg-[rgba(81,80,80,0.56)] max-md:bg-transparent max-my_screen:px-1 max-my_screen:py-1 flex items-center justify-center max-md:w-full">
              <img
                src={savatchaImg}
                alt="Savatcha Svg "
                className="max-md:hidden max-my_screen:w-5"
              />
              <img
                src={qoraSavatchaImg}
                alt="qoraSavatcha Svg "
                className="hidden max-my_screen:w-10 max-md:block"
              />
              <span className="absolute -right-3 -bottom-3 w-6 h-6 rounded-full flex items-center justify-center bg-[#E98D42] max-my_screen:text-xs max-my_screen:w-4 max-my_screen:h-4 max-my_screen:-right-2 max-my_screen:-bottom-2">
                {cart.length}
              </span>
            </button>
            {<span className="hidden max-md:block">korzinka</span>}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
