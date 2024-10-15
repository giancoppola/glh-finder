import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Map } from "../modules/map.js";
import { MapLegend } from "../modules/map-legend.js";
export var MapView = function (props) {
    var _a = useState(""), selectedGLH = _a[0], setSelectedGLH = _a[1];
    useEffect(function () {
        setSelectedGLH(props.placeGLH);
    }, [props.placeGLH]);
    return (_jsxs(Box, { display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', children: [_jsx(MapLegend, { selectedGLH: selectedGLH, setSelectedGLH: setSelectedGLH }), _jsx(Map, { mapData: props.mapData, selectedGLH: selectedGLH, selectedPlaces: props.selectedPlaces })] }));
};
