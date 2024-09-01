import React from 'react'
import { FaEye } from "react-icons/fa";
import Link from 'next/link';
import userPhoto from './UserInterface';
import Image from 'next/image';
export default async function UserPost() {
    const res= await fetch("https://jsonplaceholder.typicode.com/posts")
    const data:userPhoto[]=await res.json();
  return (
    <div>
        <table className='table'>
            <thead>
                <tr>
                <th className='text-green-300 font-bold'>Id</th>
                <th className='text-green-300 font-bold'>Title</th> 
                <th>Photo</th>
                <th className='text-green-300 font-bold'>Action</th> 
                </tr>
            </thead>
            <tbody>
                <tr>
                    {
                        data.map((user)=>{
                            return <tr key={user.id}>
                                <td className='mt-10 '>{user.id}</td>
                                <td className='mt-10 '>{user.title}</td>
                                <td><Image  src="/images/test-1.jpg" alt="img" width={100} height={100}/></td>
                                <td ><Link href={`/dashboard/post/${user.id}`} className='btn btn-primary'><FaEye />View Post</Link></td>
                             </tr>   
                            
                        })
}
                </tr>
            </tbody>
        </table>
    </div>
  )
}
