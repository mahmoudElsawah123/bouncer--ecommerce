import React from 'react'
import { Card, Rating, RatingStar } from "flowbite-react";

import FeaturedProduct1 from '@/app/assets/FeaturedProduct1.png'
import FeaturedProduct2 from '@/app/assets/FeaturedProduct2.png'
import FeaturedProduct3 from '@/app/assets/FeaturedProduct3.png'
import Image from 'next/image';

const data = [
{
  date: '01 Jan, 2025',
  image: FeaturedProduct1,
  title: 'H-Squared tvTary',
  price : '$499',
  rate : 4,
  oldPrice : '$599'
},
{
  date: '01 Jan, 2025',
  image: FeaturedProduct2,
  title: 'H-Squared tvTary',
  price : '$499',
  rate : 5,
  oldPrice : '$599'
},
{
  date: '01 Jan, 2025',
  image: FeaturedProduct3,
  title: 'H-Squared tvTary',
  price : '$499',
  rate : 3,
  oldPrice : '$599'
},
];


const FeaturedProduct = () => {
  const StarRating = (rate : number) => {
    return (
      <Rating>
        {Array.from({ length: 5 }, (_, i) => (
          <RatingStar key={i} filled={i < rate} />
        ))}
      </Rating>
    );
};
  return (
    <div className='container mt-xl'>
      <div className='my-lg'>
        <h4 className='text-h4 font-semibold text-center'>FEATURED PRODUCTS</h4>
      </div>
     <div className='flex flex-wrap justify-center md:justify-between items-center gap-10 '>
     {data.map((item, index) => (
        <Card
          key={index}
          className="flex flex-row border-0 shadow-inherit"
          renderImage={() => <Image src={item.image} alt={item.title} width={140} height={166} />}
        >
          <div className='flex flex-col gap-2'>
            <p className='text-whiteTxt'>{item.date}</p>
            <h6 className="text-h6 font-bold">
              {item.title}
            </h6>
            <div>
              {StarRating(item.rate)}
            </div>
            <div className='flex items-center justify-between gap-3'>
            <p className='text-[#FF4858] text-[20px]'>{item.price}</p>
            <p className='text-[#5D656B] text-[20px] line-through'>{item.price}</p>
            </div>            
          
          </div>
        </Card>
      ))}
     </div>
    </div>
  );
}

export default FeaturedProduct;
