import React from "react";
import aboutUs from "../data/aboutUs";
import vegan from "../img/vegan.png";
const AboutUs = () => {
  return (
    <section>
      <div
        id="about"
        className=" 
    flex  justify-evenly items-center flex-wrap "
      >
        <div className="">
          <img src={vegan} alt="" className=" " />
        </div>
        <div className="max-w-[45rem] ">
          <h4 className="text-xl font-bold text-black text-green-700">
            {aboutUs.title}
          </h4>
          <h2 className=" text-6xl font-bold text-black italic ">
            {aboutUs.subTitle}
          </h2>

          <p className=" text-center text-xl font-normal text-black">
            {aboutUs.description}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-center font-bold text-3xl">
          {" "}
          Take a bite and see yourself
        </h1>
        <hr
          className="text-blue-200 w-56 h-1 bg-gray-200
      
       m-6"
        />
      </div>
    </section>
  );
};

export default AboutUs;
