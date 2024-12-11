import NavLink from "@/components/navLink/NavLink";
import { posts } from "@/constants/blog";
import { notFound } from "next/navigation";

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = posts.find((post) => post.slug === slug);
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
