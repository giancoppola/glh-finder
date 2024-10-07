import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { List, ListItemIcon, ListItemText, ListItemButton } from "@mui/material";
import { Circle } from "@mui/icons-material";
import { GLH_ARR } from "../globals.js";
export var MapLegend = function (props) {
    var UpdateSelectedGLH = function (name) {
        if (name === props.selectedGLH) {
            props.setSelectedGLH("");
        }
        else {
            props.setSelectedGLH(name);
        }
    };
    return (_jsx(List, { children: GLH_ARR.map(function (GLH) {
            return _jsxs(ListItemButton, { selected: props.selectedGLH === GLH.name, onClick: function () { return UpdateSelectedGLH(GLH.name); }, children: [_jsx(ListItemIcon, { children: _jsx(Circle, { htmlColor: GLH.color }) }), _jsx(ListItemText, { children: GLH.name })] });
        }) }));
};
