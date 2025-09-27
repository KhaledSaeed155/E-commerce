"use client";
import React from "react";

import { StarRating } from 'react-flexible-star-rating';

 

import {
  Card,

  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


import Image from "next/image";
import { Heart, ShoppingCart, ZoomIn } from "lucide-react";

import { categories } from "@/app/types/category.model";

export default function CategoryCard({ categories  }: { categories: categories  }) {


  return (
    <Card className="group relative overflow-hidden rounded-2xl border-2 shadow-md hover:shadow-[0_0_20px_0_rgba(59,130,246,0.5)] transition-shadow duration-300">


      <CardHeader >
        <CardTitle>{categories.name}</CardTitle>
        <CardDescription >
           CreatedAt : {categories.createdAt}
        </CardDescription>
      </CardHeader>
      <CardContent>
      <div style={{ position: 'relative', width: '100%', height: '250px' }} >
      
        <Image
          src={categories.image}
          alt={categories.name}
          fill
          priority
          loading="eager"
          className="object-contain"
          sizes="(max-width: 1000px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'fill', borderRadius: '8px' }}
        />
      </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 items-start">
        


      </CardFooter>
    </Card>
  );
}
