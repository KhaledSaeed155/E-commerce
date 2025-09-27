import { createContext, useContext, useEffect, useState } from "react";
import { GetWishlistDetails } from "../action/wishlist.action";
import {  WishlistResponse } from "../types/wishlist.model";


interface WishlistContextType {
  wishListDetails:WishlistResponse | null;
  getWishList: () => Promise<void>;
}

const WishListContext = createContext<WishlistContextType>({
  wishListDetails: null,
  getWishList: async () => {},
});

export default function WishListContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [wishListDetails, setWishListDetails] = useState<WishlistResponse| null>(null);
 
  async function getWishList() {
    const response = await GetWishlistDetails();
    setWishListDetails(response.data );
  }

  useEffect(() => {
    getWishList();
    
  }, []);

  return (
    <WishListContext.Provider value={{ wishListDetails, getWishList }}>
      {children}
    </WishListContext.Provider>
  );
}

export function useWishListContext() {
  return useContext(WishListContext);
}
