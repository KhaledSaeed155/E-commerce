"use server";

import axios from "axios";
import { GetToken } from "@/lib/tokenUtils";

// 🟢 Add product to wishlist
export async function AddToWishlist(productId: string) {
  try {
    const token = await GetToken();

    const { data } = await axios.post(
      `https://ecommerce.routemisr.com/api/v1/wishlist`,
      { productId },
      {
        headers: { token: token as string },
      }
    );

    return {
      data,
      status: 200,
      message: "Added to wishlist successfully",
    };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return {
        data: [],
        status: error.response?.status ?? 500,
        message: error.response?.data?.message ?? "Axios error occurred",
      };
    }
    return { data: [], status: 500, message: "Unexpected error occurred" };
  }
}

// 🔴 Remove product from wishlist
export async function RemoveFromWishlist(productId: string) {
  try {
    const token = await GetToken();

    const { data } = await axios.delete(
      `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
      {
        headers: { token: token as string },
      }
    );

    return {
      data,
      status: 200,
      message: "Removed from wishlist successfully",
    };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return {
        data: [],
        status: error.response?.status ?? 500,
        message: error.response?.data?.message ?? "Axios error occurred",
      };
    }
    return { data: [], status: 500, message: "Unexpected error occurred" };
  }
}

// 📌 Get wishlist details
export async function GetWishlistDetails() {
  try {
    const token = await GetToken();

    const { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/wishlist`,
      {
        headers: { token: token as string },
      }
    );
    console.log(data, "wishlist");
    return {
      data,
      status: 200,
      message: "Wishlist fetched successfully",
    };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return {
        data: [],
        status: error.response?.status ?? 500,
        message: error.response?.data?.message ?? "Axios error occurred",
      };
    }
    return { data: [], status: 500, message: "Unexpected error occurred" };
  }
}
