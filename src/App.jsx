import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Components/GlobalStyles/GlobalStyles';
import 'normalize.css/normalize.css';
import { darkTheme, lightTheme } from './assets/theme/theme';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const localStorageTheme = JSON.parse(localStorage.getItem('isDarkTheme'));

  const [isDarkTheme, setIsDarkTheme] = useState(localStorageTheme);

  useEffect(() => {
    localStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Navbar setIsDarkTheme={setIsDarkTheme} />
    </ThemeProvider>
  );
}

export default App;
