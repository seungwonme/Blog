import NavLink from "@/components/navLink/NavLink";
import { getPosts } from "@/actions/posts";

export default async function About() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page.</p>
      <NavLink href="/">Go home</NavLink>
    </div>
  );
}
