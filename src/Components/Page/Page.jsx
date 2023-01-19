import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const PageWrapper = styled.div`
    width: 100%;
    top: 8rem;
    height: 100vh;
    background-color: salmon;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Page = () => {
    const [content, setContent] = useState([]);
    const { slug } = useParams();

    useEffect(() => {
        fetch(`http://localhost:1337/api/pages?filters[slug][$eq]=${slug}`)
            .then((response) => response.json())
            .then((data) => setContent({ data }));
    }, []);

    return (
        <PageWrapper>
            <h1>{console.log(content)}</h1>
        </PageWrapper>
    );
};
