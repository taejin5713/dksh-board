"use server"

import { db } from "@/lib/db"

export const updatePost =async (data:FormData)=>{
    const id= data.get('id')?.toString()
    const title = data.get('title')?.toString()
    const content = data.get('content')?.toString()
if (!id || !title || !content){
    return
}
await db.post.update({
    where:{
        id:parseInt(id)
    },
    data:{
            title,content

    }
})
}