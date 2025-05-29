"use client"
import signupWithPassword from '@/actions/signupWithPassword';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { CgClose } from 'react-icons/cg';
import { twMerge } from 'tailwind-merge';
import { useRouter } from 'next/navigation';

const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [address, setAddress] = useState("");
    // const [phone, setphone] = useState("");
    // const [name, setname] = useState("");
    // const [city, setcity] = useState("");
    // const [pin, setpin] = useState("");
    const [confirmpass, setConfirmpass] = useState("")

    const [message, setMessage] = useState("")

    const [confirmation, setConfirmation] = useState("");

    const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(password!==confirmpass)   toast.error("Password doesnot match!");
        else{
            setMessage(await signupWithPassword(email, password /*, name, phone, address, city, pin*/));
        } 
    }

    const router = useRouter();

    useEffect(() => {
      if (confirmpass.length > 0) {
        matchPass();
      } else {
        setConfirmation('');
        setColor('hidden');
      }
    }, [password, confirmpass]);


    const [color, setColor] = useState("");
    const matchPass = () => {
      if(password == confirmpass){
        setColor("text-green-700");
        setConfirmation("Password matched!")
      }else{
        setColor("text-red-600")
        setConfirmation("Password doesn't match")
      }
    }

    return (
      <div className='flex flex-col items-center justify-center bg-white w-fit px-7 pt-7 pb-12 rounded-2xl'>
          <h1 className="text-3xl font-bold mb-5 ">Sign-Up Page</h1>
          <form className="flex flex-col gap-y-4 w-[20vw] " onSubmit={handleSignup}>
            {/* <input type="text" placeholder="Full Name" className="border p-2 rounded" name="name" value={name} onChange={(e)=>{setname(e.target.value)}} /> */}
              <input type="text" placeholder="E-mail" className="border p-2 rounded" name="email" value={email} onChange={(e)=>{ setEmail(e.target.value)}} />
              {/* <input type="text" placeholder="Mobile Number" className="border p-2 rounded" name="phone" value={phone} onChange={(e)=>{setphone(e.target.value)}} /> */}
              {/* <input type="text" placeholder="Enter city" className="border p-2 rounded" name="city" value={city} onChange={(e)=>{setcity(e.target.value)}} /> */}
              {/* <input type="text" placeholder="Pincode" className="border p-2 rounded" name="pin" value={pin} onChange={(e)=>{setpin(e.target.value)}} /> */}
              {/* <input type="text" placeholder="Address Line 1" className="border p-2 rounded" name="address" value={address} onChange={(e)=>{setAddress(e.target.value)}} /> */}
              <input type="password" placeholder="Password" className="border p-2 rounded" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
              <input type="password" placeholder="Confirm Password" className="border p-2 rounded" name="confirmpass" value={confirmpass} onChange={(e)=>{ setConfirmpass(e.target.value); }} />
              <span className={twMerge(`text-sm`, color)}>{confirmation}</span>
              <button type="submit" className="bg-blue-500 text-white p-2 rounded">Sign-Up</button>
          </form>
          <br />
        <h2>Already a user? <a className='text-blue-500 underline' href='/login'>Login</a></h2>

        {message.length>10 && 
          <div className='rounded-2xl absolute shadow-2xl w-full h-full inset-0 z-10 flex items-center justify-center bg-black/10 backdrop-blur-sm'>
            <div className='relative rounded-2xl border-2 border-amber-400 p-5 flex flex-col bg-white h-[300px] w-[500px]'>
              <CgClose className='absolute top-5 right-5' color='black' onClick={() => setMessage("")}/>
              <br /><br />
              <span className='text-amber-950 text-xl'>{message}</span>
              <br /><br />
              <button className='bg-amber-600 hover:bg-amber-500 text-white h-10 w-full rounded-full cursor-pointer' onClick={() => router.push("/login")}>Login</button>
            </div>
          </div>
        }
      </div>
    )
}

export default SignUpForm