import styled from 'styled-components'
import { FiMoon, FiSun } from 'react-icons/fi'

export const NavBar = styled.nav`
    position: fixed;
    top: 0;
    position: -webkit-sticky;
    background-color: ${({ theme }) => theme.color.bodyColor};
    padding: 1.8rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    height: 8rem;
    z-index: 10;
    ${({ theme }) => console.log(theme)}
    transition: all 0.5 ease-in-out;
`

export const StyledFiMoon = styled(FiMoon)`
    cursor: pointer;
`
export const StyledFiSun = styled(FiSun)`
    cursor: pointer;
`
