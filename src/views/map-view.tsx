import { Dispatch, useRef, useEffect, useState } from "react";
import { Box } from "@mui/material";

import { Map } from "../modules/map.js";
import { Location, GLH_NAME } from "../globals.js";
import { MapLegend } from "../modules/map-legend.js";

interface MapViewProps {
    showMap: boolean;
    setShowMap: Function;
    selectedPlaces: Array<Location>;
}

export const MapView = (props: MapViewProps) => {
    const [selectedGLH, setSelectedGLH]: [GLH_NAME, Dispatch<GLH_NAME>] = useState<GLH_NAME>("");
    return (
        <Box display='flex' gap='1rem' justifyContent='center' alignItems='center'>
            <MapLegend selectedGLH={selectedGLH} setSelectedGLH={setSelectedGLH}/>
            <Map selectedGLH={selectedGLH} selectedPlaces={props.selectedPlaces}/>
        </Box>
    )
}