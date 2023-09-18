'use client'
import { db } from "@/lib/db"
import { notFound } from "next/navigation"  
import { createPost } from "./create-post"

const EditPage =( )=>{   
   

const onSubmit =async(data:FormData)=>{ 
    await createPost(data) 
    alert('성공적으로 제출되었습니다')

}
return (
    <form action={onSubmit} className="flex flex-col gap-8">
        <h1>New Post page</h1>
        <input className="focus:ring border p-2 border-gray-7 rounded-lg" placeholder="제목"   name="title" />
        <textarea className="focus:ring  border p-2 border-gray-7 rounded-lg" placeholder="내용"  name="content" />
        <button type="submit">제출</button>
    </form>
)
}
export default EditPage