import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useAxios } from '../../Hooks/useAxios';

// const articles = [
//     {
//         title: 'Lorem ipsum',
//         content: '',
//         createdBy: 'Adam Szymański',
//         slug: 'lorem_ipsum',
//         userAvatarUrl:
//             'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png',
//     },
//     {
//         title: 'Lorem ipsum',
//         content: '',
//         createdBy: 'Adam Szymański',
//         slug: 'lorem_ipsum',
//         userAvatarUrl:
//             'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png',
//     },
//     {
//         title: 'Lorem ipsum',
//         content: '',
//         createdBy: 'Adam Szymański',
//         slug: 'lorem_ipsum',
//         userAvatarUrl:
//             'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png',
//     },
//     {
//         title: 'Lorem ipsum',
//         content: '',
//         createdBy: 'Adam Szymański',
//         slug: 'lorem_ipsum',
//         userAvatarUrl:
//             'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png',
//     },
//     {
//         title: 'Lorem ipsum',
//         content: '',
//         createdBy: 'Adam Szymański',
//         slug: 'lorem_ipsum',
//         userAvatarUrl:
//             'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png',
//     },
//     {
//         title: 'Lorem ipsum',
//         content: '',
//         createdBy: 'Adam Szymański',
//         slug: 'lorem_ipsum',
//         userAvatarUrl:
//             'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png',
//     },
//     {
//         title: 'Lorem ipsum',
//         content: '',
//         createdBy: 'Adam Szymański',
//         slug: 'lorem_ipsum',
//         userAvatarUrl:
//             'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png',
//     },
//     {
//         title: 'Lorem ipsum',
//         content: '',
//         createdBy: 'Adam Szymański',
//         slug: 'lorem_ipsum',
//         userAvatarUrl:
//             'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png',
//     },
//     {
//         title: 'Lorem ipsum',
//         content: '',
//         createdBy: 'Adam Szymański',
//         slug: 'lorem_ipsum',
//         userAvatarUrl:
//             'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png',
//     },
//     {
//         title: 'Lorem ipsum',
//         content: '',
//         createdBy: 'Adam Szymański',
//         slug: 'lorem_ipsum',
//         userAvatarUrl:
//             'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png',
//     },
//     {
//         title: 'Lorem ipsum',
//         content: '',
//         createdBy: 'Adam Szymański',
//         slug: 'lorem_ipsum',
//         userAvatarUrl:
//             'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png',
//     },
//     {
//         title: 'Lorem ipsum',
//         content: '',
//         createdBy: 'Adam Szymański',
//         slug: 'lorem_ipsum',
//         userAvatarUrl:
//             'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png',
//     },
//     {
//         title: 'Lorem ipsum',
//         content: '',
//         createdBy: 'Adam Szymański',
//         slug: 'lorem_ipsum',
//         userAvatarUrl:
//             'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png',
//     },
// ];

const ArticlesWrapper = styled.div`
    background-color: red;
`;

const StyledArticleCard = styled.div`
    background-color: white;
`;

const ArticleCard = ({ article }) => (
    <StyledArticleCard>
        <NavLink to={`article/${article.attributes.slug}`}>
            <h1>{article.attributes.title}</h1>
        </NavLink>
    </StyledArticleCard>
);

export const Articles = () => {
    const [articles, setArticles] = useState([]);
    const query = `api/articles?populate[cover_image][populate][0]=cover_image&fields[0]=title,slug&pagination[page]=1`;
    const { response, loading, error } = useAxios({
        url: query,
    });

    useEffect(() => {
        response ? setArticles(response.data) : [];
    }, [response]);

    return (
        <ArticlesWrapper>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                articles.map((article) => {
                    return <ArticleCard key={article.id} article={article} />;
                })
            )}
            {error ? <h1>Error</h1> : null}
        </ArticlesWrapper>
    );
};
