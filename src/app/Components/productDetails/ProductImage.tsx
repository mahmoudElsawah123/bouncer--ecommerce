"use client";
import Image from "next/image";
import React, {useState } from "react";
import defaultProduct from '@/app/assets/Image_not_available.png'
type Props = {
  data : string[]
}
const ProductImage = ({data}:Props) => {
  const [selectedImage, setSelectedImage] = useState( data.length > 0 ? data[0] : defaultProduct)
  return (
    <div className="max-w-[370px]">
      <div className="flex  bg-gray-200 rounded-lg p-4 shadow-lg">
        {
          <Image
          src={selectedImage}
          alt="Selected Product"
          width={370}
          height={370}
          className="rounded-lg transition-transform duration-500 ease-in-out scale-100 hover:scale-105"
        />
        }
      </div>

      <div className="flex justify-center gap-2 mt-5">
        {data.map((image, index) => (
          <div
            key={index}
            className={`border-2 rounded-md overflow-hidden cursor-pointer transition-all duration-300 ${
              selectedImage === image ? "border-secondary scale-110" : "border-transparent"
            }`}
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image}
              alt={'product'}
              width={75}
              height={75}
              className="hover:opacity-80 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
