import { GlobalStyles } from "./Components/GlobalStyles/GlobalStyles";
import "normalize.css/normalize.css";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, globalTheme } from "./assets/theme/theme";
import Navbar from "./Components/Navbar/Navbar";
import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  console.log(theme);

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");

    localStorage.setItem("current-theme", JSON.stringify(theme));
    // console.log(isLight);
  };

  //Try add theme status to localStorage

  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem("current-theme"));
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <div className="App">
        <GlobalStyles />
        <Navbar />
        <button onClick={toggleTheme}>Przełącz</button>
      </div>
    </ThemeProvider>
  );
}

export default App;
