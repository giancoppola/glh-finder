import { GOOGLE_MAPS_API_KEY } from "../globals.js";

import { Dispatch, useRef, useEffect, useState } from "react";
import { Typography, Theme, createTheme, responsiveFontSizes, ThemeProvider, TextField, Box, Input, FormControl, OutlinedInput } from "@mui/material";

import {useMapsLibrary} from '@vis.gl/react-google-maps';

interface Props {
  onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
}

// This is an example of the classic "Place Autocomplete" widget.
// https://developers.google.com/maps/documentation/javascript/place-autocomplete
export const PlaceAutocompleteClassic = ({onPlaceSelect}: Props) => {
  const [placeAutocomplete, setPlaceAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const places = useMapsLibrary('places');

  useEffect(() => {
    if (!places || !inputRef.current) return;

    const options = {
      fields: ['geometry', 'name', 'formatted_address']
    };

    setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options));
  }, [places]);

  useEffect(() => {
    if (!placeAutocomplete) return;

    placeAutocomplete.addListener('place_changed', () => {
      onPlaceSelect(placeAutocomplete.getPlace());
    });
  }, [onPlaceSelect, placeAutocomplete]);

  return (
    <div className="autocomplete-container">
      <input ref={inputRef} />
    </div>
  );
};

export const LocationSearch = () => {
    const [searchKeyword, setSearchKeyword]: [string, Dispatch<string>] = useState<string>("");
    const HandleLocationSearch = (place: google.maps.places.PlaceResult | null) => {
        console.log(place);
    }
    return (
        <>
            <PlaceAutocompleteClassic onPlaceSelect={HandleLocationSearch}/>
        </>
    )
}