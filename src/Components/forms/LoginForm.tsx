"use client"
import React, { useState } from 'react'
import { CgClose } from 'react-icons/cg';
import { usePathname, useRouter } from 'next/navigation';
import loginWithPassword from '@/actions/loginWithPassword';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [message, setMessage] = useState("")
    const router = useRouter();
    const path = usePathname();
    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await loginWithPassword(email, password, path,  router);
    }

    return (
      <div className='flex flex-col items-center justify-center bg-white w-fit px-7 pt-7 pb-12 rounded-2xl'>
            <h1 className="text-2xl font-bold mb-5 ">Login to your account</h1>
            <form className="flex flex-col gap-y-4 w-[20vw] " onSubmit={handleLogin}>
                <input required type="text" placeholder="E-mail" className="border p-2 rounded" name="email" value={email} onChange={(e)=>{ setEmail(e.target.value)}} />
                <input required type="password" placeholder="Password" className="border p-2 rounded" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                <button type="submit" className="bg-amber-600 hover:bg-amber-500 border-2 border-black text-white p-2 rounded cursor-pointer">Login</button>
            </form>
            <br />
        <h2>Don&apos;t have an account? <a className='text-blue-500 underline' href='/signup'>Sign up</a></h2>

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

export default LoginForm