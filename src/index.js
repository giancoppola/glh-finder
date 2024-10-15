import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { StrictMode, useEffect, useState } from "react";
import { createRoot } from 'react-dom/client';
import { createTheme, responsiveFontSizes, ThemeProvider, Box } from "@mui/material";
import { booleanPointInPolygon } from "@turf/boolean-point-in-polygon";
import { LocationSearch } from "./modules/location-search.js";
import { MapView } from "./views/map-view.js";
import { TestRoutingForm } from "./modules/test-routing-form.js";
import { Header } from "./modules/header.js";
var theme = createTheme({});
theme = responsiveFontSizes(theme);
var App = function () {
    var _a = useState(true), showMap = _a[0], setShowMap = _a[1];
    var _b = useState([]), selectedPlaces = _b[0], setSelectedPlaces = _b[1];
    var _c = useState(""), placeGLH = _c[0], setPlaceGLH = _c[1];
    var _d = useState(null), mapData = _d[0], setMapData = _d[1];
    useEffect(function () {
        if (selectedPlaces.length > 0 && mapData) {
            mapData.features.forEach(function (feature) {
                // @ts-ignore - doesn't recognise feature as a GeoJSON Feature Polygon even though it is
                if (booleanPointInPolygon([selectedPlaces[0].lng, selectedPlaces[0].lat], feature)) {
                    setPlaceGLH(feature.properties.GLH);
                }
            });
        }
        else {
            setPlaceGLH("");
        }
    }, [selectedPlaces]);
    useEffect(function () {
        try {
            fetch('/data/maps/glh-map-data-lad.json')
                .then(function (res) { return res.json(); })
                .then(function (data) { setMapData(data); console.log(data); });
        }
        catch (e) {
            console.log(e);
        }
    }, []);
    return (_jsx(StrictMode, { children: _jsxs(ThemeProvider, { theme: theme, children: [_jsx(Header, {}), _jsxs(Box, { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: '100%', height: '100%', gap: '2rem', maxWidth: '1200px', margin: 'auto', children: [mapData &&
                            _jsxs(_Fragment, { children: [_jsx(MapView, { mapData: mapData, showMap: showMap, setShowMap: setShowMap, selectedPlaces: selectedPlaces, placeGLH: placeGLH }), _jsx(LocationSearch, { selectedPlaces: selectedPlaces, setSelectedPlaces: setSelectedPlaces })] }), selectedPlaces.length > 0 && _jsx(TestRoutingForm, { placeGLH: placeGLH })] })] }) }));
};
var root = createRoot(document.getElementById("app"));
root.render(_jsx(App, {}));
