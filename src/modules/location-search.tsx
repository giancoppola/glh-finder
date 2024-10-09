import { GOOGLE_MAPS_API_KEY, Location,  LocationSearchResult } from "../globals.js";

import { Dispatch, useRef, useEffect, useState } from "react";
import { Typography, Theme, createTheme, responsiveFontSizes, ThemeProvider, TextField, Box, Input, FormControl, OutlinedInput, List, ListItem, ListItemText, ListItemButton, Autocomplete, InputAdornment, ListItemIcon } from "@mui/material";

import { Close, Search } from "@mui/icons-material";
import { usePlacesWidget, ReactGoogleAutocompleteProps,  } from "react-google-autocomplete"
import e from "express";


interface LocationSearchProps {
  selectedPlaces: Array<Location>;
  setSelectedPlaces: Function;
}

export const LocationSearch = (props: LocationSearchProps) => {
  const [searchValue, setSearchValue]: [string, Dispatch<string>] = useState<string>('');
  const [selectedPlace, setSelectedPlace]: [Location | null, Dispatch<Location | null>] = useState<Location | null>(null);
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
      setSearchValue('');
      AddSelectedPlace(selectedPlace);
    }
  }, [selectedPlace])
  return (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' width='100%'>
      <Box width='50%'>
        {/* <OutlinedInput label="Location Search" placeholder="Search for a location" fullWidth
        inputProps={{ref: placesAutocompleteRef}} endAdornment={<Search/>}/> */}
        <TextField disabled={props.selectedPlaces.length > 0} label="Location Search" placeholder="Search for a location" fullWidth
        value={searchValue} onChange={(e) => {setSearchValue(e.target.value)}}
        slotProps={{
          htmlInput: { ref: placesAutocompleteRef },
          input: { endAdornment:
            <InputAdornment position='end'>
              <Search/>
            </InputAdornment>
          }
        }}/>
      </Box>
      <Box width='50%'>
        <List>
          <>
            {props.selectedPlaces.map((place, index) =>
              <ListItem key={`location-list-${index}-${place.name}`} disablePadding>
                <ListItemButton onClick={() => {RemoveSelectedPlace(index)}}>
                  <ListItemText primary={place.name} secondary={place.formatted_add}/>
                  <ListItemIcon sx={{ justifyContent: 'flex-end' }}>
                    <Close/>
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            )}
          </>
        </List>
      </Box>
    </Box>
  )
}