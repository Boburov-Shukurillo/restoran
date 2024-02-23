import React, { useEffect, useState } from "react";
import StolBanqilish from "../Components/StolBandQilish";

// malumotlar bazasi
import { imgs, slideTitles } from "../data";

// rasimlar
import Rating from "../assets/Rating.svg";
import dumaloqXinkalin from "../assets/xinkalin.svg";
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
          <img src={arrow} alt="arrow icon" />
        </button>
      )}
      <div className="hero overflow-hidden  ">
        <div className="containerb relative ">
          <div className="w-full h-40 max-sm:h-28"></div>
          <div className="w-1/2 h-full flex items-center  py-44 max-middle_screen:w-full max-md:p-0 max-middle_screen:py-5">
            <div className="text-white  h-full flex flex-col justify-between items-start max-middle_screen:items-center">
              <h1 className="vetirino text-[130px] leading-[70px] max-middle_screen:text-[75px] max-md:leading-8 max-middle_screen:leading-10 mb-10 font-bold max-md:text-center max-md:text-4xl  max-mini_screen:leading-5 max-md:mb-10">
                Restoran <br />
                <span className="text-[75px] max-middle_screen:text-[45px] max-md:text-xl  max-md:leading-3">
                  kavkazniy kuxni
                </span>
              </h1>
              <p className="w-9/12 text-2xl gothik font-medium max-middle_screen:text-lg max-md:w-9/12 max-middle_screen:text-center max-md:mb-0 max-mini_screen:text-base mb-20 max-md:leading-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolores odit, corporis adipisci incidunt esse perferendis magni
                perspiciatis aliquid minus voluptatem!
              </p>
              <div className="max-middle_screen:block hidden max-middle_screen:relative w-[500px] h-[500px] max-sm:w-full max-sm:h-3/4">
                <img
                  src={smXinkalin}
                  className="w-full h-full "
                  width={200}
                  height={206}
                  alt="xinkalin"
                />
                <img
                  src={kokat}
                  width={30}
                  className="w-20 absolute bottom-1/4 left-1/4"
                  alt="ko'kat"
                />
              </div>
              <button
                onClick={stolBandQilish}
                className="w-3/5 soyalar px-20 py-6 bg-gradient-to-tl from-[#D9782A] to-[#F49549] text-white font-bold rounded-3xl text-2xl max-sm:text-lg max-md:px-5 max-middle_screen:w-1/2 max-sm:w-2/3"
              >
                Stol Band Qilish
              </button>
            </div>
            <div className="max-middle_screen:hidden">
              <img
                src={smXinkalin}
                alt="xinkalin png"
                height={800}
                width={800}
                className="w-[700px] h-[700px] scale-[2] absolute bottom-5 -right-[27%] z-20 rounded-full max-middle_screen:hidden"
              />
              <img
                src={choq}
                alt="cho'g' svg"
                className="w-10/12 h-5/6 absolute bottom-0 -right-[20%]  max-my_screen:hidden"
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
      <div className="containerb flex  gap-5 max-middle_screen:grid-cols-1 h-full py-10 justify-between">
        <div className="w-2/5 text-white max-middle_screen:items-center max-middle_screen:text-center flex flex-col justify-between space-y-5 max-middle_screen:hidden">
          <h2 className="vetirino text-[65px] max-lg:text-2xl mb-10 max-md:text-2xl uppercase">
            Lorem, ipsum
          </h2>
          <p className="gothik text-lg fon-normal max-lg:w-full max-middle_screen:w-3/4 max-md:w-full  max-md:text-sm max-lg:text-base max-mini_screen:text-xs max-mini_screen:leading-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo enim
            itaque, atque, quia sit officiis explicabo laboriosam rem voluptatum
            eveniet est repellendus recusandae mollitia deserunt.
          </p>
          <p className="gothik text-lg fon-normal max-lg:w-full max-middle_screen:w-3/4 max-md:w-full  max-md:text-sm max-lg:text-base max-mini_screen:text-xs max-mini_screen:leading-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            dignissimos et dolorem, voluptates alias veritatis id dolorum
            dolores delectus maiores deserunt excepturi magni atque consequuntur
            eum fugit voluptatem reprehenderit consequatur labore quam
            doloremque, reiciendis aperiam?
          </p>
          <p className="gothik text-lg fon-normal max-lg:w-full max-middle_screen:w-3/4 max-md:w-full  max-md:text-sm max-lg:text-base max-mini_screen:text-xs max-mini_screen:leading-3">
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
          {imgs.map((slideTitle, i) => {
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
          <div className="bg-2 py-20 flex flex-col items-center max-md:py-20">
            <div className="w-full flex flex-col items-center justify-between mb-10 h-44 max-md:h-10 max-md:mb-0 max-md:justify-end">
              <h1 className="vetirino mb-10 text-white text-6xl font-bold uppercase font-serif max-md:text-2xl">
                bizning menu
              </h1>
              <div className="max-md:hidden w-full flex justify-evenly gap-5 max-middle_screen:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 ">
                <span
                  onClick={filterSalat}
                  className={`flex flex-col items-center justify-center w-64 h-16 text-base cursor-pointer ${salat}  text-xl rounded-full border-[1px] border-[#6D6D6E]  text-white max-my_screen:text-xs text-center`}
                >
                  Salatlar
                </span>
                <span
                  onClick={filterFoods}
                  className={`flex flex-col items-center justify-center w-64 h-16 text-base cursor-pointer ${food}  text-xl rounded-full border-[1px] border-[#6D6D6E]  text-white max-my_screen:text-xs text-center`}
                >
                  Mahsus Taomlar
                </span>
                <span
                  onClick={filterWithoutOil}
                  className={`flex flex-col items-center justify-center w-64 h-16 text-base cursor-pointer ${withoutOil}  text-xl rounded-full border-[1px] border-[#6D6D6E]  text-white max-my_screen:text-xs text-center`}
                >
                  Yog'siz Taomlar
                </span>
                <span
                  onClick={filterDrinks}
                  className={`flex flex-col items-center justify-center w-64 h-16 text-base cursor-pointer ${drink}  text-xl rounded-full border-[1px] border-[#6D6D6E]  text-white max-my_screen:text-xs text-center`}
                >
                  Ichimiklar
                </span>
                <span
                  onClick={filterDesert}
                  className={`flex flex-col items-center justify-center w-64 h-16 text-base cursor-pointer ${desert}  text-xl rounded-full border-[1px] border-[#6D6D6E]  text-white max-my_screen:text-xs text-center`}
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
              className="sipererMenu2 hidden max-middle_screen:block max-md:mb-0 max-md:w-3/4 max-mini_screen:w-full "
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
                        className="w-3/4 max-md:w-full text-white bg-[#d9d9d91f] rounded-3xl h-full"
                      >
                        <img
                          src={product.img}
                          alt={product.name + " png"}
                          className="rounded-xl w-full object-cover"
                          width={300}
                          height={350}
                        />
                        <div className="px-5 py-5 flex flex-col items-start">
                          <h3 className="vetirino max-md:text-xl font-bold first-letter:uppercase truncate">
                            {product.name}
                          </h3>
                          <p className="gothik max-md:text-base text-[#DCDDDF] font-medium mb-3">
                            {product.massa}gr.
                          </p>
                          <div className="flex items-center justify-between w-full">
                            <p className="gothik max-md:text-2xl font-medium">
                              {product.price}₽
                            </p>
                            <button
                              className="w-1/2 px-2 py-2 bg-[#FD7511] rounded-lg text-xl max-md:text-base active:bg-transparent active:text-orange active:border-2  active:border-orange border-2 border-orange  max-md:w-2/3 max-md:py-3"
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
                            className="gothik px-2 py-2 bg-[#FD7511] rounded-lg text-[100%] max-lg:text-xs active:bg-transparent active:text-[#EF6602] active:border-[2px]  active:border-[#EF6602] border-2 border-[#EF6602]"
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
              className="w-1/4 text-white first-letter:uppercase mb-5 px-5 py-2 border-[1px] rounded-full max-md:w-full text-center mt-10"
            >
              to'liq ko'rish
            </Link>
          </div>
        </div>
      </div>
      <div className="containerb">
        <div className="flex w-full justify-between items-center mb-10">
          <h2 className="vetirino text-[65px] text-white w-1/2 max-middle_screen:w-full max-sm:text-3xl max-middle_screen:text-center">
            Restoran haqida mijozlarning fikri
          </h2>
          <img
            src={Rating}
            alt="Rating icon"
            className="max-middle_screen:hidden"
          />
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
                className="rounded-xl relative flex flex-col items-center justify-end pt-16 max-md:h-full "
              >
                <div className="relative w-2/3 max-mini_screen:w-full h-[100%]  bg-[#dcdddf20] rounded-xl p-10 flex flex-col items-center justify-center">
                  <img
                    src={slideTitle.img}
                    width={100}
                    height={90}
                    className="w-1/3 rounded-full absolute -top-[15%] left-1/5 border-2 border-[#dcdddf10]"
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
          spaceBetween={20}
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
