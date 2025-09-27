"use client";

import { categories } from "@/app/types/category.model";
import React from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CatSliderComp({ category }: { category: categories[] }) {
  return (
    <div className="mx-auto w-[85%] my-10">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 25 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {category.map((cat) => (
          <SwiperSlide key={cat._id}>
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-full h-[180px] sm:h-[220px] md:h-[250px] lg:h-[300px] overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={cat.image && cat.image.startsWith("http") ? cat.image : "/slider/1.jpg"}
                  alt={cat.name || "Category"}
                  fill
                  priority
                  unoptimized
                  className="object-cover"
                />
              </div>
              <h2 className="text-lg font-semibold text-center text-gray-700 hover:text-blue-500 transition-colors duration-300">
                {cat.name}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
