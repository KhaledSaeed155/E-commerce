import React from 'react'
import GetBrand from '../action/brand.action';
import BrandGridSystem from '@/components/brand/brandGridSystem';



export default async function Brands() {
  const {data :brands}=await GetBrand();
  console.log(brands);

  
  return (
    <div>
   
      <BrandGridSystem brands={brands}/>
    </div>
  )
}
