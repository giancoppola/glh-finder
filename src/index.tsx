import { Dispatch, StrictMode, useEffect, useState } from "react";
import { createRoot } from 'react-dom/client'
import { Typography, Theme, createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";

import * as leaflet from 'leaflet';
import { LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap, GeoJSON } from 'react-leaflet'
import { SW_GLH, UK } from "./map-data.js";
import { CENTRAL_COL, CENTRAL_GLH, NORTH_EAST_COL, NORTH_EAST_GLH, NORTH_THAMES_COL, NORTH_THAMES_GLH, NORTH_WEST_COL, NORTH_WEST_GLH, SOUTH_EAST_COL, SOUTH_EAST_GLH, SOUTH_WEST_COL, SOUTH_WEST_GLH } from "./globals.js";

let theme: Theme = createTheme({});
theme = responsiveFontSizes(theme);

const App = () => {
    const [markerPos, setMarkerPos]: [LatLngExpression, Dispatch<LatLngExpression>] = useState<LatLngExpression>([52.849, -1.395]);
    return (
        <StrictMode>
            <ThemeProvider theme={theme}>
                <Typography variant="h1">GLH Mapper</Typography>
                {/* <div className="map" id="map"></div> */}
                <MapContainer center={[52.849, -1.395]} zoom={6}>
                    <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
                    bounds={[[49.289, -6.636],[56.907, 2.817]]}
                    minZoom={6} maxNativeZoom={18} maxZoom={100}/>
                    <Marker position={markerPos}>
                        <Popup>
                            Kings College <br/> Hospital
                        </Popup>
                    </Marker>
                    {UK.features.map((feature) => (
                        /* @ts-ignore */
                        <GeoJSON data={feature} style={
                            function(feature) {
                                switch (feature!.properties.GLH) {
                                    case CENTRAL_GLH: return {color: CENTRAL_COL}
                                    case SOUTH_WEST_GLH: return {color: SOUTH_WEST_COL}
                                    case SOUTH_EAST_GLH: return {color: SOUTH_EAST_COL}
                                    case NORTH_THAMES_GLH: return {color: NORTH_THAMES_COL}
                                    case NORTH_EAST_GLH: return {color: NORTH_EAST_COL}
                                    case NORTH_WEST_GLH: return {color: NORTH_WEST_COL}
                                }
                            }
                        }>
                            <Popup>
                                {feature.properties.AREA} - {feature.properties.GLH}
                            </Popup>
                        </GeoJSON>
                    ))}
                </MapContainer>

            </ThemeProvider>
        </StrictMode>
    )
}

const root = createRoot(document.getElementById("app")!)
root.render(<App/>)