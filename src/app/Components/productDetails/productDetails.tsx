import React from "react";
import ProductImage from "./ProductImage";
import ProductContent from "./ProductContent";
import AdsProduct from "./AdsProduct";
import ProductDesc from "./ProductDesc";

type Props = {
  data: {
    images: [];
    id: number;
    title: string;
    price: number;
    description: string;
  };
};
const ProductDetails = ({ data }: Props) => {
  return (
    <div className="flex items-start gap-5 flex-col md:flex-row">
      <div className="grid md:grid-cols-[auto_1fr] md:justify-start justify-items-center  items-start  gap-8 flex-1">
        <ProductImage data={data.images} />
        <ProductContent data={data} />
        <div className="md:col-span-2">
          <ProductDesc data={data.description}/>
        </div>
      </div>
      <div className="hidden md:block">
      <AdsProduct />
      </div>
      
    </div>
  );
};

export default ProductDetails;
