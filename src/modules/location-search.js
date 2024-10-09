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
import { useEffect, useState } from "react";
import { TextField, Box, List, ListItem, ListItemText, ListItemButton, InputAdornment, ListItemIcon } from "@mui/material";
import { Close, Search } from "@mui/icons-material";
import { usePlacesWidget, } from "react-google-autocomplete";
export var LocationSearch = function (props) {
    var _a = useState(''), searchValue = _a[0], setSearchValue = _a[1];
    var _b = useState(null), selectedPlace = _b[0], setSelectedPlace = _b[1];
    var placesAutocompleteRef = usePlacesWidget({
        apiKey: GOOGLE_MAPS_API_KEY,
        options: {
            componentRestrictions: {
                country: ['uk'],
            },
            types: ['health'],
            fields: ['address_components', 'geometry.location', 'place_id', 'formatted_address', 'name']
        },
        onPlaceSelected: function (place) {
            var _a, _b, _c, _d;
            return setSelectedPlace({
                name: place.name,
                lat: (_b = (_a = place.geometry) === null || _a === void 0 ? void 0 : _a.location) === null || _b === void 0 ? void 0 : _b.lat(),
                lng: (_d = (_c = place.geometry) === null || _c === void 0 ? void 0 : _c.location) === null || _d === void 0 ? void 0 : _d.lng(),
                formatted_add: place.formatted_address,
            });
        },
    }).ref;
    var AddSelectedPlace = function (place) {
        var newSelectedPlaces = __spreadArray([], props.selectedPlaces, true);
        newSelectedPlaces.push(place);
        props.setSelectedPlaces(newSelectedPlaces);
    };
    var RemoveSelectedPlace = function (index) {
        var newSelectedPlaces = __spreadArray([], props.selectedPlaces, true);
        newSelectedPlaces.splice(index, 1);
        props.setSelectedPlaces(newSelectedPlaces);
    };
    useEffect(function () {
        if (selectedPlace) {
            setSearchValue('');
            AddSelectedPlace(selectedPlace);
        }
    }, [selectedPlace]);
    return (_jsxs(Box, { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', children: [_jsx(Box, { width: '50%', children: _jsx(TextField, { disabled: props.selectedPlaces.length > 0, label: "Location Search", placeholder: "Search for a location", fullWidth: true, value: searchValue, onChange: function (e) { setSearchValue(e.target.value); }, slotProps: {
                        htmlInput: { ref: placesAutocompleteRef },
                        input: { endAdornment: _jsx(InputAdornment, { position: 'end', children: _jsx(Search, {}) })
                        }
                    } }) }), _jsx(Box, { width: '50%', children: _jsx(List, { children: _jsx(_Fragment, { children: props.selectedPlaces.map(function (place, index) {
                            return _jsx(ListItem, { disablePadding: true, children: _jsxs(ListItemButton, { onClick: function () { RemoveSelectedPlace(index); }, children: [_jsx(ListItemText, { primary: place.name, secondary: place.formatted_add }), _jsx(ListItemIcon, { sx: { justifyContent: 'flex-end' }, children: _jsx(Close, {}) })] }) }, "location-list-".concat(index, "-").concat(place.name));
                        }) }) }) })] }));
};
