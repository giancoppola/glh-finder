import {Dispatch, StrictMode, useState} from "react";
import {createRoot} from "react-dom/client";
import {
    Box,
    Button,
    createTheme,
    responsiveFontSizes,
    TextField,
    Theme,
    ThemeProvider,
    Typography
} from "@mui/material";
import {AdminLoginForm} from "./modules/admin-login-form.js";

let theme: Theme = createTheme({});
theme = responsiveFontSizes(theme);

const AdminPage = () => {
    const [isVerified, setIsVerified]: [boolean, Dispatch<boolean>] = useState(false);
    return (
        <StrictMode>
            <ThemeProvider theme={theme}>
                <Box component="section" display="flex" flexDirection="column" justifyContent="center"
                    alignItems="center" width='100%' height='100%' gap='2rem' maxWidth='1200px' margin='auto'>
                    { !isVerified &&
                        <AdminLoginForm setIsVerified={setIsVerified}/>
                    }
                    { isVerified &&
                        <Typography>You are logged in!</Typography>
                    }
                </Box>
            </ThemeProvider>
        </StrictMode>
)
}

const root = createRoot(document.getElementById("app")!);
root.render(<AdminPage/>);