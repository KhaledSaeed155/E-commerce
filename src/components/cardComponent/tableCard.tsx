"use client";
import React from "react";
import { Button } from "../ui/button";
import { useCartContext } from "@/app/context/cartcontext";
import toast from "react-hot-toast";
import Link from "next/link";
import { clearcart, RemoveFromCart, UpdateCart } from "@/app/action/card.action";

export default function TableCard() {
  const { cartDetails, getCardDetails } = useCartContext();

  async function handleRemoveFromCart(id: string) {
    const response = await RemoveFromCart(id);
    toast.success("Deleted successfully");
     getCardDetails();
  }
  async function handleclearcart(){
    const response =await clearcart() ;
    console.log(response,"clear cart")
    getCardDetails() ;
  }

  async function handleUpdateCart(id: string, count: number) {
   
    const response = await UpdateCart(id, count);
    toast.success("Updated successfully");
     getCardDetails();
  }



  if (!cartDetails || cartDetails.data.products.length === 0) {
    return <h2 className="text-3xl text-center mt-20 text-gray-500">No Products In Cart</h2>;
  }

  return (
    <div className="w-[95%] lg:w-[85%] mx-auto mt-10">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead className="bg-blue-100 text-gray-700">
            <tr>
              <th className="py-3 px-2 border border-gray-200 text-center">#</th>
              <th className="py-3 px-2 border border-gray-200 text-center">Product</th>
              <th className="py-3 px-2 border border-gray-200 text-center">Price</th>
              <th className="py-3 px-2 border border-gray-200 text-center">Quantity</th>
              <th className="py-3 px-2 border border-gray-200 text-center">Subtotal</th>
              <th className="py-3 px-2 border border-gray-200 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {cartDetails.data.products.map((product, index: number) => (
              <tr
                key={product._id}
                className="hover:bg-gray-50 transition-colors border border-gray-200"
              >
                <td className="text-center py-3 px-2">{index + 1}</td>
                <td className="text-center py-3 px-2">
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <img
                      src={product.product.imageCover}
                      alt="product"
                      className="w-24 h-24 object-cover rounded-md"
                    />
                    <h2 className="text-lg font-medium text-gray-800">{product.product.title}</h2>
                  </div>
                </td>
                <td className="text-center py-3 px-2 font-semibold">{product.price}$</td>
                <td className="py-3 px-2">
                  <div className="flex justify-center items-center gap-2">
                    <button
                      onClick={() => handleUpdateCart(product.product._id, product.count - 1)}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-700 hover:text-white transition"
                    >
                      -
                    </button>
                    <span className="px-2">{product.count}</span>
                    <button
                      onClick={() => handleUpdateCart(product.product._id, product.count + 1)}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-700 hover:text-white transition"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="text-center py-3 px-2 font-semibold">
                  {product?.price * product?.count}$
                </td>
                <td className="text-center py-3 px-2">
                  <Button
                    onClick={() => handleRemoveFromCart(product.product._id)}
                    className="bg-red-500 hover:bg-red-600 text-white transition"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}

            {/* Total */}
            <tr className="bg-blue-50 font-bold text-gray-800">
              <td className="text-center py-3 px-2">#</td>
              <td className="py-3 px-2">Total Price</td>
              <td className="text-center py-3 px-2" colSpan={3}>
                {cartDetails?.data?.totalCartPrice}$
              </td>
              <td className="text-center py-3 px-2">
                <Link href="/checkout">
                  <Button className="bg-green-500 hover:bg-green-600 text-white transition">
                    Checkout
                  </Button>
                      </Link>
                      <Button onClick={()=>handleclearcart()} className="bg-green-500 hover:bg-green-600 text-white transition ms-3">
                    Clear Cart
                  </Button>
            
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
