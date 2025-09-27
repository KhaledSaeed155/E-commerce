
import MainSlider from "@/components/slider-comps/page";

import getCategory from "./action/categories.action";

import getProduct from "./action/products.action";

import ProductsGridSystem from "@/components/products-components/productsGridSystem";
import CatSliderComp from "@/components/Cat-Slider/CatSliderComp";
import Footer from "@/components/Footer/Footer";

export default async function Home() {
   const response =await getCategory() ;

   const data =response.data ;
   const {data :products}=await getProduct();   //products data
 ;
   

   
  return (
    <>
      <MainSlider />
      <CatSliderComp category={data}/>
      <ProductsGridSystem products={products}/> 
      <Footer/>
    </>
  );
}
