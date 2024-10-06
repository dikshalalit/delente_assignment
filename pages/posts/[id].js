import Head from "next/head";
import postsData from "../data/posts.json";
import style from "./style.module.css";

export default function PostDetails({ post }) {
  return (
    <div className={`app_container ${style.post_container}`}>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />

        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />

        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
      </Head>
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
