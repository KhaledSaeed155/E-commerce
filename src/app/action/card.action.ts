"use server";

import { GetToken } from "@/lib/tokenUtils";
import axios from "axios";

export default async function GetCart() {
  try {
    const token = await GetToken();
    console.log(token, "tokeeeennnnn");

    const response = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/cart",
      {
        headers: {
          token: token as string,
        },
      }
    );
    console.log(response?.data, "response card");

    return {
      data: response?.data,
      status: response?.status,
      message: response?.data?.message ?? "Success",
    };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return {
        data: [],
        status: error?.response?.status ?? 500,
        message: error?.response?.data?.message ?? "Axios error occurred",
      };
    } else {
      return {
        data: [],
        status: 500,
        message: "Unexpected error occurred",
      };
    }
  }
}

export async function getProductDetails(id: string) {
  try {
    const response = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`
    );
    return {
      data: response?.data?.data,
      status: response?.status,
      message: response?.data?.message ?? "Success",
    };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return {
        data: [],
        status: error?.response?.status ?? 500,
        message: error?.response?.data?.message ?? "Axios error occurred",
      };
    } else {
      return {
        data: [],
        status: 500,
        message: "Unexpected error occurred",
      };
    }
  }
}
export async function AddToCart(id: string) {
  try {
    const token = await GetToken();
    console.log(token, "tokeeeennnnn");

    const response = await axios.post(
      `https://ecommerce.routemisr.com/api/v1/cart`,
      { productId: id },
      {
        headers: {
          token: token as string,
        },
      }
    );

    console.log(response?.data, "add to cart response");
    return response?.data; // ✅ رجّع البيانات
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return {
        data: [],
        status: error?.response?.status ?? 500,
        message: error?.response?.data?.message ?? "Axios error occurred",
      };
    } else {
      return {
        data: [],
        status: 500,
        message: "Unexpected error occurred",
      };
    }
  }
}
export async function RemoveFromCart(id: string) {
  try {
    const token = await GetToken();
    console.log(token, "tokeeeennnnn");

    const response = await axios.delete(
      `https://ecommerce.routemisr.com/api/v1/cart/${id}`, // ✅ مظبوطة
      {
        headers: {
          token: token as string,
        },
      }
    );

    console.log(response?.data, "delete response");
    return response?.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return {
        data: [],
        status: error?.response?.status ?? 500,
        message: error?.response?.data?.message ?? "Axios error occurred",
      };
    } else {
      return {
        data: [],
        status: 500,
        message: "Unexpected error occurred",
      };
    }
  }
}
export async function UpdateCart(id: string, count: number) {
  try {
    const token = await GetToken();
    console.log(token, "tokeeeennnnn");

    const response = await axios.put(
      `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      { count },
      {
        headers: {
          token: token as string,
        },
      }
    );

    console.log(response?.data, "update response");
    return response?.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return {
        data: [],
        status: error?.response?.status ?? 500,
        message: error?.response?.data?.message ?? "Axios error occurred",
      };
    } else {
      return {
        data: [],
        status: 500,
        message: "Unexpected error occurred",
      };
    }
  }
}

export async function clearcart() {
  try {
    const token = await GetToken();
    console.log(token, "tokeeeennnnn");

    const response = await axios.delete(
      `https://ecommerce.routemisr.com/api/v1/cart`,
      {
        headers: {
          token: token as string,
        },
      }
    );

    console.log(response?.data, "clear cart");
    return response?.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return {
        data: [],
        status: error?.response?.status ?? 500,
        message: error?.response?.data?.message ?? "Axios error occurred",
      };
    } else {
      return {
        data: [],
        status: 500,
        message: "Unexpected error occurred",
      };
    }
  }
}
