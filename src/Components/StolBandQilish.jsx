import React from "react";

const StolBandQilish = () => {
  return (
    <div className="w-full flex items-center justify-between px-10 py-8 rounded-2xl bg-[#151515]">
      <div className="w-1/2 h-full flex flex-col justify-between">
        <h3 className="text-2xl font-bold text-white mb-10">
          Stol Band Qilish
        </h3>
        <p className="text-lg font-bold text-white mb-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
          possimus expedita quos illum nihil quis culpa ab dolore nemo quas?
        </p>
        <address>
          <img src="" alt="" />
          <div className="flex flex-col">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
          </div>
        </address>
        <p>
          <img src="" alt="" />
          <span>Ish Vaqti 12:00 | 00:00</span>
        </p>
      </div>
      <form action="" className="flex flex-col">
        <input
          className="rounded-2xl px-10 py-5 mb-3"
          type="text"
          required
          placeholder="ismingiz"
        />
        <input
          className="rounded-2xl px-10 py-5 mb-3"
          type="telefon raqamingiz"
          pattern="+998"
          required
          placeholder="tel"
        />
        <button
          type="submit"
          className="px-10 py-5 rounded-2xl bg-orange shadow-lg shadow-orange text-white text-2xl font-semibold uppercase"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default StolBandQilish;
