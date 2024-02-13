import React from "react";
import "./loader.css";
const Loader = () => {
  return (
    <div className="fixed w-full h-full bg-[#000000ef] z-20  flex items-center justify-center">
      <ul className="nima">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Loader;
