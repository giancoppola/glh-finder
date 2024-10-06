import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { GOOGLE_MAPS_API_KEY } from "../globals.js";
import { useState } from "react";
import GooglePlacesAutocomplete, { geocodeByPlaceId, getLatLng } from 'react-google-places-autocomplete';
export var LocationSearch = function () {
    var _a = useState(""), searchKeyword = _a[0], setSearchKeyword = _a[1];
    var HandleLocationSearch = function (result) {
        console.log(result);
        geocodeByPlaceId(result.value.place_id)
            .then(function (data) { return getLatLng(data[0]); })
            .then(function (latlng) { return console.log(latlng); })
            .catch(function (error) { return console.error(error); });
    };
    return (_jsx(_Fragment, { children: _jsx(GooglePlacesAutocomplete, { apiKey: GOOGLE_MAPS_API_KEY, selectProps: {
                onChange: HandleLocationSearch,
            } }) }));
};
