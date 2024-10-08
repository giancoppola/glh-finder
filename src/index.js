import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StrictMode, useState } from "react";
import { createRoot } from 'react-dom/client';
import { Typography, createTheme, responsiveFontSizes, ThemeProvider, Box } from "@mui/material";
import { LocationSearch } from "./modules/location-search.js";
import { MapView } from "./views/map-view.js";
import { TestRoutingForm } from "./modules/test-routing-form.js";
var theme = createTheme({});
theme = responsiveFontSizes(theme);
var App = function () {
    var _a = useState(true), showMap = _a[0], setShowMap = _a[1];
    var _b = useState([]), selectedPlaces = _b[0], setSelectedPlaces = _b[1];
    return (_jsx(StrictMode, { children: _jsx(ThemeProvider, { theme: theme, children: _jsxs(Box, { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: '100%', height: '100%', gap: '2rem', children: [_jsx(Typography, { variant: "h1", fontWeight: 'bolder', children: "GLH Mapper" }), _jsx(MapView, { showMap: showMap, setShowMap: setShowMap, selectedPlaces: selectedPlaces }), _jsx(LocationSearch, { selectedPlaces: selectedPlaces, setSelectedPlaces: setSelectedPlaces }), _jsx(TestRoutingForm, {})] }) }) }));
};
var root = createRoot(document.getElementById("app"));
root.render(_jsx(App, {}));
