import { List, ListItem, ListItemIcon, ListItemText, ListItemButton, Accordion, AccordionSummary, Typography, AccordionDetails } from "@mui/material"
import { ArrowDropDown, Circle } from "@mui/icons-material"
import { useWindowSize } from '@uidotdev/usehooks';

import { GLH_ARR, GLH_NAME } from "../globals.js"

interface MapLegendProps {
    selectedGLH: GLH_NAME;
    setSelectedGLH: Function;
}

export const MapLegend = (props: MapLegendProps) => {
    const size = useWindowSize();
    const UpdateSelectedGLH = (name: GLH_NAME) => {
        if (name === props.selectedGLH) {
            props.setSelectedGLH("");
        }
        else {
            props.setSelectedGLH(name);
        }
    }
    return (
        <>
            { size.width! < 900 &&
                <Accordion sx={{width: '100%'}}>
                    <AccordionSummary expandIcon={<ArrowDropDown/>}>
                        <Typography>Map Legend</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List className="map-view__legend">
                            {GLH_ARR.map(GLH =>
                                <ListItemButton key={`map-legend-${GLH.name}`} selected={props.selectedGLH === GLH.name}
                                onClick={() => UpdateSelectedGLH(GLH.name)}>
                                    <ListItemIcon>
                                        <Circle htmlColor={GLH.color}/>
                                    </ListItemIcon>
                                    <ListItemText>{GLH.name}</ListItemText>
                                </ListItemButton>
                            )}
                        </List>
                    </AccordionDetails>
                </Accordion>
            }
            { size.width! > 900 &&
                <List className="map-view__legend">
                    {GLH_ARR.map(GLH =>
                        <ListItemButton key={`map-legend-${GLH.name}`} selected={props.selectedGLH === GLH.name}
                        onClick={() => UpdateSelectedGLH(GLH.name)}>
                            <ListItemIcon>
                                <Circle htmlColor={GLH.color}/>
                            </ListItemIcon>
                            <ListItemText>{GLH.name}</ListItemText>
                        </ListItemButton>
                    )}
                </List>
            }
        </>
    )
}