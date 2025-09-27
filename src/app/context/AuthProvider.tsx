"use client";

import { SessionProvider } from "next-auth/react";
import CartContextProvider from "./cartcontext";
import WishlistContextProvider from "./wishlistcontext";
import { Toaster } from "react-hot-toast";

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <CartContextProvider>
        <WishlistContextProvider>
          {children}
          <Toaster />
        </WishlistContextProvider>
      </CartContextProvider>
    </SessionProvider>
  );
}
