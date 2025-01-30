'use client';

import Link from 'next/link';
import { getPostMetaDataList } from '@/actions/post';
import { PostMetaData } from '@/types/post';
import { useState, useEffect } from 'react';

export default function Blog() {
  const [postMetaDataList, setPostMetaDataList] = useState<
    PostMetaData[] | null
  >([]);

  useEffect(() => {
    const fetchPost = async () => {
      const postMetaDataList = await getPostMetaDataList();
      setPostMetaDataList(postMetaDataList);
    };
    fetchPost();
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      <p>This is the blog page.</p>
      <Link href="/">Go home</Link>
      <ul>
        {postMetaDataList?.map((post) => (
          <li key={post.id}>
            <Link
              href={`/blog/${post.id}`}
              className="text-primary underline font-bold"
            >
              {post.title === '' ? 'Untitled' : post.title}
            </Link>{' '}
            {new Date(post.created_at).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
