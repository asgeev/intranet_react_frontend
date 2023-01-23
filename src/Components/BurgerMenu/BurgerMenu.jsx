import styled from 'styled-components';

const StyledBurger = styled.div`
    display: flex;
    background: transparent;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    &:focus {
        outline: none;
    }

    ${({ theme }) => theme.mq.lg} {
        display: none;
    }
`;

export const BurgerMenu = ({ toggleNavigation, children }) => (
    <StyledBurger onClick={toggleNavigation}>{children}</StyledBurger>
);
