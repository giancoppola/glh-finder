import { Dispatch, StrictMode, useEffect, useState } from "react";
import { createRoot } from 'react-dom/client'
import { Theme, createTheme, responsiveFontSizes, ThemeProvider, Box } from "@mui/material";

import { booleanPointInPolygon } from "@turf/boolean-point-in-polygon";

import { LocationSearch } from "./modules/location-search.js";
import { MapView } from "./views/map-view.js";
import { GLH_NAME, Location } from "./globals.js";
import { TestRoutingForm } from "./modules/test-routing-form.js";
import { Header } from "./modules/header.js";

let theme: Theme = createTheme({});
theme = responsiveFontSizes(theme);

const App = () => {
    const [showMap, setShowMap]: [boolean, Dispatch<boolean>] = useState<boolean>(true);
    const [selectedPlaces, setSelectedPlaces]: [Array<Location>, Dispatch<Array<Location>>] = useState<Array<Location>>([]);
    const [placeGLH, setPlaceGLH]: [GLH_NAME, Dispatch<GLH_NAME>] = useState<GLH_NAME>("");
    const [mapData, setMapData]: [GeoJSON.FeatureCollection | null, Dispatch<GeoJSON.FeatureCollection | null>] = useState<GeoJSON.FeatureCollection | null>(null);
    useEffect(() => {
        if (selectedPlaces.length > 0 && mapData) {
            mapData.features.forEach((feature) => {
                // @ts-ignore - doesn't recognise feature as a GeoJSON Feature Polygon even though it is
                if (booleanPointInPolygon([selectedPlaces[0].lng, selectedPlaces[0].lat], feature)) {
                    setPlaceGLH(feature.properties!.GLH as GLH_NAME);
                }
            })
        }
        else {
            setPlaceGLH("");
        }
    }, [selectedPlaces])
    useEffect(() => {
        try {
            fetch('/data/maps/glh-map-data-lad.json')
            .then((res) => res.json())
            .then((data) => {setMapData(data); console.log(data);})
        }
        catch(e) {
            console.log(e);
        }
    }, [])
    return (
        <StrictMode>
            <ThemeProvider theme={theme}>
                <Header/>
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center"
                width='100%' height='100%' gap='2rem' maxWidth='1200px' margin='auto'>
                    { mapData &&
                    <>
                        <MapView mapData={mapData} showMap={showMap} setShowMap={setShowMap} selectedPlaces={selectedPlaces} placeGLH={placeGLH}/>
                        <LocationSearch selectedPlaces={selectedPlaces} setSelectedPlaces={setSelectedPlaces}/>
                    </>
                    }
                    { selectedPlaces.length > 0 && <TestRoutingForm placeGLH={placeGLH}/> }
                </Box>
            </ThemeProvider>
        </StrictMode>
    )
}

const root = createRoot(document.getElementById("app")!)
root.render(<App/>)