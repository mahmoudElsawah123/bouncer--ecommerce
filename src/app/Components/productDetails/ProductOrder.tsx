"use client"
import { Button } from 'flowbite-react'
import React, { useState } from 'react'
import { HiShoppingCart } from "react-icons/hi";

const ProductOrder = () => {
  const [quantity, setQuantity] = useState(1)

  return (
    <section className='w-full'>
      <div className="flex items-center justify-between w-full flex-wrap">
        <div className="text-[20px] cursor-pointer font-bold bg-[#F6F7F8] flex justify-between items-center w-[116px] py-1 px-[10px]">
          <button className="text-secondary w-full" onClick={() => setQuantity(quantity => Math.max(1 , quantity - 1))}>-</button>
          <span className="text-[14px]">{quantity}</span>
          <button className="text-secondary w-full" onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
        <Button color="light" className="bg-[#f7f7f7] text-secondary">
          <HiShoppingCart className="mr-2 h-5 w-5" />
          Buy now
        </Button>
      </div>
    </section>
  )
}

export default ProductOrder
