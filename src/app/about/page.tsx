import Link from 'next/link';

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page.</p>
      <div>
        <a href="https://github.com/seungwonme" className="text-primary">
          Github
        </a>
      </div>
      <Link href="/">Go home</Link>
    </div>
  );
}
