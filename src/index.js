import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StrictMode, useEffect } from "react";
import { createRoot } from 'react-dom/client';
import { Typography, createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { transformExtent, fromLonLat } from 'ol/proj.js';
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
var theme = createTheme({});
theme = responsiveFontSizes(theme);
var RenderMap = function () {
    var ukExtent = transformExtent([49.34, -6.57, 56.61, 2.83], 'EPSG:4326', 'EPSG:3857');
    var map = new Map({
        target: 'map',
        layers: [
            new TileLayer({
                source: new OSM(),
            }),
        ],
        view: new View({
            center: fromLonLat([25.4833, 42.7250]),
            zoom: 6,
            maxZoom: 15,
            minZoom: 7,
            // extent: extent.buffer(ukExtent, 100000),
            // showFullExtent: true,
        }),
    });
};
var App = function () {
    useEffect(function () { RenderMap(); }, []);
    return (_jsx(StrictMode, { children: _jsxs(ThemeProvider, { theme: theme, children: [_jsx(Typography, { children: "Hello World" }), _jsx("div", { id: "map" })] }) }));
};
var root = createRoot(document.getElementById("app"));
root.render(_jsx(App, {}));
