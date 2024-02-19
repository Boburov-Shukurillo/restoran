import React, { useEffect, useState } from "react";
import StolBanqilish from "../Components/StolBandQilish";

// malumotlar bazasi
import { slideTitles } from "../data";

// rasimlar
import dumaloqXinkalin from "../assets/xinkalin.svg";
import heroMobilBg from "../assets/heroBg.svg";
import choq from "../assets/choq.svg";
import choqHac from "../assets/chogHac.svg";
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
  const [food, setFoodstyle] = useState("salom");
  const [salat, setSalatstyle] = useState("");
  const [drink, setDrinkstyle] = useState("");
  const [desert, setDesert] = useState("");
  const [withoutOil, setWith] = useState("");
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
      const sdfghj = data.filter((e) => e.isTrue === true);
      setCart(sdfghj);
    }
  };

  const filterFoods = () => {
    setFilter("food");
    setFoodstyle("salom");
    setSalatstyle("");
    setDrinkstyle("");
    setDesert("");
    setWith("");
  };
  const filterDrinks = () => {
    setFilter("drink");
    setDrinkstyle("salom");
    setFoodstyle("");
    setSalatstyle("");
    setDesert("");
    setWith("");
  };
  const filterDesert = () => {
    setFilter("desert");
    setDesert("salom");
    setDrinkstyle("");
    setFoodstyle("");
    setSalatstyle("");
    setWith("");
  };
  const filterSalat = () => {
    setFilter("salat");
    setSalatstyle("salom");
    setDesert("");
    setDrinkstyle("");
    setFoodstyle("");
    setWith("");
  };
  const filterWithoutOil = () => {
    setFilter("withoutOil");
    setWith("salom");
    setDesert("");
    setDrinkstyle("");
    setFoodstyle("");
    setSalatstyle("");
  };

  const [customSwiper, setCustomSwiper] = useState({});

  const stolBandQilish = () => {
    window.scrollTo({ left: 0, top: "4000", behavior: "smooth" });
  };
  const toTop = () => {
    window.scrollTo({ left: 0, top: "0", behavior: "smooth" });
  };
  const win = window.getComputedStyle > 500;
  return (
    <div className="pb-20">
      <ToastContainer />
      {win && (
        <button
          onClick={toTop}
          className="fixed right-10 bottom-10 z-50 -rotate-90 px-4 py-3.5 bg-white border-8 border-[#F49549] rounded-full "
        >
          <img src={arrow} alt="" />
        </button>
      )}
      <div className="hero px-5 mb-5 overflow-hidden">
        <div className="containerb relative">
          <div className="w-full h-40 max-sm:h-20"></div>
          <div className="w-1/2 h-full flex items-center  py-20 max-middle_screen:w-full max-md:p-5">
            <div className="text-white  h-full flex flex-col justify-between items-start max-middle_screen:items-center">
              <h1 className="text-[70px] leading-[70px] max-middle_screen:text-[75px] max-middle_screen:leading-10 mb-10 font-bold max-md:text-center max-mini_screen:text-xl max-md:text-4xl max-md:m-3 max-mini_screen:leading-3 max-md:mb-5">
                Restoran <br />
                <span className="text-[60px] max-middle_screen:text-[40px] max-md:text-2xl max-mini_screen:text-lg max-md:leading-3">
                  kavkazniy kuxni
                </span>
              </h1>
              <p className="text-xl font-medium max-middle_screen:text-lg max-md:w-full max-middle_screen:text-center max-md:mb-0 max-mini_screen:text-xs mb-20 max-md:leading-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolores odit, corporis adipisci incidunt esse perferendis magni
                perspiciatis aliquid minus voluptatem!
              </p>
              <div className="max-middle_screen:block hidden max-middle_screen:relative w-[500px] h-[500px] max-sm:w-52 max-sm:h-52">
                <img
                  src={dumaloqXinkalin}
                  className="w-full"
                  width={200}
                  height={206}
                  alt="xinkalin"
                />
                <img
                  src={kokat}
                  width={30}
                  className="w-1/4 absolute bottom-1/4 left-1/4"
                  alt="ko'kat"
                />
              </div>
              <button
                onClick={stolBandQilish}
                className="soyalar px-20 py-6 bg-gradient-to-tl from-[#D9782A] to-[#F49549] text-white font-bold rounded-3xl max-sm:text-lg max-md:px-5 max-middle_screen:w-3/5 max-sm:w-full"
              >
                Stol Band Qilish
              </button>
            </div>
            <div className="max-middle_screen:hidden">
              <img
                src={dumaloqXinkalin}
                alt="xinkalin png"
                height={800}
                width={800}
                className="w-1/2 h-4/6 scale-[2] absolute bottom-5 -right-[20%] z-20 max-middle_screen:hidden"
              />
              <img
                src={choq}
                alt="cho'g' svg"
                className="w-10/12 h-5/6 absolute bottom-0 left-1/3  max-my_screen:hidden"
              />
              <img
                src={kokat}
                alt="Ko'kat Png"
                width={100}
                height={100}
                className="w-1/6 h-1/6 absolute left-3/4 z-30 bottom-10 "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="containerb flex  gap-5 max-middle_screen:grid-cols-1 h-full py-10">
        <div className="w-1/2 text-white max-middle_screen:items-center max-middle_screen:text-center flex flex-col justify-between space-y-5 max-middle_screen:hidden">
          <h3 className="text-[65px] max-lg:text-2xl mb-10 max-md:text-2xl uppercase">
            Lorem, ipsum.
          </h3>
          <p className="text-lg fon-normal max-lg:w-full max-middle_screen:w-3/4 max-md:w-full  max-md:text-sm max-lg:text-base max-mini_screen:text-xs max-mini_screen:leading-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo enim
            itaque, atque, quia sit officiis explicabo laboriosam rem voluptatum
            eveniet est repellendus recusandae mollitia deserunt.
          </p>
          <p className="text-lg fon-normal max-lg:w-full max-middle_screen:w-3/4 max-md:w-full  max-md:text-sm max-lg:text-base max-mini_screen:text-xs max-mini_screen:leading-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            dignissimos et dolorem, voluptates alias veritatis id dolorum
            dolores delectus maiores deserunt excepturi magni atque consequuntur
            eum fugit voluptatem reprehenderit consequatur labore quam
            doloremque, reiciendis aperiam?
          </p>
          <p className="text-lg fon-normal max-lg:w-full max-middle_screen:w-3/4 max-md:w-full  max-md:text-sm max-lg:text-base max-mini_screen:text-xs max-mini_screen:leading-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Accusantium, ratione recusandae molestias iusto voluptatee minus.
          </p>
          <div className="grid grid-cols-2  gap-2 max-md:gap-0">
            <div className="flex items-center mb-0 gap-5 max-md:gap-2 max-md:flex-col">
              <img src={star} alt="satar svg" className="w-1/6" />
              <p className="text-base leading-5 max-lg:text-sm max-lg:font-light max-md:text-xs max-md:w-4/5 font-bold ">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <div className="flex items-center mb-0 gap-5 max-md:gap-2 max-md:flex-col">
              <img src={star} alt="satar svg" className="w-1/6" />
              <p className="text-base leading-5 max-lg:text-sm max-lg:font-light max-md:text-xs max-md:w-4/5 font-bold ">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <div className="flex items-center mb-0 gap-5 max-md:gap-2 max-md:flex-col">
              <img src={star} alt="satar svg" className="w-1/6" />
              <p className="text-base leading-5 max-lg:text-sm max-lg:font-light max-md:text-xs max-md:w-4/5 font-bold ">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <div className="flex items-center mb-0 gap-5 max-md:gap-2 max-md:flex-col">
              <img src={star} alt="satar svg" className="w-1/6" />
              <p className="text-base leading-5 max-lg:text-sm max-lg:font-light max-md:text-xs max-md:w-4/5 font-bold ">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 grid grid-cols-2 gap-5 items-center max-middle_screen:hidden ">
          <div className="space-y-5 mt-20">
            <img
              src={pic1}
              className="rounded-xl shadow-2xl shadow-orange"
              alt="grid pictures"
              width={280}
              height={303}
            />
            <img
              src={pic2}
              className="rounded-xl shadow-2xl shadow-orange "
              alt="grid pictures"
              width={280}
              height={303}
            />
          </div>
          <div className="space-y-5">
            <img
              src={pic3}
              className="rounded-xl shadow-2xl shadow-orange "
              alt="grid pictures"
              width={280}
              height={303}
            />
            <img
              src={pic4}
              className="rounded-xl shadow-2xl shadow-orange"
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
          className="w-full swoperL2 mb-20 hidden max-middle_screen:block max-md:mb-0"
        >
          {slideTitles.map((slideTitle, i) => {
            return (
              <SwiperSlide
                key={i}
                className="w-full flex flex-col items-center justify-end max-md:p-0"
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
      <div className="bg bg-contain max-[1700px]:bg-cover">
        <div className="containerb  h-full py-5 bg-balck mb-20 ">
          <div className="bg-2 py-20 flex flex-col items-center max-md:py-8 space-y-10">
            <div className="w-full flex flex-col items-center justify-between mb-10 h-44 max-md:h-10 max-md:mb-0 max-md:justify-end max-middle_screen:hidden">
              <h1 className="text-white text-6xl font-bold uppercase font-serif max-md:text-2xl mb-5">
                bizning menu
              </h1>
              <div className="max-md:hidden w-full grid grid-cols-5 gap-5 max-middle_screen:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 ">
                <span
                  onClick={filterSalat}
                  className={`text-base cursor-pointer inline-block ${salat} px-5 py-2 text-xl font-semibold rounded-3xl border-[2px]  text-white max-my_screen:text-xs text-center`}
                >
                  Salatlar
                </span>
                <span
                  onClick={filterFoods}
                  className={`text-base cursor-pointer inline-block ${food} px-5 py-2 text-xl font-semibold rounded-3xl border-[2px]  text-white max-my_screen:text-xs text-center`}
                >
                  Mahsus Taomlar
                </span>
                <span
                  onClick={filterWithoutOil}
                  className={`text-base cursor-pointer inline-block ${withoutOil} px-5 py-2 text-xl font-semibold rounded-3xl border-[2px]  text-white max-my_screen:text-xs text-center`}
                >
                  Yog'siz Taomlar
                </span>
                <span
                  onClick={filterDrinks}
                  className={`text-base cursor-pointer inline-block ${drink} px-5 py-2 text-xl font-semibold rounded-3xl border-[2px]  text-white max-my_screen:text-xs text-center`}
                >
                  Ichimiklar
                </span>
                <span
                  onClick={filterDesert}
                  className={`text-base cursor-pointer inline-block ${desert} px-5 py-2 text-xl font-semibold rounded-3xl border-[2px]  text-white max-my_screen:text-xs text-center`}
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
              className="sipererMenu mb-20 hidden max-middle_screen:block max-md:mb-0 max-md:w-3/4 max-mini_screen:w-full "
            >
              {data.map((product) => {
                if (product.id < 10) {
                  return (
                    <SwiperSlide
                      key={product.id}
                      className="flex flex-col items-center px-3 py-3  "
                    >
                      <li
                        key={product.id}
                        className="w-3/4 max-md:w-full text-white bg-[#d9d9d91f] rounded-xl h-full"
                      >
                        <img
                          src={product.img}
                          alt={product.name + " png"}
                          className="rounded-xl w-full object-cover"
                          width={300}
                          height={350}
                        />
                        <div className="px-5 py-5 flex flex-col justify-between items-center">
                          <h3 className="text-xl tracking-wide max-lg:text-lg max-md:text-2xl font-bold first-letter:uppercase mb-1 truncate">
                            {product.name}
                          </h3>
                          <p className="text-base max-lg:text-base max-md:text-xl text-gray-400 font-medium mb-3">
                            {product.massa}gr
                          </p>
                          <div className="flex items-center justify-between max-sm:space-y-5 max-middle_screen:flex-col max-md:items-center max-middle_screen:gap-3 w-full">
                            <p className="text-base max-lg:text-base  max-md:text-lg font-medium">
                              {product.price}₽
                            </p>
                            <button
                              className="w-1/2 px-2 py-2 bg-orange rounded-lg text-[70%] max-lg:text-xs active:bg-transparent active:text-orange active:border-[2px]  active:border-orange border-2 border-orange  max-sm:truncate max-md:w-3/4 max-md:py-3"
                              onClick={() => handleBuy(product.id)}
                            >
                              Buyurtma berish
                            </button>
                          </div>
                        </div>
                      </li>
                    </SwiperSlide>
                  );
                }
              })}
            </Swiper>
            <ul className="grid grid-cols-4 max-md:grid-cols-2 gap-10 max-lg:grid-cols-3 max-sm:hidden py-10 max-middle_screen:hidden">
              {data.map((product) => {
                if (product.type === filter) {
                  return (
                    <li
                      key={product.id}
                      className="w-full text-white bg-[#d9d9d91f] rounded-xl max-sm:w-2/3 "
                    >
                      <img
                        src={product.img}
                        alt={product.name + " png"}
                        className="rounded-xl "
                        width={265}
                        height={240}
                      />
                      <div className="px-5 py-5 flex flex-col justify-between">
                        <h3 className="text-xl tracking-wide max-lg:text-lg max-md:text-sm font-bold first-letter:uppercase mb-1 truncate">
                          {product.name}
                        </h3>
                        <p className="text-base max-lg:text-base max-md:text-xs text-gray-400 font-medium mb-3">
                          {product.massa}gr
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="text-base max-lg:text-base  max-md:text-xs font-medium">
                            {product.price}₽
                          </p>
                          <button
                            className="px-2 py-2 bg-[#EF6602] rounded-lg text-[100%] max-lg:text-xs active:bg-transparent active:text-[#EF6602] active:border-[2px]  active:border-[#EF6602] border-2 border-[#EF6602]"
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
              className="text-white first-letter:uppercase mb-5 px-5 py-2 border-[1px] rounded-[65px] max-md:w-full text-center"
            >
              to'liq ko'rish
            </Link>
          </div>
        </div>
      </div>
      <div className="containerb">
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
                className="rounded-xl relative flex flex-col items-center justify-end pt-16 max-md:h-full "
              >
                <div className="relative w-2/3 max-mini_screen:w-full h-[100%]  bg-[#dcdddf20] rounded-xl p-10 flex flex-col items-center justify-center">
                  <img
                    src={slideTitle.img}
                    width={100}
                    height={90}
                    className="rounded-full absolute -top-[15%] left-1/5 "
                    alt={slideTitle.title + " png"}
                  />
                  <div className="w-full h-1/2 flex flex-col items-center justify-between">
                    <h3 className="text-3xl font-bold text-white uppercase">
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
          spaceBetween={50}
          slidesPerView={3}
          navigation={true}
          modules={[Navigation]}
          className={`mySwiper mb-20 max-middle_screen:hidden`}
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
                    width={100}
                    height={91}
                    className="rounded-full absolute -top-[15%] left-1/5 "
                    alt={slideTitle.title + " png"}
                  />
                  <div className="w-full h-1/2 flex flex-col items-center justify-between">
                    <h3 className="text-3xl font-bold text-white uppercase">
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
                    className="rounded-full absolute -top-[15%] left-1/5 "
                    alt={slideTitle.title + " png"}
                  />
                  <div className="w-full h-1/2 flex flex-col items-center justify-between">
                    <h3 className="text-3xl font-bold text-white uppercase">
                      {slideTitle.title}
                    </h3>
                    <p className="text-center text-white">{slideTitle.text}</p>
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
