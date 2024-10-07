import { GOOGLE_MAPS_API_KEY, Location,  LocationSearchResult } from "../globals.js";

import { Dispatch, useRef, useEffect, useState } from "react";
import { Typography, Theme, createTheme, responsiveFontSizes, ThemeProvider, TextField, Box, Input, FormControl, OutlinedInput, List, ListItem, ListItemText, ListItemButton } from "@mui/material";

import GooglePlacesAutocomplete, { geocodeByPlaceId, getLatLng } from 'react-google-places-autocomplete';
import { Close } from "@mui/icons-material";

interface LocationSearchProps {
  selectedPlaces: Array<Location>;
  setSelectedPlaces: Function;
}

export const LocationSearch = (props: LocationSearchProps) => {
    const [searchKeyword, setSearchKeyword]: [string, Dispatch<string>] = useState<string>("");
    const AddSelectedPlace = (place: Location) => {
      let newSelectedPlaces: Array<Location> = [...props.selectedPlaces];
      newSelectedPlaces.push(place);
      props.setSelectedPlaces(newSelectedPlaces);
    }
    const RemoveSelectedPlace = (index: number) => {
      let newSelectedPlaces: Array<Location> = [...props.selectedPlaces];
      newSelectedPlaces.splice(index, 1);
      props.setSelectedPlaces(newSelectedPlaces);
    }
    const HandleLocationSelected = async (result: LocationSearchResult) => {
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
            {props.selectedPlaces.map((place, index) =>
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