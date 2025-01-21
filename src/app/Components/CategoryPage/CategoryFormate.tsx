"use client";
import React, { useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

type Product = {
  images: string[];
  id: number;
  title: string;
  price: number;
  description: string;
};

type Props = {
  data: Product[];
};

const CategoryFormate = ({ data }: Props) => {
  const [value , setValue] = useState([0 , 0])
  // const router = useRouter()
  useEffect(()=>{
   const getPrice =  data.map((ele)=> ele.price)
   const minPrice = Math.min(...getPrice)
   const maxPrice = Math.max(...getPrice)
   setValue([minPrice , maxPrice])
  },[data])

  useEffect(() => {
    window.history.replaceState(null, "", `?min=${value[0]}&max=${value[1]}`); 
  }, [value]);
  return (
    <div className="mt-md">
      <div className="bg-[#F6F7F8] p-5">
        <h5 className="text-h5">Price</h5>
        <div className="flex justify-between items-center">
          <span>Ranger</span>
          <span>${value[0]} - ${value[1]}</span>
        </div>
        <div className="mt-5 custom-Input">
          <RangeSlider
            min={0}
            max={100}
            step={1}
            value={value}
            onInput={setValue}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryFormate;
