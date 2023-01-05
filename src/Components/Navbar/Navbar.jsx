import styled from 'styled-components';

const NavBar = styled.div`
  position: sticky;
  padding: 2rem;

  ul {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
    justify-content: center;
  }

  li {
    font-weight: 500;
    list-style: none;
    font-size: 1.4rem;
  }
`;

function Navbar({ setIsDarkTheme }) {
  return (
    <NavBar>
      <ul>
        <li> Spis telefonów </li>
        <li> EZD </li>
        <li>CWU</li>
        <li>System kolejowy</li>
        <li>Portal pracowniczy</li>
        <li>Lista obecności</li>
        <li>Adresy innych stron</li>
        <li>Prasówka</li>
        <li>Instrukcja EZD</li>
        <li>Strategia NFZ</li>
        <li>Raporty</li>
        <li>Procedury</li>
        <li>Prosty język</li>
        <li>Struktura organizacyjna</li>
        <button type="button" onClick={() => setIsDarkTheme((prev) => !prev)}>
          Change theme
        </button>
      </ul>
    </NavBar>
  );
}

export default Navbar;
