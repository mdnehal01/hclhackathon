import React from 'react';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-[#f8f9fa] text-center">

      {/* Main Heading */}
      <h1 className="text-6xl md:text-8xl font-serif font-bold leading-tight tracking-wide relative">
        SIMPLE AND
        {/* pizza Image between text */}
        <span className="inline-block mx-4 align-middle">
          <image
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hunts.com%2Frecipes%2Fquick-easy-meals%2Feasy-pepperoni-pizza-6934&psig=AOvVaw0GcFxN3rJpsbMPef-qDvxA&ust=1745739290406000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNDR7OWX9YwDFQAAAAAdAAAAABAa" // pizza image link
            alt="Salad"
            className="w-16 h-16 rounded-full object-cover inline">
          </image>
        </span>
        TASTY RECIPES
      </h1>

    </div>
  );
}