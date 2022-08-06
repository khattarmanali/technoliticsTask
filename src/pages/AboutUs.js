import React from "react";
import aboutUs from "../data/aboutUs";
import vegan from "../img/vegan.png";
const AboutUs = () => {
  return (
    <div
      className=" 
    flex flex-wrap  justify-center items-center
    "
    >
      <img src={vegan} alt="" className="flex-2 " />

      <div className="flex-1">
        <h4 className="text-center text-3xl font-bold text-black">
          {aboutUs.title}
        </h4>
        <h2 className="text-center text-xl font-bold text-black">
          {aboutUs.subTitle}
        </h2>
        <p className="text-center text-xl font-bold text-black">
          {aboutUs.description}
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
