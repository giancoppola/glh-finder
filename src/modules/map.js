import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet';
import { CENTRAL_COL, CENTRAL_GLH, EAST_COL, EAST_GLH, NORTH_EAST_COL, NORTH_EAST_GLH, NORTH_THAMES_COL, NORTH_THAMES_GLH, NORTH_WEST_COL, NORTH_WEST_GLH, SOUTH_EAST_COL, SOUTH_EAST_GLH, SOUTH_WEST_COL, SOUTH_WEST_GLH } from "../globals.js";
export var Map = function (props) {
    var _a = useState(0.8), centralOpacity = _a[0], setCentralOpacity = _a[1];
    var _b = useState(0.8), southWestOpacity = _b[0], setSouthWestOpacity = _b[1];
    var _c = useState(0.8), southEastOpacity = _c[0], setSouthEastOpacity = _c[1];
    var _d = useState(0.8), northThamesOpacity = _d[0], setNorthThamesOpacity = _d[1];
    var _e = useState(0.8), northEastOpacity = _e[0], setNorthEastOpacity = _e[1];
    var _f = useState(0.8), northWestOpacity = _f[0], setNorthWestOpacity = _f[1];
    var _g = useState(0.8), eastOpacity = _g[0], setEastOpacity = _g[1];
    useEffect(function () {
        if (props.selectedGLH === "") {
            setCentralOpacity(0.8);
            setSouthWestOpacity(0.8);
            setSouthEastOpacity(0.8);
            setNorthThamesOpacity(0.8);
            setNorthEastOpacity(0.8);
            setNorthWestOpacity(0.8);
            setEastOpacity(0.8);
        }
        else if (props.selectedGLH === "Central and South GLH") {
            setCentralOpacity(0.8);
            setSouthWestOpacity(0.2);
            setSouthEastOpacity(0.2);
            setNorthThamesOpacity(0.2);
            setNorthEastOpacity(0.2);
            setNorthWestOpacity(0.2);
            setEastOpacity(0.2);
        }
        else if (props.selectedGLH === "South West GLH") {
            setCentralOpacity(0.2);
            setSouthWestOpacity(0.8);
            setSouthEastOpacity(0.2);
            setNorthThamesOpacity(0.2);
            setNorthEastOpacity(0.2);
            setNorthWestOpacity(0.2);
            setEastOpacity(0.2);
        }
        else if (props.selectedGLH === "South East GLH") {
            setCentralOpacity(0.2);
            setSouthWestOpacity(0.2);
            setSouthEastOpacity(0.8);
            setNorthThamesOpacity(0.2);
            setNorthEastOpacity(0.2);
            setNorthWestOpacity(0.2);
            setEastOpacity(0.2);
        }
        else if (props.selectedGLH === "North Thames GLH") {
            setCentralOpacity(0.2);
            setSouthWestOpacity(0.2);
            setSouthEastOpacity(0.2);
            setNorthThamesOpacity(0.8);
            setNorthEastOpacity(0.2);
            setNorthWestOpacity(0.2);
            setEastOpacity(0.2);
        }
        else if ((props.selectedGLH === "North East and Yorkshire GLH")) {
            setCentralOpacity(0.2);
            setSouthWestOpacity(0.2);
            setSouthEastOpacity(0.2);
            setNorthThamesOpacity(0.2);
            setNorthEastOpacity(0.8);
            setNorthWestOpacity(0.2);
            setEastOpacity(0.2);
        }
        else if (props.selectedGLH === "North West GLH") {
            setCentralOpacity(0.2);
            setSouthWestOpacity(0.2);
            setSouthEastOpacity(0.2);
            setNorthThamesOpacity(0.2);
            setNorthEastOpacity(0.2);
            setNorthWestOpacity(0.8);
            setEastOpacity(0.2);
        }
        else if (props.selectedGLH === "East GLH") {
            setCentralOpacity(0.2);
            setSouthWestOpacity(0.2);
            setSouthEastOpacity(0.2);
            setNorthThamesOpacity(0.2);
            setNorthEastOpacity(0.2);
            setNorthWestOpacity(0.2);
            setEastOpacity(0.8);
        }
    }, [props.selectedGLH]);
    return (_jsxs(MapContainer, { center: [52.849, -1.395], zoom: 6, children: [_jsx(TileLayer, { url: "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}", bounds: [[49.289, -6.636], [56.907, 2.817]], minZoom: 6, maxNativeZoom: 18, maxZoom: 100 }), props.selectedPlaces.map(function (place) {
                return _jsx(Marker, { position: [place.lat, place.lng], children: _jsx(Popup, { children: place.name }) }, "map-marker-".concat(place.name));
            }), props.mapData.features.map(function (feature) { return (
            /* @ts-ignore */
            _jsx(GeoJSON, { data: feature, style: function (feature) {
                    switch (feature.properties.GLH) {
                        case CENTRAL_GLH: return { color: CENTRAL_COL, fillOpacity: centralOpacity, opacity: centralOpacity };
                        case SOUTH_WEST_GLH: return { color: SOUTH_WEST_COL, fillOpacity: southWestOpacity, opacity: southWestOpacity };
                        case SOUTH_EAST_GLH: return { color: SOUTH_EAST_COL, fillOpacity: southEastOpacity, opacity: southEastOpacity };
                        case NORTH_THAMES_GLH: return { color: NORTH_THAMES_COL, fillOpacity: northThamesOpacity, opacity: northThamesOpacity };
                        case NORTH_EAST_GLH: return { color: NORTH_EAST_COL, fillOpacity: northEastOpacity, opacity: northEastOpacity };
                        case NORTH_WEST_GLH: return { color: NORTH_WEST_COL, fillOpacity: northWestOpacity, opacity: northWestOpacity };
                        case EAST_GLH: return { color: EAST_COL, fillOpacity: eastOpacity, opacity: eastOpacity };
                    }
                }, children: _jsxs(Popup, { children: [feature.properties.AREA, " - ", feature.properties.GLH] }) }, "map-data-".concat(feature.properties.AREA))); })] }));
};
