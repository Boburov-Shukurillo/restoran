import React from "react";

import loctionPic from "../assets/Vectorlocation.svg";
import watchSvg from "../assets/watchSvg.svg";
import telImg from "../assets/TelLogoSvg.svg";
import img04 from "../assets/galareya (3).png";

const Contact = () => {
  return (
    <div className="containerb py-10">
      <div className="flex justify-between items-center gap-20 p-5 pl-20 bg-[#2a2a2a] rounded-[30px] max-middle_screen:flex-col max-md:gap-5">
        <div className="w-2/3 text-white gap-y-5 flex flex-col max-middle_screen:items-center max-middle_screen:text-center">
          <h3 className="text-[65px] font-bold w-full max-my_screen:text-4xl max-md:text-2xl max-sm::text-sm">
            Biz Bilan Bog'laning
          </h3>
          {/* biz bilan bog'laning */}
          <p className="text-white max-my_screen:text-sm max-my_screen:w-2/3 max-md:text-xs max-sm:text-[10px] max-sm:w-full">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            earum. Neque, suscipit sapiente! Qui minus ad voluptatibus incidunt
            delectus hic.
          </p>
          {/* bizning telefon raqam */}
          <a
            href="+99899453323"
            className="w-full text-base text-white font-semibold flex items-center justify-start   max-lg:gap-1 max-my_screen:text-sm  max-sm:text-sm max-middle_screen:w-1/2 max-md:w-full"
          >
            <div className="w-10 mr-3">
              <img src={telImg} alt="Telefon svg" className="max-lg:w-7" />
            </div>
            +998 678 45 96
          </a>

          <a target="_blank" href="https://google.map/">
            <address className="flex items-start justify-start gap-2 text-white mb-5 max-middle_screen:hidden">
              <div className="w-10">
                <img src={loctionPic} alt="location svg" />
              </div>
              <div className="text-start w-1/2">
                Andijon vilayati Baliqchi Tumani
              </div>
            </address>
          </a>
          {/* ish vaqti */}
          <p className="w-full flex items-center text-white gap-5 max-md:text-[10px] max-middle_screen:w-1/2 max-md:w-full ">
            <span className="w-10">
              <img src={watchSvg} alt="soat svg" />
            </span>
            <span className="text-lg max-md:text-sm">Ish Vaqti 12:00 | 00:00</span>
          </p>
          {/*bizning manzil */}
          <address className="w-full hidden max-middle_screen:flex items-start justify-start gap-5 text-white max-middle_screen:w-1/2 max-sm:w-full">
            <div className="w-10">
              <img src={loctionPic} alt="location svg" />
            </div>
            <div className="text-start ">Andijon viloyati Baliqchi tumani</div>
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
