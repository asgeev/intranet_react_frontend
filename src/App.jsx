import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Components/GlobalStyles/GlobalStyles';
import 'normalize.css/normalize.css';
import { darkTheme, lightTheme, baseTheme } from './assets/theme/theme';
import { Page } from './Components/Page/Page';
import { PageNotFound } from './Components/PageNotFound/PageNotFound';
import { Article } from './Components/Article/Article';
import { Layout } from './Components/Layout/Layout';
import { Home } from './Components/Home/Home';

export const App = () => {
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
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Layout
                                setIsDarkTheme={setIsDarkTheme}
                                isDarkTheme={isDarkTheme}
                            />
                        }>
                        <Route index element={<Home />} />
                        <Route path="article/:slug" element={<Article />} />
                        <Route path="page/:slug" element={<Page />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Route>
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
};
