import { get } from 'http'
import React from 'react'

const page = () => {
  return (
    <div className='bg-white h-full min-h-screen text-black'>
      <div className=' font-serif uppercase text-8xl text-center '>Simple and Tasty recipies</div>
      <section className='section-2 flex flex-row justify-center items-center gap-4 h-[30vh] px-10'>
        <div className='left w-[50%]'><img src="public\PizzaImage1.jpeg" className='w-full h-full' alt="" /></div>
        <div className='right w-[50%]'>
        <div className="grid grid-flow-col grid-rows-2 gap-0">
  <div className='border-b-[1.5px] px-10 py-4 border-r-[1.5px]'>01</div>
  <div className='border-r-[1.5px] px-10 py-4'><p>A restaurant is a business that serves food and drinks to customers. Meals are generally served and eaten on the premise</p></div>
  <div className='border-b-[1.5px] px-10 py-4'>3</div>
  <div className=' px-10 py-4 '><img src="C:\Users\DELL\Desktop\New folder\hclhackathon\public\PizzaImage1.jpeg" alt="" /></div>
</div>
        </div>
      </section>
    </div>
  );
}

export default page
