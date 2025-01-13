"use client";
import React, { memo, useEffect, useState } from "react";
import SellerCards from "./SellerCards";
// import { useDispatch } from "react-redux";
// import { handleTabId } from "@/app/redux/TabSlice";

type Category = {
  id: number;
  name: string;
};

type Props = {
  Category: Category[];
};

// eslint-disable-next-line react/display-name
const SellerMenu: React.FC<Props> = memo(({ Category }) => {
  const [selectedTab, setSelectedTab] = useState<number | null>(1);
  // const dispatch = useDispatch();
  useEffect(() => {
    setSelectedTab(Category.length > 0 ? Category[0].id : null);
  }, [Category]);
  // useEffect(() => {
  //   dispatch(handleTabId(selectedTab));
  // }, [dispatch, selectedTab]);

  return (
    <div>
      <h3 className="text-h3 font-semibold text-center">BEST SELLER</h3>
      <div className="py-md">
        <ul className="text-center flex justify-center items-center gap-[60px]">
          {Category.slice(0, 5).map((item) => (
            <li
              key={item.id}
              className={
                selectedTab === item.id
                  ? "text-secondary border-b-2 border-secondary transition-colors"
                  : "" + "cursor-pointer"
              }
              onClick={() => setSelectedTab(item.id)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <SellerCards selectedTab={selectedTab}/>
    </div>
  );
});

export default SellerMenu;
