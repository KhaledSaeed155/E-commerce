"use client";
import React from "react";
import { StarRating } from "react-flexible-star-rating";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product } from "@/app/types/product.model";
import Image from "next/image";
import { Heart, ShoppingCart, ZoomIn } from "lucide-react";
import Link from "next/link";
import { AddToCart } from "@/app/action/card.action";
import toast from "react-hot-toast";
import { useCartContext } from "@/app/context/cartcontext";
import { AddToWishlist } from "@/app/action/wishlist.action";
import { useWishListContext } from "@/app/context/wishlistcontext";

export default function ProductCard({ product }: { product: Product }) {
  const { getCardDetails } = useCartContext();
  const { getWishList } = useWishListContext();

  async function handleAddToCart(id: string) {
    const response = await AddToCart(id);
    toast.success(response.message);
    await getCardDetails();
  }

  async function handleAddToWishlist(id: string) {
    const response = await AddToWishlist(id);
    toast.success(response.message);
    await getWishList();
  }

  return (
    <Card className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
      {/* Floating action buttons */}
      <div className="absolute top-[100px] right-[-100px] flex flex-col gap-2 group-hover:right-3 transition-all duration-500 z-10">
        <button
          onClick={() => handleAddToCart(product._id)}
          className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 shadow-md transition-all"
          title="Add to Cart"
        >
          <ShoppingCart size={20} />
        </button>

        <button
          onClick={() => handleAddToWishlist(product._id)}
          className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 shadow-md transition-all"
          title="Add to Wishlist"
        >
          <Heart size={20} />
        </button>

        <Link href={`/products/${product._id}`}>
          <button
            className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 shadow-md transition-all"
            title="View Details"
          >
            <ZoomIn size={20} />
          </button>
        </Link>
      </div>

      {/* Product Info */}
      <CardHeader className="p-4">
        <CardTitle className="text-lg font-bold">{product.title.split(" ").slice(0, 2).join(" ")}</CardTitle>
        <CardDescription className="text-gray-500 text-sm truncate">
          {product.description}
        </CardDescription>
      </CardHeader>

      {/* Product Image */}
      <CardContent className="p-0">
        <div className="relative w-full h-52 sm:h-64 md:h-72 lg:h-80">
          <Image
            src={product.imageCover}
            alt={product.title}
            fill
            className="object-cover"
            style={{ borderRadius: "0.5rem" }}
            priority
          />
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex flex-col items-start justify-between gap-2 p-4">
        <p className="font-semibold text-lg text-gray-800">Price: {product.price} EGP</p>
        <div className="flex items-center gap-2">
          <StarRating
            initialRating={Math.floor(product.ratingsAverage)}
            dimension={20}
         
          />
          <span className="text-gray-500 text-sm">({product.ratingsQuantity || 0})</span>
        </div>
      </CardFooter>
    </Card>
  );
}
