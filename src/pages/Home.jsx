import React, { useState } from "react";
import { foods } from "../data";
import Star from "../assets/Star.svg";
import pic1 from "../assets/pic (1).png";
import pic2 from "../assets/pic (2).png";
import pic3 from "../assets/pic (3).png";
import pic4 from "../assets/pic (4).png";

const Home = () => {
  const [cart, setCart] = useState([]);

  const addCart = (i) => {
    const found = cart.find((product) => product.id === +i.id);

    if (!found) {
      // toast.success(`Cartga qo'shildi`, {
      //     position: "bottom-right",
      //     autoClose: 1500,
      //     hideProgressBar: true,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "light",
      // });
      foods[+i].isTru = true;
      setCart([...cart, foods[+i]]);
    } else {
      alert("bu bor gandon");
      // toast.error(`Bu oldindan mavjud`, {
      //     position: "bottom-right",
      //     autoClose: 1500,
      //     hideProgressBar: true,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "light",
      // });
    }
  };

  return (
    <div className="containerb">
      <div className="grid grid-cols-2 space-x-20">
        <div className="">
          <div className="mb-20">
            <h2 className="text-[65px] text-white font-normal uppercase mb-16">
              Rstoran haqida
            </h2>
            <p className="text-[#DCDDDF] text-lg font-normal mb-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              feugiat est a elit tristique efficitur. Phasellus sodales lectus
              ut tincidunt sodales. Pellentesque viverra mattis mattis. Donec
              pretium posuere enim, id tincidunt elit scelerisque vel. Etiam
              consectetur fermentum odio euismod ullamcorper.
            </p>
            <p className="text-[#DCDDDF] text-lg font-normal mb-6">
              Pellentesque at urna dui. Donec vestibulum maximus tempus. Donec
              vehicula, augue quis maximus vestibulum, arcu eros facilisis nunc,
              blandit fringilla enim elit vel odio. Nam ut turpis pretium,
              placerat lectus nec, placerat arcu. Nunc vehicula arcu vel mollis
              scelerisque. Nulla tincidunt at turpis vitae malesuada. Quisque in
              velit orci. Pellentesque sed consequat sapien.
            </p>
            <p className="text-[#DCDDDF] text-lg font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              feugiat est a elit tristique efficitur. Phasellus sodales lectus
              ut tincidunt sodales. Pellentesque viverra mattis mattis. Donec
              pretium posuere enim, id tincidunt elit scelerisque vel. Etiam
              consectetur fermentum odio euismod ullamcorper.
            </p>
          </div>

          {/* Restoranimiz haqida qisqacha maluot */}
          <div className="grid grid-cols-2 gap-10">
            <span className="text-lg font-semibold text-white flex items-center gap-3">
              <img src={Star} alt="Yulduzcha svg" />
              Lorem ipsum dolor sit amet consectetur.
            </span>
            <span className="text-lg font-semibold text-white flex items-center gap-3">
              <img src={Star} alt="Yuluzcha svg" />
              Lorem ipsum dolor sit amet consectetur.
            </span>
            <span className="text-lg font-semibold text-white flex items-center gap-3">
              <img src={Star} alt="Yuluzcha svg" />
              Lorem ipsum dolor sit amet consectetur.
            </span>
            <span className="text-lg font-semibold text-white flex items-center gap-3">
              <img src={Star} alt="Yuluzcha svg" />
              Lorem ipsum dolor sit amet consectetur.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className=" mt-10 space-y-5">
            <img
              className="rounded-xl shadow-lg shadow-orange"
              src={pic1}
              alt="oshxona haqidag rasim"
            />
            <img
              className="rounded-xl shadow-lg shadow-orange"
              src={pic2}
              alt="oshxona haqidag rasim"
            />
          </div>
          <div className="space-y-5">
            <img
              className="rounded-xl shadow-lg shadow-orange"
              src={pic3}
              alt="oshxona haqidag rasim"
            />
            <img
              className="rounded-xl shadow-lg shadow-orange"
              src={pic4}
              alt="oshxona haqidag rasim"
            />
          </div>
        </div>
      </div>

      {/*Mahsulotlarning qoshilishi  */}
      <div className="bg">
        <h2 className="text-[65px] text-white font-normal uppercase text-center mb-14">
          Bizning Menu
        </h2>
        <div className="w-full flex justify-around items-center mb-10">
          <span className="cursor-pointer text-xl px-8 py-2 rounded-3xl border-2 border-[#6D6D6E] text-white">
            Salatlar
          </span>
          <span className="cursor-pointer text-xl px-8 py-2 rounded-3xl border-2 border-[#6D6D6E] text-white">
            Goshtli Tamolar
          </span>
          <span className="cursor-pointer text-xl px-8 py-2 rounded-3xl border-2 border-[#6D6D6E] text-white">
            Fast Foodlar
          </span>
          <span className="cursor-pointer text-xl px-8 py-2 rounded-3xl border-2 border-[#6D6D6E] text-white">
            Shrinliklar
          </span>
          <span className="cursor-pointer text-xl px-8 py-2 rounded-3xl border-2 border-[#6D6D6E] text-white">
            Ichimlikalr
          </span>
        </div>

        <ul className="grid grid-cols-4 gap-5">
          {foods.map((e) => {
            return (
              <li
                key={e.id}
                className="w-full h-full bg-[#D9D9D914] text-white rounded-xl  flex flex-col items-start justify-between"
              >
                <img src={e.img} className="rounded-lg mb-4 w-full" alt="" />
                <div className="w-full px-5">
                  <h3 className="text-xl font-normal text-white">{e.name}</h3>
                  <p className="text-base font-normal mb-6 text-[#DCDDDF]">
                    {e.massa}gr.
                  </p>

                  <div className="flex items-center justify-between w-full pb-8">
                    <p className="text-[25px] font-bold">{e.price} ₽</p>
                    <button
                      onClick={(i) => addCart(i.target.id)}
                      id={e.id}
                      className="px-4 py-2.5 rounded-lg bg-[#EF6602] text-white"
                    >
                      buyurma berish
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
