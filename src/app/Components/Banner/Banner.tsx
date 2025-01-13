import Link from 'next/link'
import React from 'react'
import IphoneImage from '@/app/assets/iPhone6s_discover_desktop_08_iOS9.svg'
import Image from 'next/image'
const Banner = () => {
  return (
    <div className='bg-secondary mt-md'>
      <div className='container hidden md:flex justify-around items-center'>
        <div>
            <h1 className='text-h1 text-white'>Iphone 6 Plus</h1>
            <p className='text-white text-[22px] mb-10'>Performance and design. taken right to the edge</p>
            <Link className='text-white text-[18px] border-b-2 border-white' href={''}>Learn More</Link>
        </div>
        <div>
            <Image src={IphoneImage} alt='banner' width={300} height={300}/>
        </div>
      </div>
    </div>
  )
}

export default Banner
