"use client";
import React, { useEffect } from "react";
import { useWishListContext } from "@/app/context/wishlistcontext";
import { useCartContext } from "@/app/context/cartcontext";
import toast from "react-hot-toast";
import Image from "next/image";
import { AddToCart } from "@/app/action/card.action";
import { RemoveFromWishlist } from "@/app/action/wishlist.action";

export default function WishlistGrid() {
  const { wishListDetails ,getWishList} = useWishListContext();
  console.log(wishListDetails);
  

  const { getCardDetails } = useCartContext();
  async function handleAddToCart(id: string) {
    const response = await AddToCart(id);
    toast.success(response.message);
    await getCardDetails();
  }

async function removeFromWishlist(id :string){
  const response =await RemoveFromWishlist(id);
    toast.success(response.message);
   await getWishList();
}


  if (!wishListDetails || wishListDetails.count === 0) {
    return (
      <p className="text-center my-10 text-gray-500">
        Your wishlist is empty 😢
      </p>
    );
  }



  return (
    <div className="w-[85%] mx-auto my-10">
      <h2 className="text-2xl font-bold mb-6 text-center">💖 My Wishlist</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishListDetails?.data.map((item) => (
          <div
  key={item._id}
  className="bg-white shadow-lg rounded-3xl overflow-hidden flex flex-col items-center hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
>
  {/* Image Container */}
  <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96">
    <Image
      src={item.imageCover}
      alt={item.title}
      fill
      priority
      className="object-contain"
      style={{ borderRadius: "1rem" }}
    />
  </div>

  {/* Product Info */}
  <div className="p-4 w-full flex flex-col items-center">
    <h3 className="text-lg font-semibold text-center mb-2 truncate">
      {item.title.split(" ").slice(0, 2).join(" ")}
    </h3>
    <p className="text-gray-700 font-medium mb-4">{item.price} EGP</p>

    {/* Action Buttons */}
    <div className="flex gap-3 w-full">
      <button
        onClick={() => handleAddToCart(item._id)}
        className="flex-1 bg-green-500 text-white py-2 rounded-xl hover:bg-green-600 transition font-medium shadow-md"
      >
        Add to Cart
      </button>
      <button
        onClick={() => removeFromWishlist(item._id)}
        className="flex-1 bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition font-medium shadow-md"
      >
        Remove
      </button>
    </div>
  </div>
</div>

        ))}
      </div>
    </div>
  );
}
