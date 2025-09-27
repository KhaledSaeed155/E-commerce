import React from 'react'
import getCategory from '../action/categories.action';
import CategoriesGridSystem from '@/components/category/categoriesGridSystem';


export default async function Categories() {
  const {data :categories}=await getCategory();
  console.log(categories);
    
  return (
    <div>
     
     <CategoriesGridSystem categories={categories}/>
    </div>
  )
}
