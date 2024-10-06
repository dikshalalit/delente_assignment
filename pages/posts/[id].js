import postsData from "../data/posts.json";
import style from "./style.module.css";

export default function PostDetails({ post }) {
  return (
    <div className={`app_container ${style.post_container}`}>
      <p>
        {post.title} <span>{post.author}</span>
      </p>
      <p>{post.content}</p>
    </div>
  );
}

export function getStaticPaths() {
  const paths = postsData.map((post) => ({
    params: { id: post.id.toString() },
  }));
  return { paths, fallback: false };
}

export function getStaticProps({ params }) {
  const post = postsData.find((p) => p.id === parseInt(params.id));
  return { props: { post } };
}
