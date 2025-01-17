"use client";
import React from "react";
import { Tabs } from "flowbite-react";
type Props = {
  data: string;
};
const ProductDesc = ({ data }: Props) => {
  return (
    <div className="md:max-w-[80%] flex-1">
      <Tabs aria-label="Tabs with underline" variant="underline">
        <Tabs.Item active title="Product Information">
            <p className="text-[20px]">{data}</p>
        </Tabs.Item>
        <Tabs.Item title="Review">
        <p className="text-[20px]">{data}</p>

        </Tabs.Item>
        <Tabs.Item title="Another tab">
        <p className="text-[20px]">{data}</p>

         </Tabs.Item>
      </Tabs>
    </div>
  );
};

export default ProductDesc;
