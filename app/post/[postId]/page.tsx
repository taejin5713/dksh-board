import { db } from "@/lib/db"
import Link from "next/link"
import {notFound} from 'next/navigation'

const PostPage = async({ params: { postId } }:{params:{postId:string}}) => {
    const post = await db.post.findUnique({
        where: {
            id: parseInt(postId)
        }
    })
    if (!post){
        return notFound()
    }

    return (
        <div>
<div className="flex justify-between">
           <h1 className="font-bold text-4xl">{post?.title }</h1> <Link className="border border-gray-800 rounded-lg px-4 py-2" href={`/post/${postId}/edit`}>Edit</Link></div>
            
            <p>{post.content}</p></div>
    )


}
export default PostPage