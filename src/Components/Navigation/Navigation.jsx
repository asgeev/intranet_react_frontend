import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { FiCloudRain } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { StyledFiMoon, StyledFiSun, NavBar } from './Navigation.styled';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

const RightSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`;

const Menu = styled.div`
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: absolute;
    /* background-color: ${({ theme }) => theme.color.bodyColor};
   */
    background-color: lightblue;
    top: 8rem;
    left: 0;
    width: 100%;
    height: calc(100vh - 8rem);
    align-items: center;
    justify-content: center;
    height: calc(100vh - 8rem);
    width: 100%;

    ${({ theme }) => theme.mq.lg} {
        position: static;
        display: flex;
        background-color: transparent;
        /* align-items: center; */
        /* justify-content: center; */
        height: 100%;
    }
`;

const MenuItems = styled.ul`
    /* display: flex; */
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    flex-direction: column;

    ${({ theme }) => theme.mq.lg} {
        flex-direction: row;
    }
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.color.textColor};

    &.active {
        color: red;
    }
`;

export const Navigation = ({ setIsDarkTheme, isDarkTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [navigation, setNavigation] = useState([]);

    const toggleIsDark = () => {
        setIsDarkTheme((prev) => !prev);
    };

    const toggleNavigation = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        fetch(
            'http://localhost:1337/api/navigation/render/main-navigation?type=TREE'
        )
            .then((response) => response.json())
            .then((data) => setNavigation(data));
    }, []);

    return (
        <NavBar>
            <StyledNavLink to="/">
                <FiCloudRain size="3rem" />
            </StyledNavLink>
            <Menu isOpen={isOpen}>
                <MenuItems>
                    {navigation.map(({ id, title, slug }) => (
                        <StyledNavLink
                            key={id}
                            to={`page/${slug}`}
                            onClick={toggleNavigation}>
                            {title}
                        </StyledNavLink>
                    ))}
                </MenuItems>
            </Menu>
            <RightSection>
                {isDarkTheme ? (
                    <StyledFiSun size="3rem" onClick={toggleIsDark} />
                ) : (
                    <StyledFiMoon size="3rem" onClick={toggleIsDark} />
                )}
                <BurgerMenu toggleNavigation={toggleNavigation} />
            </RightSection>
        </NavBar>
    );
};
