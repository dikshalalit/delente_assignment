import Link from "next/link";
import postsData from "./data/posts.json";
import Counter from "./component/counter";
import { GrLinkNext } from "react-icons/gr";

export default function Home() {
  return (
    <div className="home_container app_container">
      <p className="blogs_heading">Checkout Our Latest Blogs</p>
      <ul className="blogs_list">
        {postsData.map((post, index) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <span>{index + 1}. </span> {post.title}
              <span>
                <GrLinkNext />
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <Counter />
    </div>
  );
}
