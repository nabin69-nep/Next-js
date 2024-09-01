import z from "zod"

export const UserSchema= z.object({
    name:z.string({required_error:"Name is Requried !"}).min(3,"Name must be more than 3 character"),
    email:z.string({required_error:"Email is Required !"}).min(3,"Email must have more than 3 charcter"),

});