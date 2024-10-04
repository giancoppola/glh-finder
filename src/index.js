import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import { Typography, createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { MapContainer, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet';
import { UK } from "./map-data.js";
import { CENTRAL_COL, CENTRAL_GLH, NORTH_EAST_COL, NORTH_EAST_GLH, NORTH_THAMES_COL, NORTH_THAMES_GLH, NORTH_WEST_COL, NORTH_WEST_GLH, SOUTH_EAST_COL, SOUTH_EAST_GLH, SOUTH_WEST_COL, SOUTH_WEST_GLH } from "./globals.js";
var theme = createTheme({});
theme = responsiveFontSizes(theme);
var App = function () {
    var mapPoint = [];
    return (_jsx(StrictMode, { children: _jsxs(ThemeProvider, { theme: theme, children: [_jsx(Typography, { children: "Hello World" }), _jsxs(MapContainer, { center: [52.849, -1.395], zoom: 6, children: [_jsx(TileLayer, { url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png", bounds: [[49.289, -6.636], [56.907, 2.817]], minZoom: 6, maxNativeZoom: 18, maxZoom: 100 }), _jsx(Marker, { position: [51.468452, -0.093722], children: _jsxs(Popup, { children: ["Kings College ", _jsx("br", {}), " Hospital"] }) }), UK.features.map(function (feature) { return (
                        /* @ts-ignore */
                        _jsx(GeoJSON, { data: feature, style: function (feature) {
                                switch (feature.properties.GLH) {
                                    case CENTRAL_GLH: return { color: CENTRAL_COL };
                                    case SOUTH_WEST_GLH: return { color: SOUTH_WEST_COL };
                                    case SOUTH_EAST_GLH: return { color: SOUTH_EAST_COL };
                                    case NORTH_THAMES_GLH: return { color: NORTH_THAMES_COL };
                                    case NORTH_EAST_GLH: return { color: NORTH_EAST_COL };
                                    case NORTH_WEST_GLH: return { color: NORTH_WEST_COL };
                                }
                            }, children: _jsxs(Popup, { children: [feature.properties.AREA, " - ", feature.properties.GLH] }) })); })] })] }) }));
};
var root = createRoot(document.getElementById("app"));
root.render(_jsx(App, {}));
