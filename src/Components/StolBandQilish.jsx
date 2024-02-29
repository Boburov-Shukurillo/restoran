import React, { useState } from "react";

// rasimlar
import loctionPic from "../assets/Vectorlocation.svg";
import watchSvg from "../assets/watchSvg.svg";
import telImg from "../assets/TelLogoSvg.svg";
import axios from "axios";


const StolBandQilish = () => {
  const [name, setName] = useState("");
  const [tel, setNumber] = useState("");
  const StolBandQilish = (e) => {
    e.preventDefault();
    if (name.trim() === "" || tel.trim() === "") {
      alert("Malumotlar To'liq Emas");
    } else {
      const telegram_bot_id = "6831636523:AAH-He85gM2AVkPJFd6_DRtHWHJD5bFb9EA";
      const chat_id = "6076096557";

      const telegramMessage = `👤 Ismi: ${name}\n\n 📱 Telefon-Raqam: ${tel}\n\n`;

      axios.post(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
        chat_id,
        text: telegramMessage,
      });
      setName("");
      setNumber("");
      alert("Malumot yuborildi");
    }
  };

  return (
    <div className="containerb ">
      <div className="flex items-center  justify-between gap-10  p-20 rounded-2xl bg-[#181818] bg-gradient-to-br from-[#181818] to-[#2d2d2d] max-middle_screen:flex-col max-md:text-center max-middle_screen:gap-5 max-md:py-10 max-md:px-5">
        <div className="w-full h-full flex flex-col justify-between max-middle_screen:items-center">
          <h3 className="vetirino text-[65px] font-bold text-white mb-10 max-my_screen:text-3xl">
            Stol Band Qilish
          </h3>
          <p className="gothik w-2/3 text-lg font-bold text-[#999] mb-5 max-my_screen:text-base max-middle_screen:text-sm max-middle_screen:w-3/4 max-sm:w-full max-lg:text-xs">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            possimus expedita quos illum nihil quis culpa ab dolore nemo quas?
          </p>
          <a
            target="_blank"
            href="https://t.me/BoburovSH"
            className="max-md:hidden text-xl text-white font-bold flex items-center justify-start gap-5  max-lg:gap-1 max-middle_screen:text-base mb-5 max-xl:text-sm"
          >
            <img
              width={32}
              height={32}
              src={telImg}
              alt="Telefon svg"
              className="max-lg:w-5"
            />
            +998 (99) 678 45 96
          </a>
          <a href="https:/google.map.com" target="_blank">
            <address className="w-2/3 max-middle_screen:hidden flex items-center justify-start gap-5 text-[#888] mb-5 " >
              <img
                width={27}
                height={34}
                src={loctionPic}
                alt="location picture"
              />
              <span className="text-xl max-xl:text-sm">
                Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet
                consectetur adipisicing.
              </span>
            </address>
          </a>
          <p className="max-md:hidden flex items-center text-xl text-[#888] gap-5 ">
            <img src={watchSvg} width={28} height={29} alt="clock svg" />
            <span>Ish Vaqti 12:00 | 00:00</span>
          </p>
        </div>
        <form
          onSubmit={StolBandQilish}
          className="h-full w-2/3 flex flex-col max-md:w-full items-center max-middle_screen:justify-between justify-between gap-7 max-md:gap-10"
        >
          <input
            className="w-full rounded-2xl px-5 py-6 max-middle_screen:py-4 max-middle_screen:w-3/4 max-md:w-3/4 max-sm:w-full max-sm:py-5 max-sm:rounded-2xl bg-white/25 text-white focus-within:outline-orange focus:shadow-lg focus:shadow-yellow-700 transition-all"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ism"
          />
          <input
            className="w-full rounded-2xl px-5 py-6 max-middle_screen:py-4 max-middle_screen:w-3/4 max-md:w-3/4 max-sm:w-full max-sm:py-5 max-sm:rounded-2xl bg-white/25 text-white focus-within:outline-orange focus:shadow-lg focus:shadow-yellow-700 transition-all "
            type="telefon raqamingiz"
            pattern="(\+998|8)[\- ]?\d{2}[\- ]?\d{3}[\- ]?\d{2}[\- ]?\d{2}"
            required
            value={tel}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Telefon Raqam"
          />
          <button
            type="submit"
            className="soyalar w-full py-5 rounded-2xl bg-[#FD7511] text-white text-xl uppercase max-middle_screen:w-3/4 max-md:w-3/4 max-sm:w-full max-sm:text-lg max-sm:tracking-wider"
          >
            Yuborish
          </button>
        </form>
        <a
          target="_blank"
          href="https:/t.me/BoburovSh"
          className="w-3/4 max-mini_screen:w-full max-md:flex hidden text-sm text-white font-bold max-md:items-center max-md:justify-start max-md:gap-5  max-lg:gap-1 "
        >
          <img
            width={32}
            height={32}
            src={telImg}
            alt="Telefon svg"
            className="w-7"
          />
          +998 (99) 678 45 96
        </a>
        <a href="https:/google.napc" className="hidden w-full max-md:flex items-center justify-center max-middle_screen:hidden">
          <address className="w-3/4 max-mini_screen:w-full max-middle_screen:flex hidden items-start justify-start gap-5 text-start text-[#888] ">
            <img
              width={27}
              height={34}
              src={loctionPic}
              alt="location picture"
            />
            <span className="text-sm">
              Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet
              consectetur adipisicing.
            </span>
          </address>
        </a>
        <p className="w-3/4 max-mini_screen:w-full max-md:flex hidden items-center text-sm text-[#888] gap-5 ">
          <img src={watchSvg} width={28} height={29} alt="clock svg" />
          <span>Ish Vaqti 12:00 | 00:00</span>
        </p>
      </div>
    </div>
  );
};

export default StolBandQilish;
