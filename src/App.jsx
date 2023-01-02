import { GlobalStyles } from "./Components/GlobalStyles/GlobalStyles";
import "normalize.css/normalize.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/theme/theme";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />
      </ThemeProvider>
    </div>
  );
}

export default App;
