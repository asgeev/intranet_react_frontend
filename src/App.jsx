import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Components/GlobalStyles/GlobalStyles';
import 'normalize.css/normalize.css';
import { darkTheme, lightTheme, baseTheme } from './assets/theme/theme';
import Navigation from './Components/Navigation/Navigation';
import Articles from './Components/Articles/Articles';
import Page from './Components/Page/Page';
import PageNotFound from './Components/PageNotFound/PageNotFound';

const App = () => {
  const localStorageTheme = JSON.parse(localStorage.getItem('isDarkTheme'));

  const [isDarkTheme, setIsDarkTheme] = useState(localStorageTheme);

  useEffect(() => {
    localStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  return (
    <BrowserRouter>
      <ThemeProvider
        theme={
          isDarkTheme
            ? { ...darkTheme, ...baseTheme }
            : { ...lightTheme, ...baseTheme }
        }
      >
        <GlobalStyles />
        <Navigation setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />

        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="page/:id" element={<Page />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
