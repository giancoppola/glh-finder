import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import usePlacesAutocomplete, { getGeocode, getLatLng, } from "use-places-autocomplete";
export var LocationSearch = function () {
    var _a = useState(""), searchKeyword = _a[0], setSearchKeyword = _a[1];
    return (_jsx(_Fragment, { children: _jsx(PlacesAutocomplete, {}) }));
};
var PlacesAutocomplete = function () {
    var _a = usePlacesAutocomplete({
        callbackName: "YOUR_CALLBACK_NAME",
        requestOptions: {
        /* Define search scope here */
        },
        debounce: 300,
    }), ready = _a.ready, value = _a.value, _b = _a.suggestions, status = _b.status, data = _b.data, setValue = _a.setValue, clearSuggestions = _a.clearSuggestions;
    // @ts-ignore
    var handleInput = function (e) {
        // Update the keyword of the input element
        setValue(e.target.value);
    };
    var handleSelect = 
    // @ts-ignore
    function (_a) {
        var description = _a.description;
        return function () {
            // When the user selects a place, we can replace the keyword without request data from API
            // by setting the second parameter to "false"
            setValue(description, false);
            clearSuggestions();
            // Get latitude and longitude via utility functions
            getGeocode({ address: description }).then(function (results) {
                var _a = getLatLng(results[0]), lat = _a.lat, lng = _a.lng;
                console.log("📍 Coordinates: ", { lat: lat, lng: lng });
            });
        };
    };
    var renderSuggestions = function () {
        return data.map(function (suggestion) {
            var place_id = suggestion.place_id, _a = suggestion.structured_formatting, main_text = _a.main_text, secondary_text = _a.secondary_text;
            return (_jsxs("li", { onClick: handleSelect(suggestion), children: [_jsx("strong", { children: main_text }), " ", _jsx("small", { children: secondary_text })] }, place_id));
        });
    };
    return (_jsxs("div", { children: [_jsx("input", { value: value, onChange: handleInput, disabled: !ready, placeholder: "Where are you going?" }), status === "OK" && _jsx("ul", { children: renderSuggestions() })] }));
};
