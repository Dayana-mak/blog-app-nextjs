import type { JSX } from 'react/jsx-dev-runtime';
import type { PostsListProps } from './PostsList.props';
import styles from './PostsList.module.css';
import cn from 'classnames';
import { PostCard } from '../PostCard/PostCard';

export const PostsList = ({ className }: PostsListProps): JSX.Element => {
  return (
    <div className={cn(styles.wrapper, className)}>
      <PostCard
              category="Front-end"
              date="1 месяц назад"
              likesCount={4}
              readingTime="3 минуты"
              link="#"
              title="Как работать с CSS Grid"
              description="Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы.."
              imageLink="/PostImage.png"
            />
            <PostCard
              category="Front-end"
              date="1 месяц назад"
              likesCount={4}
              readingTime="3 минуты"
              link="#"
              title="Как работать с CSS Grid"
              description="Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы.."
              imageLink="/PostImage.png"
            />
            <PostCard
              category="Front-end"
              date="1 месяц назад"
              likesCount={4}
              readingTime="3 минуты"
              link="#"
              title="Как работать с CSS Grid"
              description="Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы.."
              imageLink="/PostImage.png"
            />
    </div>
  );
};
