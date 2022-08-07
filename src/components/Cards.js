import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import React from "react";
import cardData from "../data/cards.js";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";

const Cards = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {cardData.map((card, index) => (
          <SwiperSlide index={index}>
            <div className="flex justify-evenly items-center max-w-2xl p-4 rounded-xl ">
              <div>
                <img src={card.img} alt="" className=" rounded-lg w-4 h-4" />
              </div>
              <div className="text-center">
                <p>{card.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Cards;
<CarouselProvider
  totalSlides={cardData.length}
  visibleSlides={cardData.length}
  infinite={true}
  isPlaying={true}
  naturalSlideWidth={6000}
  naturalSlideHeight={3000}
  touchEnabled={true}
  dragEnabled={true}
  interval={3000}
>
  <Slider>
    {cardData.map((card, index) => (
      <Slide index={index}>
        <div className="flex justify-center items-center flex-wrap h-10 bg-red-600 ">
          <div className="text-5xl font-medium text-white max-w-xl">
            <img src={card.img} alt="" className="h-60 bg-green-600" />
          </div>
          <div>
            <p>{card.description}</p>
          </div>
        </div>
      </Slide>
    ))}
  </Slider>
  <ButtonBack className="bg-green-500">Back</ButtonBack>
  <ButtonNext>Next</ButtonNext>
</CarouselProvider>;
