import React from 'react'
import serviceImage from '@/app/assets/customerService.svg'
import deliveryImage from '@/app/assets/refund.svg'
import offerImage from '@/app/assets/shipping.svg'
import Image from 'next/image'

const data = [
    {
        image : serviceImage,
        title : 'SUPPORT 24/7',
        body : ' Lorem ipsum dolor sit amet, consectetur adipisicing elit  Lorem ipsum dolor sit amet, consectetur adipisicing elit'
    },
    {
        image : deliveryImage,
        title : '100% PRENUP',
        body : ' Lorem ipsum dolor sit amet, consectetur adipisicing elit  Lorem ipsum dolor sit amet, consectetur adipisicing elit'
    },
    {
        image : offerImage,
        title : 'FREE SHIPPING',
        body : ' Lorem ipsum dolor sit amet, consectetur adipisicing elit  Lorem ipsum dolor sit amet, consectetur adipisicing elit'
    },
]

const Benefits = () => {
  return (
    <div className='container mt-md'>
      <div className='grid md:grid-cols-3 justify-center items-center text-center gap-[60px] md:gap-10'>
        {data.map((item , index)=>{
            return (
                <div key={index} className='flex items-center flex-col justify-center gap-2'>
                    <div>
                        <Image src={item.image} alt={item.title}/>
                    </div>
                    <h4 className='text-h4'>{item.title}</h4>
                    <p className=''>{item.body}</p>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Benefits
