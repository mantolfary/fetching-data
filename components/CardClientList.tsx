import { PostResponse } from '@/lib/types/post'
import { Link } from 'lucide-react';
import React, { use } from 'react'
import { PostCard } from './PostCard';

export default function CardClientList(
    {fetchPost}: {fetchPost: Promise<PostResponse[]>}
) {
    // use hooks here to fetch data on client side
    const posts = use(fetchPost)
    console.log(posts);
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
          <Link key={index} href={`/dashboard/blog/${post.id}`}>
            <PostCard
              key={post.id}
              userId={post.userId}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          </Link>
      ))}
    </div>
  )
}
