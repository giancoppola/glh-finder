import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Typography, Box, Select } from "@mui/material";
import { useEffect, useState } from "react";
// interface TestRoutingFormProps {
//     selectedGLH: GLH_NAME;
//     setSelectedGLH: Function;
// }
export var TestRoutingForm = function () {
    var _a = useState(null), haematologyData = _a[0], setHaematologyData = _a[1];
    useEffect(function () {
        if (!haematologyData) {
            fetch("/data/tests/haematology.json")
                .then(function (res) { return res.json(); })
                .then(function (data) { setHaematologyData(data); console.log(data); })
                .catch(function (error) { console.log(error); });
        }
    }, []);
    return (_jsxs(Box, { children: [_jsx(Typography, { variant: 'h3', children: "Test Routing" }), _jsx(Typography, { children: "Select your test speciality group" }), _jsx(Select, {})] }));
};
