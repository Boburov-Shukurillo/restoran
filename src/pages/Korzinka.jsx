import React from "react";

const Korzinka = ({ cart, setCart }) => {
  const handleRemove = (i) => {
    let dfghj = cart.slice(0, i).concat(cart.slice(i + 1, cart.length));
    setCart(dfghj);
  };

  return (
    <div>
      Korzinka
      <ul>
        {cart.map((product, i) => {
          return (
            <li key={product.id}>
              <img src={product.img} alt={product.name + " png"} />
              <h3>{product.name}</h3>
              <p>{product.massa}</p>
              <p>{product.price}</p>
              <button onClick={() => handleRemove(i)}>Buyurtma berish</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Korzinka;
