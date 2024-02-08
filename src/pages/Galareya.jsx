import React from "react";
import StolBandQilish from "../Components/StolBandQilish";
import img01 from "../assets/galareya (1).png";
import img02 from "../assets/galareya (2).png";
import img03 from "../assets/galareya (3).png";
import img04 from "../assets/galareya (4).png";
import img05 from "../assets/galareya (5).png";
import img06 from "../assets/galareya (6).png";
import img07 from "../assets/galareya (7).png";
import img08 from "../assets/galareya (8).png";
import img09 from "../assets/galareya (9).png";
import img10 from "../assets/galareya (10).png";
import img11 from "../assets/galareya (11).png";
const Galareya = () => {
  return (
    <div className="containerb py-20">
      <div className="grid grid-cols-3 gap-10 mb-10">
        <div className="flex flex-col gap-10">
          <img src={img01} alt="galareya imgs" width={400} height={400} />
          <img src={img02} alt="galareya imgs" width={400} height={400} />
          <img src={img03} alt="galareya imgs" width={400} height={400} />
          <img src={img04} alt="galareya imgs" width={400} height={400} />
        </div>
        <div className="flex flex-col gap-10">
          <h1 className="mb-10 text-5xl font-bold font-serif text-white text-center">
            Galareya
          </h1>
          <img src={img05} alt="galareya imgs" width={400} height={400} />
          <img src={img06} alt="galareya imgs" width={400} height={400} />
          <img src={img07} alt="galareya imgs" width={400} height={400} />
          <img src={img08} alt="galareya imgs" width={400} height={400} />
        </div>
        <div className="flex flex-col gap-10">
          <img src={img09} alt="galareya imgs" width={400} height={400} />
          <img src={img11} alt="galareya imgs" width={400} height={400} />
          <img src={img10} alt="galareya imgs" width={400} height={400} />
          <img src={img11} alt="galareya imgs" width={400} height={400} />
        </div>
      </div>
      <StolBandQilish />
    </div>
  );
};

export default Galareya;
