import React, { useState } from "react";

const Korzinka = ({ cart, setCart }) => {
  const handleRemove = (i) => {
    let removingItem = cart.slice(0, i).concat(cart.slice(i + 1, cart.length));
    setCart(removingItem);
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

  return (
    <div className="containerb py-20">
      <h2 className="mb-20 text-[65px] font-bold font-[cursive] text-white">
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
              <div className="h-full flex w-1/2 items-center justify-between">
                <div className="h-full flex items-center justify-between gap-5">
                  <img
                    src={product.img}
                    alt={product.name + " png"}
                    className="rounded-md border-2 border-orange h-full"
                  />
                  <div className="flex flex-col items-start ">
                    <h3 className="text-4xl first-letter:uppercase">
                      {product.name}
                    </h3>
                    <p className="text-2xl first-letter:uppercase text-gray-300">
                      {product.massa * product.productLength}gr
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-48 h-14 bg-white rounded-xl text-black flex items-center justify-between p-1">
                <button
                  onClick={() => removePoduct(i)}
                  className="w-1/3 h-full bg-[#DCDDDF] rounded-lg "
                >
                  -
                </button>
                {product.productLength}
                <button
                  onClick={() => addProduct(i)}
                  className="w-1/3 h-full bg-[#EF6602] rounded-lg "
                >
                  +
                </button>
              </div>
              <p>{product.price * product.productLength}₽</p>
              <button
                onClick={() => handleRemove(i)}
                className="text-5xl font-bold font-[cursive]"
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
      <hr className="mb-5" />
      <div className="w-full flex items-center justify-between">
        <p className="w-1/2 text-white text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
          minima{" "}
          <span className="font-bold italic">
            {" "}
            soluta sapiente beatae harum delectus architecto in illum quia
            nulla?
          </span>
        </p>
        <h1 className="text-3xl font-semibold text-white font-[cursive]">
          Total Price : {cart.length > 0 ? eval(TotalPrice.join("+")) : 0} ₱
        </h1>
      </div>
    </div>
  );
};

export default Korzinka;
