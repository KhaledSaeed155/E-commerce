"use server";
import { GetToken } from "@/lib/tokenUtils";
import axios from "axios";

interface shippingAddress {
  details: string;
  phone: string;
  city: string;
}

export async function createCashOrder(
  id: string,
  shippingAddress: shippingAddress
) {
  try {
    const token = await GetToken();
    console.log(token, "tokeeeennnnn");

    const response = await axios.post(
      `https://ecommerce.routemisr.com/api/v1/orders/user/${id}`,
      { shippingAddress },
      {
        headers: {
          token: token as string,
        },
      }
    );

    console.log(response?.data, "cash order response");
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
export async function getOnlinePayment(
  id: string,
  shippingAddress: shippingAddress
) {
  try {
    const token = await GetToken();
    console.log(token, "tokeeeennnnn");

    const response = await axios.post(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:3000`,
      { shippingAddress },
      {
        headers: {
          token: token as string,
        },
      }
    );

    console.log(response?.data, "Onlineeeee order response");
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
