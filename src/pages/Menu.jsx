import React, { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Menu = ({ data, setCart }) => {
  const [filter, setFilter] = useState("food");
  const [food, setFoodstyle] = useState("salom");
  const [salat, setSalatstyle] = useState("");
  const [drink, setDrinkstyle] = useState("");
  const [desert, setDesert] = useState("");
  const [withoutOil, setWith] = useState("");
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
    <div className="bg-[#292828] pt-4">
      {/* <Header /> */}
      <div className="containerb py-20">
        <div className="w-full flex flex-col items-center justify-between mb-10 h-44">
          <h1 className="text-white text-6xl font-bold uppercase font-serif">
            bizning menu
          </h1>
          <div className="w-full flex items-center justify-between flex-wrap max-middle_screen:hidden">
            <span
              onClick={filterSalat}
              className={`${salat} px-5 py-2 text-xl font-semibold rounded-3xl border-[2px]  text-white`}
            >
              Salatlar
            </span>
            <span
              onClick={filterFoods}
              className={`${food} px-5 py-2 text-xl font-semibold rounded-3xl border-[2px]  text-white`}
            >
              Mahsus Taomlar
            </span>
            <span
              onClick={filterWithoutOil}
              className={`${withoutOil} px-5 py-2 text-xl font-semibold rounded-3xl border-[2px]  text-white`}
            >
              Yog'siz Taomlar
            </span>
            <span
              onClick={filterDrinks}
              className={`${drink} px-5 py-2 text-xl font-semibold rounded-3xl border-[2px]  text-white`}
            >
              Ichimiklar
            </span>
            <span
              onClick={filterDesert}
              className={`${desert} px-5 py-2 text-xl font-semibold rounded-3xl border-[2px]  text-white`}
            >
              Shrinliklar
            </span>
          </div>
        </div>

        <ul className=" grid grid-cols-4 max-md:grid-cols-2 gap-10 max-lg:grid-cols-3 max-sm:hidden py-10 max-md:hidden">
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
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
          className="swoperL mb-20 hidden max-middle_screen:block max-md:mb-0"
        >
          {data.map((slideTitle, i) => {
            return (
              <SwiperSlide
                key={i}
                className="flex flex-col items-center px-3 py-3 max-sm:h-2/3 "
              >
                <img
                  src={slideTitle.img}
                  width="100px"
                  height="150px"
                  className="w-full h-full rounded-3xl"
                  alt={slideTitle.name + " png"}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Menu;
