import { Product } from '@/app/types/product.model'
import React from 'react'
import ProductCard from './productCard';


export default async function ProductsGridSystem({products}:{products:Product[]}) 
{
    console.log(products,"products");
  
  return (
    <div className='container mx-auto w-[85%]  '>
<h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 my-10 relative inline-block">
  Products
  <span className="absolute left-0 -bottom-1 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
</h2>


        <div className=' grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
{products.map((product)=> <ProductCard key={product._id} product={product}/>)}

        </div>
      
    </div>
  )
}
 
