import React from "react";
import { connectElement, policies, siteMap } from "../data/footer";
import logo from "../img/logof.png";
const ProductsCard = () => {
  return (
    <section>
      <footer class=" bg-black  ">
        <div class="md:flex md:justify-evenly bg-white">
          <div class="mb-6 md:mb-0">
            <img
              src={logo}
              class=""
              alt=" Logo"
              className="
            w-48 h-32"
            />
          </div>
          <div class="grid grid-cols-2 gap-6 sm:gap-6 sm:grid-cols-4 m-2">
            <div className=" w-[9rem]  ">
              <h2 class="mb-6 text-lg font-bold text-black uppercase ">
                CONNECT
              </h2>
              <ul class="text-gray-800  font-normal">
                {connectElement.map((element) => (
                  <li class="mb-4">{element.title}</li>
                ))}
              </ul>
            </div>
            <div className=" w-[9rem]  ">
              <h2 class="mb-6 text-lg font-bold text-black uppercase ">
                POLICIES
              </h2>
              <ul class="text-black font-regular">
                {policies.map((element) => (
                  <li class="mb-4">{element.title}</li>
                ))}
              </ul>
            </div>
            <div className=" w-[9rem]  ">
              <h2 class="mb-6 text-lg font-bold text-black uppercase ">
                sitemap
              </h2>
              <ul class="text-black font-regular">
                {siteMap.map((element) => (
                  <li class="mb-4">{element.title}</li>
                ))}
              </ul>
            </div>
            <div className=" w-[9rem]  ">
              <h2 class="mb-6 text-lg font-bold text-black uppercase ">
                store Locator
              </h2>
            </div>
          </div>
        </div>

        <div class="sm:flex sm:items-center sm:justify-center bg-black p-9">
          <span class="text-sm text-white sm:text-center ">
            © 2022 IT ISN'T . All Rights Reserved.
          </span>
        </div>
      </footer>
    </section>
  );
};

export default ProductsCard;
