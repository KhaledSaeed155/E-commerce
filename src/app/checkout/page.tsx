"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useCartContext } from "../context/cartcontext";
import { createCashOrder, getOnlinePayment } from "../action/checkout.action";
import toast from "react-hot-toast";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { clearcart } from "../action/card.action";

export default function Page() {
  const { cartDetails,setCartDetails } = useCartContext();
  const cartId = cartDetails?.cartId;
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();
const [paymentMethod, setPaymentMethod] = useState<"online" | "cash" | null>(null);
async function handleClearCart(){
  const response=await clearcart()
}
  interface Inputs {
    details: string;
    city: string;
    phone: string; // ✅ خليتها string
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  async function onSubmit(values: Inputs) {
    console.log(values);
    console.log(paymentMethod);
    
if(paymentMethod==="cash"){
if (!cartId) {
      setErrorMsg("Cart is empty, cannot place order");
      return;
    }

    try {
      const response = await createCashOrder(cartId, values);
      console.log(response, "order response");

      toast.success("Order Confirmed!");
      router.push("/"); // redirect بعد الأوردر
    setCartDetails(null);
       handleClearCart() ;           // فرّغ الكارت بعد الأوردر
    } catch (error: unknown) {
      setErrorMsg("Failed to place order, try again later.");
    }
   
}else{
   try {
      const response = await getOnlinePayment(cartId as string, values);
      console.log(response, "online response");
window.location.href=response.session.url
    
    } catch (error: unknown) {
      setErrorMsg("Failed to place order, try again later.");
    }
}
    
  }

  return (
    <div className="w-1/2 m-auto py-10">
      <h2 className="text-3xl fw-bold">Payment :</h2>
      {errorMsg && <p className="text-red-500 text-center">{errorMsg}</p>}
      <form
        className="flex flex-col gap-10 mt-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          placeholder="details"
          className="input input-primary w-full"
          {...register("details", { required: "details is required" })}
        />
        {errors.details && <p className="text-red-500">{errors.details.message}</p>}

        <input
          type="tel"
          placeholder="phone"
          className="input input-primary w-full"
          {...register("phone", { required: "Phone is required" })}
        />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}

        <input
          type="text"
          placeholder="city"
          className="input input-primary w-full"
          {...register("city", { required: "city is required" })}
        />
        {errors.city && <p className="text-red-500">{errors.city.message}</p>}
<RadioGroup onValueChange={(val)=>setPaymentMethod(val as "online"|"cash")} defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="cash" id="option-one" />
    <Label htmlFor="option-one">Cash Payment</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="online" id="option-two" />
    <Label htmlFor="option-two">Online Payment</Label>
  </div>
</RadioGroup>
        <button type="submit" className="btn btn-primary w-32 rounded-2xl">
          Order Now
        </button>
      </form>
    </div>
  );
}
