import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const articles = [
  {
    title: 'Lorem ipsum',
    content: '',
    createdBy: 'Adam Szymański',
    slug: 'lorem_ipsum',
    userAvatarUrl:
      'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png',
  },
];

const ArticlesWrapper = styled.div`
  margin-top: 8rem;
`;

const StyledArticleCard = styled.div`
  background-color: red;
`;

const ArticleCard = ({ article }) => (
  <StyledArticleCard>
    <NavLink to={`article/${article.slug}`}>
      <h1>{article.title}</h1>
    </NavLink>
    <p>{article.content}</p>
    <p>{article.createdBy}</p>
  </StyledArticleCard>
);

const Articles = () => (
  <ArticlesWrapper>
    {articles.map((article) => {
      return <ArticleCard article={article} />;
    })}
  </ArticlesWrapper>
);

export default Articles;
