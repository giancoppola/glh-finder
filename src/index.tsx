import { StrictMode } from "react";
import { createRoot } from 'react-dom/client'
import { Typography, Theme, createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";

let theme: Theme = createTheme({});
theme = responsiveFontSizes(theme);

const App = () => {
    return (
        <StrictMode>
            <ThemeProvider theme={theme}>
                <Typography>Hello World</Typography>
            </ThemeProvider>
        </StrictMode>
    )
}

const root = createRoot(document.getElementById("app")!)
root.render(<App/>)