import React, { useState } from 'react'
import { menu_list } from '@/assets'
import Image from 'next/image'


const ExploreMenu = () => {
    const [category, setCategory] = useState<string>("All");
    return ( 
        <section className='h-screen w-full bg-emerald-50/15 py-14 px-72 flex gap-10 flex-col'>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-wide relative">
                Explore Categories
            </h1>
            <p className='text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maiores impedit praesentium? Aspernatur expedita non architecto odit. Corporis numquam laudantium dolorum fugit dicta. Provident laborum eos sunt, totam eum nostrum!</p>
            
            <div className='flex gap-14 flex-wrap justify-center'>
                {menu_list.map((item, index) => {
                return <div key={index} onClick={() => setCategory(prev => prev===item.menu_name?"All":item.menu_name)} className='flex cursor-pointer flex-col gap-6 items-center justify-center'>
                    <Image
                        className={`border border-amber-500 rounded-full ${category === item.menu_name?'border-4 border-amber-700' : ''}`}
                        src={item.menu_image}
                        height={150}
                        width={150}
                        alt={item.menu_name}
                    />
                    <p className={`text-md rounded-full ${category === item.menu_name?'text-amber-700' : ''}`}>
                        {item.menu_name}
                    </p>
                </div>
            })}

            </div>

        </section>
    )
}

export default ExploreMenu