import React from 'react'
import User from "../UserInterface"
import { notFound } from 'next/navigation'
interface Params{
    params:{
        id:number,
    }
    // searchPArasm:{
    //     name:string,
    // }
}
//:{ params: {id: number}} --shorthand
export default async function UserId({params:{id}}:Params) {
    const res=await fetch(`http://localhost:3000/api/users/${id}`)
    const data:User= await res.json();
if(id>10){
    notFound();
}
  return (
    <div>
       <table  className='table'>
        <tr>
            <th>Id</th>
            <td>{data.id}</td>
            </tr>
            <tr>
            <th>Name</th>
            <td>{data.name}</td>
            </tr>
                <tr>
            <th>Email</th>
            <td>{data.email}</td>
        </tr>
       </table>
    </div>
  )
}
