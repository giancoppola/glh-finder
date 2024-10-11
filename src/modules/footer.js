import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppBar, Container, Toolbar, MenuItem } from "@mui/material";
export var Footer = function () {
    return (_jsx(AppBar, { position: 'fixed', sx: { top: 'auto', bottom: 0 }, component: 'footer', children: _jsx(Container, { maxWidth: 'xl', children: _jsxs(Toolbar, { disableGutters: true, children: [_jsx(MenuItem, { component: 'a', href: 'https://www.linkedin.com/in/giancoppola/', target: "_blank", children: "Developed by @giancoppola" }), _jsx(MenuItem, { component: 'a', href: "mailto:melissa_kow1@hotmail.com", children: "Found an issue? Contact us" })] }) }) }));
};
