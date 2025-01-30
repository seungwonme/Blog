import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPost } from '@/actions/post';

export default async function Post({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const post = await getPost(id);
  if (!post) {
    return notFound();
  }

  return (
    <div>
      <h1 className="text-primary font-bold">{post.title}</h1>
      <p>Created at {new Date(post.created_at).toLocaleString()}</p>
      <p>Updated at {new Date(post.updated_at).toLocaleString()}</p>
      <p>{post.contents}</p>
      <Link href="/blog">Go to Blog</Link>
    </div>
  );
}
