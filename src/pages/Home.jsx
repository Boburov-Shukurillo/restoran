import React, { useEffect, useState } from "react";
import pitsa from "../assets/homePitsa.png";
import kokat from "../assets/kokat.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { foods } from "../data";
import Star from "../assets/Star.svg";
import pic1 from "../assets/pic (1).png";
import pic2 from "../assets/pic (2).png";
import pic3 from "../assets/pic (3).png";
import pic4 from "../assets/pic (4).png";
export let cartNumber = [];
const Home = () => {
  console.log(cartNumber);
  const addCart = (i) => {
    const found = foods[i].isTru === true;
    cartNumber.push(found);
    if (!found) {
      toast.success("Kartga Qo'shildi", {
        position: "bottom-right",
        autoClose: 500,
      });
      foods[+i].isTru = true;
    } else {
      toast.error("Bu Kartda Mavjud", {
        position: "bottom-right",
        autoClose: 500,
      });
    }
  };
  return (
    <div className="containerb">
      <div className="w-full flex flex-wrap h-full">
        <div className="w-1/2  flex flex-col items-start justify-center gap-16 py-20">
          <h1 className="text-[120px] font-normal uppercase text-white leading-[70px]">
            Restoran <br />
            <span className="text-[63px]">
              <span className="text-[78px]">K</span>avkaz Oshxona
            </span>
          </h1>
          <p className="text-[25px] text-white w-full">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel minima
            maxime pariatur quisquam, cumque ex aliquid suscipit, quos iste qui
            fugiat sed iusto doloribus magnam at velit ullam magni hic.
          </p>
          <button className="py-4 px-20 bg-orange rounded-xl text-white font-bold text-[25px] shadow-xl shadow-orange border-2">
            Stol Band Qilish
          </button>
        </div>
        <div className="w-1/2 relative">
          <img src={pitsa} width="100%" alt="pitsa png" />
          <img
            src={kokat}
            width="150px"
            className="absolute right-1/2 bottom-1/3"
            alt="ko'kat png"
          />
        </div>
      </div>

      <div className="flex max-lg:flex-wrap space-x-20 items-center justify-center">
        <div className="w-1/2">
          <div className="mb-20">
            <h2 className="text-[65px] max-md:text-[40px] max-sm:text-[30px] max-md:text-center text-white font-normal uppercase mb-16 text-center max-md:mb-5">
              Restoran haqida
            </h2>
            <p className="text-[#DCDDDF] max-lg:text-center text-lg font-normal max-sm:text-[7px] max-sm:leading-[7px] max-sm:text-center mb-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              feugiat est a elit tristique efficitur. Phasellus sodales lectus
              ut tincidunt sodales. Pellentesque viverra mattis mattis. Donec
              pretium posuere enim, id tincidunt elit scelerisque vel. Etiam
              consectetur fermentum odio euismod ullamcorper.
            </p>
            <p className="text-[#DCDDDF] max-lg:text-center text-lg font-normal max-sm:text-[7px] max-sm:leading-[7px] max-sm:text-center mb-6">
              Pellentesque at urna dui. Donec vestibulum maximus tempus. Donec
              vehicula, augue quis maximus vestibulum, arcu eros facilisis nunc,
              blandit fringilla enim elit vel odio. Nam ut turpis pretium,
              placerat lectus nec, placerat arcu. Nunc vehicula arcu vel mollis
              scelerisque. Nulla tincidunt at turpis vitae malesuada. Quisque in
              velit orci. Pellentesque sed consequat sapien.
            </p>
            <p className="text-[#DCDDDF] max-lg:text-center text-lg font-normal max-sm:text-[7px] max-sm:leading-[7px] max-sm:text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              feugiat est a elit tristique efficitur. Phasellus sodales lectus
              ut tincidunt sodales. Pellentesque viverra mattis mattis. Donec
              pretium posuere enim, id tincidunt elit scelerisque vel. Etiam
              consectetur fermentum odio euismod ullamcorper.
            </p>
          </div>

          {/* Restoranimiz haqida qisqacha maluot */}
          <div className="grid grid-cols-2 gap-2">
            <span className="text-lg font-semibold  text-white max-md:text-center flex max-md:flex-col mb-2 items-center justify-center max-sm:text-[7px] max-sm:leading-[7px] gap-3">
              <img src={Star} alt="Yulduzcha svg" />
              Lorem ipsum dolor sit amet consectetur.
            </span>
            <span className="text-lg font-semibold  text-white max-md:text-center flex max-md:flex-col mb-2 items-center justify-center max-sm:text-[7px] max-sm:leading-[7px] gap-3">
              <img src={Star} alt="Yuluzcha svg" />
              Lorem ipsum dolor sit amet consectetur.
            </span>
            <span className="text-lg font-semibold  text-white max-md:text-center flex max-md:flex-col mb-2 items-center justify-center max-sm:text-[7px] max-sm:leading-[7px] gap-3">
              <img src={Star} alt="Yuluzcha svg" />
              Lorem ipsum dolor sit amet consectetur.
            </span>
            <span className="text-lg font-semibold  text-white max-md:text-center flex max-md:flex-col mb-2 items-center justify-center max-sm:text-[7px] max-sm:leading-[7px] gap-3">
              <img src={Star} alt="Yuluzcha svg" />
              Lorem ipsum dolor sit amet consectetur.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 max-md:hidden">
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

      <ToastContainer />
      {/*Mahsulotlarning qoshilishi  */}
      <div className="bg">
        <h2 className="text-[65px] text-white font-normal uppercase text-center mb-14">
          Bizning Menu
        </h2>
        <div className="w-full flex flex-wrap justify-center gap-5 items-center mb-10">
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

        <ul className="flex flex-wrap items-center justify-center gap-5">
          {foods.map((e) => {
            return (
              <li
                key={e.id}
                className="w-[340px] h-full bg-[#D9D9D914] text-white rounded-xl  flex flex-col items-start justify-between max-sm:w-3/4"
              >
                <img src={e.img} className="rounded-lg mb-4 w-full" alt="" />
                <div className="w-full px-5">
                  <h3 className="text-xl font-normal text-white max-sm:text-3xl first-letter:uppercase">
                    {e.name}
                  </h3>
                  <p className="text-base font-normal mb-6 text-[#DCDDDF] max-my_screen:text-xs">
                    {e.massa}gr.
                  </p>

                  <div className="flex items-center justify-between w-full pb-8">
                    <p className="text-[25px] font-bold max-lg:text-lg max-lg:font-extralight ">
                      {e.price} ₽
                    </p>
                    <button
                      onClick={(i) => addCart(i.target.id)}
                      id={e.id}
                      className="px-4 py-2.5 max-xl:px-2 rounded-lg bg-[#EF6602] text-white active:bg-transparent active:border-2 active:border-orange border-2 active:text-orange"
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
