import { categories } from '@/app/types/category.model'
import React from 'react'
import ProductCard from '../products-components/productCard';
import CategoryCard from './categoryCard';

export default function CategoriesGridSystem({categories}:{categories:categories[]}) {
    console.log(categories,"categories from categories component");
    
  return (
          <div className='container mx-auto w-[85%] '>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 my-10 relative inline-block">
Categories
  <span className="absolute left-0 -bottom-1 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
</h2>
              <div className=' grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
      {categories.map((cat)=> <CategoryCard key={cat._id} categories={cat}/>)}
      
              </div>
            
          </div>
   

  )
}
