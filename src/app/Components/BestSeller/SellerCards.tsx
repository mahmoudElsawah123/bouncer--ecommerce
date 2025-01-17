"use client";
import { useState, useEffect } from 'react';
import { Card } from "flowbite-react";
import Image from 'next/image';
import { Rating, RatingStar } from "flowbite-react";
import { TiShoppingCart } from "react-icons/ti";
import { MdFavoriteBorder } from "react-icons/md";
import ImageNotAvaliable from '@/app/assets/Image_not_available.png'
import Link from 'next/link';
type Props = {
  selectedTab: number | null;
};

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  description: string;
}

const SellerCards = ({ selectedTab }: Props) => {
  const [productData, setProductData] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getProductData() {
      const res = await fetch('https://api.escuelajs.co/graphql', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            query {
              products(categoryId: ${Number(selectedTab)} , limit: 12, offset: 0 ) {
                id
                title
                price
                description
                images
              }
            }
          `,
        }),
      });
      const getProduct = await res.json();
      setProductData(getProduct.data.products);
      setLoading(false); 
    }

    if (selectedTab) {
      getProductData();
    }
  }, [selectedTab]);

  const isValidImage = (image: string) => {
    try {
      new URL(image); 
      return true;
    } catch  {
      return false; 
    }
  };

  const StarRating = (rate: number) => (
    <Rating>
      {Array.from({ length: 5 }, (_, i) => (
        <RatingStar key={i} filled={i < rate} />
      ))}
    </Rating>
  );

  if (loading) {
    return <div className='h-[200px] w-full flex justify-center items-center'>Loading...</div>;
  }

  return (
    <div className='flex justify-center'>
      <div className='py-md grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 justify-between items-center gap-10'>
        {productData?.map((item) => {
          const validImage = isValidImage(item.images[0]);
          return (
            <Card key={item.id} className="max-w-sm">
              <div className='cursor-pointer relative group'>
                {validImage ? (
                  <Image
                    src={item.images[0]}
                    alt="card image"
                    width={200}
                    height={200}
                    className='group-hover:opacity-[25%] duration-300 w-full h-full'
                  />
                ) : (
                  <Image
                    src={ImageNotAvaliable}
                    alt="card image"
                    width={200}
                    height={200}
                    className='group-hover:opacity-[25%] duration-300 w-full h-full'
                  />
                )}
                <div className='opacity-0 group-hover:opacity-100 absolute top-0 left-0 w-full h-full flex items-center justify-center gap-5 duration-300'>
                  <div className='w-12 h-12 flex items-center justify-center rounded-full border-2 border-secondary text-white cursor-pointer'>
                    <MdFavoriteBorder className='text-2xl text-secondary' />
                  </div>
                  <div className='w-12 h-12 flex items-center justify-center rounded-full border-2 border-secondary text-white cursor-pointer'>
                    <TiShoppingCart className='text-2xl text-secondary' />
                  </div>
                </div>
              </div>
              <Link href={`/product/${item.id}/${item.title.replace(/[\s\"\'\"]/g, '-')}`}>
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-1 hover:text-secondary transition-all">
                  {item.title}
                </h5>
              </Link>
              <div className="mb-5 mt-2.5 flex items-center">
                {StarRating(5)}
                <span className="ml-3 mr-2 rounded bg-secondary px-2.5 py-0.5 text-xs font-semibold text-white">
                  5
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">${item.price}</span>
                <div className='flex justify-center items-center gap-2'>
                  <MdFavoriteBorder className='text-[30px] cursor-pointer' />
                  <TiShoppingCart className='text-[30px] cursor-pointer' />
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default SellerCards;
