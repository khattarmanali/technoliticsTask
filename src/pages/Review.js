import React from "react";
import facebook from "../assets/icons8-facebook-48.png";
import instagram from "../assets/icons8-instagram-48.png";
import Cards from "../components/Cards";
const Review = () => {
  return (
    <section className="bg-black ">
      <div className="">
        <div className="  text-center text-white  flex flex-col justify-Center flex-wrap items-center py-8 sm:py-4 my-4">
          <h1 className="text-3xl font-bold">
            Here's what Real People have to say <br />
            about our Unreal Meat
          </h1>
        </div>
        <div className="my-4">
          <Cards />
        </div>
        <div className="  text-center text-white flex flex-col justify-Center flex-wrap items-center py-8 sm:py-4">
          <h3 className="text-2xl text-bold">
            Or Connect with us on social media
          </h3>
          <h5>for some really juicy veg gossip</h5>
          <div className="flex justify-center my-4 items-center">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
