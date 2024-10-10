import { ChangeEvent, Dispatch, StrictMode, useEffect, useState } from "react";
import { createRoot } from 'react-dom/client'
import { Typography, Theme, createTheme, responsiveFontSizes, ThemeProvider, TextField, Box } from "@mui/material";

import { geoContains } from "d3-geo";

import { LocationSearch } from "./modules/location-search.js";
import { MapView } from "./views/map-view.js";
import { GLH_NAME, Location } from "./globals.js";
import { TestRoutingForm } from "./modules/test-routing-form.js";
import { UK } from "./map-data.js";

let theme: Theme = createTheme({});
theme = responsiveFontSizes(theme);

const App = () => {
    const [showMap, setShowMap]: [boolean, Dispatch<boolean>] = useState<boolean>(true);
    const [selectedPlaces, setSelectedPlaces]: [Array<Location>, Dispatch<Array<Location>>] = useState<Array<Location>>([]);
    const [placeGLH, setPlaceGLH]: [GLH_NAME, Dispatch<GLH_NAME>] = useState<GLH_NAME>("");
    useEffect(() => {
        if (selectedPlaces.length > 0) {
            UK.features.forEach((feature) => {
                // console.log(geoContains(feature as GeoJSON.Feature, [selectedPlaces[0].lng, selectedPlaces[0].lat]))
                if (!geoContains(feature as GeoJSON.Feature, [selectedPlaces[0].lng, selectedPlaces[0].lat])) {
                    setPlaceGLH(feature.properties.GLH as GLH_NAME);
                }
            })
            // for(const feature of UK.features) {
            //     // @ts-ignore
            //     // if(geoContains(feature, [selectedPlaces[0].lng, selectedPlaces[0].lat])) {
            //     //     setPlaceGLH(feature.properties.GLH as GLH_NAME);
            //     //     console.log(feature.properties.GLH);
            //     // }
            //     // @ts-ignore
            //     console.log(geoContains(feature, [selectedPlaces[0].lng, selectedPlaces[0].lat]))
            // }
        }
    }, [selectedPlaces])
    return (
        <StrictMode>
            <ThemeProvider theme={theme}>
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center"
                width='100%' height='100%' gap='2rem' maxWidth='1200px' margin='auto'>
                    <Typography variant="h1" fontWeight='bolder'>GLH Mapper</Typography>
                    <MapView showMap={showMap} setShowMap={setShowMap} selectedPlaces={selectedPlaces}/>
                    <LocationSearch selectedPlaces={selectedPlaces} setSelectedPlaces={setSelectedPlaces}/>
                    { selectedPlaces.length > 0 && <TestRoutingForm placeGLH={placeGLH}/> }
                </Box>
            </ThemeProvider>
        </StrictMode>
    )
}

const root = createRoot(document.getElementById("app")!)
root.render(<App/>)