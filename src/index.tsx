import { ChangeEvent, Dispatch, StrictMode, useEffect, useState } from "react";
import { createRoot } from 'react-dom/client'
import { Typography, Theme, createTheme, responsiveFontSizes, ThemeProvider, TextField, Box } from "@mui/material";

import { booleanPointInPolygon } from "@turf/boolean-point-in-polygon";

import { LocationSearch } from "./modules/location-search.js";
import { MapView } from "./views/map-view.js";
import { GLH_NAME, Location } from "./globals.js";
import { TestRoutingForm } from "./modules/test-routing-form.js";
import { UK } from "./map-data.js";
import { Polygon } from "leaflet";
import { Header } from "./modules/header.js";

let theme: Theme = createTheme({});
theme = responsiveFontSizes(theme);

const App = () => {
    const [showMap, setShowMap]: [boolean, Dispatch<boolean>] = useState<boolean>(true);
    const [selectedPlaces, setSelectedPlaces]: [Array<Location>, Dispatch<Array<Location>>] = useState<Array<Location>>([]);
    const [placeGLH, setPlaceGLH]: [GLH_NAME, Dispatch<GLH_NAME>] = useState<GLH_NAME>("");
    useEffect(() => {
        if (selectedPlaces.length > 0) {
            UK.features.forEach((feature) => {
                // @ts-ignore - doesn't recognise feature as a GeoJSON Feature Polygon even though it is
                if (booleanPointInPolygon([selectedPlaces[0].lng, selectedPlaces[0].lat], feature)) {
                    setPlaceGLH(feature.properties.GLH as GLH_NAME);
                }
            })
        }
        else {
            setPlaceGLH("");
        }
    }, [selectedPlaces])
    return (
        <StrictMode>
            <ThemeProvider theme={theme}>
                <Header/>
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center"
                width='100%' height='100%' gap='2rem' maxWidth='1200px' margin='auto'>
                    <MapView showMap={showMap} setShowMap={setShowMap} selectedPlaces={selectedPlaces} placeGLH={placeGLH}/>
                    <LocationSearch selectedPlaces={selectedPlaces} setSelectedPlaces={setSelectedPlaces}/>
                    { selectedPlaces.length > 0 && <TestRoutingForm placeGLH={placeGLH}/> }
                </Box>
            </ThemeProvider>
        </StrictMode>
    )
}

const root = createRoot(document.getElementById("app")!)
root.render(<App/>)