'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
export default function Main() {
  return (
    <div className="mt-16">
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        direction="vertical"
      >
        <SwiperSlide className="w-full max-h-200 bg-amber-100">Slide 1</SwiperSlide>
        <SwiperSlide className="w-full max-h-200 bg-red-100">Slide 2</SwiperSlide>
        <SwiperSlide className="w-full max-h-200 bg-neutral-300">Slide 3</SwiperSlide>
        <SwiperSlide className="w-full max-h-200 bg-green-300">Slide 4</SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}
