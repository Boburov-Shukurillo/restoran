import React from "react";
import StolBandQilish from "../Components/StolBandQilish";

const About = () => {
  return (
    <div className="h-[100%]  bg-[#1E1E1E] containerb">
      <div className="nimadi w-full py-44 text-white">
        <h1 className="text-[65px] font-semibold mb-10">Restoran Haqida</h1>
        <p className="w-1/2 mb-5 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus modi
          excepturi cum soluta id eius sapiente hic, illo tempora quasi
          cupiditate quaerat repellat numquam nostrum atque, impedit iure
          officia quidem omnis quo fugiat sit? Perspiciatis ea dolorem illum
          officia repudiandae soluta quos obcaecati est odit sunt! Nisi, velit
          dolor? Nostrum ad odit fuga facilis voluptas blanditiis at qui,
          quibusdam, officia omnis alias cum distinctio deleniti placeat quasi
          ex sed praesentium!
        </p>
        <p className="w-1/2 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          voluptatibus illum, fugiat ullam accusamus esse non quidem incidunt
          odit explicabo aliquid a ipsa dolorum optio recusandae? Minus quae quo
          blanditiis itaque repudiandae, aut a, at repellendus neque voluptatem
          accusantium reiciendis?
        </p>
      </div>

      <ul className="grid grid-cols-4 gap-6 w-full h-full py-2 bg-[#1E1E1E]">
        <li className="text-center px-5 pt-10 pb-5 w-full h-full bg-[#d9d9d918] relative rounded-xl ">
          <span className="w-20 h-20 right-1/3 -top-[15%] border-[10px] bg-[#323232] rounded-full border-[#1E1E1E] absolute flex items-center justify-center text-2xl font-bold text-[#E6783F]">
            1
          </span>
          <h3 className="text-[25px] text-white font-semibold mb-6">
            Lorem, ipsum dolor.
          </h3>
          <p className="text-sm text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            consequuntur dicta veritatis, odio ipsa architecto doloribus
            provident autem quod? Aliquid accusamus omnis vero nihil culpa
            doloremque quos, iusto vel quasi.
          </p>
        </li>
        <li className="text-center px-5 pt-10 pb-5 w-full h-full bg-[#d9d9d918] relative rounded-xl">
          <span className="w-20 h-20 right-1/3 -top-[15%] border-[10px] bg-[#323232] rounded-full border-[#1E1E1E] absolute flex items-center justify-center text-2xl font-bold text-[#E6783F]">
            2
          </span>
          <h3 className="text-[25px] text-white font-semibold mb-6">
            Lorem, ipsum dolor.
          </h3>
          <p className="text-sm text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            consequuntur dicta veritatis, odio ipsa architecto doloribus
            provident autem quod? Aliquid accusamus omnis vero nihil culpa
            doloremque quos, iusto vel quasi.
          </p>
        </li>
        <li className="text-center px-5 pt-10 pb-5 w-full h-full bg-[#d9d9d918] relative rounded-xl">
          <span className="w-20 h-20 right-1/3 -top-[15%] border-[10px] bg-[#323232] rounded-full border-[#1E1E1E] absolute flex items-center justify-center text-2xl font-bold text-[#E6783F]">
            3
          </span>
          <h3 className="text-[25px] text-white font-semibold mb-6">
            Lorem, ipsum dolor.
          </h3>
          <p className="text-sm text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            consequuntur dicta veritatis, odio ipsa architecto doloribus
            provident autem quod? Aliquid accusamus omnis vero nihil culpa
            doloremque quos, iusto vel quasi.
          </p>
        </li>
        <li className="text-center px-5 pt-10 pb-5 w-full h-full bg-[#d9d9d918] relative rounded-xl">
          <span className="w-20 h-20 right-1/3 -top-[15%] border-[10px] bg-[#323232] rounded-full border-[#1E1E1E] absolute flex items-center justify-center text-2xl font-bold text-[#E6783F]">
            4
          </span>
          <h3 className="text-[25px] text-white font-semibold mb-6">
            Lorem, ipsum dolor.
          </h3>
          <p className="text-sm text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            consequuntur dicta veritatis, odio ipsa architecto doloribus
            provident autem quod? Aliquid accusamus omnis vero nihil culpa
            doloremque quos, iusto vel quasi.
          </p>
        </li>
      </ul>

      <div className="">
        <h2>Bizning Oshxona Rasimlari</h2>
        <div className=""></div>
      </div>

      <StolBandQilish />
    </div>
  );
};

export default About;
