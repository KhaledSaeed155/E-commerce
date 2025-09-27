import TableCard from '@/components/cardComponent/tableCard'

import React from 'react'

import GetCart from '../action/card.action';


export default async function page() {

  const card =await GetCart() ;
  console.log(card , "cartttttttttttttttttttttttt");

  
  return (
    <div>
      
     <TableCard/>
    </div>
  )
}
