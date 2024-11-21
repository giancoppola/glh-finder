import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { Box, createTheme, responsiveFontSizes, ThemeProvider, Typography } from "@mui/material";
import { AdminLoginForm } from "./modules/admin-login-form.js";
var theme = createTheme({});
theme = responsiveFontSizes(theme);
var AdminPage = function () {
    var _a = useState(false), isVerified = _a[0], setIsVerified = _a[1];
    return (_jsx(StrictMode, { children: _jsx(ThemeProvider, { theme: theme, children: _jsxs(Box, { component: "section", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: '100%', height: '100%', gap: '2rem', maxWidth: '1200px', margin: 'auto', children: [!isVerified &&
                        _jsx(AdminLoginForm, { setIsVerified: setIsVerified }), isVerified &&
                        _jsx(Typography, { children: "You are logged in!" })] }) }) }));
};
var root = createRoot(document.getElementById("app"));
root.render(_jsx(AdminPage, {}));
