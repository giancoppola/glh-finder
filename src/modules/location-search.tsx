import { GOOGLE_MAPS_API_KEY } from "../globals.js";

import { Dispatch, useRef, useEffect, useState } from "react";
import { Typography, Theme, createTheme, responsiveFontSizes, ThemeProvider, TextField, Box, Input, FormControl, OutlinedInput } from "@mui/material";

import GooglePlacesAutocomplete, { geocodeByPlaceId, getLatLng } from 'react-google-places-autocomplete';

interface SearchResult {
  label: string,
  value: google.maps.places.PlaceResult,
}

export const LocationSearch = () => {
    const [searchKeyword, setSearchKeyword]: [string, Dispatch<string>] = useState<string>("");
    const HandleLocationSearch = (result: SearchResult) => {
        console.log(result);
        geocodeByPlaceId(result!.value.place_id!)
        .then(data => getLatLng(data[0]))
        .then(latlng => console.log(latlng))
        .catch(error => console.error(error));
    }
    return (
        <>
          {/* @ts-ignore */}
          <GooglePlacesAutocomplete apiKey={GOOGLE_MAPS_API_KEY}
          selectProps={{
            onChange: HandleLocationSearch,
          }}/>
        </>
    )
}