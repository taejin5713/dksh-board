"use server"

import { db } from "@/lib/db"

export const createPost =async (data:FormData)=>{
    console.log('why') 
    const title = data.get('title')?.toString()
    const content = data.get('content')?.toString()
if ( !title || !content){
    return
}
await db.post.create({ 
    data:{ 
            title,content

    }
})
}