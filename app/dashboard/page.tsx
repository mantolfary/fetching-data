import Link from "next/link";
import { PostCard } from "../components/PostCard";
import { PostResponse } from "../lib/post";

async function fecthPosts() {
  const BASE_API = process.env.NEXT_PUBLIC_API_URL;
  const data = await fetch(`${BASE_API}posts`);
  const posts: PostResponse[] = await data.json();
  return posts;
}

export default async function DashboardPage() {
  const posts = await fecthPosts();
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/dashboard/blog/${post.id}`}>
            <PostCard
            key={post.id}
            userId={post.userId}
            id={post.id}
            title={post.title}
            body={post.body}
          />
          </Link>
        </div>
      ))}
    </div>
  );
}
