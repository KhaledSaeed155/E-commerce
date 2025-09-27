
import { getProductDetails } from "@/app/action/products.action";
import React from "react";

import ProductDetailsComp from "@/components/products-components/productDetails";


export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  const { data: productDetails } = await getProductDetails(params.id);
console.log(productDetails  );



  return (
 <div>
<ProductDetailsComp productDetails={productDetails}/>
 </div>
  );
}
