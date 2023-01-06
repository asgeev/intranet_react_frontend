import styled from 'styled-components';
import { FiCloudRain, FiMoon, FiSun } from 'react-icons/fi';

export const NavBar = styled.nav`
  position: sticky;
  padding: 1.8rem;
  width: 100%;
  display: flex;
  justify-content: space-between;

  img {
    width: 34px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    li {
      font-weight: 500;
      list-style: none;
      font-size: 1.4rem;
    }
  }
`;

export const StyledFiMoon = styled(FiMoon)`
  cursor: pointer;
`;
export const StyledFiSun = styled(FiSun)`
  cursor: pointer;
`;
