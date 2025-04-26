"use client"
import signupWithPassword from '@/actions/signupWithPassword';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setphone] = useState("");
    const [name, setname] = useState("");
    const [city, setcity] = useState("");
    const [pin, setpin] = useState("");
    const [confirmpass, setConfirmpass] = useState("")

    const [message, setMessage] = useState("")

    const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(password!==confirmpass)   toast.error("Password doesnot match!");
        else{
            setMessage(await signupWithPassword(email, password, name, phone, address, city, pin));
        } 
    }

    return (
      <div className='flex flex-col items-center justify-center h-screen bg-[#f3f4f6] text-black'>
          <h1 className="text-3xl font-bold mb-5 ">Sign-Up Page</h1>
          <form className="flex flex-col space-y-4 w-[20vw] " onSubmit={handleSignup}>
            <input type="text" placeholder="Full Name" className="border p-2 rounded" name="name" value={name} onChange={(e)=>{setname(e.target.value)}} />
              <input type="text" placeholder="E-mail" className="border p-2 rounded" name="email" value={email} onChange={(e)=>{ setEmail(e.target.value)}} />
              <input type="text" placeholder="Mobile Number" className="border p-2 rounded" name="phone" value={phone} onChange={(e)=>{setphone(e.target.value)}} />
              <input type="text" placeholder="Enter city" className="border p-2 rounded" name="city" value={city} onChange={(e)=>{setcity(e.target.value)}} />
              <input type="text" placeholder="Pincode" className="border p-2 rounded" name="pin" value={pin} onChange={(e)=>{setpin(e.target.value)}} />
              <input type="text" placeholder="Address Line 1" className="border p-2 rounded" name="address" value={address} onChange={(e)=>{setAddress(e.target.value)}} />
              <input type="password" placeholder="Password" className="border p-2 rounded" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
              <input type="password" placeholder="Confirm Password" className="border p-2 rounded" name="confirmpass" value={confirmpass} onChange={(e)=>{setConfirmpass(e.target.value)}} />
              <button type="submit" className="bg-blue-500 text-white p-2 rounded">Sign-Up</button>
          </form>
        <h2>Already a user? <a className='text-blue-500 underline' href='/login'>Login</a></h2>
          {message}
      </div>
    )
}

export default SignUpForm