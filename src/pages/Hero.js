import React from "react";
import Navigation from "../components/Navigation";
import banner from "../img/BANNER ASSET 01.png";

const Hero = () => {
  return (
    <section
      className="p-2"
      style={{
        background: "linear-gradient(to right, #166534 70%, #22c55e 30%)",
      }}
    >
      <div className="  w-screen h-full">
        <Navigation />

        <div className="basis-8/12  w-screen h-screen flex justify-evenly items-center flex-wrap   ">
          <div className=" text-bold text-6xl  max-w-xs ">
            <span className="text-white text-5xl ">IT ISN'T </span> <br />
            <span className="text-white text-6xl font-semibold ">CHICKEN</span>
            <br />
            <h1 className="text-yellow-400 text-7xl font-bold mt-4">
              SPICY FINGERS
            </h1>
          </div>
          <img src={banner} alt="" className="w-80 p-2 md:w-[32rem] h-auto " />
        </div>
      </div>
    </section>
  );
};

export default Hero;
