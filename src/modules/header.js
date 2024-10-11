import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppBar, Container, Toolbar, Typography, MenuItem } from "@mui/material";
export var Header = function () {
    return (_jsx(AppBar, { position: 'static', sx: { marginBottom: '2rem' }, children: _jsx(Container, { maxWidth: 'xl', children: _jsxs(Toolbar, { disableGutters: true, sx: { justifyContent: 'space-between' }, children: [_jsx(Typography, { variant: "h5", fontWeight: 'bold', children: "GLH Mapper" }), _jsx(MenuItem, { component: 'a', href: "https://www.linkedin.com/in/giancoppola/", target: "_blank", children: "Found an issue?" })] }) }) }));
};
