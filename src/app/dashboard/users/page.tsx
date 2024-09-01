// "use client";
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaEye } from "react-icons/fa";
import User from "./UserInterface"
export default async function UserPage() {
  // const [datas,setDatas]=useState<User[]>();
  // const getResponse=async()=>{
  //   const response =await fetch("https://jsonplaceholder.typicode.com/users");
  //   const dd = await response.json();
  //   setDatas(dd)
  // }
  // useEffect(()=>{
  //   getResponse()
  // },[])
const res=await fetch("http://localhost:3000/api/users")
const data:User[]= await res.json();
  return (
    <div>
      <Link href="/dashboard/users/new" className='bg-blue-600 text-white'>New User</Link>
      <table className='table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
    data.map((user)=>{
            return<tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link href={`/dashboard/users/${user.id}`} className='btn btn-primary'><FaEye />
                View</Link>
              </td>
            </tr>
          })
          }
        </tbody>
      </table>
    </div>
  )
}
