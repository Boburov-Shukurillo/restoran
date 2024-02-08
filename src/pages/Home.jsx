import React, { useEffect, useState } from "react";
import StolBanqilish from "../Components/StolBandQilish";
import { slideTitles } from "../data";
// rasimlar
import dumaloqXinkalin from "../assets/dumaloqPts.svg";
import pitsa from "../assets/pitsaPng.png";
import kokat from "../assets/kokat.png";
import pic1 from "../assets/pic (1).png";
import pic2 from "../assets/pic (2).png";
import pic3 from "../assets/pic (3).png";
import pic4 from "../assets/pic (4).png";
import star from "../assets/Star.svg";

// swiper slide
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
const Home = ({ data, setCart }) => {
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
      alert("bu krtda mavjud");
    } else {
      alert("katga qowildi");
      data[i].isTrue = true;
      const sdfghj = data.filter((e) => e.isTrue === true);
      setCart(sdfghj);
    }
  };
  const showAll = () => {};

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

  return (
    <div className="containerb pb-20">
      <div className="hero grid grid-cols-2  items-center max-lg:pt-20 max-md:flex max-md;flex-col justify-between">
        <div className="text-white flex flex-col items-start justify  max-md:items-center">
          <h2 className="text-[70px] max-middle_screen:text-[45px] leading-[70px] mb-10 font-bold max-md:text-center">
            Restoran <br />
            <span className="text-[60px] max-middle_screen:text-[45px]">
              kavkazniy kuxni
            </span>
          </h2>
          <p className="mb-20 text-xl font-medium max-middle_screen:text-[15px] max-md:w-10/12 max-md:text-center max-md:mb-0">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
            odit, corporis adipisci incidunt esse perferendis magni perspiciatis
            aliquid minus voluptatem!
          </p>
          <img
            src={dumaloqXinkalin}
            className="max-md:block hidden h-full w-full"
            alt=""
          />
          <button className="px-20 py-5 bg-orange text-white font-bold rounded-xl shadow-lg shadow-orange max-sm:text-[10px]">
            Stol BandQilish
          </button>
        </div>
        <div className="w-full h-full pitsa relative max-md:hidden">
          <img src={pitsa} alt="pitsa png" />
          <img
            src={kokat}
            width={200}
            className="absolute bottom-1/4 right-[35%]"
            alt="kokat png"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10 items-center py-20 max-middle_screen:grid-cols-1">
        <div className="text-white max-middle_screen:flex max-middle_screen:flex-col max-middle_screen:items-center max-middle_screen:text-center">
          <h3 className="text-[65px] mb-10 max-md:text-2xl uppercase">
            Lorem, ipsum.
          </h3>
          <p className="text-xl fon-normal mb-5 max-md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo enim
            itaque, atque, quia sit officiis explicabo laboriosam rem voluptatum
            eveniet est repellendus recusandae mollitia deserunt.
          </p>
          <p className="text-xl fon-normal mb-5 max-md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            dignissimos et dolorem, voluptates alias veritatis id dolorum
            dolores delectus maiores deserunt excepturi magni atque consequuntur
            eum fugit voluptatem reprehenderit consequatur labore quam
            doloremque, reiciendis aperiam?
          </p>
          <p className="text-xl fon-normal mb-5 max-md:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Accusantium, ratione recusandae molestias iusto voluptatee minus.
          </p>
          <div className="grid grid-cols-2  gap-5">
            <div className="flex items-center mb-3 gap-5">
              <img src={star} alt="satar svg" />
              <p className="text-base leading-5 max-md:text-xs max-md:w-1/2">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <div className="flex items-center mb-3 gap-5">
              <img src={star} alt="satar svg" />
              <p className="text-base leading-5 max-md:text-xs max-md:w-1/2">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <div className="flex items-center mb-3 gap-5">
              <img src={star} alt="satar svg" />
              <p className="text-base leading-5 max-md:text-xs max-md:w-1/2">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <div className="flex items-center mb-3 gap-5">
              <img src={star} alt="satar svg" />
              <p className="text-base leading-5 max-md:text-xs max-md:w-1/2">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 items-center max-middle_screen:hidden">
          <div className="space-y-5 mt-5">
            <img
              src={pic1}
              className="rounded-xl shadow-2xl shadow-orange"
              alt="grid pictures"
            />
            <img
              src={pic2}
              className="rounded-xl shadow-2xl shadow-orange "
              alt="grid pictures"
            />
          </div>
          <div className="space-y-5">
            <img
              src={pic3}
              className="rounded-xl shadow-2xl shadow-orange "
              alt="grid pictures"
            />
            <img
              src={pic4}
              className="rounded-xl shadow-2xl shadow-orange"
              alt="grid pictures"
            />
          </div>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            type: "bullets",
          }}
          // modules={[Pagination]}
          className="swoperL mb-20 hidden max-middle_screen:block"
        >
          {slideTitles.map((slideTitle, i) => {
            return (
              <SwiperSlide
                key={i}
                className="rounded-xl relative flex flex-col items-center justify-end pt-16"
              >
                <img
                  src={slideTitle.img}
                  width="100px"
                  height="150px"
                  className="w-full h-full rounded-lg"
                  alt={slideTitle.title + " png"}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="bg h-full py-5 bg-balck mb-20">
        <div className="bg-2 py-20 flex flex-col items-center">
          <div className="w-full flex flex-col items-center justify-between mb-10 h-44  ">
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
            pagination={{
              type: "bullets",
            }}
            // modules={[Pagination]}
            className="swoperL mb-20 hidden max-md:block"
          >
            {data.map((slideTitle, i) => {
              return (
                <SwiperSlide
                  key={i}
                  className="rounded-xl relative flex flex-col items-center justify-end pt-16"
                >
                  <img
                    src={slideTitle.img}
                    width="100px"
                    height="150px"
                    className="w-full h-full rounded-lg"
                    alt={slideTitle.name + " png"}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <ul className="grid grid-cols-4 max-md:grid-cols-2 gap-10 max-lg:grid-cols-3 max-sm:hidden py-10 max-md:hidden">
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
                      width="300"
                      height="350"
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
                          className="px-2 py-2 bg-[#ff722b] rounded-lg text-[70%] max-lg:text-xs active:bg-transparent active:text-orange active:border-[2px]  active:border-[#ff722b] border-2 border-[#ff722b]"
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
          <Link to="/menu" className="text-blue-700 first-letter:uppercase ">
            to'liq ko'rish uchun menu bolimiga o'ting
          </Link>
        </div>
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        pagination={{
          type: "progressbar",
        }}
        // modules={[Pagination]}
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
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        pagination={{
          type: "progressbar",
        }}
        // modules={[Pagination]}
        className={`mySwiper mb-20 hidden max-middle_screen:block max-sm:hidden`}
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
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          type: "progressbar",
        }}
        // modules={[Pagination]}
        className={`mySwiper mb-20 hidden max-sm:block`}
      >
        {slideTitles.map((slideTitle, i) => {
          return (
            <SwiperSlide
              key={i}
              className="rounded-xl relative flex flex-col items-center justify-end pt-16"
            >
              <div className="relative w-4/5 h-[100%]  bg-[#dcdddf20] rounded-xl p-5 flex flex-col items-center justify-center">
                <img
                  src={slideTitle.img}
                  width="100px"
                  height="150px"
                  className=" absolute rounded-full -top-[15%] left-1/5 "
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

      <StolBanqilish />
    </div>
  );
};


export default Home;