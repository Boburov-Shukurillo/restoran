import React from "react";

import loctionPic from "../assets/Vectorlocation.svg";
import watchSvg from "../assets/watchSvg.svg";
import telImg from "../assets/TelLogoSvg.svg";
import img04 from "../assets/galareya (3).png";
const Contact = () => {
  return (
    <div className="containerb py-20">
      <div className="flex justify-between items-center gap-20 p-10 bg-[#111] rounded-2xl ">
        <div className="text-white space-y-5">
          <h3 className="text-[65px] font-bold w-full">Biz Bilan Bog'laning</h3>
          <p className="text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            earum. Neque, suscipit sapiente! Qui minus ad voluptatibus incidunt
            delectus hic.
          </p>
          <a
            href="+99899453323"
            className="text-base text-white font-semibold flex items-center justify-start gap-5  max-lg:gap-1 max-my_screen:text-sm  max-lg:text-[10px] mb-5"
          >
            <div className="w-5">
              <img src={telImg} alt="Telefon svg" className="max-lg:w-5" />
            </div>
            +998 678 45 96
          </a>
          <address className="flex items-center justify-start gap-5 text-white mb-5">
            <div className="w-5">
              <img src={loctionPic} alt="" />
            </div>
            <div className="flex flex-col">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </div>
          </address>
          <p className="flex items-center text-white gap-5 ">
            <div className="w-5">
              <img src={watchSvg} alt="" />
            </div>
            <span>Ish Vaqti 12:00 | 00:00</span>
          </p>
        </div>
        <div className="w-1/2">
          <img src={img04} className="w-full" width={300} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
