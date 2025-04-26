import { get } from 'http'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-[#f8f9fa] text-center">

      {/* Main Heading */}
      <h1 className="text-6xl md:text-8xl font-serif font-bold leading-tight tracking-wide relative">
        SIMPLE AND
        {/* Salad Image between text */}
        <span className="inline-block mx-4 align-middle">
          <img
            src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce" // salad image link
            alt="Salad"
            className="w-16 h-16 rounded-full object-cover inline"
          />
        </span>
        TASTY RECIPES
      </h1>

    </div>
  );
}

export default page
