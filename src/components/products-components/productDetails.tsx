"use client";
import { ProductDetails } from "@/app/types/productDetails.model";
import Image from "next/image";
import React from "react";
import { StarRating } from "react-flexible-star-rating";
import { Button } from "../ui/button";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { useCartContext } from "@/app/context/cartcontext";
import { AddToCart } from "@/app/action/card.action";
import toast from "react-hot-toast";

export default function ProductDetailsComp({
  productDetails,
}: {
  productDetails: ProductDetails;
}) 
{
   const {getCardDetails}=useCartContext() ;
async function handleAddToCart(id:string){
const response =await AddToCart(id) ;
console.log(response , "add to cartttttttttttttttttttttttt");
toast.success(response.message);
await getCardDetails() ;

}
  return (
    <div className="flex flex-col md:flex-row justify-center w-full my-10 gap-5">

      <div className="relative w-full md:w-1/3">
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {productDetails.images.map((src,index) => (
          <SwiperSlide key={index}>
            <div className="relative sm:h-[250px] md:h-[400px]  w-full">
              <Image
                src={src}       // الصورة من الـ API
                alt={productDetails.title}        // اسم الكاتيجوري كـ alt
                fill
                priority
                
                sizes="(max-width: 640px) 100vw, 
                       (max-width: 1024px) 80vw, 
                       70vw"
                className="object-contain rounded-xl"
              />
           
            </div>
           
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      <div className="p-8 w-full md:w-1/2 flex flex-col">
        <h2 className="text-3xl font-bold mb-4">{productDetails.title}</h2>
        <p className="my-7 text-lg text-slate-500">
          {productDetails.description}
        </p>
        <div className="text-xl my-3">Price: {productDetails.price} EGP</div>
        <div className="my-2 text-xl">
          Rating: {productDetails.ratingsAverage} / 5
        </div>
        <StarRating
          initialRating={Math.floor(productDetails.ratingsAverage)}
          dimension={5}
        />
        <Button onClick={()=>handleAddToCart(productDetails._id)} className="w-full mt-10 cursor-pointer">Add To Card</Button>
      </div>
    </div>
  );
}
