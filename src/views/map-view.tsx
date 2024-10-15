import { Dispatch, useRef, useEffect, useState } from "react";
import { Box } from "@mui/material";

import { Map } from "../modules/map.js";
import { Location, GLH_NAME } from "../globals.js";
import { MapLegend } from "../modules/map-legend.js";

interface MapViewProps {
    mapData: GeoJSON.FeatureCollection;
    showMap: boolean;
    setShowMap: Function;
    selectedPlaces: Array<Location>;
    placeGLH: GLH_NAME;
}

export const MapView = (props: MapViewProps) => {
    const [selectedGLH, setSelectedGLH]: [GLH_NAME, Dispatch<GLH_NAME>] = useState<GLH_NAME>("");
    useEffect(() => {
        setSelectedGLH(props.placeGLH);
    }, [props.placeGLH])
    return (
        <Box display='flex' gap='1rem' justifyContent='center' alignItems='center'>
            <MapLegend selectedGLH={selectedGLH} setSelectedGLH={setSelectedGLH}/>
            <Map mapData={props.mapData} selectedGLH={selectedGLH} selectedPlaces={props.selectedPlaces}/>
        </Box>
    )
}