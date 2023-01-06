import React from 'react';
import styled from 'styled-components';

const StyledBurger = styled.button`
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.color.primary};
    border-radius: 5px;
    /* transition: all 0.3s linear; */
    transform-origin: 1px;
  }
  ${({ theme }) => theme.mq.lg} {
    display: none;
  }
`;

const BurgerMenu = ({ toggleNavigation }) => (
  <StyledBurger onClick={toggleNavigation}>
    <div />
    <div />
    <div />
  </StyledBurger>
);

export default BurgerMenu;
