import LoginForm from '@/Components/forms/LoginForm'
import React from 'react'

const page = () => {
  return (
    <div className='h-[calc(100vh-95px)] flex w-full bg-amber-500'>
      <div className='w-1/2 h-full bg-white'></div>
      <div className='w-1/2 h-full p-20 flex items-center justify-center'>
        <LoginForm/>
      </div>
    </div>
  )
}

export default page