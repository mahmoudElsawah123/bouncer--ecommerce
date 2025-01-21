"use client";
import { Dropdown } from "flowbite-react";
import { FaRegUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import React from "react";
import Link from "next/link";
import { useAppSelector } from "@/app/redux/Hooks";

interface CartData {
  num: number;
  price: number;
}

const TopBar = () => {
  const data: CartData = useAppSelector((state) => state.tabSlice.cartData);

  return (
    <div className="container py-sm">
      <div className="flex items-center justify-between">
        <div className="hidden md:flex items-center gap-[20px]">
          <Dropdown label="EN" inline>
            <Dropdown.Item aria-label="Switch to English">English</Dropdown.Item>
            <Dropdown.Item aria-label="Switch to Arabic">Arabic</Dropdown.Item>
          </Dropdown>
          <Dropdown label="USD" inline>
            <Dropdown.Item aria-label="Switch to USD">USD</Dropdown.Item>
            <Dropdown.Item aria-label="Switch to EGP">EGP</Dropdown.Item>
          </Dropdown>
        </div>

        <div className="flex items-center gap-10">
          <div className="hidden md:block">
            <Link
              href="/profile"
              className="flex items-center gap-1 font-semibold"
              aria-label="Go to My Profile"
            >
              <FaRegUser aria-hidden="true" />
              My profile
            </Link>
          </div>
          <div>
            <Link
              href="/cart"
              className="flex items-center gap-1 font-semibold"
              aria-label="Go to Cart"
            >
              {data.num} items <span className="opacity-[50%]">${data.price}</span>
            </Link>
          </div>
          <div>
            <IoSearch className="text-[18px]" aria-label="Search" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
