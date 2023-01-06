import { FiCloudRain } from 'react-icons/fi';
import { StyledFiMoon, StyledFiSun, NavBar } from './Navigation.styled';

// const navigation = [
//   'Spis telefonów',
//   'EZD',
//   'CWU',
//   'System kolejowy',
//   'Portal pracowniczy',
//   'Lista obecności',
//   'Adresy innych stron',
// ];

const Navigation = ({ setIsDarkTheme, isDarkTheme }) => {
  const ToggleIsDark = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <NavBar>
      {/* <ul>
      {navigation.map((element) => (
        <li key={element}>{element}</li>
      ))}
    </ul> */}
      <FiCloudRain size="3rem" />
      {isDarkTheme ? (
        <StyledFiSun size="3rem" onClick={ToggleIsDark} />
      ) : (
        <StyledFiMoon size="3rem" onClick={ToggleIsDark} />
      )}
    </NavBar>
  );
};

export default Navigation;
