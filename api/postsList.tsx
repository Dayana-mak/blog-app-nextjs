import type { Post } from '@/interfaces/Post.interface';

const POSTS_LIMIT = 10;

export async function getPostsList(): Promise<Post[] | null> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/posts?_limit=${POSTS_LIMIT}`, {
    next: { revalidate: 100 },
  });

  if (!res.ok) {
    return null;
  }
  return res.json();
}
