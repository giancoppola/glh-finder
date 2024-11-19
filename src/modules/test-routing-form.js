import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Typography, Box, Select, MenuItem, FormControl, InputLabel, TableContainer, Table, TableRow, TableCell, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";
export var TestRoutingForm = function (props) {
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
    return (_jsxs(Box, { display: 'flex', flexDirection: 'column', gap: '1rem', width: '80%', children: [_jsx(Toolbar, { children: _jsx(Typography, { variant: 'h4', children: "What test are you sending?" }) }), _jsxs(FormControl, { fullWidth: true, children: [_jsx(InputLabel, { children: "Specialty" }), _jsx(Select, { value: selectedSpecialty, label: "Specialty", onChange: function (e) { return setSelectedSpecialty(e.target.value); }, children: Object.keys(testRoutingData).map(function (specialty) {
                            return _jsx(MenuItem, { value: specialty, children: specialty });
                        }) })] }), _jsxs(FormControl, { fullWidth: true, children: [_jsx(InputLabel, { children: "CI" }), _jsx(Select, { disabled: !selectedSpecialty, value: selectedCI, label: "CI", onChange: function (e) { return setSelectedCI(e.target.value); }, children: selectedSpecialty &&
                            Object.keys(testRoutingData[selectedSpecialty]).map(function (ci) {
                                return _jsx(MenuItem, { value: ci, children: ci });
                            }) })] }), _jsxs(FormControl, { fullWidth: true, children: [_jsx(InputLabel, { children: "Test Indication" }), _jsx(Select, { disabled: !selectedCI, value: selectedTestIndication, label: "Test Indication", onChange: function (e) { return setSelectedTestIndication(e.target.value); }, children: selectedCI &&
                            Object.keys(testRoutingData[selectedSpecialty][selectedCI]).map(function (test_indication) {
                                return _jsx(MenuItem, { value: test_indication, children: test_indication });
                            }) })] }), selectedTestIndication &&
                _jsxs(_Fragment, { children: [_jsx(Toolbar, { children: _jsx(Typography, { variant: "h4", children: "Test Details" }) }), _jsx(TableContainer, { children: _jsxs(Table, { children: [_jsxs(TableRow, { children: [_jsx(TableCell, { children: "Routing" }), testRoutingData[selectedSpecialty][selectedCI][selectedTestIndication].routing[props.placeGLH].map(function (option) {
                                                return _jsx(TableCell, { children: option });
                                            })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { children: "Test Name" }), _jsx(TableCell, { children: testRoutingData[selectedSpecialty][selectedCI][selectedTestIndication].name })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { children: "Panel App No" }), _jsx(TableCell, { children: testRoutingData[selectedSpecialty][selectedCI][selectedTestIndication].panel_app_no === null ? 'N/A' : testRoutingData[selectedSpecialty][selectedCI][selectedTestIndication].panel_app_no })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { children: "Test Category" }), _jsx(TableCell, { children: testRoutingData[selectedSpecialty][selectedCI][selectedTestIndication].category })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { children: "Single National Provider" }), _jsx(TableCell, { children: testRoutingData[selectedSpecialty][selectedCI][selectedTestIndication].single_national_provider === true ? "Yes" : "No" })] })] }) })] })] }));
};
