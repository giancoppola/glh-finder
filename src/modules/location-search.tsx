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
    const [selectedPlace, setSelectedPlace]: [Location | undefined, Dispatch<Location | undefined>] = useState<Location>();
    const { ref: placesAutocompleteRef } = usePlacesWidget({
      apiKey: GOOGLE_MAPS_API_KEY,
      options: {
        componentRestrictions: {
          country: ['uk'],
        },
        types: ['health'],
        fields: ['address_components', 'geometry.location', 'place_id', 'formatted_address', 'name']
      },
      onPlaceSelected: (place) => setSelectedPlace({
        name: place.name!,
        lat: place.geometry?.location?.lat()!,
        lng: place.geometry?.location?.lng()!,
        formatted_add: place.formatted_address!,
      }),
    })
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
    useEffect(() => {
      if (selectedPlace) {
        AddSelectedPlace(selectedPlace);
      }
    }, [selectedPlace])
    return (
      <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' width='100%'>
        <Box width='50%'>
          <OutlinedInput label="Location Search" placeholder="" fullWidth inputProps={{ref: placesAutocompleteRef}}/>
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