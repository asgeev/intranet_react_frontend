import { useState, useEffect } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Components/GlobalStyles/GlobalStyles';
import 'normalize.css/normalize.css';
import { darkTheme, lightTheme, baseTheme } from './assets/theme/theme';
import { Navigation } from './Components/Navigation/Navigation';
import { Articles } from './Components/Articles/Articles';
import { Page } from './Components/Page/Page';
import { PageNotFound } from './Components/PageNotFound/PageNotFound';
import { Article } from './Components/Article/Article';

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
                }>
                <GlobalStyles />
                <Navigation
                    setIsDarkTheme={setIsDarkTheme}
                    isDarkTheme={isDarkTheme}
                />
                <Routes>
                    <Route path="/" element={<Articles />} />
                    <Route path="article/:slug" element={<Article />} />
                    <Route path="page/:slug" element={<Page />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
                <Outlet />
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
