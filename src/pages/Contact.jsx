import React from "react";

import loctionPic from "../assets/Vectorlocation.svg";
import watchSvg from "../assets/watchSvg.svg";
import telImg from "../assets/TelLogoSvg.svg";
import img04 from "../assets/galareya (3).png";
const Contact = () => {
  return (
    <div className="containerb py-20">
      <div className="flex justify-between items-center gap-20 p-10 bg-[#111] rounded-2xl max-middle_screen:flex-col max-md:gap-5">
        <div className="text-white space-y-5 flex flex-col max-middle_screen:items-center max-middle_screen:text-center">
          <h3 className="text-[65px] font-bold w-full max-my_screen:text-4xl max-md:text-2xl max-sm::text-sm">
            Biz Bilan Bog'laning
          </h3>
          <p className="text-white max-my_screen:text-sm max-my_screen:w-2/3 max-md:text-xs max-sm:text-[10px] max-sm:w-full">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            earum. Neque, suscipit sapiente! Qui minus ad voluptatibus incidunt
            delectus hic.
          </p>
          <a
            href="+99899453323"
            className="text-base text-white font-semibold flex items-center justify-start   max-lg:gap-1 max-my_screen:text-sm  max-sm:text-[10px] mb-5"
          >
            <div className="w-5 mr-3">
              <img src={telImg} alt="Telefon svg" className="max-lg:w-5" />
            </div>
            +998 678 45 96
          </a>
          <address className="flex items-start justify-start gap-5 text-white mb-5 max-md:hidden">
            <div className="w-16">
              <img src={loctionPic} alt="location svg" />
            </div>
            <div className="text-start">
              Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet
              consectetur adipisicing.
            </div>
          </address>
          <p className="flex items-center text-white gap-5 max-md:text-[10px]">
            <span className="w-5">
              <img src={watchSvg} alt="soat svg" />
            </span>
            <span>Ish Vaqti 12:00 | 00:00</span>
          </p>
          <address className="flex items-start justify-start gap-5 text-white mb-5">
            <div className="w-16">
              <img src={loctionPic} alt="location svg" />
            </div>
            <div className="text-start">
              Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet
              consectetur adipisicing.
            </div>
          </address>
        </div>
        <div className="w-1/2 max-md:w-full">
          <img
            src={img04}
            className="w-full"
            width={353}
            height={387}
            alt="kontakt img"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
