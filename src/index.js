"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var client_1 = require("react-dom/client");
var material_1 = require("@mui/material");
var leaflet = __importStar(require("leaflet"));
var theme = (0, material_1.createTheme)({});
theme = (0, material_1.responsiveFontSizes)(theme);
var App = function () {
    (0, react_1.useEffect)(function () {
        var map = leaflet.map('map').setView([52.849, -1.395], 6);
        leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            bounds: [
                [49.289, -6.636],
                [56.907, 2.817]
            ],
            minZoom: 6,
            maxNativeZoom: 18,
            maxZoom: 100
        }).addTo(map);
        leaflet.marker([51.468452, -0.093722]).addTo(map)
            .bindPopup('Kings College <br/> Hospital')
            .openPopup();
    }, []);
    return ((0, jsx_runtime_1.jsx)(react_1.StrictMode, { children: (0, jsx_runtime_1.jsxs)(material_1.ThemeProvider, { theme: theme, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { children: "Hello World" }), (0, jsx_runtime_1.jsx)("div", { className: "map", id: "map" })] }) }));
};
var root = (0, client_1.createRoot)(document.getElementById("app"));
root.render((0, jsx_runtime_1.jsx)(App, {}));
