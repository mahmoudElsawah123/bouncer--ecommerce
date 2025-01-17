import { Button, Dropdown, DropdownItem, Rating, RatingStar } from "flowbite-react";
import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import ProductOrder from "./ProductOrder";

type Props = {
  data: {
    id: number;
    title: string;
    price: number;
    description: string;
  };
};

const ProductContent = ({ data }: Props) => {
  const StarRating = (rate: number) => (
    <Rating>
      {Array.from({ length: 5 }, (_, i) => (
        <RatingStar key={i} filled={i < rate} />
      ))}
    </Rating>
  );
  return (
    <div className="flex items-start justify-start flex-col gap-5">
      <h1 className="text-h5">{data.title}</h1>
      <div className="flex items-center gap-x-5 ">
        <div>{StarRating(5)}</div>
        <p className="text-whiteTxt">0 reviews</p>
        <Link href={"/"} className="text-secondary underline">
          Submit a review
        </Link>
      </div>
      <div className="border-t-[3px] border-[#F6F7F8] w-full"></div>
      <div className="flex items-center gap-x-10">
        <p className="text-h6 text-[#FF4858]">${data.price}</p>
        <p className="text-h6 text-whiteTxt line-through">$599</p>
      </div>
      <div className="flex items-center gap-x-5">
        <p className="font-bold">Availability :</p>
        <p>in Stock</p>
      </div>
      <div className="flex items-center gap-x-5">
        <p className="font-bold">Category :</p>
        <p>Accessories</p>
      </div>
      <p className="font-bold">Free shipping</p>
      <div className="border-t-[3px] border-[#F6F7F8] w-full"></div>
      <div className="flex items-center gap-x-5">
        <p className="font-bold">Size : </p>
        <div className="flex items-center gap-[20px]">
          <Dropdown label="XXL" inline>
            <DropdownItem aria-label="Switch to USD">XXL</DropdownItem>
            <DropdownItem aria-label="Switch to EGP">lg</DropdownItem>
            <DropdownItem aria-label="Switch to EGP">md</DropdownItem>
            <DropdownItem aria-label="Switch to EGP">LG</DropdownItem>
          </Dropdown>
        </div>
      </div>
      <div className="border-t-[3px] border-[#F6F7F8] w-full"></div>
       <ProductOrder />
      <div className="border-t-[3px] border-[#F6F7F8] w-full"></div>
      <div className="flex items-center gap-3 w-full justify-end">
      <Button color="light" className="bg-[#385C8E] text-white line-clamp-1">
        <FaFacebookF className="mr-2 h-5 w-5" />
       Share in Facebook
      </Button>
      <Button color="light" className="bg-[#03A9F4] text-white line-clamp-1">
        <FaTwitter className="mr-2 h-5 w-5" />
        Share in Twitter
        </Button>
      </div>
 
    </div>
  );
};

export default ProductContent;
