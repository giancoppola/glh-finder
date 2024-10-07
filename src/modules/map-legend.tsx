import { List, ListItem, ListItemIcon, ListItemText, ListItemButton } from "@mui/material"
import { Circle } from "@mui/icons-material"

import { GLH_ARR, GLH_NAME } from "../globals.js"

interface MapLegendProps {
    selectedGLH: GLH_NAME;
    setSelectedGLH: Function;
}

export const MapLegend = (props: MapLegendProps) => {
    const UpdateSelectedGLH = (name: GLH_NAME) => {
        if (name === props.selectedGLH) {
            props.setSelectedGLH("");
        }
        else {
            props.setSelectedGLH(name);
        }
    }
    return (
        <List>
            {GLH_ARR.map(GLH =>
                <ListItemButton selected={props.selectedGLH === GLH.name}
                onClick={() => UpdateSelectedGLH(GLH.name)}>
                    <ListItemIcon>
                        <Circle htmlColor={GLH.color}/>
                    </ListItemIcon>
                    <ListItemText>{GLH.name}</ListItemText>
                </ListItemButton>
            )}
        </List>
    )
}