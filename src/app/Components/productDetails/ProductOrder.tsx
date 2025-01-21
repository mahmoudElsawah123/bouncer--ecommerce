"use client"
import { Button } from 'flowbite-react'
import { useRouter } from 'next/navigation';
import React, { useCallback, useState } from 'react'
import { HiShoppingCart } from "react-icons/hi";

type Props = {
  data: {
    id: number;
    title: string;
    price: number;
    description: string;
  };
};

const ProductOrder = ({data} : Props) => {
  const [quantity, setQuantity] = useState(1)
  const router = useRouter()
  const addProduct = useCallback(()=>{
    const addQty = Object.assign(data , {quantity})
    if(window.localStorage.getItem('order-product')){
      const getProduct = window.localStorage.getItem('order-product')
      const parseProduct = JSON.parse(getProduct ? getProduct : '')
      const allData = [...parseProduct , addQty]
      window.localStorage.setItem('order-product' , JSON.stringify(allData))
    }else{
      window.localStorage.setItem('order-product' , JSON.stringify([addQty]))
    }
    router.push('/cart')
  },[data, quantity, router])
  return (
    <section className='w-full'>
      <div className="flex items-center justify-between w-full flex-wrap">
        <div className="text-[20px] cursor-pointer font-bold bg-[#F6F7F8] flex justify-between items-center w-[116px] py-1 px-[10px]">
          <button className="text-secondary w-full" onClick={() => setQuantity(quantity => Math.max(1 , quantity - 1))}>-</button>
          <span className="text-[14px]">{quantity}</span>
          <button className="text-secondary w-full" onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
        <Button color="light" className="bg-[#f7f7f7] text-secondary" onClick={addProduct}>
          <HiShoppingCart className="mr-2 h-5 w-5" />
          Buy now
        </Button>
      </div>
    </section>
  )
}

export default ProductOrder
