import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { GOOGLE_MAPS_API_KEY } from "../globals.js";
import { useState } from "react";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
export var LocationSearch = function () {
    var _a = useState(""), searchKeyword = _a[0], setSearchKeyword = _a[1];
    var HandleLocationSearch = function (place) {
        console.log(place);
    };
    return (_jsx(_Fragment, { children: _jsx(GooglePlacesAutocomplete, { apiKey: GOOGLE_MAPS_API_KEY, selectProps: {
                onChange: HandleLocationSearch,
            } }) }));
};
