import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";

const MainLayOut = ({ cart, setData, data, setCart }) => {
  const [loader, setLoader] = useState(true);
  setTimeout(() => setLoader(false), 1000);
  return (
    <div>
      <Header cart={cart} setData={setData} data={data} setCart={setCart} />
      {loader && <Loader />}
      <main className="bg-[#1E1E1E]">
        <Outlet wtf="knock knock face" />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayOut;
