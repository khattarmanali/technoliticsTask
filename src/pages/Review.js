import React from "react";
import facebook from "../assets/icons8-facebook-48.png";
import instagram from "../assets/icons8-instagram-48.png";
import Cards from "../components/Cards";
const Review = () => {
  return (
    <section>
      <div className="bg-black  text-center text-white w-screen h-screen flex flex-col justify-evenly flex-wrap items-center">
        <h1 className="text-3xl font-bold">
          Here's what Real People have to say <br />
          about our Unreal Meat
        </h1>
        <Cards />
        <div>
          <h3 className="text-2xl text-bold">
            Or Connect with us on social media
          </h3>
          <h5>for some really juicy veg gossip</h5>
        </div>

        <div className="flex justify-evenly items-center">
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Review;
