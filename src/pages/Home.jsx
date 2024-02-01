import React from "react";
const Home = ({ data, setCart }) => {
  const handleBuy = (i) => {
    data[i].isTrue = true;
    const sdfghj = data.filter((e) => e.isTrue === true);
    setCart(sdfghj);
  };
  return (
    <div className="containerb gridl">
      <ul className="grid grid-cols-4 max-md:grid-cols-2 gap-10 max-lg:grid-cols-3 max-sm:hidden py-44 ">
        {data.map((product) => {
          return (
            <li
              key={product.id}
              className="w-full text-white bg-[#d9d9d91f] rounded-xl max-sm:w-2/3 "
            >
              <img
                src={product.img}
                alt={product.name + " png"}
                className="rounded-xl w-full"
              />
              <div className="px-5 py-5">
                <h3 className="text-xl max-lg:text-lg max-md:text-sm font-bold first-letter:uppercase">
                  {product.name}
                </h3>
                <p className="text-lg max-lg:text-base max-md:text-xs font-medium">
                  {product.massa}gr
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-lg max-lg:text-base  max-md:text-xs font-medium">
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
        })}
      </ul>
    </div>
  );
};

export default Home;
