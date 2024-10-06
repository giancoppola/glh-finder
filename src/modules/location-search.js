import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef, useEffect, useState } from "react";
import { useMapsLibrary } from '@vis.gl/react-google-maps';
// This is an example of the classic "Place Autocomplete" widget.
// https://developers.google.com/maps/documentation/javascript/place-autocomplete
export var PlaceAutocompleteClassic = function (_a) {
    var onPlaceSelect = _a.onPlaceSelect;
    var _b = useState(null), placeAutocomplete = _b[0], setPlaceAutocomplete = _b[1];
    var inputRef = useRef(null);
    var places = useMapsLibrary('places');
    useEffect(function () {
        if (!places || !inputRef.current)
            return;
        var options = {
            fields: ['geometry', 'name', 'formatted_address']
        };
        setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options));
    }, [places]);
    useEffect(function () {
        if (!placeAutocomplete)
            return;
        placeAutocomplete.addListener('place_changed', function () {
            onPlaceSelect(placeAutocomplete.getPlace());
        });
    }, [onPlaceSelect, placeAutocomplete]);
    return (_jsx("div", { className: "autocomplete-container", children: _jsx("input", { ref: inputRef }) }));
};
export var LocationSearch = function () {
    var _a = useState(""), searchKeyword = _a[0], setSearchKeyword = _a[1];
    var HandleLocationSearch = function (place) {
        console.log(place);
    };
    return (_jsx(_Fragment, { children: _jsx(PlaceAutocompleteClassic, { onPlaceSelect: HandleLocationSearch }) }));
};
