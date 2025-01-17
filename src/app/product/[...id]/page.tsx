import BreadcrumbComponent from "@/app/Components/BreadcrumbComponent/BreadcrumbComponent";
import React from "react";
import ProductDetails from "@/app/Components/productDetails/productDetails";

type Props = {
  params: Promise<{ id: [id: number, cat: string, title: string] }>;
};
const page = async ({ params }: Props) => {
  const slug = (await params).id
  let data
  try {
    const res = await fetch("https://api.escuelajs.co/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        query {
          product(id: ${slug[0]}) {
            id
            title
            price
            description
            images
          }
        }
        `,
      }),
    });
    if(!res.ok){
      throw new Error(`Http error ! Status ${res.status}`)
    }
    const allData = await res.json()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    data = allData.data.product
    new URL(data.images[0])
    if(!allData || !allData.data || !allData.data.product){
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
  } catch{
    return (
      <div className="m-auto w-full">An error occurred while loading data ⚠️</div>
    )
  }
  return (
    <div>
      <div className="my-md">
        <BreadcrumbComponent slug={slug} />
      </div>
      <div className="flex flex-wrap">
        <div className="container">
          <ProductDetails data={data}/>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default page;
