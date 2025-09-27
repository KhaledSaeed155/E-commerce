"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@/components/ui/button";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { ShoppingCart } from "lucide-react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";

export default function MainSlider() {
  return (
    <div className="mx-auto  w-[85%] my-9 ">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full ">
            <Image
              src="/slider/2.jpg"
              alt="img1"
              priority
              loading="eager"
              fill
              sizes="(max-width: 640px) 100vw, 
                     (max-width: 1024px) 80vw, 
                     70vw"
              className=" object-fit-fill rounded-xl"
            />
            <div className="text-lg absolute top-[30%] left-[30px] p-5 text-white bg-black/20">
              <h2 className=" my-5 text-2xl"> Summer Collection</h2>
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                ex quo. Doloremque odit
              </p>
              <Button className="cursor-pointer ">
                Shop Now <ShoppingCart />
              </Button>
            </div>
          </div>
        </SwiperSlide>
                <SwiperSlide>
          <div className="relative h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full ">
            <Image
              src="/slider/3.jpeg"
              alt="img1"
              fill
              priority
              loading="eager"
              sizes="(max-width: 640px) 100vw, 
                     (max-width: 1024px) 80vw, 
                     70vw"
              className=" object-fit-fill rounded-xl"
            />
            <div className="text-lg absolute top-[30%] left-[30px] p-5 text-white bg-black/20">
              <h2 className=" my-5 text-2xl"> Summer Collection</h2>
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                ex quo. Doloremque odit
              </p>
              <Button className="cursor-pointer ">
                Shop Now <ShoppingCart />
              </Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
