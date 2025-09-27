"use server"
import axios from "axios";


export default async function GetForgotPassword(email:string) {
  try {
    const response = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
        {
            email
        }
    );
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
export  async function GetPascode(resetCode:string) {
  try {
    const response = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
        {
            resetCode
        }
    );
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
 export interface bodytype {
    email: string ;
    newPassword: string ;
}
export  async function ResetePass(body:bodytype) {
  try {
    const response = await axios.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword",body
       
    );
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