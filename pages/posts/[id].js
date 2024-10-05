import postsData from "../data/posts.json";

export default function PostDetails({ post }) {
  return (
    <div>
      <p>{post.title}</p>
      <p> {post.author}</p>
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
  const postId = parseInt(params.id);
  const post = postsData.find((p) => p.id === postId);

  return { props: { post } };
}
