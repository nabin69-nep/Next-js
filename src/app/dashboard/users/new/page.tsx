"use client";
import { useRouter } from 'next/navigation';
import React from 'react'
export default function NewUser() {
const router =useRouter(); //useRouter --next/navigator
    const handleClick=()=>{
        setTimeout(()=>{
            router.push('/dashboard/users')
        },5000)
    }
  return (
    <div>
        <button onClick={handleClick} className='pl-2 py-1 mt-32 ml-20 text-white font-bold text-xl bg-green-400 rounded'>Click me !</button>
    </div>
  )
}
