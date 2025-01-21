import React, { lazy, memo } from 'react'
import Banner from '../Banner/Banner'
const CatProducts = lazy(() => import('./CatProducts'));
const MemoizedCatProducts = memo(CatProducts);

type Props = {
    data: [
        {
            images: [];
            id: number;
            title: string;
            price: number;
            description: string;
          }
    ]
};

const RightSection = ({data}:Props) => {
  return (
    <div>
      <Banner/>
      <div>
        <MemoizedCatProducts data={data}/>
      </div>
    </div>
  )
}

export default RightSection
