import { ChangeEvent, Dispatch, StrictMode, useEffect, useState } from "react";
import { createRoot } from 'react-dom/client'
import { Typography, Theme, createTheme, responsiveFontSizes, ThemeProvider, TextField, Box } from "@mui/material";

import { LocationSearch } from "./modules/location-search.js";
import { MapView } from "./views/map-view.js";
import { GLH_NAME, Location } from "./globals.js";

let theme: Theme = createTheme({});
theme = responsiveFontSizes(theme);

const App = () => {
    const [showMap, setShowMap]: [boolean, Dispatch<boolean>] = useState<boolean>(true);
    const [selectedPlaces, setSelectedPlaces]: [Array<Location>, Dispatch<Array<Location>>] = useState<Array<Location>>([]);
    return (
        <StrictMode>
            <ThemeProvider theme={theme}>
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center"
                width='100%' height='100%' gap='2rem'>
                    <Typography variant="h1" fontWeight='bolder'>GLH Mapper</Typography>
                    <MapView showMap={showMap} setShowMap={setShowMap} selectedPlaces={selectedPlaces}/>
                    <LocationSearch selectedPlaces={selectedPlaces} setSelectedPlaces={setSelectedPlaces}/>
                </Box>
            </ThemeProvider>
        </StrictMode>
    )
}

const root = createRoot(document.getElementById("app")!)
root.render(<App/>)