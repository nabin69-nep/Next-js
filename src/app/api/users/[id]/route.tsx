import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/Prisma";
import { json } from "stream/consumers";
interface Params{
    params:{
        id:string //string aaauca id
    }
}
interface User{
    id:number,
    name:string,
    email:string,
}

// single object
 export  async function GET(request:NextRequest,{params:{id}}:Params){
    const user=await prisma.user.findUnique({
        where:{
            id:parseInt(id),
        }
    })
    if(!user){
        return NextResponse.json(
            {
            error:"User Not Found"
        },
        {
            status:404,
        }
    )
    }
    return NextResponse.json(user)
 }

 //put method
 export async function PUT(request:NextRequest,{params:{id}}:Params){

    const body: User= await request.json();
    const user = await prisma.user.findUnique({
        where:{
            id: parseInt(id)
        }
    })
    if(!user){
        return NextResponse.json(
            {
            error:"User Not Found"
        },
        {
            status:404,
        }
    )
    }
    // task-1 
    //check email if exist ,return error with error message


    //update user 
    const updateUser= await prisma.user.update({
        where:{
            id:parseInt(id),
        },
        data:{
            name:body.name,
            email:body.email,
            

        }
    })
    return NextResponse.json(updateUser)

 }

 //delete method
  export async function DELETE(request:NextRequest,{params:{id}}:Params){
   const user = await prisma.user.findUnique({
    where:{
        id:parseInt(id)
    }
   })
   if(!user){
    return NextResponse.json({
        error:"User Not found"
    },
{status:400})
   }
const deletedUser= await prisma.user.delete({
    where:{
        id:parseInt(id),
    }
})

return NextResponse.json({
    msg:"User Seletd ",
    user:deletedUser
})
  }
