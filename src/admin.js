import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { Box, createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { AdminLoginForm } from "./modules/admin-login-form.js";
var theme = createTheme({});
theme = responsiveFontSizes(theme);
var AdminPage = function () {
    var _a = useState(false), isVerified = _a[0], setIsVerified = _a[1];
    var _b = useState(""), username = _b[0], setUsername = _b[1];
    var _c = useState(""), password = _c[0], setPassword = _c[1];
    var FormValidation = function () {
        console.log('form validation happens here');
    };
    return (_jsx(StrictMode, { children: _jsx(ThemeProvider, { theme: theme, children: _jsx(Box, { component: "section", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: '100%', height: '100%', gap: '2rem', maxWidth: '1200px', margin: 'auto', children: _jsx(AdminLoginForm, { setIsVerified: setIsVerified }) }) }) }));
};
var root = createRoot(document.getElementById("app"));
root.render(_jsx(AdminPage, {}));
