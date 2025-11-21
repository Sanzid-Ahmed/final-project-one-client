import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from 'swiper/react';
import amazon from "../../../assets/brands/amazon.png";
import amazon2 from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import start_people from "../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";


const brandLogos = [amazon, amazon2, casio, moonstar, randstad, star, start_people];

const Brands = () => {
  return (
    <div className="my-30">
        <h1 className="text-xl text-secondary font-bold text-center mb-10">We've helped thousands of sales teams</h1>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={25}
        grabCursor={true}
        loop={true}
        className="mySwiper"
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {
            brandLogos.map((logo, index) => <SwiperSlide key={index}> <img src={logo} alt="" /></SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default Brands;
