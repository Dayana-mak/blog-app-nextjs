import { Htag, LikeCounter, P, Post, PostCard, PostMeta } from '@/components';
import type { JSX } from 'react';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Как работать с CSS Grid</Htag>
      <Htag tag="h2">Как работать с CSS Grid</Htag>
      <Htag tag="h3">Как работать с CSS Grid</Htag>
      <P size="s">Как работать с CSS Grid</P>
      <P size="m">Как работать с CSS Grid</P>
      <P size="l">Как работать с CSS Grid</P>
      <LikeCounter count={4} />

      <Post />
      
      <PostMeta type="link" href="#">Читать</PostMeta>
      <PostMeta type="category">Категория</PostMeta>
      <PostMeta type="date">Дата</PostMeta>
      <PostMeta type="reading-time">Время чтения</PostMeta>

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
    </>
  );
}
