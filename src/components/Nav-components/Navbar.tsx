"use client";
import React, { useEffect } from "react";
import { ShoppingCart, Heart, Store } from "lucide-react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useWishListContext } from "@/app/context/wishlistcontext";
import { useCartContext } from "@/app/context/cartcontext";


export default function Navbar() {

  const session = useSession();
  const { wishListDetails,getWishList } = useWishListContext();
  const { cartDetails,getCardDetails } = useCartContext();
  useEffect(()=>{if(session?.data?.user){
    console.log(session?.data?.user,"user session data");
    getCardDetails();
    cartDetails ;
    getWishList();
    wishListDetails;

  }},[session])
  return (
  <div className="sticky top-0 z-50 bg-white shadow-md">
  <div className="container mx-auto w-[85%] flex items-center justify-between py-3">
    {/* Logo */}
    <Link
      href="/"
      className="flex items-center gap-3 hover:scale-105 transition-transform duration-300"
    >
      {/* Logo Icon */}
      <div className="bg-red-600 p-2 rounded-full shadow-md">
        <Store className="w-8 h-8 text-white" />
      </div>

      {/* Site Name */}
      <span
        className="text-3xl font-bold text-gray-600 hover:text-red-900 transition-colors"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        7-Shop
      </span>
    </Link>

    {/* Desktop Menu */}
    <div className="hidden lg:flex items-center gap-6 text-gray-700 font-medium">
      <Link href="/" className="hover:text-blue-500 transition">Home</Link>
      <Link href="/products" className="hover:text-blue-500 transition">Products</Link>
      <Link href="/brands" className="hover:text-blue-500 transition">Brands</Link>
      <Link href="/cat" className="hover:text-blue-500 transition">Categories</Link>
      <Link href="/wishlist" className="hover:text-blue-500 transition">Wishlist</Link>
      <Link href="/cards" className="hover:text-blue-500 transition">Cart</Link>
    </div>

    {/* Right Icons */}
    <div className="flex items-center gap-4 relative">
      {/* Cart */}
      <Link href="/cards" className="relative">
        {cartDetails?.numOfCartItems ? (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {cartDetails.numOfCartItems}
          </span>
        ) : null}
        <ShoppingCart className="text-gray-700 hover:text-blue-500 transition" size={24} />
      </Link>

      {/* Wishlist */}
      <Link href="/wishlist" className="relative">
        {wishListDetails?.count ? (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {wishListDetails.count}
          </span>
        ) : null}
        <Heart className="text-gray-700 hover:text-blue-500 transition" size={24} />
      </Link>

      {/* User Menu */}
      <div className="relative hidden lg:block">
        <details className="group">
          <summary className="cursor-pointer px-3 py-2 rounded hover:bg-gray-200 transition">Menu</summary>
          <ul className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 text-gray-700 font-medium group-open:scale-100 scale-0 transform origin-top-right transition-all duration-200">
            {session.data ? (
              <li>
                <Link
                  href="/login"
                  onClick={() => signOut({ callbackUrl: "/login" })}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </Link>
              </li>
            ) : (
              <>
                <li><Link href="/register" className="block px-4 py-2 hover:bg-gray-100">Register</Link></li>
                <li><Link href="/login" className="block px-4 py-2 hover:bg-gray-100">Login</Link></li>
              </>
            )}
          </ul>
        </details>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden relative">
        <details className="group">
          <summary className="cursor-pointer p-2 rounded hover:bg-gray-200 transition">☰</summary>
          <ul className="absolute right-0 mt-2 w-56 sm:w-64 bg-white shadow-lg rounded-md py-2 text-gray-700 font-medium group-open:scale-100 scale-0 transform origin-top-right transition-all duration-200">
            <li><Link href="/" className="block px-4 py-2 hover:bg-gray-100">Home</Link></li>
            <li><Link href="/products" className="block px-4 py-2 hover:bg-gray-100">Products</Link></li>
            <li><Link href="/brands" className="block px-4 py-2 hover:bg-gray-100">Brands</Link></li>
            <li><Link href="/cat" className="block px-4 py-2 hover:bg-gray-100">Categories</Link></li>
            <li><Link href="/wishlist" className="block px-4 py-2 hover:bg-gray-100">Wishlist</Link></li>
            <li><Link href="/cards" className="block px-4 py-2 hover:bg-gray-100">Cart</Link></li>
            {session.data ? (
              <li>
                <Link
                  href="/login"
                  onClick={() => signOut({ callbackUrl: "/login" })}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </Link>
              </li>
            ) : (
              <>
                <li><Link href="/register" className="block px-4 py-2 hover:bg-gray-100">Register</Link></li>
                <li><Link href="/login" className="block px-4 py-2 hover:bg-gray-100">Login</Link></li>
              </>
            )}
          </ul>
        </details>
      </div>
    </div>
  </div>
</div>

  );
}
