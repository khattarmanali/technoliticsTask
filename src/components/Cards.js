import React from "react";
import cardData from "../data/cards";
const Cards = () => {
  return (
    <section className="flex justify-around  ">
      {cardData.map((element) => (
        <div className="w-full h-full  max-w-[30rem] m-4">
          <div className="bg-white shadow-md rounded-lg p-4 h-40">
            <div className="flex justify-around items-center ">
              <div className="flex items-center justify-">
                <img
                  className="w-72 h-28 rounded-lg "
                  src={element.img}
                  alt=""
                />
                <div className="text-sm">
                  <p className="text-gray-900 leading-none text-start">
                    {element.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
export default Cards;
