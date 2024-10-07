import { GOOGLE_MAPS_API_KEY } from "../globals.js";

import { Dispatch, useRef, useEffect, useState } from "react";
import { Typography, Theme, createTheme, responsiveFontSizes, ThemeProvider, TextField, Box, Input, FormControl, OutlinedInput, List, ListItem, ListItemText, ListItemButton } from "@mui/material";

import GooglePlacesAutocomplete, { geocodeByPlaceId, getLatLng } from 'react-google-places-autocomplete';
import { Close } from "@mui/icons-material";
import { LatLng } from "leaflet";

interface SearchResult {
  label: string,
  value: google.maps.places.PlaceResult,
}

interface Location {
  name: string,
  lat: number,
  lng: number,
}

export const LocationSearch = () => {
    const [searchKeyword, setSearchKeyword]: [string, Dispatch<string>] = useState<string>("");
    const [selectedPlaces, setSelectedPlaces]: [Array<Location>, Dispatch<Array<Location>>] = useState<Array<Location>>([]);
    const AddSelectedPlace = (place: Location) => {
      let newSelectedPlaces: Array<Location> = [...selectedPlaces];
      newSelectedPlaces.push(place);
      setSelectedPlaces(newSelectedPlaces);
    }
    const RemoveSelectedPlace = (index: number) => {
      let newSelectedPlaces: Array<Location> = [...selectedPlaces];
      newSelectedPlaces.splice(index, 1);
      setSelectedPlaces(newSelectedPlaces);
    }
    const HandleLocationSelected = async (result: SearchResult) => {
      let name: string = result.label;
      console.log(result);
      geocodeByPlaceId(result!.value.place_id!)
      .then(data => getLatLng(data[0]))
      .then((latlng) => {
        AddSelectedPlace({
          name: name,
          lat: latlng.lat,
          lng: latlng.lng,
        })
      })
      .catch(error => console.error(error));
    }
    return (
      <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
        {/* @ts-ignore */}
        <GooglePlacesAutocomplete apiKey={GOOGLE_MAPS_API_KEY}
        autocompletionRequest={{
          componentRestrictions: {
            country: ['uk'],
          }
        }}
        selectProps={{
          onChange: HandleLocationSelected,
        }}/>
        <List>
          <>
            {selectedPlaces.map((place, index) =>
              <ListItem>
                <ListItemText>{place.name}</ListItemText>
                <ListItemButton onClick={() => {RemoveSelectedPlace(index)}}><Close/></ListItemButton>
              </ListItem>
            )}
          </>
        </List>
      </Box>
    )
}