import React from "react";
import productData from "../data/product";
import seek from "../img/kabba.png";
const ProductCard = () => {
  return (
    <section>
      <div className="flex flex-wrap justify-center items-center bg-indigo-100 max-w-md">
        <img src={seek} alt="" className="w-24 h-24" />

        <div className="flex-1 ">
          <h3>IT ISN'T chicken</h3>
          <span> seekh</span>
          <span> kabab</span>
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly items-center max-w-md">
        {productData.map((element) => (
          <div
            className="w-full max-w-sm 
         
           
          "
          >
            <div
              className="bg-white shadow-md rounded-lg p-4"
              style={{
                backgroundColor: `${element.color}`,
              }}
            >
              <div className="flex justify-between items-center ">
                <div className="flex items-center">
                  <img
                    className="w-32 h-28 rounded-lg mr-4"
                    src={element.img}
                    alt=""
                  />
                  <div className="text-sm">
                    <h3>IT ISN'T chicken</h3>
                    <p className="text-gray-900 leading-none">
                      {element.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ProductCard;
