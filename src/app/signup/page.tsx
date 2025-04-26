"use client"
import React, { useState } from 'react'

const page = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-[#f3f4f6] text-black'>
        <h1 className="text-3xl font-bold mb-5 ">Sign-Up Page</h1>
        <form className="flex flex-col space-y-4 w-[20vw] ">
            <input type="text" placeholder="E-mail" className="border p-2 rounded" name="email" value={email} onChange={(e)=>{ setEmail(e.target.value)
                console.log(email)
             }} />
            <input type="password" placeholder="Password" className="border p-2 rounded" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Sign-Up</button>
        </form>
    </div>
  )
}

export default page