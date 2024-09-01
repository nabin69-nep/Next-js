import React from 'react'
import userPhoto from '../UserInterface';
import { notFound } from 'next/navigation';
interface Params{
    params:{
        id:number,
    }
}
export default async function PostId({params:{id}}:Params) {
    const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data:userPhoto=await res.json();
    if(id>100){
        notFound();
    }
  return (
    <div className='text-white w-[500px] mx-auto'>
        <h2 className='text-2xl mt-10 font-bold'>User-Id</h2>
        <p className='text-fuchsia-300 mt-5'>{data.id}</p>
        <h2 className='text-2xl mt-10 font-bold '>Title</h2>
        <p className='text-fuchsia-300 mt-5'>{data.title}</p>
        <h2 className='text-2xl  mt-10 font-bold'>Body</h2>
        <p className='text-fuchsia-300 mt-5'>{data.body}</p>
    </div>
  )
}
