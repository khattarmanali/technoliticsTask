import React from "react";
import banner from "../img/BANNER ASSET 01.png";
import AboutUs from "./AboutUs";
const landing = () => {
  return (
    <>
      <section>
        <div className="flex flex-wrap border-2 border-black w-screen h-screen ">
          {/* <Navigation /> */}
          <img
            className="
   
      object-cover object-center  absolute right-40 top-8 "
            src={banner}
            alt=""
          />

          <div className="basis-8/12 bg-green-500 w-screen h-screen flex justify-around items-center flex-wrap">
            <div className=" text-bold text-6xl  max-w-xs ">
              <span className="text-white text-4xl ">IT ISN'T </span>
              <span className="text-white text-4xl font-semibold  pb-48">
                CHICKEN
              </span>
              <br />
              <span className="text-yellow-400 text-6xl font-bold ">
                SPICY FINGERS
              </span>
            </div>
          </div>
          <div className="basis-4/12 bg-green-300"></div>
        </div>
      </section>
      <section>
        <AboutUs />
      </section>
    </>
  );
};

export default landing;
