import React from 'react'
import { Card, Rating, RatingStar } from "flowbite-react";
import Image from 'next/image';
import staticImage from '@/app/assets/staticImage.png'
import staticImage2 from '@/app/assets/50051823_540375.png'

const AdsProduct = () => {
 const StarRating = (rate: number) => (
    <Rating>
      {Array.from({ length: 5 }, (_, i) => (
        <RatingStar key={i} filled={i < rate} />
      ))}
    </Rating>
  );

  return (
    <div className='max-w-xs'>
      <h6 className='text-h6 text-whiteTxt font-semibold'>Best Seller</h6>
      <div>
      <Card
      className="max-full"
    >
        <Image src={staticImage} alt=' card'/>
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Apple Watch Series
        </h5>
      </a>
      <div className="mb-5 mt-2.5 flex items-center">
      <div>{StarRating(5)}</div>
      <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
          5.0
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-[#FF4858]">$599</span>
        <span className="text-h6 text-whiteTxt line-through">$750</span>
      </div>
    </Card>
      </div>
      <div className='bg-[#C1C8CE] min-h-lg mt-10'>
        <div className='p-5 flex flex-col justify-between  gap-5'>
            <h5 className='font-bold text-h5'>GoPro Hero 6</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
            <p className='text-h5'>$250</p>
            <Image src={staticImage2} width={300} height={300} alt='staticImage2'/>
        </div>
      </div>
    </div>
  )
}

export default AdsProduct
