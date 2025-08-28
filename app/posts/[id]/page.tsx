import { getPost } from '@/api/post';
import { getPostsList } from '@/api/postsList';
import { notFound } from 'next/navigation';
import type { JSX } from 'react';

type Params = Promise<{ id: string }>;

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const posts = await getPostsList();

  if (!posts) return [];

  return posts.map((post) => ({ id: post.id.toString() }));
}

export default async function PostPage({ params }: { params: Params }): Promise<JSX.Element> {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    notFound();
  }
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
