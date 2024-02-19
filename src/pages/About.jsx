import React from "react";
import StolBandQilish from "../Components/StolBandQilish";
import { Swiper, SwiperSlide } from "swiper/react";
import { foods } from "../data";
import { Navigate } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
const About = () => {
  return (
    <div className="h-[100%]  bg-[#1E1E1E] ">
      <div className="nimadi w-full">
        <div className="containerb w-full py-44 text-white max-middle_screen:text-center max-middle_screen:flex max-middle_screen:flex-col max-middle_screen:items-center">
          <h1 className="text-[65px] font-semibold mb-10 max-middle_screen:text-4xl">
            Restoran Haqida
          </h1>
          <p className="w-1/2 mb-5 text-xl max-middle_screen:w-2/3 max-md:w-full max-md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            modi excepturi cum soluta id eius sapiente hic, illo tempora quasi
            cupiditate quaerat repellat numquam nostrum atque, impedit iure
            officia quidem omnis quo fugiat sit? Perspiciatis ea dolorem illum
            officia repudiandae soluta quos obcaecati est odit sunt! Nisi, velit
            dolor? Nostrum ad odit fuga facilis voluptas blanditiis at qui,
            quibusdam, officia omnis alias cum distinctio deleniti placeat quasi
            ex sed praesentium!
          </p>
          <p className="w-1/2 text-xl max-middle_screen:w-2/3 max-md:w-full max-md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            voluptatibus illum, fugiat ullam accusamus esse non quidem incidunt
            odit explicabo aliquid a ipsa dolorum optio recusandae? Minus quae
            quo blanditiis itaque repudiandae, aut a, at repellendus neque
            voluptatem accusantium reiciendis?
          </p>
        </div>
      </div>

      <ul className="containerb  grid grid-cols-4 gap-6 w-full h-full py-20 bg-[#1E1E1E] max-lg:grid-cols-3 max-middle_screen:grid-cols-2 max-middle_screen:gap-20 max-sm:grid-cols-1">
        <li className="text-center px-5 pt-10 pb-5 w-full h-full bg-[#d9d9d918] relative rounded-xl flex items-center flex-col">
          <span className="w-20 h-20 -top-[15%] border-[10px] bg-[#323232] rounded-full border-[#1E1E1E] absolute flex items-center justify-center text-2xl font-bold text-[#E6783F]">
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
        <li className="text-center px-5 pt-10 pb-5 w-full h-full bg-[#d9d9d918] relative rounded-xl flex items-center flex-col">
          <span className="w-20 h-20 -top-[15%] border-[10px] bg-[#323232] rounded-full border-[#1E1E1E] absolute flex items-center justify-center text-2xl font-bold text-[#E6783F]">
            2
          </span>
          <h4 className="text-[25px] text-white font-semibold mb-6">
            Lorem, ipsum dolor.
          </h4>
          <p className="text-sm text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            consequuntur dicta veritatis, odio ipsa architecto doloribus
            provident autem quod? Aliquid accusamus omnis vero nihil culpa
            doloremque quos, iusto vel quasi.
          </p>
        </li>
        <li className="text-center px-5 pt-10 pb-5 w-full h-full bg-[#d9d9d918] relative rounded-xl flex items-center flex-col">
          <span className="w-20 h-20 -top-[15%] border-[10px] bg-[#323232] rounded-full border-[#1E1E1E] absolute flex items-center justify-center text-2xl font-bold text-[#E6783F]">
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
        <li className="text-center px-5 pt-10 pb-5 w-full h-full bg-[#d9d9d918] relative rounded-xl flex items-center flex-col">
          <span className="w-20 h-20 -top-[15%] border-[10px] bg-[#323232] rounded-full border-[#1E1E1E] absolute flex items-center justify-center text-2xl font-bold text-[#E6783F]">
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

      <div className="containerb space-y-10 py-10">
        <h1 className="text-4xl text-white text-center font-bold">
          Bizning Oshxona Rasimlari
        </h1>
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          navigation={true}
          modules={[Navigation]}
        >
          {foods.map((imgs) => {
            return (
              <SwiperSlide key={imgs.id}>
                <img
                  src={imgs.img}
                  width={565}
                  height={512}
                  alt={imgs.name + "ning rasmi"}
                  className="w-full rounded-lg max-middle_screen:hidden"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
        >
          {foods.map((imgs) => {
            return (
              <SwiperSlide key={imgs.id}>
                <img
                  src={imgs.img}
                  alt={imgs.name + "ning rasmi"}
                  className="w-full rounded-lg hidden max-middle_screen:block"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <StolBandQilish />
    </div>
  );
};

export default About;
