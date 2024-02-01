import React from "react";

const Home = ({ data, setCart }) => {
  const handleBuy = (i) => {
    data[i].isTrue = true;
    const sdfghj = data.filter((e) => e.isTrue === true);
    setCart(sdfghj);
  };
  return (
    <div>
      {data.map((product) => {
        return (
          <li key={product.id}>
            <img src={product.img} alt={product.name + " png"} />
            <h3>{product.name}</h3>
            <p>{product.massa}</p>
            <p>{product.price}</p>
            <button onClick={() => handleBuy(product.id)}>
              Buyurtma berish
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default Home;
