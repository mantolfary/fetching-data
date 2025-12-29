import Link from "next/link";
import { PostResponse } from "@/lib/types/post";
import Cards from "@/components/Cards";

async function fecthPost() {
  const BASE_API = process.env.NEXT_PUBLIC_API_URL;
  const data = await fetch(`${BASE_API}posts`);
  const posts: PostResponse[] = await data.json();
  return posts;
}

export default async function DashboardPage() {
  const posts = await fecthPost();
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 justify-center">
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/dashboard/blog/${post.id}`}>
            <Cards
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
