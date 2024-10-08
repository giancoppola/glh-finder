import { Typography, Box, Select } from "@mui/material";
import { GLH_NAME, TestRoutingData } from "../globals.js"

import { Dispatch, useRef, useEffect, useState } from "react";

// interface TestRoutingFormProps {
//     selectedGLH: GLH_NAME;
//     setSelectedGLH: Function;
// }

export const TestRoutingForm = () => {
    const [haematologyData, setHaematologyData]: [TestRoutingData | null, Dispatch<TestRoutingData | null>] = useState<TestRoutingData | null>(null);
    useEffect(() => {
        if (!haematologyData) {
            fetch("/data/tests/haematology.json")
            .then((res) => res.json())
            .then((data) => {setHaematologyData(data); console.log(data)})
            .catch((error) => {console.log(error)})
        }
    }, [])
    return (
        <Box>
            <Typography variant='h3'>Test Routing</Typography>
            <Typography>Select your test speciality group</Typography>
            <Select>
                
            </Select>
        </Box>
    )
}