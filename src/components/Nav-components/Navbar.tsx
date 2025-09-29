"use client";
import React, { useState, useEffect } from "react";
import { ShoppingCart, Heart, Store, X } from "lucide-react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useWishListContext } from "@/app/context/wishlistcontext";
import { useCartContext } from "@/app/context/cartcontext";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const session = useSession();
  const { wishListDetails, getWishList } = useWishListContext();
  const { cartDetails, getCardDetails } = useCartContext();

  useEffect(() => {
    if (session?.data?.user) {
      getCardDetails();
      getWishList();
    }
  }, [session]);

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto w-[85%] flex items-center justify-between py-3">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 hover:scale-105 transition-transform duration-300"
        >
          <div className="bg-red-600 p-2 rounded-full shadow-md">
            <Store className="w-8 h-8 text-white" />
          </div>
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
            <ShoppingCart
              className="text-gray-700 hover:text-blue-500 transition"
              size={24}
            />
          </Link>

          {/* Wishlist */}
          <Link href="/wishlist" className="relative">
            {wishListDetails?.count ? (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {wishListDetails.count}
              </span>
            ) : null}
            <Heart
              className="text-gray-700 hover:text-blue-500 transition"
              size={24}
            />
          </Link>

          {/* User Menu (Desktop Only) */}
          <div className="relative hidden lg:block">
            <details className="group">
              <summary className="cursor-pointer px-3 py-2 rounded hover:bg-gray-200 transition">
                Menu
              </summary>
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
                    <li>
                      <Link
                        href="/register"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Register
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/login"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Login
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </details>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 rounded hover:bg-gray-200 transition"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 flex transition-opacity duration-300 ${
          mobileOpen
            ? "bg-black/40 backdrop-blur-sm opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* Drawer Panel */}
        <div
          className={`bg-white w-3/4 max-w-sm h-full p-6 flex flex-col transform transition-transform duration-300 ease-in-out
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          {/* Close Button */}
          <button
            className="self-end mb-6 p-2 rounded hover:bg-gray-200"
            onClick={() => setMobileOpen(false)}
            aria-label="Close Menu"
          >
            <X size={28} />
          </button>

          {/* Links */}
          <nav className="flex flex-col gap-5 text-lg font-medium text-gray-700">
            <Link href="/" onClick={() => setMobileOpen(false)} className="hover:text-blue-500">Home</Link>
            <Link href="/products" onClick={() => setMobileOpen(false)} className="hover:text-blue-500">Products</Link>
            <Link href="/brands" onClick={() => setMobileOpen(false)} className="hover:text-blue-500">Brands</Link>
            <Link href="/cat" onClick={() => setMobileOpen(false)} className="hover:text-blue-500">Categories</Link>
            <Link href="/wishlist" onClick={() => setMobileOpen(false)} className="hover:text-blue-500">Wishlist</Link>
            <Link href="/cards" onClick={() => setMobileOpen(false)} className="hover:text-blue-500">Cart</Link>
            {session.data ? (
              <Link
                href="/login"
                onClick={() => {
                  setMobileOpen(false);
                  signOut({ callbackUrl: "/login" });
                }}
                className="hover:text-blue-500"
              >
                Logout
              </Link>
            ) : (
              <>
                <Link
                  href="/register"
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-blue-500"
                >
                  Register
                </Link>
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-blue-500"
                >
                  Login
                </Link>
              </>
            )}
          </nav>
        </div>

        {/* Click outside to close */}
        <div className="flex-1" onClick={() => setMobileOpen(false)}></div>
      </div>
    </div>
  );
}
