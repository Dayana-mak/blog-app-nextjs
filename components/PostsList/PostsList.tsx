import type { JSX } from 'react/jsx-dev-runtime';
import type { PostsListProps } from './PostsList.props';
import styles from './PostsList.module.css';
import cn from 'classnames';
import { PostCard } from '../PostCard/PostCard';
import { getPostsList } from '@/api/postsList';

export async function PostsList({ className }: PostsListProps): Promise<JSX.Element> {
  const posts = await getPostsList();

  if (!posts) {
    return <div>Ошибка загрузки постов</div>;
  }

  return (
    <div className={cn(styles.wrapper, className)}>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          category="Front-end"
          date="1 месяц назад"
          likesCount={4}
          readingTime="3 минуты"
          link="#"
          title={post.title}
          description={post.body}
          imageLink="/PostImage.png"
        />
      ))}
    </div>
  );
}
