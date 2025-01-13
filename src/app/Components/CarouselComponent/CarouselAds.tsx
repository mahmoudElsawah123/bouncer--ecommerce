import Image from 'next/image';
import React from 'react';
import IphoneImage from '@/app/assets/iPhone6s_discover_desktop_08_iOS9.png';
import OculusImage from '@/app/assets/Oculus-Rift-profile_grande.png';
import GOProImage from '@/app/assets/50051823_540375.png';

const CarouselAds = () => {
  return (
    <div className="md:container relative" aria-labelledby="carousel-ads-heading">
      <h2 id="carousel-ads-heading" className="sr-only">Product Carousel Ads</h2>
      <div className="flex md:flex-row flex-col justify-center items-center static md:absolute w-full md:left-[50%] md:translate-x-[-50%] md:translate-y-[-20%] gap-0">
        
        {/* iPhone 6 */}
        <div className="bg-[#FF6875] flex-1 flex items-center justify-between px-4 pt-3 overflow-hidden w-full min-w-[250px] h-[280px]" aria-label="Advertisement for iPhone 6">
          <div className="max-w-[200px]">
            <h3 className="text-white font-bold text-h4">iPhone 6</h3>
            <p className="text-white mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur. Adipisicing elit lorem ipsum.
            </p>
            <p className="text-white mt-3 text-[24px] font-semibold">$399</p>
          </div>
          <div className="w-[150px] h-[220px] flex items-center">
            <Image src={IphoneImage} alt="iPhone 6" width={150} height={220} className="w-full h-full object-fill" />
          </div>
        </div>

        {/* Oculus Rift */}
        <div className="bg-[#F6F7F8] px-4 pt-3 flex-1 flex flex-col justify-between items-center w-full min-w-[250px] h-[280px]" aria-label="Advertisement for Oculus Rift">
          <div className="flex justify-center">
            <Image src={OculusImage} alt="Oculus Rift" width={200} height={200} />
          </div>
          <div className="flex justify-between items-center w-full">
            <h3 className="text-h4 font-bold">Oculus Rift</h3>
            <p className="text-[24px] text-[#22262A] opacity-[75%] font-semibold">$349</p>
          </div>
        </div>

        {/* GoPro Hero 6 */}
        <div className="bg-whiteTxt px-4 pt-3 flex-1 flex justify-between items-center w-full min-w-[250px] h-[280px]" aria-label="Advertisement for GoPro Hero 6">
          <div className="flex flex-col gap-5">
            <h3 className="text-[25px] md:text-h4 font-bold">GoPro Hero 6</h3>
            <p className="text-[12px] text-[#22262A]">Lorem ipsum, dolor sit amet consectetur</p>
            <p className="text-[#22262A] opacity-[75%] text-[24px] font-semibold">$299</p>
          </div>
          <div className="flex justify-center">
            <Image src={GOProImage} alt="GoPro Hero 6" width={150} height={150} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default CarouselAds;
