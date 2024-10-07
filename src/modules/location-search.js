var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
import { Box, List, ListItem, ListItemText, ListItemButton } from "@mui/material";
import GooglePlacesAutocomplete, { geocodeByPlaceId, getLatLng } from 'react-google-places-autocomplete';
import { Close } from "@mui/icons-material";
export var LocationSearch = function (props) {
    var _a = useState(""), searchKeyword = _a[0], setSearchKeyword = _a[1];
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
    var HandleLocationSelected = function (result) { return __awaiter(void 0, void 0, void 0, function () {
        var name;
        return __generator(this, function (_a) {
            name = result.label;
            console.log(result);
            geocodeByPlaceId(result.value.place_id)
                .then(function (data) { return getLatLng(data[0]); })
                .then(function (latlng) {
                AddSelectedPlace({
                    name: name,
                    lat: latlng.lat,
                    lng: latlng.lng,
                });
            })
                .catch(function (error) { return console.error(error); });
            return [2 /*return*/];
        });
    }); };
    return (_jsxs(Box, { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', children: [_jsx(GooglePlacesAutocomplete, { apiKey: GOOGLE_MAPS_API_KEY, autocompletionRequest: {
                    componentRestrictions: {
                        country: ['uk'],
                    }
                }, selectProps: {
                    onChange: HandleLocationSelected,
                } }), _jsx(List, { children: _jsx(_Fragment, { children: props.selectedPlaces.map(function (place, index) {
                        return _jsxs(ListItem, { children: [_jsx(ListItemText, { children: place.name }), _jsx(ListItemButton, { onClick: function () { RemoveSelectedPlace(index); }, children: _jsx(Close, {}) })] });
                    }) }) })] }));
};
