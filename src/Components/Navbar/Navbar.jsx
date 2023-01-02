import styled from "styled-components";

const NavBar = styled.div`
  position: sticky;
  background-color: whitesmoke;
  top: 0;
`;

const Navbar = () => {
  return (
    <NavBar>
      <ul>
        <li>Spis telefonów</li>
        <li>EZD</li>
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
        <li>Struktura organizayjna</li>
      </ul>
    </NavBar>
  );
};

export default Navbar;
