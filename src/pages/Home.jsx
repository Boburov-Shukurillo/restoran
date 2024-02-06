import React, { useState } from "react";
const Home = ({ data, setCart }) => {
  const [filter, setFilter] = useState("Food");
  const [show, setShow] = useState(4);
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
    setFilter("Food");
  };
  const filterDrinks = () => {
    setFilter("Drink");
  };
  const filterDesert = () => {
    setFilter("Desert");
  };
  const filterFastFoods = () => {
    setFilter("FastFood");
  };
  return (
    <div className="containerb ">
      <div className={`bg h-full py-6 bg-balck`}>
        <div className="bg py-20 flex flex-col items-center orqafon">
          <div className="w-full flex flex-col items-center justify-between mb-10 h-44">
            <h1 className="text-white text-6xl font-bold uppercase">
              bizning menu
            </h1>
            <div className="w-4/6 flex items-center justify-around flex-wrap">
              <span
                onClick={filterFoods}
                className="px-5 py-2 text-xl font-semibold rounded-3xl border-2 text-white"
              >
                Ovqatlar
              </span>
              <span
                onClick={filterFastFoods}
                className="px-5 py-2 text-xl font-semibold rounded-3xl border-2 text-white"
              >
                Fast Foodlar
              </span>
              <span
                onClick={filterDrinks}
                className="px-5 py-2 text-xl font-semibold rounded-3xl border-2 text-white"
              >
                Ichimiklar
              </span>
              <span
                onClick={filterDesert}
                className="px-5 py-2 text-xl font-semibold rounded-3xl border-2 text-white"
              >
                Shrinliklar
              </span>
            </div>
          </div>
          <ul className=" grid grid-cols-4 max-md:grid-cols-2 gap-10 max-lg:grid-cols-3 max-sm:hidden py-10 px-5 max-md:hidden">
            {data.map((product) => {
              if (product.id < 4) {
                console.log(product);
                return (
                  <li
                    key={product.id}
                    className="w-full text-white bg-[#d9d9d91f] rounded-xl max-sm:w-2/3 "
                  >
                    <img
                      src={product.img}
                      alt={product.name + " png"}
                      className="rounded-xl w-full h-44"
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
                          className="px-2 py-2 bg-[#ff722b] rounded-lg text-[70%] max-lg:text-xs"
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

          <span
            onClick={showAll}
            className="text-white font-semibold text-center "
          >
            To'liq Ko'rish
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
