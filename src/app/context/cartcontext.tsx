"use client";
import { createContext, useContext, useEffect, useState } from "react";

import { ProductInCart } from "../types/cart.model";

import GetCart from "../action/card.action";

interface cartContextType {
  cartDetails: ProductInCart | null;
  getCardDetails: () => Promise<void>;
  setCartDetails: React.Dispatch<React.SetStateAction<ProductInCart | null>>;
}

const cartcontext = createContext<cartContextType>({
  cartDetails: null,

  getCardDetails: async () => {},
  setCartDetails: () => {},
});

export default function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartDetails, setCartDetails] = useState<ProductInCart | null>(null);


  // const {data :session }=useSession() ;

  async function getCardDetails() {
    const response = await GetCart();
    console.log(response.data, "carttttt");
    setCartDetails(response.data);
  }

  useEffect(() => {
    getCardDetails();
  }, []);

  return (
    <cartcontext.Provider
      value={{ cartDetails, getCardDetails, setCartDetails }}
    >
      {children}
    </cartcontext.Provider>
  );
}

export function useCartContext() {
  const mycontext = useContext(cartcontext);
  return mycontext;
}
