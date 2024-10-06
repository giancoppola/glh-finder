import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StrictMode, useState } from "react";
import { createRoot } from 'react-dom/client';
import { Typography, createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { MapContainer, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet';
import { UK } from "./map-data.js";
import { CENTRAL_COL, CENTRAL_GLH, EAST_COL, EAST_GLH, NORTH_EAST_COL, NORTH_EAST_GLH, NORTH_THAMES_COL, NORTH_THAMES_GLH, NORTH_WEST_COL, NORTH_WEST_GLH, SOUTH_EAST_COL, SOUTH_EAST_GLH, SOUTH_WEST_COL, SOUTH_WEST_GLH } from "./globals.js";
import { LocationSearch } from "./modules/location-search.js";
var theme = createTheme({});
theme = responsiveFontSizes(theme);
var App = function () {
    var _a = useState([52.849, -1.395]), markerPos = _a[0], setMarkerPos = _a[1];
    return (_jsx(StrictMode, { children: _jsxs(ThemeProvider, { theme: theme, children: [_jsx(Typography, { variant: "h1", children: "GLH Mapper" }), _jsxs(MapContainer, { center: [52.849, -1.395], zoom: 6, children: [_jsx(TileLayer, { url: "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}", bounds: [[49.289, -6.636], [56.907, 2.817]], minZoom: 6, maxNativeZoom: 18, maxZoom: 100 }), _jsx(Marker, { position: markerPos, children: _jsxs(Popup, { children: ["Kings College ", _jsx("br", {}), " Hospital"] }) }), UK.features.map(function (feature) { return (
                        /* @ts-ignore */
                        _jsx(GeoJSON, { data: feature, style: function (feature) {
                                switch (feature.properties.GLH) {
                                    case CENTRAL_GLH: return { color: CENTRAL_COL, fillOpacity: 1 };
                                    case SOUTH_WEST_GLH: return { color: SOUTH_WEST_COL, fillOpacity: 1 };
                                    case SOUTH_EAST_GLH: return { color: SOUTH_EAST_COL, fillOpacity: 1 };
                                    case NORTH_THAMES_GLH: return { color: NORTH_THAMES_COL, fillOpacity: 1 };
                                    case NORTH_EAST_GLH: return { color: NORTH_EAST_COL, fillOpacity: 1 };
                                    case NORTH_WEST_GLH: return { color: NORTH_WEST_COL, fillOpacity: 1 };
                                    case EAST_GLH: return { color: EAST_COL, fillOpacity: 1 };
                                }
                            }, children: _jsxs(Popup, { children: [feature.properties.AREA, " - ", feature.properties.GLH] }) })); })] }), _jsx(LocationSearch, {})] }) }));
};
var root = createRoot(document.getElementById("app"));
root.render(_jsx(App, {}));
