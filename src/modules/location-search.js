var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { GOOGLE_MAPS_API_KEY } from "../globals.js";
import { useState } from "react";
import { Box, Input, List, ListItem, ListItemText, ListItemButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { usePlacesWidget, } from "react-google-autocomplete";
export var LocationSearch = function (props) {
    var _a = useState(""), searchKeyword = _a[0], setSearchKeyword = _a[1];
    var placesAutocompleteRef = usePlacesWidget({
        apiKey: GOOGLE_MAPS_API_KEY,
        options: {
            componentRestrictions: {
                country: ['uk'],
            },
            types: ['health'],
            fields: ['address_components', 'geometry.location', 'place_id', 'formatted_address', 'name']
        },
        onPlaceSelected: function (place) { return AddSelectedPlace(place); },
    }).ref;
    var AddSelectedPlace = function (place) {
        var _a, _b, _c, _d;
        var name = JSON.parse(JSON.stringify(place.name));
        var lat = JSON.parse(JSON.stringify((_b = (_a = place.geometry) === null || _a === void 0 ? void 0 : _a.location) === null || _b === void 0 ? void 0 : _b.lat()));
        var lng = JSON.parse(JSON.stringify((_d = (_c = place.geometry) === null || _c === void 0 ? void 0 : _c.location) === null || _d === void 0 ? void 0 : _d.lng()));
        var newPlace = {
            name: name,
            lat: lat,
            lng: lng,
        };
        var newSelectedPlaces = __spreadArray([], props.selectedPlaces, true);
        newSelectedPlaces.push(newPlace);
        props.setSelectedPlaces(newSelectedPlaces);
    };
    var RemoveSelectedPlace = function (index) {
        var newSelectedPlaces = __spreadArray([], props.selectedPlaces, true);
        newSelectedPlaces.splice(index, 1);
        props.setSelectedPlaces(newSelectedPlaces);
    };
    return (_jsxs(Box, { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', children: [_jsx(Box, { width: '50%', children: _jsx(Input, { fullWidth: true, inputProps: { ref: placesAutocompleteRef } }) }), _jsx(List, { children: _jsx(_Fragment, { children: props.selectedPlaces.map(function (place, index) {
                        return _jsxs(ListItem, { style: { gap: '1rem' }, children: [_jsx(ListItemText, { children: place.name }), _jsx(ListItemButton, { onClick: function () { RemoveSelectedPlace(index); }, children: _jsx(Close, {}) })] }, "location-list-".concat(index, "-").concat(place.name));
                    }) }) })] }));
};
