import ProductsGridSystem from '@/components/products-components/productsGridSystem';
import React from 'react'
import getProduct from '../action/products.action';

export default async function Products() {
   const {data :products}=await getProduct();   //products data
  return (
    
    <div className='container mx-auto w-[85%] '>
     <ProductsGridSystem products={products}/>
    </div>
 
  )
}
