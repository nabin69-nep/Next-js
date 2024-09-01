import React, { ReactNode } from 'react'
import Link from "next/link"
interface Props{
children:ReactNode
}

export default function layout(props:Props) {
  return (
    <>
    <div className='flex p-2 justify-around bg-purple-300 text-white'>
     <Link href="/dashboard">Dashboard</Link>
     <Link href="/dashboard/products">Prodcuts</Link>
     <Link href="/dashboard/users">USer</Link>
     <Link href="/dashboard/post">Post</Link>
    </div>
    <main>
    {props.children}
    </main>
    </>
  )
}
