import { getPost } from '@/api/post';
import { getPostsList } from '@/api/postsList';
import { Htag, LikeCounter, P, PostMeta } from '@/components';
import { notFound } from 'next/navigation';
import type { JSX } from 'react';
import styles from './page.module.css';
import Image from 'next/image';

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
    <article>
      <Htag tag="h1">{post.title}</Htag>
      <div className={styles['post-meta-block']}>
        <PostMeta type="category">Front-end</PostMeta>
        <PostMeta type="date">1 месяц назад</PostMeta>
        <PostMeta type="reading-time">3 минуты</PostMeta>
        <LikeCounter count={4} />
      </div>
      <Image
        src="/PostImage.png"
        alt="Картинка поста"
        width={687}
        height={440}
        priority={true}
      />
      <P size="l">{post.body}</P>
    </article>
  );
}
