import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { createRoot } from "react-dom/client";
import { Box, Button, TextField } from "@mui/material";
export var AdminPage = function () {
    var _a = useState(false), isVerified = _a[0], setIsVerified = _a[1];
    var _b = useState(""), username = _b[0], setUsername = _b[1];
    var _c = useState(""), password = _c[0], setPassword = _c[1];
    var FormValidation = function () {
        console.log('form validation happens here');
    };
    return (_jsx("section", { children: _jsxs(Box, { children: [_jsx(TextField, { required: true, label: "Username", helperText: "Enter your psername", onChange: function (e) { return setUsername(e.target.value); } }), _jsx(TextField, { required: true, label: "Password", helperText: "Enter your password", onChange: function (e) { return setPassword(e.target.value); } }), _jsx(Button, { onClick: function () { return FormValidation(); }, children: "Submit" })] }) }));
};
var root = createRoot(document.getElementById("app"));
root.render(_jsx(AdminPage, {}));
