import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Typography, Box, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useEffect, useState } from "react";
// interface TestRoutingFormProps {
//     selectedGLH: GLH_NAME;
//     setSelectedGLH: Function;
// }
export var TestRoutingForm = function () {
    var _a = useState({}), testRoutingData = _a[0], setTestRoutingData = _a[1];
    var _b = useState(''), selectedSpecialty = _b[0], setSelectedSpecialty = _b[1];
    var _c = useState(''), selectedCI = _c[0], setSelectedCI = _c[1];
    var _d = useState(''), selectedTestIndication = _d[0], setSelectedTestIndication = _d[1];
    useEffect(function () {
        fetch("/data/tests/test-routing.json")
            .then(function (res) { return res.json(); })
            .then(function (data) { setTestRoutingData(data); console.log(data); })
            .catch(function (error) { console.log(error); });
    }, []);
    return (_jsxs(Box, { display: 'flex', flexDirection: 'column', gap: '1rem', width: '80%', children: [_jsx(Typography, { variant: 'h3', children: "Test Routing" }), _jsxs(FormControl, { fullWidth: true, children: [_jsx(InputLabel, { children: "Specialty" }), _jsx(Select, { value: selectedSpecialty, label: "Specialty", onChange: function (e) { return setSelectedSpecialty(e.target.value); }, children: Object.keys(testRoutingData).map(function (specialty) {
                            return _jsx(MenuItem, { value: specialty, children: specialty });
                        }) })] }), _jsxs(FormControl, { fullWidth: true, children: [_jsx(InputLabel, { children: "CI" }), _jsx(Select, { disabled: !selectedSpecialty, value: selectedCI, label: "CI", onChange: function (e) { return setSelectedCI(e.target.value); }, children: selectedSpecialty &&
                            Object.keys(testRoutingData[selectedSpecialty]).map(function (ci) {
                                return _jsx(MenuItem, { value: ci, children: ci });
                            }) })] }), _jsxs(FormControl, { fullWidth: true, children: [_jsx(InputLabel, { children: "Test Indication" }), _jsx(Select, { disabled: !selectedCI, value: selectedTestIndication, label: "Test Indication", onChange: function (e) { return setSelectedTestIndication(e.target.value); }, children: selectedCI &&
                            Object.keys(testRoutingData[selectedSpecialty][selectedCI]).map(function (test_indication) {
                                return _jsx(MenuItem, { value: test_indication, children: test_indication });
                            }) })] }), selectedTestIndication &&
                _jsxs(Box, { children: [_jsxs(Typography, { children: ["Test Name: ", testRoutingData[selectedSpecialty][selectedCI][selectedTestIndication].name] }), _jsxs(Typography, { children: ["Panel App No: ", testRoutingData[selectedSpecialty][selectedCI][selectedTestIndication].panel_app_no === null ? 'N/A' : testRoutingData[selectedSpecialty][selectedCI][selectedTestIndication].panel_app_no] }), _jsxs(Typography, { children: ["Test Category: ", testRoutingData[selectedSpecialty][selectedCI][selectedTestIndication].category] }), _jsxs(Typography, { children: ["Single National Provider: ", testRoutingData[selectedSpecialty][selectedCI][selectedTestIndication].single_national_provider === true ? "Yes" : "No"] })] })] }));
};
