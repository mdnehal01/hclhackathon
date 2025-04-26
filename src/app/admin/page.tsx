import { Pizza, User } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div className=' h-full min-h-screen text-black font-serif px-4 py-2 bg-gray-100'>
      <div className='flex flex-col items-center justify-center h-full w-screen'>
      <div className='cards h-[50vh] w-full flex justify-around items-center rounded-xl bg-white shadow-lg'>
        <div className="card relative shadow-md bg-gray-100 w-[20vw] h-[45vh] rounded-xl flex flex-col justify-center items-center">
          <h3 className='absolute top-0 left-0 p-4 text-2xl'>#567834</h3>
          <p className='absolute top-12 left-0 px-4'>Table 16</p>
          <img src="public\PizzaImage1.jpeg" alt="order image" />
            <p>Margherita Pizza</p>
          <p className='absolute bottom-0 right-0 m-4 px-2 py-1 bg-amber-300 rounded-full'>Dine - in</p>
        </div>
        <div className="card relative shadow-md bg-gray-100 w-[20vw] h-[45vh] rounded-xl flex flex-col justify-center items-center">
          <h3 className='absolute top-0 left-0 p-4 text-2xl'>#567834</h3>
          <p className='absolute top-12 left-0 px-4'>Table 16</p>
          <img src="public\PizzaImage1.jpeg" alt="order image" />
            <p>Margherita Pizza</p>
          <p className='absolute bottom-0 right-0 m-4 px-2 py-1 bg-amber-300 rounded-full'>Dine - in</p>
        </div>
        
        <div className="card relative shadow-md bg-gray-100 w-[20vw] h-[45vh] rounded-xl flex flex-col justify-center items-center">
          <h3 className='absolute top-0 left-0 p-4 text-2xl'>#567834</h3>
          <p className='absolute top-12 left-0 px-4'>Table 16</p>
          <img src="public\PizzaImage1.jpeg" alt="order image" />
          <p>Onion & Capsicum Pizza</p>
          <p className='absolute bottom-0 right-0 m-4 px-2 py-1 bg-amber-300 rounded-full'>Dine - in</p>
        </div>
        <div className="card relative shadow-md bg-gray-100 w-[20vw] h-[45vh] rounded-xl flex flex-col justify-center items-center">
          <h3 className='absolute top-0 left-0 p-4 text-2xl'>#567834</h3>
          <p className='absolute top-12 left-0 px-4'>Table 16</p>
          <img src="public\PizzaImage1.jpeg" alt="order image" />
          <p>Veg Pizza Large</p>
          <p className='absolute bottom-0 right-0 m-4 px-2 py-1 bg-amber-300 rounded-full'>Dine - in</p>
        </div>
      </div>
      <div>

      </div>
      </div>
    </div>
  )
}

export default page