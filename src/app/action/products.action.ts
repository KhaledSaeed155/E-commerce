"use server";

import axios from "axios";

export default async function getProduct() {
  try {
    const response = await axios.get("https://ecommerce.routemisr.com/api/v1/products");
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
export  async function getProductDetails(id:string) {
  try {
    const response = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
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