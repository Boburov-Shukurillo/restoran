import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import arrImg from "../assets/Arrow 4.svg";
import StolBandQilish from "../Components/StolBandQilish";

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
        autoClose: 100,
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
        autoClose: 100,
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
    <div className="bg-[#1E1E1E] py-20 max-md:pt-0">
      <ToastContainer />
      {/* <Header /> */}
      <div className="containerb  max-middle_screen:p-5">
        <button
          className={`flex items-center justify-between max-middle_screen:${goBack} px-5 py-2 gap-5 rounded-lg border-2 border-[#E6783F] text-white hidden `}
          onClick={filterAndShowFoods}
        >
          <img src={arrImg} className="rotate-180" alt="arrow svg" />
          Go Back
        </button>
        <div
          className={`max-middle_screen:${chageDisplay} w-full flex flex-col items-center justify-between gap-y-10`}
        >
          <h1 className="vetirino text-white text-6xl font-bold uppercase font-serif max-middle_screen:text-3xl max-md:text-xl">
            bizning menu
          </h1>
          <div className="w-full flex items-center justify-between flex-wrap gap-y-5 max-middle_screen:grid max-middle_screen:grid-cols-1 max-middle_screen:w-2/3 ">
            <button
              onClick={filterFoods}
              className={`w-60 h-16 max-sm:h-10 gothik flex text-center justify-center items-center max-middle_screen:justify-between salom px-5 py-2 text-lg font-semibold rounded-full border-[1px] border-[#6D6D6E] max-middle_screen:border-[#E6783F] hover:border-[#E6783F]  text-white max-middle_screen:w-full max-middle_screen:rounded-md max-middle_screen:text-xs max-mini_screen:text-[10px] transition-all`}
            >
              Mahsus Taomlar
              <img
                src={arrImg}
                className="hidden max-middle_screen:block"
                alt="arrow svg"
              />
            </button>
            {/* salatlar */}
            <button
              onClick={filterSalat}
              className={`w-60 h-16 max-sm:h-10 gothik flex text-center justify-center items-center max-middle_screen:justify-between salom px-5 py-2 text-lg font-semibold rounded-full border-[1px] border-[#6D6D6E] max-middle_screen:border-[#E6783F] hover:border-[#E6783F]  text-white max-middle_screen:w-full max-middle_screen:rounded-md max-middle_screen:text-xs max-mini_screen:text-[10px] transition-all`}
            >
              Salatlar
              <img
                src={arrImg}
                className="hidden max-middle_screen:block"
                alt="arrow svg"
              />
            </button>
            {/* mahsus taomlar */}
            <button
              onClick={filterWithoutOil}
              className={`w-60 h-16 max-sm:h-10 gothik flex text-center justify-center items-center max-middle_screen:justify-between salom px-5 py-2 text-lg font-semibold rounded-full border-[1px] border-[#6D6D6E] max-middle_screen:border-[#E6783F] hover:border-[#E6783F]  text-white max-middle_screen:w-full max-middle_screen:rounded-md max-middle_screen:text-xs max-mini_screen:text-[10px] transition-all`}
            >
              Yog'siz Taomlar
              <img
                src={arrImg}
                className="hidden max-middle_screen:block"
                alt="arrow svg"
              />
            </button>
            {/* og'siz taomlar */}
            <button
              onClick={filterDrinks}
              className={`w-60 h-16 max-sm:h-10 gothik flex text-center justify-center items-center max-middle_screen:justify-between salom px-5 py-2 text-lg font-semibold rounded-full border-[1px] border-[#6D6D6E] max-middle_screen:border-[#E6783F] hover:border-[#E6783F]  text-white max-middle_screen:w-full max-middle_screen:rounded-md max-middle_screen:text-xs max-mini_screen:text-[10px] transition-all`}
            >
              Ichimiklar
              <img
                src={arrImg}
                className="hidden max-middle_screen:block"
                alt="arrow svg"
              />
            </button>
            {/* shrinliklar */}
            <button
              onClick={filterDesert}
              className={`w-60 h-16 max-sm:h-10 gothik flex text-center justify-center items-center max-middle_screen:justify-between salom px-5 py-2 text-lg font-semibold rounded-full border-[1px] border-[#6D6D6E] max-middle_screen:border-[#E6783F] hover:border-[#E6783F]  text-white max-middle_screen:w-full max-middle_screen:rounded-md max-middle_screen:text-xs max-mini_screen:text-[10px] transition-all`}
            >
              Shrinliklar
              <img
                src={arrImg}
                className="hidden max-middle_screen:block"
                alt="arrow svg"
              />
            </button>
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
                  className=" flex flex-col items-center justify-between w-full h-full text-white bg-[#d9d9d91f] rounded-xl max-middle_screen:flex-row max-middle_screen:items-center max-middle_screen:p-2 pb-5"
                >
                  <img
                    src={product.img}
                    alt={product.name + " png"}
                    className="rounded-lg h-full w-full max-middle_screen:w-1/3"
                    width={260}
                    height={236}
                  />
                  <div className="px-5 py-3 flex flex-col justify-between w-full h-full max-middle_screen:flex-row items-start max-middle_screen:items-center max-middle_screen:justify-between">
                    <div className="flex flex-col items-start justify-between max-middle_screen:flex-row max-middle_screen:items-center w-9/12 max-sm:flex-col max-sm:items-start">
                      {" "}
                      <h3 className="gothik text-xl tracking-wide max-lg:text-3xl max-md:text-base font-bold first-letter:uppercase mb-1 truncate max-md:w-20">
                        {product.name}
                      </h3>
                      <h4 className="gothik text-xl max-lg:text-2xl max-md:text-xs text-gray-400 font-medium mb-3 max-middle_screen:mb-0">
                        {product.massa}gr
                      </h4>
                      <h5 className="gothik text-2xl max-middle_screen:block max-sm:text-lg hidden">
                        {product.price}₱
                      </h5>
                    </div>
                    <div className="w-full h-full max-middle_screen:w-2/6  flex items-center justify-end middle_screen:flex middle_screen:justify-between middle_screen:gap-3">
                      <p className="gothik text-3xl max-lg:text-base  max-middle_screen:hidden font-medium ">
                        {product.price}₱
                      </p>
                      <button
                        className="gothik max-middle_screen:w-20 max-middle_screen:h-20 max-sm:w-14 max-sm:h-14 max-mini_screen:h-10 max-mini_screen:w-10 middle_screen:px-2 middle_screen:py-2.5 bg-[#ff722b] rounded-lg text-lg max-lg:text-xs active:bg-transparent active:text-orange active:border-2  active:border-[#ff722b] border-2 border-[#ff722b] max-middle_screen:bg-transparent truncate transition-all"
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
      <StolBandQilish />
    </div>
  );
};

export default Menu;
