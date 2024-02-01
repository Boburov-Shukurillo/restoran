import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";

const MainLayOut = ({ cart, setData, data, setCart }) => {
  return (
    <div>
      <Header cart={cart} setData={setData} data={data} setCart={setCart} />
      <main className="bg-[#1E1E1E]">
        <Outlet wtf="knock knock face" />
      </main>
    </div>
  );
};

export default MainLayOut;
