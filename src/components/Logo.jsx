import React from "react";
import Slider from "react-infinite-logo-slider";

import logo11 from "../assets/img/logo11.png";
import logo12 from "../assets/img/logo12.png";
import logo13 from "../assets/img/logo13.png";
import logo14 from "../assets/img/logo14.png";
import logo15 from "../assets/img/logo15.png";
import logo16 from "../assets/img/logo16.png";
import logo17 from "../assets/img/logo17.png";
import logo18 from "../assets/img/logo18.png";
import logo19 from "../assets/img/logo19.png";
import logo20 from "../assets/img/logo20.png";

const clientImages = [
  { src: logo11, alt: "Client Logo" },
  { src: logo12, alt: "Client Logo" },
  { src: logo13, alt: "Client Logo" },
  { src: logo14, alt: "Client Logo" },
  { src: logo15, alt: "Client Logo" },
  { src: logo16, alt: "Client Logo" },
  { src: logo17, alt: "Client Logo" },
  { src: logo18, alt: "Client Logo" },
  { src: logo19, alt: "Client Logo" },
  { src: logo20, alt: "Client Logo" },

];

const Logo = () => {

  return (
    <div className="my-[70px] w-full md:w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center px-4 py-10">
        <h1 className="text-[#26173F] text-2xl md:text-3xl xl:text-5xl font-bold text-center">
          Our <span className="text-[#27BDEE]">Clients</span>
        </h1>
        <p className="text-md text-center mt-3">
          At the core of our mission, your satisfaction is our success
        </p>
      </div>
      <Slider 
      duration={20}
      pauseOnHover={true}
      blurBorders={false}
      blurBoderColor={"#fff"}>
        {clientImages.map((image, index) => (
          <div
            key={index}
            className="mx-auto w-[150px] h-[150px]  overflow-hidden"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-[150px] h-[150px] mx-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Logo;
