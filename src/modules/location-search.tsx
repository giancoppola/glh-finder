import { GOOGLE_MAPS_API_KEY, Location,  LocationSearchResult } from "../globals.js";

import { Dispatch, useRef, useEffect, useState } from "react";
import { Typography, Theme, createTheme, responsiveFontSizes, ThemeProvider, TextField, Box, Input, FormControl, OutlinedInput, List, ListItem, ListItemText, ListItemButton, Autocomplete } from "@mui/material";

import { Close } from "@mui/icons-material";
import { usePlacesWidget, ReactGoogleAutocompleteProps,  } from "react-google-autocomplete"


interface LocationSearchProps {
  selectedPlaces: Array<Location>;
  setSelectedPlaces: Function;
}

export const LocationSearch = (props: LocationSearchProps) => {
    const [searchKeyword, setSearchKeyword]: [string, Dispatch<string>] = useState<string>("");
    const { ref: placesAutocompleteRef } = usePlacesWidget({
      apiKey: GOOGLE_MAPS_API_KEY,
      options: {
        componentRestrictions: {
          country: ['uk'],
        },
        types: ['health'],
        fields: ['address_components', 'geometry.location', 'place_id', 'formatted_address', 'name']
      },
      onPlaceSelected: (place) => AddSelectedPlace(place),
    })
    const AddSelectedPlace = (place: google.maps.places.PlaceResult) => {
      let name: string = JSON.parse(JSON.stringify(place.name!));
      let lat: number = JSON.parse(JSON.stringify(place.geometry?.location?.lat()!));
      let lng: number = JSON.parse(JSON.stringify(place.geometry?.location?.lng()!));
      let newPlace: Location = {
        name: name,
        lat: lat,
        lng: lng,
      };
      let newSelectedPlaces: Array<Location> = [...props.selectedPlaces];
      newSelectedPlaces.push(newPlace);
      props.setSelectedPlaces(newSelectedPlaces);
    }
    const RemoveSelectedPlace = (index: number) => {
      let newSelectedPlaces: Array<Location> = [...props.selectedPlaces];
      newSelectedPlaces.splice(index, 1);
      props.setSelectedPlaces(newSelectedPlaces);
    }
    return (
      <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' width='100%'>
        <Box width='50%'>
          <Input fullWidth inputProps={{ref: placesAutocompleteRef}}></Input>
        </Box>
        <List>
          <>
            {props.selectedPlaces.map((place, index) =>
              <ListItem key={`location-list-${index}-${place.name}`} style={{ gap: '1rem' }}>
                <ListItemText>{place.name}</ListItemText>
                <ListItemButton onClick={() => {RemoveSelectedPlace(index)}}><Close/></ListItemButton>
              </ListItem>
            )}
          </>
        </List>
      </Box>
    )
}