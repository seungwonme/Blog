import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <p>Welcome to blog.</p>
      <div>
        <Link href="/about">About</Link>
      </div>
      <div>
        <Link href="/blog">Blog</Link>
      </div>
    </div>
  );
}
