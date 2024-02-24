import "./App.css";

import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

// Components
import Header from "./Components/Header";

// Pages
import LandingPage from "./Pages/LandingPage";

// MUI
import { theme } from "./MUI/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
