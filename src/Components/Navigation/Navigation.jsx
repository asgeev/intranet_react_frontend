import styled from 'styled-components';
import { useState } from 'react';
import { FiCloudRain } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { StyledFiMoon, StyledFiSun, NavBar } from './Navigation.styled';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const navigation = [
  'Spis telefonów',
  'EZD',
  'CWU',
  'System kolejowy',
  'Portal pracowniczy',
  'Lista obecności',
  'Adresy innych stron',
];

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
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: 100%;

    ul {
      flex-direction: row;
    }
  }
`;

const MenuItems = styled.ul`
  /* display: flex; */
  list-style: none;
  display: flex;
  flex-direction: row;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.textColor};

  &:active {
    color: red;
  }
`;

const Navigation = ({ setIsDarkTheme, isDarkTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsDark = () => {
    setIsDarkTheme((prev) => !prev);
  };

  const toggleNavigation = () => {
    console.log(isOpen);
    setIsOpen((prev) => !prev);
  };

  return (
    <NavBar>
      <StyledNavLink to="/">
        <FiCloudRain size="3rem" />
      </StyledNavLink>
      <Menu isOpen={isOpen}>
        <MenuItems>
          {/* {navigation.map((element) => (
            <li key={element}>{element}</li>
          ))} */}
          <StyledNavLink to="/page" onClick={toggleNavigation}>
            Page
          </StyledNavLink>
          <StyledNavLink to="/pagesafasf" onClick={toggleNavigation}>
            Colkolwiek
          </StyledNavLink>
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

export default Navigation;
