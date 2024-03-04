import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";

const MainLayOut = ({ cart, setData, data, setCart }) => {
  const location = useLocation();
  let LocationWeb = [
    "/",
    "/about",
    "/menu",
    "/galareya",
    "/kontakt",
    "/korzinka",
  ];
  let sd = LocationWeb.includes(location.pathname);
  const [loader, setLoader] = useState(true);
  setTimeout(() => setLoader(false), 300);
  return (
    <div className="overflow-hidden">
      {sd&&
        <Header cart={cart} setData={setData} data={data} setCart={setCart} />
      }
      {loader && (
        <div className="fixed z-50 top-0">
          <Loader />
        </div>
      )}
      <main className="bg-[#1E1E1E]">
        <Outlet />
      </main>
      {sd && <Footer />}
    </div>
  );
};

export default MainLayOut;
