"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "flowbite-react";
import { useDispatch } from "react-redux";
import { handleTabId } from "@/app/redux/TabSlice";

interface Product {
  id: string;
  title: string;
  quantity: number;
  description?: string;
  price?: number;
  images?: string[];
}

const CartComponent = () => {
  const [data, setData] = useState<Product[]>([]);
  const dispatch = useDispatch()
  // Load data from localStorage
  useEffect(() => {
    const getData = localStorage.getItem("order-product");
    const formatData: Product[] = getData ? JSON.parse(getData) : [];

    if (!Array.isArray(formatData)) {
      console.error("Invalid data format in localStorage");
      return;
    }

    const mergedProducts = formatData.reduce((acc: Product[], product: Product) => {
      const existing = acc.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity += product.quantity;
      } else {
        acc.push({ ...product });
      }
      return acc;
    }, []);
    setData(mergedProducts);
  }, [dispatch]);

  useEffect(()=>{
    const price = data.reduce((total, item) => total + (item.price || 0) * item.quantity, 0).toFixed(2)
    dispatch(handleTabId({num : data.length , price : price}))

  },[data , dispatch])
  // Update quantity and synchronize with localStorage
  const updateQuantity = (id: string, delta: number) => {
    setData((prevData) => {
      const updatedData = prevData
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0); // Remove items with quantity 0

      // Update localStorage
      localStorage.setItem("order-product", JSON.stringify(updatedData));
      return updatedData;
    });
  };

  return (
    <div className="container">
      <h4 className="text-h4 font-bold py-2">Shopping Cart</h4>
      <hr />
      {data.length > 0 ? (
        data.map((item) => (
          <div key={item.id}>
            <div className="flex justify-between items-start gap-10">
              <div className="flex gap-10 py-2 flex-1">
                <div>
                  <Image
                    src={item.images?.[0] || ""}
                    alt="Product Image"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="flex flex-col justify-start gap-3">
                  <Link
                    href={`/product/${item.id}/${item.title}`}
                    className="text-[18px]"
                  >
                    {item.title}
                  </Link>
                  <span className="text-green-700 text-[18px]">
                    ${item.price ? item.price * item.quantity : 0}
                  </span>
                  <p>{item.description}</p>
                  <div className="text-[20px] cursor-pointer font-bold bg-[#F6F7F8] flex justify-between items-center w-[116px] py-1 px-[10px]">
                    <button
                      className="text-secondary w-full"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      -
                    </button>
                    <span className="text-[14px]">{item.quantity}</span>
                    <button
                      className="text-secondary w-full"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        ))
      ) : (
        <div className="text-center py-10 text-gray-500">
          <p>Your cart is empty.</p>
        </div>
      )}
      {data.length > 0 && (
        <div>
          <div className="shadow-lg p-5">
            <h6 className="text-h6">
              Subtotal ({data.reduce((sum, item) => sum + item.quantity, 0)} items): $
              {data.reduce((total, item) => total + (item.price || 0) * item.quantity, 0).toFixed(2)}
            </h6>
            <Button color="success" className="w-full">
              Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartComponent;
