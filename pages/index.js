import Link from "next/link";
import postsData from "./data/posts.json";

export default function Home() {
  return (
    <div>
      <p>Blog Posts</p>
      <ul>
        {postsData.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
