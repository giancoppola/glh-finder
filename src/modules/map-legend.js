import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { List, ListItemIcon, ListItemText, ListItemButton, Accordion, AccordionSummary, Typography, AccordionDetails } from "@mui/material";
import { ArrowDropDown, Circle } from "@mui/icons-material";
import { useWindowSize } from '@uidotdev/usehooks';
import { GLH_ARR } from "../globals.js";
export var MapLegend = function (props) {
    var size = useWindowSize();
    var UpdateSelectedGLH = function (name) {
        if (name === props.selectedGLH) {
            props.setSelectedGLH("");
        }
        else {
            props.setSelectedGLH(name);
        }
    };
    return (_jsxs(_Fragment, { children: [size.width < 900 &&
                _jsxs(Accordion, { sx: { width: '100%' }, children: [_jsx(AccordionSummary, { expandIcon: _jsx(ArrowDropDown, {}), children: _jsx(Typography, { children: "Map Legend" }) }), _jsx(AccordionDetails, { children: _jsx(List, { className: "map-view__legend", children: GLH_ARR.map(function (GLH) {
                                    return _jsxs(ListItemButton, { selected: props.selectedGLH === GLH.name, onClick: function () { return UpdateSelectedGLH(GLH.name); }, children: [_jsx(ListItemIcon, { children: _jsx(Circle, { htmlColor: GLH.color }) }), _jsx(ListItemText, { children: GLH.name })] }, "map-legend-".concat(GLH.name));
                                }) }) })] }), size.width > 900 &&
                _jsx(List, { className: "map-view__legend", children: GLH_ARR.map(function (GLH) {
                        return _jsxs(ListItemButton, { selected: props.selectedGLH === GLH.name, onClick: function () { return UpdateSelectedGLH(GLH.name); }, children: [_jsx(ListItemIcon, { children: _jsx(Circle, { htmlColor: GLH.color }) }), _jsx(ListItemText, { children: GLH.name })] }, "map-legend-".concat(GLH.name));
                    }) })] }));
};
