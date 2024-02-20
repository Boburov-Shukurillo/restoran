import React, { useState } from "react";

// rasimlar
import loctionPic from "../assets/Vectorlocation.svg";
import watchSvg from "../assets/watchSvg.svg";
import telImg from "../assets/TelLogoSvg.svg";
import axios from "axios";
import choq from "../assets/choqs.svg";
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
      alert("Malumot yuborildi");
    }
  };

  return (
    <div className="containerb ">
      <div className="grid grid-cols-2 gap-10  p-20 rounded-2xl bg-[#181818] max-middle_screen:grid-cols-1 max-md:text-center max-md:py-10 max-md:px-5">
        <div className="w-full h-full flex flex-col justify-between max-middle_screen:items-center">
          <h3 className="text-[65px] font-bold text-white mb-10 max-my_screen:text-3xl">
            Stol Band Qilish
          </h3>
          <p className="w-full text-lg font-bold text-[#999] mb-5 max-my_screen:text-base max-middle_screen:text-sm max-middle_screen:w-3/4 max-sm:w-full">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            possimus expedita quos illum nihil quis culpa ab dolore nemo quas?
          </p>
          <a
            href="+99899453323"
            className="max-md:hidden text-base text-white font-bold flex items-center justify-start gap-5  max-lg:gap-1 max-middle_screen:text-base mb-5"
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
          <address className="max-middle_screen:hidden flex items-center justify-start gap-5 text-[#888] mb-5">
            <img
              width={27}
              height={34}
              src={loctionPic}
              alt="location picture"
            />
            <div className="flex flex-col">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </div>
          </address>
          <p className="max-md:hidden flex items-center text-[#888] gap-5 ">
            <img src={watchSvg} width={28} height={29} alt="clock svg" />
            <span>Ish Vaqti 12:00 | 00:00</span>
          </p>
        </div>
        <form
          onSubmit={StolBandQilish}
          className="h-full flex flex-col w-full max-md:w-full items-center max-middle_screen:justify-between justify-evenly gap-7"
        >
          <input
            className="w-full rounded-2xl px-5 py-6 max-middle_screen:py-4 max-middle_screen:w-3/4 max-md:w-3/4 max-sm:w-full max-sm:py-2 max-sm:rounded-md"
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            placeholder="Ism"
          />
          <input
            className="w-full rounded-2xl px-5 py-6 max-middle_screen:py-4 max-middle_screen:w-3/4 max-md:w-3/4 max-sm:w-full max-sm:py-2 max-sm:rounded-md "
            type="telefon raqamingiz"
            pattern="(\+998|8)[\- ]?\d{2}[\- ]?\d{3}[\- ]?\d{2}[\- ]?\d{2}"
            required
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Telefon Raqam"
          />
          <button
            type="submit"
            className="soyalar w-full py-2.5 rounded-2xl bg-[#FD7511] text-white text-xl uppercase max-middle_screen:w-3/4 max-md:w-3/4 max-sm:w-full max-sm:text-lg max-sm:tracking-wider"
          >
            Yuborish
          </button>
        </form>
      </div>
    </div>
  );
};

export default StolBandQilish;
