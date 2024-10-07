import { ChangeEvent, Dispatch, StrictMode, useEffect, useState } from "react";

import { MapContainer, Marker, Popup, TileLayer, useMap, GeoJSON } from 'react-leaflet'
import { UK } from "../map-data.js";
import { CENTRAL_COL, CENTRAL_GLH, EAST_COL, EAST_GLH, GLH_ARR, NORTH_EAST_COL, NORTH_EAST_GLH, NORTH_THAMES_COL, NORTH_THAMES_GLH, NORTH_WEST_COL, NORTH_WEST_GLH, SOUTH_EAST_COL, SOUTH_EAST_GLH, SOUTH_WEST_COL, SOUTH_WEST_GLH, GLH_NAME } from "../globals.js";

import { Location } from "../globals.js";
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Circle } from "@mui/icons-material";

interface MapProps {
    selectedGLH: GLH_NAME;
    selectedPlaces: Array<Location>;
}

export const Map = (props: MapProps) => {
    const [centralOpacity, setCentralOpacity]: [number, Dispatch<number>]  = useState<number>(0.8);
    const [southWestOpacity, setSouthWestOpacity]: [number, Dispatch<number>]  = useState<number>(0.8);
    const [southEastOpacity, setSouthEastOpacity]: [number, Dispatch<number>]  = useState<number>(0.8);
    const [northThamesOpacity, setNorthThamesOpacity]: [number, Dispatch<number>]  = useState<number>(0.8);
    const [northEastOpacity, setNorthEastOpacity]: [number, Dispatch<number>]  = useState<number>(0.8);
    const [northWestOpacity, setNorthWestOpacity]: [number, Dispatch<number>]  = useState<number>(0.8);
    const [eastOpacity, setEastOpacity]: [number, Dispatch<number>]  = useState<number>(0.8);
    useEffect(() => {
        if (props.selectedGLH === ""){
            setCentralOpacity(0.8);
            setSouthWestOpacity(0.8);
            setSouthEastOpacity(0.8);
            setNorthThamesOpacity(0.8);
            setNorthEastOpacity(0.8);
            setNorthWestOpacity(0.8);
            setEastOpacity(0.8);
        }
        else if (props.selectedGLH === "Central and South GLH/GMSA"){
            setCentralOpacity(0.8);
            setSouthWestOpacity(0.2);
            setSouthEastOpacity(0.2);
            setNorthThamesOpacity(0.2);
            setNorthEastOpacity(0.2);
            setNorthWestOpacity(0.2);
            setEastOpacity(0.2);
        }
        else if (props.selectedGLH === "South West GLH/GMSA") {
            setCentralOpacity(0.2);
            setSouthWestOpacity(0.8);
            setSouthEastOpacity(0.2);
            setNorthThamesOpacity(0.2);
            setNorthEastOpacity(0.2);
            setNorthWestOpacity(0.2);
            setEastOpacity(0.2);
        }
        else if (props.selectedGLH === "South East GLH/GMSA") {
            setCentralOpacity(0.2);
            setSouthWestOpacity(0.2);
            setSouthEastOpacity(0.8);
            setNorthThamesOpacity(0.2);
            setNorthEastOpacity(0.2);
            setNorthWestOpacity(0.2);
            setEastOpacity(0.2);
        }
        else if (props.selectedGLH === "North Thames GLH/GMSA") {
            setCentralOpacity(0.2);
            setSouthWestOpacity(0.2);
            setSouthEastOpacity(0.2);
            setNorthThamesOpacity(0.8);
            setNorthEastOpacity(0.2);
            setNorthWestOpacity(0.2);
            setEastOpacity(0.2);
        }
        else if ((props.selectedGLH === "North East and Yorkshire GLH/GMSA")) {
            setCentralOpacity(0.2);
            setSouthWestOpacity(0.2);
            setSouthEastOpacity(0.2);
            setNorthThamesOpacity(0.2);
            setNorthEastOpacity(0.8);
            setNorthWestOpacity(0.2);
            setEastOpacity(0.2);
        }
        else if (props.selectedGLH === "North West GLH/GMSA") {
            setCentralOpacity(0.2);
            setSouthWestOpacity(0.2);
            setSouthEastOpacity(0.2);
            setNorthThamesOpacity(0.2);
            setNorthEastOpacity(0.2);
            setNorthWestOpacity(0.8);
            setEastOpacity(0.2);
        }
        else if (props.selectedGLH === "East GLH/GMSA") {
            setCentralOpacity(0.2);
            setSouthWestOpacity(0.2);
            setSouthEastOpacity(0.2);
            setNorthThamesOpacity(0.2);
            setNorthEastOpacity(0.2);
            setNorthWestOpacity(0.2);
            setEastOpacity(0.8);
        }
    }, [props.selectedGLH])
    return (
            <MapContainer center={[52.849, -1.395]} zoom={6}>
                <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
                bounds={[[49.289, -6.636],[56.907, 2.817]]}
                minZoom={6} maxNativeZoom={18} maxZoom={100}/>
                {props.selectedPlaces.map((place) =>
                    <Marker position={[place.lat, place.lng]}>
                        <Popup>
                            {place.name}
                        </Popup>
                    </Marker>
                )}
                {UK.features.map((feature) => (
                    /* @ts-ignore */
                    <GeoJSON data={feature} style={
                        function(feature) {
                            switch (feature!.properties.GLH) {
                                case CENTRAL_GLH: return {color: CENTRAL_COL, fillOpacity: centralOpacity, opacity: centralOpacity}
                                case SOUTH_WEST_GLH: return {color: SOUTH_WEST_COL, fillOpacity: southWestOpacity, opacity: southWestOpacity}
                                case SOUTH_EAST_GLH: return {color: SOUTH_EAST_COL, fillOpacity: southEastOpacity, opacity: southEastOpacity}
                                case NORTH_THAMES_GLH: return {color: NORTH_THAMES_COL, fillOpacity: northThamesOpacity, opacity: northThamesOpacity}
                                case NORTH_EAST_GLH: return {color: NORTH_EAST_COL, fillOpacity: northEastOpacity, opacity: northEastOpacity}
                                case NORTH_WEST_GLH: return {color: NORTH_WEST_COL, fillOpacity: northWestOpacity, opacity: northWestOpacity}
                                case EAST_GLH: return {color: EAST_COL, fillOpacity: eastOpacity, opacity: eastOpacity}
                            }
                        }
                    }>
                        <Popup>
                            {feature.properties.AREA} - {feature.properties.GLH}
                        </Popup>
                    </GeoJSON>
                ))}
            </MapContainer>
    )
}