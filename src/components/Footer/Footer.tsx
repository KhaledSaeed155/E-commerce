import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-6 sticky button-0 mt-5">
      <div className="container mx-auto w-[85%] grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">E-commerce</h2>
          <p className="text-gray-400">
            Your one-stop shop for all the latest products. Quality guaranteed and delivered fast.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-blue-400 transition-colors">Products</Link>
            </li>
            <li>
              <Link href="/brands" className="hover:text-blue-400 transition-colors">Brands</Link>
            </li>
            <li>
              <Link href="/cat" className="hover:text-blue-400 transition-colors">Categories</Link>
            </li>
            <li>
              <Link href="/wishlist" className="hover:text-blue-400 transition-colors">Wishlist</Link>
            </li>
            <li>
              <Link href="/cards" className="hover:text-blue-400 transition-colors">Cart</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-white">Contact Us</h3>
             <p>Eng: Khaled Saeed</p>
          <p>Email: khaledbeboo155@gmail.com</p>
          <p>Phone: +20 12 0595 1536</p>
          <p>Address: Alexandria, Egypt</p>
        </div>

        {/* Social Media */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-white">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-blue-400 transition-colors">
              <Facebook size={24} />
            </Link>
            <Link href="#" className="hover:text-pink-500 transition-colors">
              <Instagram size={24} />
            </Link>
            <Link href="#" className="hover:text-blue-300 transition-colors">
              <Twitter size={24} />
            </Link>
            <Link href="#" className="hover:text-blue-700 transition-colors">
              <Linkedin size={24} />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} E-commerce. All rights reserved.
      </div>
    </footer>
  );
}
