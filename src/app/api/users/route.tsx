import { NextRequest, NextResponse } from "next/server";
import { UserSchema } from "./UserSchema";
import prisma from "../../../../prisma/Prisma";
import { error } from "console";


//multiple object 
export async function GET(request:NextRequest){
const userdData=await prisma.user.findMany({})
return NextResponse.json(userdData)
}
export async function POST(request:NextRequest){
    const body = await request.json();
    const Validation=UserSchema.safeParse(body);
    if(!Validation.success){
        return NextResponse.json({
            error:Validation.error.errors
        },{
            status:400,
        })
    }
    const isExistEmail= await prisma.user.findUnique({
        where:{
            email:body.email
        }
    })
if(isExistEmail){
    return NextResponse.json({
        error:"Email Already Exsit"
    },
    {
        status:400,
    }
)
}

    const newUser= await prisma.user.create({
        data:{
            name:body.name,
            email:body.email
        }

    })
    return NextResponse.json(newUser)

}