import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StrictMode, useEffect, useState } from "react";
import { createRoot } from 'react-dom/client';
import { Typography, createTheme, responsiveFontSizes, ThemeProvider, Box } from "@mui/material";
import { geoContains } from "d3-geo";
import { LocationSearch } from "./modules/location-search.js";
import { MapView } from "./views/map-view.js";
import { TestRoutingForm } from "./modules/test-routing-form.js";
import { UK } from "./map-data.js";
var theme = createTheme({});
theme = responsiveFontSizes(theme);
var App = function () {
    var _a = useState(true), showMap = _a[0], setShowMap = _a[1];
    var _b = useState([]), selectedPlaces = _b[0], setSelectedPlaces = _b[1];
    var _c = useState(""), placeGLH = _c[0], setPlaceGLH = _c[1];
    useEffect(function () {
        if (selectedPlaces.length > 0) {
            UK.features.forEach(function (feature) {
                // console.log(geoContains(feature as GeoJSON.Feature, [selectedPlaces[0].lng, selectedPlaces[0].lat]))
                if (!geoContains(feature, [selectedPlaces[0].lng, selectedPlaces[0].lat])) {
                    setPlaceGLH(feature.properties.GLH);
                }
            });
            // for(const feature of UK.features) {
            //     // @ts-ignore
            //     // if(geoContains(feature, [selectedPlaces[0].lng, selectedPlaces[0].lat])) {
            //     //     setPlaceGLH(feature.properties.GLH as GLH_NAME);
            //     //     console.log(feature.properties.GLH);
            //     // }
            //     // @ts-ignore
            //     console.log(geoContains(feature, [selectedPlaces[0].lng, selectedPlaces[0].lat]))
            // }
        }
        else {
            setPlaceGLH("");
        }
    }, [selectedPlaces]);
    return (_jsx(StrictMode, { children: _jsx(ThemeProvider, { theme: theme, children: _jsxs(Box, { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: '100%', height: '100%', gap: '2rem', maxWidth: '1200px', margin: 'auto', children: [_jsx(Typography, { variant: "h1", fontWeight: 'bolder', children: "GLH Mapper" }), _jsx(MapView, { showMap: showMap, setShowMap: setShowMap, selectedPlaces: selectedPlaces, placeGLH: placeGLH }), _jsx(LocationSearch, { selectedPlaces: selectedPlaces, setSelectedPlaces: setSelectedPlaces }), selectedPlaces.length > 0 && _jsx(TestRoutingForm, { placeGLH: placeGLH })] }) }) }));
};
var root = createRoot(document.getElementById("app"));
root.render(_jsx(App, {}));
