import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

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
  const [phoneNumber, setPhoneNumber] = useState();
  const [adress, setAdress] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    console.log(typeof phoneNumber);
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

      const telegramMessage = `👤 Ismi: ${name}\n\n 📱 Telefon-Raqam: ${phoneNumber}\n\n ✉️ Adress: ${adress} \n\n foydalanuvchu: ${cart.length}ta mahsulot sotib oldi`;

      axios.post(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
        chat_id,
        text: telegramMessage,
      });
      alert("Malumot yuborildi");
    }
  };

  return (
    <div className="containerb py-20">
      <ToastContainer />
      <h2 className="mb-20 text-[65px] font-bold font-[cursive] text-white max-middle_screen:text-5xl max-mini_screen:text-3xl">
        Korzinka
      </h2>
      <hr className="mb-10" />
      <ul className={`mb-10 ${cart.length === 0 && `h-[20vh]`}`}>
        {cart.map((product, i) => {
          return (
            <li
              key={product.id}
              className="flex items-center justify-between h-44 mb-10 text-white"
            >
              <div className="h-full flex w-1/3 items-center justify-between max-middle_screen:mr-5 max-md:mr-0">
                <div className="w-full h-full flex items-center justify-between gap-5 ">
                  <img
                    width={200}
                    height={200}
                    src={product.img}
                    alt={product.name + " png"}
                    className="rounded-md border-2 border-orange h-full max-middle_screen:hidden w-1/2  max-lg:h-1/2 object-cover"
                  />
                  <div className="flex flex-col items-start w-full">
                    <h3 className="text-4xl first-letter:uppercase max-middle_screen:text-2xl max-mini_screen:text-xl ">
                      {product.name}
                    </h3>
                    <p className="text-2xl first-letter:uppercase text-gray-300 max-middle_screen:text-lg max-mini_screen:text-sm">
                      {product.massa * product.productLength}gr
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-1/6 h-1/4 bg-white rounded-xl text-black flex items-center justify-between p-1  max-md:h-[15%] max-sm:w-1/4 max-middle_screen:h-1/4">
                <button
                  onClick={() => removePoduct(i)}
                  className="w-1/3 h-full bg-[#DCDDDF] rounded-lg max-mini_screen:text-xs flex items-center justify-center"
                >
                  -
                </button>
                <span className="w-1/3 flex items-center justify-center">
                  {product.productLength}
                </span>
                <button
                  onClick={() => addProduct(i)}
                  className="w-1/3 h-full bg-[#EF6602] rounded-lg max-mini_screen:text-xs flex items-center justify-center"
                >
                  +
                </button>
              </div>
              <p className="max-mini_screen:text-xs w-1/12">
                {product.price * product.productLength}₽
              </p>
              <button
                onClick={() => handleRemove(i)}
                className="text-5xl font-bold font-[cursive] max-mini_screen:text-xl"
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
      <hr className="mb-5" />
      <div className="w-full flex items-center justify-between max-middle_screen:flex-col mb-5">
        <p className="w-1/2 text-white text-xl max-middle_screen:w-full max-middle_screen:text-center max-middle_screen:mb-5 max-md:text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
          minima{" "}
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
      <form onSubmit={handleChange} className="grid grid-cols-4 h-20 gap-5">
        <input
          className="px-5 py-2 rounded-xl"
          placeholder="Ism"
          type="text"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="px-5 py-2 rounded-xl"
          placeholder="Telefon Raqam"
          type="tel"
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <input
          className="px-5 py-2 rounded-xl"
          type="text"
          placeholder="Manzil"
          onChange={(e) => setAdress(e.target.value)}
          required
        />
        <button className="px-5 py-2 rounded-xl bg-orange text-white shadow-xl shadow-orange border-2">
          Buyurtma Berish
        </button>
      </form>
    </div>
  );
};

export default Korzinka;
