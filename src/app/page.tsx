"use client"
import Image from 'next/image';
import React from 'react'
import Button2 from '@/Components/buttons/Button2';
import { useRouter } from 'next/navigation';
import HeroImg from "@/../public/images/frontend_assets/header_img.png"
import ExploreMenu from '@/Components/ExploreMenu';

const page = () => {
  const router = useRouter();
  return (
    <div>

      <div className="flex flex-col items-center justify-center md:py-20 sm:py-14 py-5 bg-[#f8f9fa] text-center">
        <div className='h-[600px] w-2/3 relative bg-contain bg-red-100'>
        <Image
          className='object-contain'
          src={HeroImg}
          fill
          alt='Header'
        />

        <div className='absolute bottom-18 left-10 h-auto w-1/2 flex flex-col'>
          <h1 className='text-left text-white font-extrabold text-6xl'>Order your favourite food here</h1>
          <span className='text-left text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A magni eius neque iste provident temporibus ullam sequi, sit esse dolorem quasi consectetur, deleniti soluta quam voluptatem omnis? Itaque, placeat unde.</span>
          <br /><br />
          <button className='bg-white hover:bg-amber-50 h-10 w-28 cursor-pointer rounded-full' onClick={() => router.push("/menu")}>View Menu</button>
        </div>
      </div>  
      <br /><br /><br />
      {/* Main Heading */}
      <h1 className="text-3xl md:text-5xl text-amber-500 font-serif font-bold leading-tight tracking-wide relative">
        Welcome to iFood, A food ordering app.
      </h1>
    </div>
  
    <ExploreMenu/>
    </div>

  );
}

export default page
