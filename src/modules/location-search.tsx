import { GOOGLE_MAPS_API_KEY } from "../globals.js";

import { Dispatch, useRef, useEffect, useState } from "react";
import { Typography, Theme, createTheme, responsiveFontSizes, ThemeProvider, TextField, Box, Input, FormControl, OutlinedInput } from "@mui/material";

import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

export const LocationSearch = () => {
    const [searchKeyword, setSearchKeyword]: [string, Dispatch<string>] = useState<string>("");
    const HandleLocationSearch = (place: google.maps.places.PlaceResult | null) => {
        console.log(place);
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