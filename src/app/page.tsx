import NavLink from "@/components/navLink/NavLink";

export default function Home() {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <p>Welcome to blog.</p>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/blog">blog</NavLink>
    </div>
  );
}
