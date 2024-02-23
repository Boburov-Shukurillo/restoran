import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import iks from "../assets/whiteIks.svg";
const Korzinka = ({ cart, setCart }) => {
  const handleRemove = (i) => {
    let removingItem = cart.slice(0, i).concat(cart.slice(i + 1, cart.length));
    setCart(removingItem);
    cart[i].isTrue = false;
    toast.success(`Cartdan olib tashlandi`, {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const [nima, setNima] = useState(0);
  const addProduct = (i) => {
    setNima(cart[i].productLength++);
  };

  const removePoduct = (i) => {
    if (cart[i].productLength > 1) {
      setNima(cart[i].productLength--);
    }
  };

  let TotalPrice = [];
  cart.map((product) => {
    TotalPrice.push(product.price * product.productLength);
  });

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [adress, setAdress] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    if (
      name.trim() === "" ||
      phoneNumber.trim() === "" ||
      adress.trim() === "" ||
      cart.length === 0
    ) {
      alert("Malumotlar To'liq Emas");
    } else {
      const telegram_bot_id = "6831636523:AAH-He85gM2AVkPJFd6_DRtHWHJD5bFb9EA";
      const chat_id = "6076096557";

      const telegramMessage = `👤 Ismi: ${name}\n\n 📱 Telefon-Raqam: ${phoneNumber}\n\n ✉️ Adress: ${adress} \n\n foydalanuvchu: ${eval(
        TotalPrice.join("+")
      )}₱ lik mahsulot sotib oldi`;

      axios.post(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
        chat_id,
        text: telegramMessage,
      });
      alert("Malumot yuborildi");
      setName("");
      setPhoneNumber("");
      setAdress("");
    }
  };

  return (
    <div className="containerb py-20 px-2 max-md:py-10">
      <ToastContainer />
      <h1 className="mb-20 text-[65px] font-bold font-[cursive] text-white max-middle_screen:text-5xl max-mini_screen:text-3xl max-md:mb-10">
        Korzinka
      </h1>
      <hr className="mb-10" />
      {cart.length === 0 && (
        <h1 className="text-center text-5xl font-bold text-white tracking-widest">
          Cartda Hechnarsa Yo'q
        </h1>
      )}
      <ul className={`mb-10`}>
        {cart.map((product, i) => {
          return (
            <li
              key={product.id}
              className="flex items-center justify-between py-2 h-44 max-md:h-20 mb-10 text-white max-middle_screen:border-b-[1px] max-md:relative max-md:mb-16"
            >
              <div className="h-full flex w-1/3 items-center justify-between max-middle_screen:mr-5 max-md:mr-0">
                <div className="w-full h-full flex items-center justify-between gap-5 ">
                  <img
                    width={200}
                    height={200}
                    src={product.img}
                    alt={product.name + " png"}
                      className=" rounded-3xl max-md:rounded-md border-2 border-orange h-full  object-cover"
                  />
                  <div className="flex flex-col items-start w-2/3 ">
                    <h3 className="text-4xl first-letter:uppercase max-middle_screen:text-2xl max-mini_screen:text-xl ">
                      {product.name}
                    </h3>
                    <p className="max-md:truncate text-2xl first-letter:uppercase text-gray-300 max-middle_screen:text-lg max-mini_screen:text-sm">
                      {product.massa * product.productLength} gr.
                    </p>
                    <p className="max-mini_screen:text-xs w-12 truncate">
                {product.price * product.productLength}₽
              </p>
                  </div>
                </div>
              </div>
              <div className="w-52 h-1/4 bg-white gap-1 rounded-xl text-black flex items-center justify-between p-1 max-md:w-20 max-md:h-7 max-md:rounded-sm">
                <button
                  onClick={() => removePoduct(i)}
                  className="w-1/3 h-full bg-[#DCDDDF] rounded-lg text-gray-700 font-bold max-mini_screen:text-xl flex items-center justify-center max-md:pb-1 max-md:rounded-sm"
                >
                  -
                </button>
                <span className="w-1/3 truncate flex items-center justify-center">
                  {product.productLength}
                </span>
                <button
                  onClick={() => addProduct(i)}
                  className="w-1/3 h-full bg-[#EF6602] rounded-lg text-white font-bold max-mini_screen:text-xl flex items-center justify-center max-md:pb-1 max-md:rounded-sm"
                >
                  +
                </button>
              </div>
              {/* <p className="max-mini_screen:text-xs w-12 truncate">
                {product.price * product.productLength}₽
              </p> */}
              <button
                onClick={() => handleRemove(i)}
                className="text-5xl font-bold font-[cursive] max-mini_screen:text-xl max-md:absolute max-md:-top-1/4 max-md:right-0 max-md:font-thin max-md:font-sans"
              >
                <img src={iks} alt="" />
              </button>
            </li>
          );
        })}
      </ul>
      <hr className="mb-5" />
      <div className="w-full flex items-center justify-between max-middle_screen:flex-col mb-5">
        <p className="w-1/2 text-[#DCDDDF] text-base max-middle_screen:w-full max-middle_screen:text-center max-middle_screen:mb-5 max-md:text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
          minima <br />
          <span className="font-bold italic">
            {" "}
            soluta sapiente beatae harum delectus architecto in illum quia
            nulla?
          </span>
        </p>
        <h1 className="text-3xl font-semibold text-white font-[cursive] max-md:text-xl">
          Total Price : {cart.length > 0 ? eval(TotalPrice.join("+")) : 0} ₱
        </h1>
      </div>
      <form
        onSubmit={handleChange}
        className="grid grid-cols-4 h-20 gap-5 max-middle_screen:grid-cols-3 max-middle_screen:h-44 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:h-64"
      >
        <input
          className="w-full h-full rounded-xl px-5 bg-white/15 text-white"
          placeholder="Ism"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <input
          className="w-full h-full rounded-xl px-5 bg-white/15 text-white"
          placeholder="Telefon Raqam"
          type="tel"
          pattern="(\+998|8)[\- ]?\d{2}[\- ]?\d{3}[\- ]?\d{2}[\- ]?\d{2}"
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
          required
        />
        <input
          className="w-full h-full rounded-xl px-5 bg-white/15 text-white"
          type="text"
          placeholder="Manzil"
          onChange={(e) => setAdress(e.target.value)}
          value={adress}
          required
        />
        <button className="w-full h-full rounded-2xl bg-[#FD7511] text-white soyalar text-lg font-bold">
          Buyurtma Berish
        </button>
      </form>
    </div>
  );
};

export default Korzinka;
