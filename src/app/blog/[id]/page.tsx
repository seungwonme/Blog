import NavLink from "@/components/navLink/NavLink";
import { notFound } from "next/navigation";
import { getPosts } from "@/actions/posts";

export default async function Post({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const posts = await getPosts();
  const id = (await params).id;
  const post = posts?.find((post) => String(post.id) === id);
  if (!post) {
    return notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.contents}</p>
      <NavLink href="/blog">Go to Blog</NavLink>
    </div>
  );
}
