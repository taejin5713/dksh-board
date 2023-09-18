import { db } from "@/lib/db"
import { notFound } from "next/navigation"
import { updatePost } from "./update-post"

const EditPage =async({params:{postId}}:{params:{postId:string}})=>{   
    const post = await db.post.findUnique({
    where: {
        id: parseInt(postId)
    }
})
if (!post){
    return notFound()
}

const onSubmit =async(data:FormData)=>{ 
    data.set('id',postId)
    await updatePost(data)
alert('성공적으로 제출되었습니다')

}
return (
    <form action={onSubmit} className="flex flex-col gap-8">
        <h1>Edit page</h1>
        <input className="focus:ring border p-2 border-gray-7 rounded-lg" defaultValue={post.title} name="title" />
        <textarea className="focus:ring  border p-2 border-gray-7 rounded-lg" defaultValue={post.content} name="content" />
        <button type="submit"  >제출</button>
    </form>
)
}
export default EditPage