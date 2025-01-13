import React from 'react'
import { CarouselComponent } from './Components/CarouselComponent/CarouselComponent'
import BestSellerComponent from './Components/BestSeller/BestSellerComponent'
import CarouselAds from './Components/CarouselComponent/CarouselAds'
import Link from 'next/link'
import Banner from './Components/Banner/Banner'
import Benefits from './Components/Benefits/Benefits'
import LatestNews from './Components/LetestNews/LatestNews'
import FeaturedProduct from './Components/Featured/FeaturedProduct'

const page = () => {
  return (
    <>
      <CarouselComponent/>
      <div className='md:min-h-[220px]'>
      <CarouselAds/>
      </div>
      <BestSellerComponent/>
      <div className='container text-center'>
        <Link href={'/'} className='text-secondary text-[18px] border-b-2 border-secondary '>Learn More</Link>
      </div>
      <Banner/>
      <Benefits/>
      <LatestNews/>
      <FeaturedProduct/>
    </>
  )
}

export default page
