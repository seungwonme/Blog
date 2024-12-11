import NavLink from "@/components/navLink/NavLink";
import { posts } from "@/constants/blog";

export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <p>This is the blog page.</p>
      <NavLink href="/">Go home</NavLink>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <NavLink href={`/blog/${post.slug}`}>{post.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
