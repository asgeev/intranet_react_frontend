import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: calc(100vh - 8rem);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PageNotFound = () => (
  <Wrapper>
    <div>
      <h1>404</h1>
      <h1>Page not found</h1>
    </div>
  </Wrapper>
);

export default PageNotFound;
