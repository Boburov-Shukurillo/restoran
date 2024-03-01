import React, { useState } from "react";
import StolBandQilish from "../Components/StolBandQilish";
import img01 from "../assets/galareya (1).png";
import img02 from "../assets/galareya (2).png";
import img03 from "../assets/galareya (3).png";
import img04 from "../assets/galareya (4).png";
import img05 from "../assets/galareya (5).png";
import img06 from "../assets/galareya (6).png";
import img07 from "../assets/galareya (7).png";
import img08 from "../assets/galareya (8).png";
import img09 from "../assets/galareya (9).png";
import img10 from "../assets/galareya (10).png";
import img11 from "../assets/galareya (11).png";

const Galareya = () => {
  const [show, setShow] = useState("hidden");
  const showAll = () => {
    setShow("flex");
    setShow(show === "hidden" ? "flex" : "hidden");
  };
  return (
    <div className="py-5">
      <div className="containerb py-5 flex flex-col items-center justify-center">
        <h1 className="mb-10 text-5xl font-bold font-serif text-white text-center max-md:hidden hidden max-middle_screen:block">Galareya</h1>
        <div className="grid grid-cols-3 gap-10 mb-10 max-middle_screen:grid-cols-2 max-md:grid-cols-1">
          <div
            className={`flex flex-col gap-10 items-center max-middle_screen:${show} max-middle_screen:space-y-10`}
          >
            <img
              src={img01}
              alt="galareya imgs"
              width={367}
              height={400}
              className="bg-white/30 rounded-2xl"
            />
            <img
              src={img02}
              alt="galareya imgs"
              width={367}
              height={400}
              className="bg-white/30 rounded-2xl"
            />
            <img
              src={img03}
              alt="galareya imgs"
              width={367}
              height={400}
              className="bg-white/30 rounded-2xl"
            />
            <img
              src={img04}
              alt="galareya imgs"
              width={367}
              height={400}
              className="bg-white/30 rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-10 max-middle_screen:row-start-1 max-middle_screen:row-end-2 items-center">
            <h1 className="mb-10 text-5xl font-bold font-serif text-white text-center max-middle_screen:hidden max-md:block max-md:mb-0">
              Galareya
            </h1>
            <img
              src={img05}
              alt="galareya imgs"
              width={367}
              height={400}
              className="bg-white/30 rounded-2xl"
            />
            <img
              src={img06}
              alt="galareya imgs"
              width={367}
              height={400}
              className="bg-white/30 rounded-2xl"
            />
            <img
              src={img07}
              alt="galareya imgs"
              width={367}
              height={400}
              className="bg-white/30 rounded-2xl"
            />
            <img
              src={img08}
              alt="galareya imgs"
              width={367}
              height={400}
              className="bg-white/30 rounded-2xl"
            />
          </div>
          <div
            className={`flex flex-col gap-10 max-md:${show}  `}
          >
            <img
              src={img09}
              alt="galareya imgs"
              width={367}
              height={400}
              className="bg-white/30 rounded-2xl"
            />
            <img
              src={img11}
              alt="galareya imgs"
              width={367}
              height={400}
              className="bg-white/30 rounded-2xl"
            />
            <img
              src={img10}
              alt="galareya imgs"
              width={367}
              height={400}
              className="bg-white/30 rounded-2xl"
            />
            <img
              src={img11}
              alt="galareya imgs"
              width={367}
              height={400}
              className="bg-white/30 rounded-2xl"
            />
          </div>
        </div>
        <button
          onClick={showAll}
          className={`hidden w-2/3 max-middle_screen:block px-5 py-2 border-2 rounded-3xl text-white`}
        >
          {show === "hidden" ? "to'liq ko'rish" : "yashirish"}
        </button>
      </div>
      <StolBandQilish />
    </div>
  );
};

export default Galareya;
