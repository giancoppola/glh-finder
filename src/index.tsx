import { StrictMode, useEffect } from "react";
import { createRoot } from 'react-dom/client'
import { Typography, Theme, createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";

import * as leaflet from 'leaflet';
import { Coords } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap, GeoJSON } from 'react-leaflet'
import { SW_GLH, Gloucestershire, UK } from "./map-data.js";

let theme: Theme = createTheme({});
theme = responsiveFontSizes(theme);



const App = () => {
    const mapPoint: Array<Coords> = []
    return (
        <StrictMode>
            <ThemeProvider theme={theme}>
                <Typography>Hello World</Typography>
                {/* <div className="map" id="map"></div> */}
                <MapContainer center={[52.849, -1.395]} zoom={6}>
                    <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                    bounds={[[49.289, -6.636],[56.907, 2.817]]}
                    minZoom={6} maxNativeZoom={18} maxZoom={100}/>
                    <Marker position={[51.468452, -0.093722]}>
                        <Popup>
                            Kings College <br/> Hospital
                        </Popup>
                    </Marker>
                    {/* @ts-ignore */}
                    <GeoJSON data={UK}>
                        <Popup>
                            South West GLH/GMSA
                        </Popup>
                    </GeoJSON>
                </MapContainer>
            </ThemeProvider>
        </StrictMode>
    )
}

const root = createRoot(document.getElementById("app")!)
root.render(<App/>)