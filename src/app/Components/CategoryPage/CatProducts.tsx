"use client"
import React, { useCallback, useEffect, useState } from "react";
import { Label, Rating, Select, RatingStar, Button } from "flowbite-react";
import { RiListUnordered } from "react-icons/ri";
import { FaBorderNone } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Pagination } from "flowbite-react";
import { useSearchParams } from "next/navigation";

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
const CatProducts = ({ data }: Props) => {
  const [valData , setValData] = useState<Product[]>([])
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);
  const getParams = useSearchParams()

  useEffect(()=>{
    const min = getParams.get('min')
    const max = getParams.get('max')
   const filterData = data.filter((ele)=>{
      try {
        new URL(ele.images[0])
       return ele.price <= Number(max) && ele.price >=  Number(min)
      } catch{
        return false
      }
      
    }) 
      setValData(filterData)
  },[data, getParams])




  const StarRating = useCallback((rate: number) => (
    <Rating>
      {Array.from({ length: 5 }, (_, i) => (
        <RatingStar key={i} filled={i < rate} />
      ))}
    </Rating>
  ),[])
  return (
    <div className="my-5">
      <div className="flex justify-between items-center bg-[#F6F7F8] px-5 py-3">
        <div className="w-full flex gap-10 items-center">
          <span>{data.length} items</span>
          <div className="max-w-md flex items-center gap-2">
            <Label htmlFor="countries" value="SortBy" />
            <Select
              id="Sort"
              defaultValue={"name"}
              color="transparent"
              className="sort-btn"
            >
              <option>name</option>
            </Select>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <FaBorderNone size={25} className="text-secondary" />
          <RiListUnordered size={25} />
        </div>
      </div>
      <div>
        {valData.length > 0 ?valData.slice(currentPage , currentPage + 2).map((item) => {
          return (
            <div
              key={item.id}
              className="grid md:grid-cols-[auto_1fr] md:justify-items-start justify-items-center gap-5 items-start my-10"
            >
              <Image
                src={item.images[0]}
                alt={item.title}
                width={250}
                height={150}
              />
              <div className="flex items-start justify-start flex-col gap-2">
                <Link href={`/product/${item.id}/${item.title}`} className="text-h5">{item.title}</Link>
                <div className="flex items-center gap-x-5 ">
                  <div>{StarRating(5)}</div>
                  <p className="text-whiteTxt">0 reviews</p>
                  <Link href={"/"} className="text-secondary underline">
                    Submit a review
                  </Link>
                </div>
                <div className="border-t-[3px] border-[#F6F7F8] w-full"></div>
                <div className="flex items-center gap-x-10">
                  <p className="text-h6 text-[#FF4858]">${item.price}</p>
                  <p className="text-h6 text-whiteTxt line-through">$599</p>
                </div>
                <p>{item.description}</p>
                <Link href={`/product/${item.id}/${item.title.replace(/[\s\"\'\"]/g, '-')}`}><Button className="bg-[#33A0FF]">Add To Cart</Button></Link>
              </div>
            </div>
          );
        }): 
        <div>
          No data 
        </div>
        }
      </div>
      {valData.length > 0 ?
            <div className="flex overflow-x-auto sm:justify-center">
            <Pagination
              layout="pagination"
              currentPage={currentPage}
              totalPages={valData.length - 1}
              onPageChange={onPageChange}
              previousLabel="Next"
              nextLabel="Back"
            />
          </div>
      : null}
    </div>
  );
};

export default CatProducts;
