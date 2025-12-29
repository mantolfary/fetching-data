import { PostResponse } from "../types/post";

const BASE_API = process.env.NEXT_PUBLIC_API_URL;

export async function fecthPost() {
  const data = await fetch(`${BASE_API}posts`);
  const posts: PostResponse[] = await data.json();
  return posts;
}