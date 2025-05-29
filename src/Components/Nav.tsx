"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { GrSearch } from 'react-icons/gr';
import Button from './Button';

const Navbar = () => {
  const router = useRouter();
  const [menu,setMenu] = useState("home");

  return (
    <nav className="w-full flex justify-between items-center py-6 px-10 bg-[#f8f9fa]">
      {/* Left Section */}

      {/* Center Logo */}
      <div className="text-3xl font-semibold tracking-wider text-amber-600 cursor-pointer  " onClick={() => router.push("/")}>
        ifood
      </div>

      {/* Right Section */}
      <div className="flex space-x-6 text-sm text-gray-700 items-center">
        <span className={`cursor-pointer text-lg font-semibold ${menu === 'home' ? "text-amber-600 underline underline-offset-8" : ""}`} onClick={()=>{router.push('/'); setMenu("home")}}>Home</span>
        <span className={`cursor-pointer text-lg font-semibold ${menu === 'menu' ? "text-amber-600 underline underline-offset-8" : ""}`} onClick={()=>{router.push('/menu'); setMenu("menu")}}>Menu</span>
        <span className={`cursor-pointer text-lg font-semibold ${menu === 'offers' ? "text-amber-600 underline underline-offset-8" : ""}`} onClick={()=>{router.push('/offers'); setMenu("offers")}}>Offers</span>
        <span className={`cursor-pointer text-lg font-semibold ${menu === 'services' ? "text-amber-600 underline underline-offset-8" : ""}`} onClick={()=>{router.push('/services'); setMenu("services")}}>Services</span>
      </div>

      <div className='flex items-center justify-end gap-x-6'>
        <div className='flex items-center justify-center cursor-pointer'>
          <GrSearch size={28}/>
        </div>
        <div className='flex items-center justify-center cursor-pointer'>
          <BsCart2 size={28}/>
        </div>
        <div className='flex items-center justify-center cursor-pointer'>
          <Button title='Sign Up' classname='h-10 flex items-center justify-center'/>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;