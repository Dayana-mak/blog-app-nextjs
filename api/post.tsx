import type { Post } from '@/interfaces/Post.interface';

export async function getPost(id: string): Promise<Post | null> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 100 },
  });

  if (!res.ok) {
    return null;
  }
  return res.json();
}
