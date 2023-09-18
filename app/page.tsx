import { db } from '@/lib/db'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const posts = await db.post.findMany()
  return (
    <div className='gap-8 flex flex-col'>
    {posts.map((post)=>{
      return(
        <div key={post.id} className='flex border rounded-xl p-8  border-gray-10 flex-col gap-2'>
          <Link className='text-xl' href={`/post/${post.id}`}>{post.title} </Link>
          {post.content}    

        </div>
      )
    })
}</div>
     )
}
