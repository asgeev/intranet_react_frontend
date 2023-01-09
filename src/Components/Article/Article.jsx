import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 8rem;
`;

const Article = () => {
  const { slug } = useParams();

  return <Wrapper>slug</Wrapper>;
};
export default Article;
