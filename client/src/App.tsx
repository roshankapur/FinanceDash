import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { CssBaseline } from "@mui/material";

function  App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  <ThemeProvider theme={theme}>
    <CssBaseline />
    hi
  </ThemeProvider>
  return <div className="App"></div>;
}

export default App;