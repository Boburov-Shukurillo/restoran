import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import arrImg from "../assets/Arrow 4.svg";

const Menu = ({ data, setCart }) => {
  const [filter, setFilter] = useState("food");
  const [food, setFoodstyle] = useState("salom");
  const [salat, setSalatstyle] = useState("");
  const [drink, setDrinkstyle] = useState("");
  const [desert, setDesert] = useState("");
  const [withoutOil, setWith] = useState("");
  const [showFoods, SetShowFoods] = useState("hidden");
  const [chageDisplay, setchageDisplay] = useState("flex");
  const [goBack, setGoBack] = useState("hidden");

  const handleBuy = (i) => {
    if (data[i].isTrue === true) {
      toast.error(`Bu Cartda Mavjud`, {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: true,
        theme: "light",
      });
    } else {
      toast.success(`Cartga qo'shildi`, {
        position: "bottom-right",
        autoClose: 1500,
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
    setGoBack("flex");
    setchageDisplay("hidden");
    SetShowFoods("block");
    setFilter("food");
    setFoodstyle("salom");
    setSalatstyle("");
    setDrinkstyle("");
    setDesert("");
    setWith("");
  };

  const filterDrinks = () => {
    setGoBack("flex");
    setchageDisplay("hidden");
    SetShowFoods("block");
    setFilter("drink");
    setDrinkstyle("salom");
    setFoodstyle("");
    setSalatstyle("");
    setDesert("");
    setWith("");
  };

  const filterDesert = () => {
    setGoBack("flex");
    setchageDisplay("hidden");
    SetShowFoods("block");
    setFilter("desert");
    setDesert("salom");
    setDrinkstyle("");
    setFoodstyle("");
    setSalatstyle("");
    setWith("");
  };

  const filterSalat = () => {
    setGoBack("flex");
    setchageDisplay("hidden");
    SetShowFoods("block");
    setFilter("salat");
    setSalatstyle("salom");
    setDesert("");
    setDrinkstyle("");
    setFoodstyle("");
    setWith("");
  };

  const filterWithoutOil = () => {
    setGoBack("flex");
    setchageDisplay("hidden");
    SetShowFoods("block");
    setFilter("withoutOil");
    setWith("salom");
    setDesert("");
    setDrinkstyle("");
    setFoodstyle("");
    setSalatstyle("");
  };

  const filterAndShowFoods = () => {
    setchageDisplay("flex");
    SetShowFoods("hidden");
    setGoBack("hidden");
  };
  return (
    <div className="bg-[#292828] pt-4">
      <ToastContainer />
      {/* <Header /> */}
      <div className="containerb py-20 max-middle_screen:p-5">
        <button
          className={`flex items-center justify-between max-middle_screen:${goBack} px-5 py-2 gap-5 rounded-lg border-2 border-[#E6783F] text-white hidden `}
          onClick={filterAndShowFoods}
        >
          <img src={arrImg} className="rotate-180" alt="arrow svg" />
          Go Back
        </button>
        <div
          className={`max-middle_screen:${chageDisplay} w-full flex flex-col items-center justify-between `}
        >
          <h1 className="text-white text-6xl font-bold uppercase font-serif max-middle_screen:text-3xl max-md:text-xl mb-5">
            bizning menu
          </h1>
          <div className="w-full flex items-center justify-between flex-wrap max-middle_screen:grid max-middle_screen:grid-cols-1 max-middle_screen:w-1/2 ">
            <span
              onClick={filterFoods}
              className={`flex justify-between items-center salom px-5 py-2 text-xl font-semibold rounded-3xl border-2 max-middle_screen:border-[#E6783F] hover:border-[#E6783F]  text-white max-middle_screen:w-full max-middle_screen:rounded-md max-middle_screen:mb-2 max-middle_screen:text-xs max-mini_screen:text-[10px]`}
            >
              Mahsus Taomlar
              <img
                src={arrImg}
                className="hidden max-middle_screen:block"
                alt="arrow svg"
              />
            </span>
            <span
              onClick={filterSalat}
              className={`flex justify-between items-center salom px-5 py-2 text-xl font-semibold rounded-3xl border-2 max-middle_screen:border-[#E6783F] hover:border-[#E6783F]  text-white max-middle_screen:w-full max-middle_screen:rounded-md max-middle_screen:mb-2 max-middle_screen:text-xs max-mini_screen:text-[10px]`}
            >
              Salatlar
              <img
                src={arrImg}
                className="hidden max-middle_screen:block"
                alt="arrow svg"
              />
            </span>
            <span
              onClick={filterWithoutOil}
              className={`flex justify-between items-center salom px-5 py-2 text-xl font-semibold rounded-3xl border-2 max-middle_screen:border-[#E6783F] hover:border-[#E6783F]  text-white max-middle_screen:w-full max-middle_screen:rounded-md max-middle_screen:mb-2 max-middle_screen:text-xs max-mini_screen:text-[10px]`}
            >
              Yog'siz Taomlar
              <img
                src={arrImg}
                className="hidden max-middle_screen:block"
                alt="arrow svg"
              />
            </span>
            <span
              onClick={filterDrinks}
              className={`flex justify-between items-center salom px-5 py-2 text-xl font-semibold rounded-3xl border-2 max-middle_screen:border-[#E6783F] hover:border-[#E6783F]  text-white max-middle_screen:w-full max-middle_screen:rounded-md max-middle_screen:mb-2 max-middle_screen:text-xs max-mini_screen:text-[10px]`}
            >
              Ichimiklar
              <img
                src={arrImg}
                className="hidden max-middle_screen:block"
                alt="arrow svg"
              />
            </span>
            <span
              onClick={filterDesert}
              className={`flex justify-between items-center salom px-5 py-2 text-xl font-semibold rounded-3xl border-2 max-middle_screen:border-[#E6783F] hover:border-[#E6783F]  text-white max-middle_screen:w-full max-middle_screen:rounded-md max-middle_screen:mb-2 max-middle_screen:text-xs max-mini_screen:text-[10px]`}
            >
              Shrinliklar
              <img
                src={arrImg}
                className="hidden max-middle_screen:block"
                alt="arrow svg"
              />
            </span>
          </div>
        </div>

        <ul
          className={`max-middle_screen:${showFoods} grid grid-cols-4 gap-10 max-lg:grid-cols-3 py-10 max-middle_screen:grid-cols-1 max-middle_screen:space-y-5 `}
        >
          {data.map((product) => {
            if (product.type === filter) {
              return (
                <li
                  key={product.id}
                  className="flex flex-col items-center justify-between w-full h-full text-white bg-[#d9d9d91f] rounded-xl max-middle_screen:flex-row max-middle_screen:items-center max-middle_screen:p-2"
                >
                  <img
                    src={product.img}
                    alt={product.name + " png"}
                    className="rounded-xl h-full w-ful max-middle_screen:w-1/4 "
                    width={260}
                    height={236}
                  />
                  <div className="px-5 py-3 flex flex-col justify-between max-middle_screen:flex-row max-middle_screen:items-center w-full  ">
                    <div className="max-md:flex max-md:flex-col">
                      {" "}
                      <h3 className="text-xl tracking-wide max-lg:text-lg max-md:text-sm font-bold first-letter:uppercase mb-1 truncate w-20">
                        {product.name}
                      </h3>
                      <h4 className="text-base max-lg:text-base max-md:text-xs text-gray-400 font-medium mb-3 max-middle_screen:mb-0">
                        {product.massa}gr
                      </h4>
                      <h5 className="max-middle_screen:block hidden">
                        {product.price}P
                      </h5>
                    </div>
                    <div className="flex items-center justify-between max-middle_screen:w-1/3">
                      <p className="text-base max-lg:text-base  max-md:hidden font-medium ">
                        {product.price}₽
                      </p>
                      <button
                        className="px-2 py-2 bg-[#ff722b] rounded-lg text-[70%] max-lg:text-xs active:bg-transparent active:text-orange active:border-[2px]  active:border-[#ff722b] border-2 border-[#ff722b] max-middle_screen:bg-transparent max-middle_screen:ml-3 max-middle_screen:pt-0.5 max-middle_screen:px-2.5"
                        onClick={() => handleBuy(product.id)}
                      >
                        <span className="text-3xl font-bold text-orange max-middle_screen:block hidden">
                          +
                        </span>
                        <span className="max-middle_screen:hidden">
                          Buyurtma berish
                        </span>
                      </button>
                    </div>
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
