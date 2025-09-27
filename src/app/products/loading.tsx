import React from 'react'
import { Loader } from 'lucide-react';
export default function Loading() {
  return (
    <div className='h-screen flex justify-center items-center flex-col'>
      <Loader className='animate-spin' size={40}/>
      <p>Loading...</p>
    </div>
  )
}
