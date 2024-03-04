import React from "react";
import StolBandQilish from "../Components/StolBandQilish";
import { Swiper, SwiperSlide } from "swiper/react";
import { foods, imgs, slideTitles } from "../data";
import { Navigate } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";

const About = () => {
  return (
    <div className="h-[100%]  bg-[#1E1E1E] pb-20">
      <div className="nimadi w-full">
        <div className="w-full h-28 max-md:h-20 mb-24"></div>
        <div className="containerb w-full py-12  text-white max-middle_screen:text-center max-middle_screen:flex max-middle_screen:flex-col max-middle_screen:items-center">
          <h1 className="text-[65px] font-semibold mb-10 max-middle_screen:text-4xl">
            Restoran Haqida
          </h1>
          <p className="w-1/2 mb-5 text-xl max-middle_screen:w-2/3 max-md:w-full max-md:text-base">
            Biznig restoran dunyodagi barcha restoranlar bilan raqobatlash oladi
            va bizda eng hamyobop mazali taomlar faqat bizda kelib olangiz bilan
            birgalikda yoki do'stlaringiz bilan keilb taomlanishigiz mumkun 
          </p>
          <p className="w-1/2 text-xl max-middle_screen:w-2/3 max-md:w-full max-md:text-base">
            Agar restoranimiz sizga maqul bo'lgan bo'lsa oilangiz bilan yoki
            o'zinggiz kelib dam olib ketishingiz mumkun bizning restoranda har
            hil taomlar mavjud bo'lib bu tomlar mijozlar tomonidan maqulanadi va
            dunyodagi eng yaxshi shifokorlar tomonidan tavsiya etiladi
          </p>
        </div>
      </div>

      <ul className="containerb  grid grid-cols-4 gap-6 w-full h-full py-20 bg-[#1E1E1E] max-lg:grid-cols-3 max-middle_screen:grid-cols-2 max-middle_screen:gap-20 max-sm:grid-cols-1">
        {slideTitles.map((slide) => {
          if (slide.id < 5) {
            return (
              <li key={slide.id} className="text-center px-10 pt-16 pb-10 w-full h-full bg-[#d9d9d918] relative rounded-xl flex items-center flex-col">
                <span className="w-20 h-20 -top-[15%] border-[10px] bg-[#323232] rounded-full border-[#1E1E1E] absolute flex items-center justify-center text-2xl font-bold text-[#E6783F]">
                  {slide.id}
                </span>
                <h3 className="text-[25px] text-white font-semibold mb-6">
                  {slide.title}
                </h3>
                <p className="text-sm text-white">{slide.text}</p>
              </li>
            );
          }
        })}
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
          className="swiperAbout max-middle_screen:hidden"
        >
          {foods.map((imgs) => {
            return (
              <SwiperSlide key={imgs.id}>
                <img
                  src={imgs.img}
                  width={565}
                  height={512}
                  alt={imgs.name + "ning rasmi"}
                  className="w-full h-full object-cover rounded-lg "
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={true}
          modules={[Pagination]}
          className="swoperL2 mb-20 hidden max-middle_screen:block max-md:mb-0 w-96 h-96 max-sm:w-full"
        >
          {imgs.map((slideTitle, i) => {
            return (
              <SwiperSlide
                key={i}
                className="w-full flex flex-col items-center justify-end"
              >
                <img
                  src={slideTitle.img}
                  width={300}
                  height={200}
                  className="w-full h-full max-md:h-full rounded-3xl mb-2 object-cover"
                  alt={slideTitle.title + " png"}
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
