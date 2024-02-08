import React from "react";

// rasimlar
import loctionPic from "../assets/Vectorlocation.svg";
import watchSvg from "../assets/watchSvg.svg";
import telImg from "../assets/TelLogoSvg.svg";

const StolBandQilish = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-10 items-end px-10 py-10 rounded-2xl bg-[#181818] max-md:grid-cols-1 max-md:text-center">
      <div className="w-full h-full flex flex-col justify-between ">
        <h3 className="text-[65px] font-bold text-white mb-10 max-my_screen:text-3xl">
          Stol Band Qilish
        </h3>
        <p className="text-lg font-bold text-[#999] mb-5 max-my_screen:text-base max-middle_screen:text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
          possimus expedita quos illum nihil quis culpa ab dolore nemo quas?
        </p>
        <a
          href="+99899453323"
          className="max-md:hidden text-base text-white font-bold flex items-center justify-start gap-5  max-lg:gap-1 max-middle_screen:text-base mb-5"
        >
          <img src={telImg} alt="Telefon svg" className="max-lg:w-5" />
          +998 (99) 678 45 96
        </a>
        <address className="max-md:hidden flex items-center justify-start gap-5 text-[#888] mb-5">
          <img src={loctionPic} alt="" />
          <div className="flex flex-col">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
          </div>
        </address>
        <p className="max-md:hidden flex items-center text-[#888] gap-5 ">
          <img src={watchSvg} alt="" />
          <span>Ish Vaqti 12:00 | 00:00</span>
        </p>
      </div>
      <form
        action=""
        className="h-full flex flex-col w-full max-md:w-full justify-end items-end gap-7"
      >
        <input
          className="w-full rounded-2xl px-5 py-6 mb-3"
          type="text"
          required
          placeholder="Ism"
        />
        <input
          className="w-full rounded-2xl px-5 py-6 mb-3"
          type="telefon raqamingiz"
          pattern="+998"
          required
          placeholder="Telefon Raqam"
        />
        <button
          type="submit"
          className="w-full border-2 px-5 py-6 rounded-2xl bg-orange shadow-lg shadow-orange text-white text-2xl font-semibold uppercase"
        >
          Yuborish
        </button>
      </form>
    </div>
  );
};

export default StolBandQilish;
