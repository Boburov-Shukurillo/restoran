import React, { useEffect, useState } from "react";
import tel from "../assets/Stroke 1.svg";
import { Link, NavLink } from "react-router-dom";
import headeLogo from "../assets/headerLogo.svg";
import buy from "../assets/Buy 3.svg";
import haburgerBtn from "../assets/hamburgerBtn.svg";
import savatblack from "../assets/qoraSavat.svg";
import { foods } from "../data";
const Header = () => {
  let update = foods.filter((e) => e.isTru === true);
  const [cart, setCart] = useState(update);
  console.log(update);
  const [menu, setMenu] = useState("hidden");
  // menyuni ochish  funksiyasi
  const openMenu = () => {
    setMenu("block");
  };

  // menyuni yopish funksiyasi
  const closeMenu = () => {
    setMenu("hidden");
  };

  return (
    <header className="bg-[#000000de]">
      <div className="containerb flex items-center justify-between py-1 max-my_screen:py-5 ">
        <h1>{}</h1>
        {/* logo */}
        <Link to="/" className="bg-white inline-block ">
          <img
            className="w-44 h-24 max-my_screen:w-32"
            src={headeLogo}
            alt="logo"
          />
        </Link>

        <div className="flex items-center max-md:hidden justify-between text-white">
          <img src={tel} alt="tel svg" />
          <h3 className="max-my_screen:text-xs text-xl flex-shrink-0 font-bold leading-normal">
            +998 93 098 24 06
          </h3>
        </div>

        {/* bolimlar */}
        <nav
          className={`ma-md:w-1/3 max-md:${menu} max-md:absolute right-0 top-0 max-md:bg-white max-md:rounded-bl-3xl max-md:border-2`}
        >
          <button
            onClick={closeMenu}
            className={`max-md:block hidden absolute right-0`}
          >
            x
          </button>
          <ul className="w-full gap-5 text-white text-xl font-normal leading-normal flex items-center justify-between max-md:items-start max-md:flex max-md:text-black max-md:p-5 max-md:flex-col max-my_screen:text-xs max-my_screen:gap-4 ">
            <li>
              <NavLink to="/">Bosh sahifa</NavLink>
            </li>
            <li>
              <NavLink to="/menyu">Menyu</NavLink>
            </li>
            <li>
              <NavLink to="/about">Restoran Haqida</NavLink>
            </li>
            <li>
              <NavLink to="/galareya">Galareya</NavLink>
            </li>
            <li>
              <NavLink to="/kontakt">Kontakt</NavLink>
            </li>
            <li className="hidden max-md:block relative ">
              <Link
                to="/korzinka"
                className="bg-[#00000018] p-1 rounded-md inline-block"
              >
                <button className="">
                  <img className=" inline-block" src={savatblack} alt="" />
                </button>
                <span> korzinka</span>{" "}
                <span className="p-0.5 px-1.5 rounded-full absolute -bottom-2 bg-orange"></span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* savatcha */}
        <Link
          to="/korzinka"
          className="nimadir w-[55px] h-[55px] flex items-center justify-center bg-[#444] max-md:hidden max-my_screen:w-[50px] max-my_screen:h-[50px] rounded-lg relative "
        >
          <button className="max-md:hidden">
            <img className="max-my_screen:w-5 w-5" src={buy} alt="buy btn" />
          </button>
          <span className="text-white bg-orange absolute -bottom-5 -right-4 p-1 px-2.5 rounded-full">
            {}
          </span>
        </Link>

        <button onClick={openMenu} className="max-md:block hidden">
          <img src={haburgerBtn} alt="hamburger btn" />
        </button>
      </div>
    </header>
  );
};

export default Header;
