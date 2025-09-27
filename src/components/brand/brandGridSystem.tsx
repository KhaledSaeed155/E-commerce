import { Brand } from '@/app/types/product.model'
import React from 'react'
import BrandCard from './brandCard'

export default function BrandGridSystem({brands}:{brands:Brand[]}) {
  return (
    <div className='container mx-auto md:w-[85%]  '>
<h2 className="text-3xl text-center text-blue-400 font-extrabold bg-blue-50 p-5 my-4 rounded-lg">
  All Brands
</h2>


      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {brands.map((brand) => <BrandCard key={brand._id} brand={brand}/>
       
        )}
      </div>
    </div>
  )
}
