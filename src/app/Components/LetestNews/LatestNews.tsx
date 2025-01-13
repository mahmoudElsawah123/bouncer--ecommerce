import React from 'react'
import { Card } from "flowbite-react";
import latestNewsImage from '@/app/assets/latest-news-1.png'
import latestNewsImage2 from '@/app/assets/latest-news-2.png'
import latestNewsImage3 from '@/app/assets/latest-news-3.png'
import Image from 'next/image';

const data = [
  {
    date: '01 Jan, 2025',
    image: latestNewsImage,
    title: 'Typesetting industry',
    txt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit'
  },
  {
    date: '01 Jan, 2025',
    image: latestNewsImage2,
    title: 'Typesetting industry',
    txt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit'
  },
  {
    date: '01 Jan, 2025',
    image: latestNewsImage3,
    title: 'Typesetting industry',
    txt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit'
  },
];

const LatestNews = () => {
  return (
    <div className='container mt-xl'>
      <div className='my-lg'>
        <h4 className='text-h4 font-semibold text-center'>LATEST NEWS</h4>
      </div>
      <div className='flex flex-wrap justify-center md:justify-between items-center gap-10 '>
      {data.map((item, index) => (
        <Card
          key={index}
          className="max-w-sm flex flex-row border-0 shadow-inherit"
          renderImage={() => <Image src={item.image} alt={item.title} width={140} height={166} />}
        >
          <div className='flex flex-col gap-1'>
            <p className='text-whiteTxt'>{item.date}</p>
            <h6 className="text-h6 font-bold">
              {item.title}
            </h6>
            <p className='opacity-75'>{item.txt}</p>
          </div>
          
        </Card>
      ))}
     </div>
    </div>
  );
}

export default LatestNews;
