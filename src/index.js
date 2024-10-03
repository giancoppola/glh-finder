"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var client_1 = require("react-dom/client");
var material_1 = require("@mui/material");
var theme = (0, material_1.createTheme)({});
theme = (0, material_1.responsiveFontSizes)(theme);
var App = function () {
    return ((0, jsx_runtime_1.jsx)(react_1.StrictMode, { children: (0, jsx_runtime_1.jsx)(material_1.ThemeProvider, { theme: theme, children: (0, jsx_runtime_1.jsx)(material_1.Typography, { children: "Hello World" }) }) }));
};
var root = (0, client_1.createRoot)(document.getElementById("app"));
root.render((0, jsx_runtime_1.jsx)(App, {}));
