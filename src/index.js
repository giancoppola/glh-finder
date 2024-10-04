import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import { Typography, createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { MapContainer, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet';
import { UK } from "./map-data.js";
var theme = createTheme({});
theme = responsiveFontSizes(theme);
var App = function () {
    var mapPoint = [];
    return (_jsx(StrictMode, { children: _jsxs(ThemeProvider, { theme: theme, children: [_jsx(Typography, { children: "Hello World" }), _jsxs(MapContainer, { center: [52.849, -1.395], zoom: 6, children: [_jsx(TileLayer, { url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png", bounds: [[49.289, -6.636], [56.907, 2.817]], minZoom: 6, maxNativeZoom: 18, maxZoom: 100 }), _jsx(Marker, { position: [51.468452, -0.093722], children: _jsxs(Popup, { children: ["Kings College ", _jsx("br", {}), " Hospital"] }) }), _jsx(GeoJSON, { data: UK, children: _jsx(Popup, { children: "South West GLH/GMSA" }) })] })] }) }));
};
var root = createRoot(document.getElementById("app"));
root.render(_jsx(App, {}));
