import React from "react";
import healthyChoice from "../img/healthy-choice.png";
import background from "../img/Untitled_cleanup.png";
const Protient = () => {
  return (
    <section>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
        }}
        className="w-screen h-screen flex justify-center items-center flex-wrap"
      >
        <div className="text-5xl font-medium text-white max-w-md">
          WONDERING
          <br /> IF IT'S A <br />
          <span className="text-7xl font-bold text-orange-300">
            HEALTHY CHOICE ?
          </span>
        </div>
        <div>
          <img src={healthyChoice} alt="" className="max-w-[25rem]" />
        </div>
      </div>
    </section>
  );
};

export default Protient;
