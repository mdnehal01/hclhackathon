"use client"
import { Items } from '@/types'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

interface MenuContentProps{
  items:Items[]
}

const MenuContent:React.FC<MenuContentProps> = ({
  items
}) => {

  const router = useRouter();

  return (
    <div className='h-full w-full'>
      {items.map((item) => (
        <div onClick={() => router.push(`item/${item.item_id}`)} className='h-[144px] relative p-3 gap-x-5 w-[600px] bg-amber-50/20 border-2 rounded-lg flex border-black' key={item.item_id}>
          <span>{item.item_id}</span>
          <div className='h-[120px] w-[120px] relative bg-red-300 shrink-0'>
            <Image src={item.image_urls.primary[0]} fill alt={item.title} />
          </div>
          <div className='flex flex-col'>
            <span className='text-2xl font-extrabold'>{item.title}</span>
            <span className='text-md line-clamp-3'>{item.description}</span>
          </div>

          <div className='absolute px-2 py-0.5 bg-green-200 cursor-pointer hover:bg-green-500 font-extrabold right-5 top-2 rounded-full border'>₹ {Number(item.price).toLocaleString("En-in")}</div>
        </div>
      ))}
    </div>
  )
}

export default MenuContent