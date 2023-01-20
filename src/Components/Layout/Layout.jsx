import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { Footer } from '../Footer/Footer';

export const Layout = ({ setIsDarkTheme, isDarkTheme }) => {
    return (
        <>
            <Navigation
                setIsDarkTheme={setIsDarkTheme}
                isDarkTheme={isDarkTheme}
            />
            <Outlet />
            <Footer />
        </>
    );
};
