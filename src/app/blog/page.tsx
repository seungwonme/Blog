import NavLink from "@/components/navLink/NavLink";
import { getPosts } from "@/actions/posts";

export default async function Blog() {
  const posts = await getPosts();
  return (
    <div>
      <h1>Blog</h1>
      <p>This is the blog page.</p>
      <NavLink href="/">Go home</NavLink>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            <NavLink href={`/blog/${post.id}`}>
              {post.title === "" ? "Untitled" : post.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
