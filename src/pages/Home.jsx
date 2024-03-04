import React, { useEffect, useState } from "react";
import StolBanqilish from "../Components/StolBandQilish";

// malumotlar bazasi
import { imgs, slideTitles } from "../data";

// rasimlar
import Rating from "../assets/Rating.svg";
import dumaloqXinkalin from "../assets/xinkalin.png";
import smXinkalin from "../assets/xinkalin500.png";
import choq from "../assets/choq.svg";
import kokat from "../assets/kokat.svg";
import pic1 from "../assets/pic (1).png";
import pic2 from "../assets/pic (2).png";
import pic3 from "../assets/pic (3).png";
import pic4 from "../assets/pic (4).png";
import star from "../assets/Star.svg";

// swiper slide va bazi kutubhonalar
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import arrow from "../assets/Arrow 4.svg";

const Home = ({ data, setCart }) => {
  // menudagi taomlarni filter qilib chiqarib beradi
  const [filter, setFilter] = useState("food");
  const [show, setShow] = useState(4);
  const [slideShow, setSlideShow] = useState(3);

  // kartga qoshish
  const handleBuy = (i) => {
    if (data[i].isTrue === true) {
      toast.error(`Bu Taom Cartda Mavjud`, {
        position: "bottom-right",
        autoClose: 500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.success(`Cartga qo'shildi`, {
        position: "bottom-right",
        autoClose: 500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      data[i].isTrue = true;
      const beTrust = data.filter((e) => e.isTrue === true);
      setCart(beTrust);
    }
  };

  const filterFoods = () => {
    setFilter("food");
  };
  const filterDrinks = () => {
    setFilter("drink");
  };
  const filterDesert = () => {
    setFilter("desert");
  };
  const filterSalat = () => {
    setFilter("salat");
  };
  const filterWithoutOil = () => {
    setFilter("withoutOil");
  };

  const stolBandQilish = () => {
    window.scrollTo({ left: 0, top: "4000", behavior: "smooth" });
  };
  const toTop = () => {
    window.scrollTo({ left: 0, top: "0", behavior: "smooth" });
  };

  return (
    <div className="pb-20">
      <ToastContainer />

      <div className="hero overflow-hidden pb-5  bg-[#141414]">
        <div className="containerb relative ">
          <div className="w-full h-28 max-sm:h-20 max-md:mb-5"></div>
          <div className="w-1/2 h-full flex items-center  py-44 max-middle_screen:w-full max-md:p-0 max-middle_screen:py-5">
            <div className="text-white  h-full flex flex-col justify-between items-start max-middle_screen:items-center gap-y-10 max-md:gap-y-4">
              <h1 className="vetirino transition-all text-[130px]  max-middle_screen:text-[75px]  font-bold max-md:text-center max-md:text-6xl max-sm:text-5xl leading-[90px] max-middle_screen:leading-10 max-md:leading-8 max-sm:leading-6">
                Restoran <br />
                <span className="text-[75px] max-middle_screen:text-[45px] max-md:text-3xl max-sm:text-2xl">
                  kavkazniy kuxni
                </span>
              </h1>
              <p className="w-full text-2xl gothik 
              max-middle_screen:text-lg max-md:w-full max-middle_screen:text-center max-mini_screen:text-base max-md:leading-2">
                bizning restoranda har hil taomlar mavjud bo'lib bu tomlar
                mijozlar tomonidan maqulanadi va dunyodagi eng yaxshi
                shifokorlar tomonidan tavsiya etiladi va bizda har chorshanba kuni 50% gacha chegirma mavjud. 
              </p>
              <div className="max-middle_screen:flex items-end justify-center hidden max-middle_screen:relative w-full max-sm:w-2/3 max-sm:h-3/4">
                <img
                  src={kokat}
                  width={30}
                  className="w-20 absolute left-1/4 max-sm:left-0 transition-all"
                  alt="ko'kat"
                />
                <img
                  src={smXinkalin}
                  className="w-1/2 h-1/2 max-sm:w-full transition-all"
                  width={200}
                  height={206}
                  alt="xinkalin"
                />
              </div>
              <button
                onClick={stolBandQilish}
                className="w-3/5 soyalar px-20 py-6 bg-gradient-to-tl from-[#D9782A] to-[#F49549] text-white font-bold rounded-3xl text-2xl max-sm:text-lg max-md:px-5 max-middle_screen:w-1/2 max-sm:w-2/3 max-sm:py-3 max-sm:rounded-xl"
              >
                Stol Band Qilish
              </button>
            </div>
            <div className="max-lg:hidden">
              <div className="w-[700] h-[780px] absolute bottom-0 -right-1/3 z-20 max-middle_screen:hidden ">
                <img
                  src={dumaloqXinkalin}
                  alt="xinkalin png"
                  height={800}
                  width={800}
                  className="transition-all -cover w-full h-full"
                />
              </div>
              <img
                src={choq}
                alt="cho'g' svg"
                className="transition-all w-9/12 h-5/6 absolute bottom-0 -right-[20%]  max-my_screen:hidden"
              />
              <img
                src={kokat}
                alt="Ko'kat Png"
                width={100}
                height={100}
                className="transition-all w-52 absolute left-3/4 z-30 bottom-[10%] "
              />
            </div>
          </div>
        </div>
      </div>

      {/* restoran haqida qisqacha */}
      <div className="containerb flex gap-5 max-middle_screen:flex-col h-full py-10 justify-between max-middle_screen:gap-y-10 items-center">
        <div className="w-2/5 text-white max-middle_screen:items-center max-middle_screen:text-center flex flex-col justify-between max-middle_screen:w-3/4 max-md:w-full max-middle_screen:gap-y-5 gap-y-10">
          <h2 className="vetirino text-[65px] max-lg:text-2xl max-md:text-2xl uppercase">
            Restoran Haqida
          </h2>
          <p className="gothik text-lg fon-normal max-lg:w-full max-middle_screen:w-3/4 max-md:w-full  max-md:text-sm max-lg:text-base max-mini_screen:text-xs max-mini_screen:leading-4">
            bizning restoranda har hil taomlar mavjud bo'lib bu tomlar mijozlar
            tomonidan maqulanadi va dunyodagi eng yaxshi shifokorlar tomonidan
            tavsiya etiladi.
          </p>
          <p className="gothik text-lg fon-normal max-lg:w-full max-middle_screen:w-3/4 max-md:w-full  max-md:text-sm max-lg:text-base max-mini_screen:text-xs max-mini_screen:leading-4">
            Agar restoranimiz sizga maqul bo'lgan bo'lsa oilangiz bilan yoki
            o'zinggiz kelib dam olib ketishingiz mumkun bizning restoranda har
            hil taomlar mavjud bo'lib bu tomlar mijozlar tomonidan maqulanadi va
            dunyodagi eng yaxshi shifokorlar tomonidan tavsiya etiladi
          </p>
          <p className="gothik text-lg fon-normal max-lg:w-full max-middle_screen:w-3/4 max-md:w-full  max-md:text-sm max-lg:text-base max-mini_screen:text-xs max-mini_screen:leading-4">
            bizning restoranda har hil taomlar mavjud bo'lib bu tomlar mijozlar
            tomonidan maqulanadi va dunyodagi eng yaxshi shifokorlar tomonidan
            tavsiya etiladi`
          </p>
          <div className="grid grid-cols-2  gap-2 max-md:gap-0">
            <div className="flex items-center mb-0 gap-5 max-middle_screen:gap-2 max-middle_screen:flex-col max-middle_screen:w-full max-sm:w-full justify-center">
              <img src={star} alt="satar svg" className="w-1/6" />
              <p className="w-3/4 text-base leading-5 max-lg:text-sm max-lg:font-light max-md:text-xs max-md:w-4/5 font-bold ">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <div className="flex items-center mb-0 gap-5 max-middle_screen:gap-2 max-middle_screen:flex-col max-middle_screen:w-full max-sm:w-full">
              <img src={star} alt="satar svg" className="w-1/6" />
              <p className="w-3/4 text-base leading-5 max-lg:text-sm max-lg:font-light max-md:text-xs max-md:w-4/5 font-bold ">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <div className="flex items-center mb-0 gap-5 max-middle_screen:gap-2 max-middle_screen:flex-col max-middle_screen:w-full max-sm:w-full">
              <img src={star} alt="satar svg" className="w-1/6" />
              <p className="w-3/4 text-base leading-5 max-lg:text-sm max-lg:font-light max-md:text-xs max-md:w-4/5 font-bold ">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <div className="flex items-center mb-0 gap-5 max-middle_screen:gap-2 max-middle_screen:flex-col max-middle_screen:w-full max-sm:w-full">
              <img src={star} alt="satar svg" className="w-1/6" />
              <p className="w-3/4 text-base leading-5 max-lg:text-sm max-lg:font-light max-md:text-xs max-md:w-4/5 font-bold ">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 grid grid-cols-2 gap-5 items-center max-middle_screen:hidden ">
          <div className="space-y-5 mt-20">
            <img
              src={pic1}
              className="rounded-xl shadow-2xl shadow-orange w-full"
              alt="grid pictures"
              width={280}
              height={303}
            />
            <img
              src={pic2}
              className="rounded-xl shadow-2xl shadow-orange w-full"
              alt="grid pictures"
              width={280}
              height={303}
            />
          </div>
          <div className="space-y-5">
            <img
              src={pic3}
              className="rounded-xl shadow-2xl shadow-orange w-full "
              alt="grid pictures"
              width={280}
              height={303}
            />
            <img
              src={pic4}
              className="rounded-xl shadow-2xl shadow-orange w-full"
              alt="grid pictures"
              width={280}
              height={303}
            />
          </div>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={true}
          modules={[Pagination]}
          className="swoperL2 mb-20 hidden max-middle_screen:block max-md:mb-0 w-96 h-96 max-sm:h-52 max-sm:w-full"
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

      {/* taom buyurtmal beriladiga joy */}
      <div className="bg max-max4k:bg-cover bg-contain">
        <div className="containerb  h-full bg-balck mb-20 py-24 max-middle_screen:p-0">
          <div className="bg-2 flex flex-col items-center py-20 gap-y-10">
            <div className="w-full flex flex-col items-center justify-between h-44 max-md:h-10 max-md:mb-0 max-md:justify-end">
              <h1 className="vetirino text-white text-6xl font-bold uppercase font-serif max-md:text-2xl">
                bizning menu
              </h1>
              <div className="max-md:hidden w-full flex justify-evenly gap-5 max-middle_screen:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 ">
                <span
                  onClick={filterSalat}
                  className={`flex flex-col items-center justify-center w-64 h-16 text-base cursor-pointer rounded-full border-[1px] border-[#6D6D6E]  text-white max-my_screen:text-xs text-center salom`}
                >
                  Salatlar
                </span>
                <span
                  onClick={filterFoods}
                  className={`flex flex-col items-center justify-center w-64 h-16 text-base cursor-pointer rounded-full border-[1px] border-[#6D6D6E]  text-white max-my_screen:text-xs text-center salom`}
                >
                  Mahsus Taomlar
                </span>
                <span
                  onClick={filterWithoutOil}
                  className={`flex flex-col items-center justify-center w-64 h-16 text-base cursor-pointer rounded-full border-[1px] border-[#6D6D6E]  text-white max-my_screen:text-xs text-center salom`}
                >
                  Yog'siz Taomlar
                </span>
                <span
                  onClick={filterDrinks}
                  className={`flex flex-col items-center justify-center w-64 h-16 text-base cursor-pointer rounded-full border-[1px] border-[#6D6D6E]  text-white max-my_screen:text-xs text-center salom`}
                >
                  Ichimiklar
                </span>
                <span
                  onClick={filterDesert}
                  className={`flex flex-col items-center justify-center w-64 h-16 text-base cursor-pointer rounded-full border-[1px] border-[#6D6D6E]  text-white max-my_screen:text-xs text-center salom`}
                >
                  Shrinliklar
                </span>
              </div>
            </div>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              navigation={true}
              pagination={true}
              modules={[Navigation, Pagination]}
              className="sipererMenu2 hidden max-middle_screen:flex "
            >
              {data.map((food) => {
                if (food.id < 10) {
                  return (
                    <SwiperSlide
                      key={food.id}
                      className="text-white bg-[#d9d9d91f] rounded-3xl pb-5"
                    >
                      <li
                        key={food.id}
                        className="flex flex-col items-start h-full justify-between"
                      >
                        <img
                          src={food.img}
                          alt={food.name + "'s img"}
                          className="rounded-xl w-full h-52"
                        />
                        <div className="px-5">
                          <h3 className="text-xl vetirino first-letter:uppercase">
                            {food.name}
                          </h3>
                          <h4 className="text-xl gothik text-gray-400">
                            {food.massa}gr.
                          </h4>
                        </div>
                        <div className="w-full h-5 flex items-center justify-between px-5">
                          <h3 className="gothik text-xl">{food.price} ₱</h3>
                          <button
                            onClick={() => handleBuy(food.id)}
                            className="px-2 py-1 bg-orange rounded-lg gothik first-letter:uppercase active:bg-transparent box-content border-2 border-orange active:text-orange"
                          >
                            buyurtma berish
                          </button>
                        </div>
                      </li>
                    </SwiperSlide>
                  );
                }
              })}
            </Swiper>

            <ul className="w-full grid grid-cols-4 max-md:grid-cols-2 gap-10 max-lg:grid-cols-3 max-sm:hidden py-10 max-middle_screen:hidden ">
              {data.map((product) => {
                if (product.type === filter) {
                  return (
                    <li
                      key={product.id}
                      className="w-full text-white bg-[#d9d9d91f] rounded-3xl max-sm:w-2/3"
                    >
                      <img
                        src={product.img}
                        alt={product.name + " png"}
                        className="rounded-xl w-full"
                        width={265}
                        height={240}
                      />
                      <div className="px-5 py-5 flex flex-col justify-between">
                        <h3 className="gothik text-xl tracking-wide max-lg:text-lg max-md:text-sm font-bold first-letter:uppercase mb-1 truncate">
                          {product.name}
                        </h3>
                        <h4 className="gothik text-base max-lg:text-base max-md:text-xs text-gray-400 font-medium mb-3">
                          {product.massa}gr
                        </h4>
                        <div className="flex items-center justify-between">
                          <h5 className="gothik text-2xl max-lg:text-base  max-md:text-xs font-bold">
                            {product.price}₽
                          </h5>
                          <button
                            className="gothik transition-all px-2 py-2 bg-[#FD7511] rounded-lg text-[100%] max-lg:text-xs active:bg-transparent active:text-[#FD7511] active:border-[2px]  active:border-[#FD7511] border-2 border-[#FD7511]"
                            onClick={() => handleBuy(product.id)}
                          >
                            Buyurtma berish
                          </button>
                        </div>
                      </div>
                    </li>
                  );
                }
              })}
            </ul>
            <Link
              to="/menu"
              onClick={toTop}
              className="w-1/4 text-white first-letter:uppercase px-5 py-2 border-[1px] rounded-full max-md:w-1/2 text-center "
            >
              to'liq ko'rish
            </Link>
          </div>
        </div>
      </div>

      {/*  restoran hqaida mijozlarimiznig fikirlari*/}
      <div className="containerb">
        <div className="flex w-full justify-between items-center mb-10 max-middle_screen:justify-center">
          <h2 className="vetirino text-[65px] text-white w-1/2 max-middle_screen:w-3/4 max-xl:text-5xl max-sm:text-3xl max-middle_screen:text-center max-sm:w-full">
            Restoran haqida mijozlarning fikri
          </h2>
          <a
            target="_blank"
            href="https://www.ya.ru/?win=629&clid=2337911-381&from=dist_bookmark"
          >
            <img
              src={Rating}
              alt="Rating icon"
              className="max-middle_screen:hidden"
            />
          </a>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
          className={`Swiperonce mb-20 max-sm:block hidden max-md:w-full`}
        >
          {slideTitles.map((slideTitle, i) => {
            return (
              <SwiperSlide
                key={i}
                className="rounded-xl relative pt-16"
              >
                <div className="relative w-full max-mini_screen:w-full h-full  bg-[#dcdddf20] rounded-xl p-10 flex flex-col items-center justify-center">
                  <img
                    src={slideTitle.img}
                    width={100}
                    height={90}
                    className="w-1/3 rounded-full absolute -top-[15%] left-1/5 border-2 border-[#dcdddf10]"
                    alt={slideTitle.title + " png"}
                  />
                  <div className="w-full h-1/2 flex flex-col items-center justify-between gap-y-5">
                    <h3 className="text-3xl font-bold text-white uppercase text-center">
                      {slideTitle.title}
                    </h3>
                    <p className="text-center text-white">{slideTitle.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          navigation={true}
          modules={[Navigation]}
          className={`mySwiper mb-20 max-middle_screen:hidden`}
        >
          {slideTitles.map((slideTitle, i) => {
            return (
              <SwiperSlide key={i} className="relative pt-16 ">
                <div className="relative w-full h-full  bg-[#dcdddf20] rounded-3xl p-5 flex flex-col items-center justify-center">
                  <img
                    src={slideTitle.img}
                    width={100}
                    height={91}
                    className="w-1/3 rounded-full absolute -top-[15%] left-1/5 border-2 border-[#dcdddf10]"
                    alt={slideTitle.title + " png"}
                  />
                  <div className="w-full h-1/2 flex flex-col items-center ">
                    <h3 className="text-3xl font-bold text-white uppercase mb-3">
                      {slideTitle.title}
                    </h3>
                    <p className="text-center text-white text-lg">
                      {slideTitle.text}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          navigation={true}
          modules={[Navigation]}
          className={`mySwiper mb-20 max-middle_screen:block max-sm:hidden hidden`}
        >
          {slideTitles.map((slideTitle, i) => {
            return (
              <SwiperSlide
                key={i}
                className="rounded-xl relative flex flex-col items-center justify-end pt-16"
              >
                <div className="relative w-full h-[100%]  bg-[#dcdddf20] rounded-xl p-5 flex flex-col items-center justify-center">
                  <img
                    src={slideTitle.img}
                    width="100px"
                    height="150px"
                    className="w-1/3 rounded-full absolute -top-[15%] left-1/5 border-2 border-[#dcdddf10]"
                    alt={slideTitle.title + " png"}
                  />
                  <div className="w-full h-1/2 flex flex-col items-center justify-between">
                    <h3 className="text-3xl font-bold text-white uppercase">
                      {slideTitle.title}
                    </h3>
                    <p className="text-center text-white text-lg">
                      {slideTitle.text}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <StolBanqilish />
    </div>
  );
};

export default Home;
