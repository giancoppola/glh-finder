import { StrictMode, useEffect } from "react";
import { createRoot } from 'react-dom/client'
import { Typography, Theme, createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";

import * as leaflet from 'leaflet';
import { SW_GLH } from "./map-data";

let theme: Theme = createTheme({});
theme = responsiveFontSizes(theme);



const App = () => {
    useEffect(() => {
        const map = leaflet.map('map').setView([52.849, -1.395], 6);
        leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            bounds: [
                [49.289, -6.636],
                [56.907, 2.817]
            ],
            minZoom: 6,
            maxNativeZoom: 18,
            maxZoom: 100
        }).addTo(map);
        leaflet.marker([51.468452, -0.093722]).addTo(map)
            .bindPopup('Kings College <br/> Hospital')
            .openPopup();
        leaflet.geoJSON(SW_GLH).addTo(map);
    }, [])
    return (
        <StrictMode>
            <ThemeProvider theme={theme}>
                <Typography>Hello World</Typography>
                <div className="map" id="map"></div>
            </ThemeProvider>
        </StrictMode>
    )
}

const root = createRoot(document.getElementById("app")!)
root.render(<App/>)