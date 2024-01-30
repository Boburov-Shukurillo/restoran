import React, { useEffect, useState } from "react";
// data ma'lumotlari
import { foods } from "../data";
import Header from "../Components/Header";

export let cartLength = [];
const Korzinka = () => {
  // korzinkaga qo'shilgan malumotlarni saralsh
  let update = foods.filter((e) => e.isTru === true);
  const [cart, setCart] = useState(update);

  // qo'shilgan carni olib tashlash X qilish
  const removeItem = (i) => {
    cart[i].productLength = 1;
    let newArr = cart.slice(0, i).concat(cart.slice(i + 1));
    setCart(newArr);
  };

  // counter maxsulotni ko'pytirish
  const [counter, setCounter] = useState(1);
  const addProduct = (id) => {
    setCounter(cart[id].productLength++);
  };

  // countdown maxsulotni kamaytirish
  const removeProduct = (id) => {
    if (cart[id].productLength === 0) {
      let newArr = cart.slice(0, id).concat(cart.slice(id + 1));
      setCart(newArr);
    } else {
      setCounter(cart[id].productLength--);
    }
  };

  // sotib olngan Mahsulotning umumiy qiymati
  let To = [];
  cart.map((product) => {
    To.push(product.price * product.productLength);
  });
  // buyurtma berish uchun oyna
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [addres, setAdress] = useState("");

  // buyurmani tekshiib bo'tga jonatuvchi joy
  const buyNow = (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      tel.trim() === "" ||
      addres.trim() === "" ||
      cart.length === 0
    ) {
      alert(`O'ynalar va Korzinka bo'sh bo'lmasligi kerak`);
    } else {
      alert("Buyurtma Berildi");
      setCart([]);
      setName("");
      setAdress("");
      setTel("");
    }
  };

  // foydalanuvchini ismini olish
  const getName = (e) => {
    setName(e.target.value);
  };

  // foydalanuvchini telefon raqamini olish
  const getTel = (e) => {
    setTel(e.target.value);
  };

  // foydalanuvchining manzilini olish
  const getAdress = (e) => {
    setAdress(e.target.value);
  };

  return (
    <div className="h-full containerb pt-20">
      <h1 className="text-[65px] font-normal uppercase mb-9 text-white ">
        Korzinka
      </h1>
      <hr className="mb-14" />

      {/* maxsulotlar ro'yxati */}
      <ul className="h-full">
        {cart.length > 0 &&
          cart.map((e, i) => {
            return (
              <li
                key={e.id}
                className="w-full h-52 p-2  text-white mb-5 rounded-xl  flex items-center justify-between "
              >
                <div className="h-full flex justify-center">
                  <img
                    src={e.img}
                    className="max-md:hidden rounded-lg  h-full"
                    alt={e.name + " rasmi"}
                  />

                  {/* mahsulot nomi va mahsuot vazni */}
                  <div className="w-[400px] max-md:w-1/2 flex flex-col items-start justify-center ml-5">
                    <h3 className="text-[35px] first-letter:uppercase flex-shrink-0 max-md:text-xl">
                      {e.name}
                    </h3>
                    <p className="text-[25px] text-[#DCDDDF] max-md:text-sm">
                      <span className="allPrice">
                        {e.massa * e.productLength}
                      </span>
                      gr
                    </p>
                  </div>
                </div>

                {/* sotib olingan mahsulotni kko'paytirish */}
                <div className="flex items-center justify-between w-[15%] h-14 max-md:h-8 max-md:w-20 bg-white px-1 py-1 rounded-md">
                  <button
                    onClick={() => removeProduct(i)}
                    className="flex items-center justify-center h-full w-full rounded-md bg-[#DCDDDF] text-2xl font-bold font-[cursive] max-md:text-lg"
                  >
                    -
                  </button>
                  <span className="text-gray-600 mx-2">{e.productLength}</span>
                  <button
                    onClick={() => addProduct(i)}
                    className="flex items-center justify-center w-full h-full rounded-md bg-orange text-2xl font-bold font-[cursive] max-md:text-lg"
                  >
                    +
                  </button>
                </div>

                {/* Maxsulotning narxi */}
                <p className="text-lg w-24">{e.price * e.productLength}₱</p>

                {/* Maxsulotni savatdan olib tashlash */}
                <button
                  className="text-2xl font-semibold font-[cursive]"
                  onClick={() => removeItem(i)}
                >
                  X
                </button>
              </li>
            );
          })}
      </ul>
      {/* korzinka qachonki bo'sh bo'lganda */}
      <h3 className={" text-center text-4xl font-bold text-white"}>
        {cart.length == 0 && "Cartda hech narsa Yoq"}
      </h3>

      <hr className="mt-14 mb-11" />

      {/* buyurtma qilish joyi */}

      <form action="http://localhost:5174/korzinka" onSubmit={buyNow}>
        <div className=" text-white flex justify-between items-center mb-20 max-md:flex-col">
          <p className="w-[400px] max-md:text-center">
            Оставьте свои данные и мы свяжемся с вами для уточнения деталей
            заказа.
            <span className="font-bold italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </p>
          <h1 className="text-3xl font-semibold text-white font-[cursive]">
            Total Price : {cart.length > 0 ? eval(To.join("+")) : 0} ₱
          </h1>
        </div>
        <div className="flex items-center justify-between gap-5 pb-5 max-md:flex-col">
          <input
            autoComplete="off"
            onChange={getName}
            value={name}
            className="h-20 w-full rounded-3xl px-6 py-9"
            placeholder="ismingiz"
            type="text"
            id="1"
          />
          <input
            autoComplete="off"
            onChange={getTel}
            value={tel}
            className="h-20 w-full rounded-3xl px-6 py-9"
            placeholder="telefon raqam"
            type="tel"
            id="2"
          />
          <input
            autoComplete="off"
            onChange={getAdress}
            value={addres}
            className="h-20 w-full rounded-3xl px-6 py-9"
            placeholder="manzilingiz"
            type="text"
            id="3"
          />
          <button
            id="4"
            className="h-20 w-full bg-orange rounded-3xl text-white text-[25px] font-bold uppercase shadow-lg shadow-orange border-2"
          >
            Buyurtma Qilish
          </button>
        </div>
      </form>
    </div>
  );
};

export default Korzinka;
