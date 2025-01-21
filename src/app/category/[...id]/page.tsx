import BreadcrumbComponent from "@/app/Components/BreadcrumbComponent/BreadcrumbComponent";
import RightSection from "@/app/Components/CategoryPage/RightSection";
import React, { lazy, memo } from "react";
const CategoryFormate = lazy(() => import('@/app/Components/CategoryPage/CategoryFormate'));


type Props = {
  params: Promise<{ id: [id: number, cat: string, title: string] }>;
};
const page = async ({ params }: Props) => {
  const MemoizedCategoryFormate = memo(CategoryFormate)

  const slug = (await params).id;
  let data;
  try {
    const res = await fetch("https://api.escuelajs.co/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        query {
          products(categoryId: ${slug[0]}) {
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
    if (!res.ok) {
      throw new Error(`Http error ! Status ${res.status}`);
    }
    const allData = await res.json();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    data = allData.data.products;
    if (!allData || !allData.data || !allData.data.products) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
  } catch {
    return (
      <div className="m-auto w-full">
        An error occurred while loading data ⚠️
      </div>
    );
  }
  return (
    <div className="">
      <div className="my-md">
        <BreadcrumbComponent slug={slug} />
        <div className="container">
          <div className=" grid lg:grid-cols-[1fr_4fr] md:grid-cols-[2fr_4fr] sm:grid-cols-1 items-start md:gap-5">
            <div className="">
              <MemoizedCategoryFormate data={data}/>
            </div>
            <div>
              <RightSection data={data}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
