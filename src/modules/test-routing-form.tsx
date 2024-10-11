import { Typography, Box, Select, MenuItem, FormControl, InputLabel, TableContainer, Table, TableRow, TableCell, TableHead, Toolbar } from "@mui/material";
import { GLH_NAME, TestDetails, TestRoutingData } from "../globals.js"

import { Dispatch, useRef, useEffect, useState } from "react";

interface TestRoutingFormProps {
    placeGLH: GLH_NAME;
}

export const TestRoutingForm = (props: TestRoutingFormProps) => {
    const [testRoutingData, setTestRoutingData]: [TestRoutingData, Dispatch<TestRoutingData>] = useState<TestRoutingData>({});
    const [selectedSpecialty, setSelectedSpecialty]: [string, Dispatch<string>] = useState<string>('');
    const [selectedCI, setSelectedCI]: [string, Dispatch<string>] = useState<string>('');
    const [selectedTestIndication, setSelectedTestIndication]: [string, Dispatch<string>] = useState<string>('');
    const [showDetails, setShowDetails]: [boolean, Dispatch<boolean>] = useState<boolean>(false);
    useEffect(() => {
        fetch("/data/tests/test-routing.json")
        .then((res) => res.json())
        .then((data) => {setTestRoutingData(data); console.log(data)})
        .catch((error) => {console.log(error)})
    }, [])
    const HandleSetSpecialty = (specialty: string) => {
        setSelectedSpecialty(specialty);
        setSelectedCI('');
        setSelectedTestIndication('');
        setShowDetails(false);
    }
    const HandleSetCI = (ci: string) => {
        setSelectedCI(ci);
        setSelectedTestIndication('')
        setShowDetails(false);
    }
    const HandleSetTestIndication = (testIndication: string) => {
        setSelectedTestIndication(testIndication);
        setShowDetails(true);
    }
    return (
        <Box display='flex' flexDirection='column' gap='1rem' width='80%' marginBottom='2rem'>
            <Toolbar>
                <Typography variant='h4'>What test are you sending?</Typography>
            </Toolbar>
            <FormControl fullWidth>
                <InputLabel>Specialty</InputLabel>
                <Select value={selectedSpecialty} label="Specialty"
                onChange={(e) => HandleSetSpecialty(e.target.value as string)}>
                    {
                        Object.keys(testRoutingData).map((specialty) =>
                            <MenuItem value={specialty}>{specialty}</MenuItem>
                        )
                    }
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel>CI</InputLabel>
                <Select disabled={!selectedSpecialty} value={selectedCI} label="CI"
                onChange={(e) => HandleSetCI(e.target.value as string)}>
                    { selectedSpecialty &&
                        Object.keys(testRoutingData[selectedSpecialty]).map((ci) =>
                            <MenuItem value={ci}>{ci}</MenuItem>
                        )
                    }
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel>Test Indication</InputLabel>
                <Select disabled={!selectedCI} value={selectedTestIndication} label="Test Indication"
                onChange={(e) => HandleSetTestIndication(e.target.value as string)}>
                    { selectedCI &&
                        Object.keys(testRoutingData[selectedSpecialty][selectedCI]).map((test_indication) =>
                            <MenuItem value={test_indication}>{test_indication}</MenuItem>
                        )
                    }
                </Select>
            </FormControl>
            { showDetails &&
                <>
                    <Toolbar>
                        <Typography variant="h4">Test Details</Typography>
                    </Toolbar>
                    <TableContainer>
                        <Table>
                            <TableRow>
                                <TableCell>Routing</TableCell>
                                {(testRoutingData[selectedSpecialty][selectedCI][selectedTestIndication] as TestDetails).routing[props.placeGLH].map(option =>
                                    <TableCell>{option}</TableCell>
                                )}
                            </TableRow>
                            <TableRow>
                                <TableCell>Test Name</TableCell>
                                <TableCell>{(testRoutingData[selectedSpecialty][selectedCI][selectedTestIndication] as TestDetails).name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Panel App No</TableCell>
                                <TableCell>{(testRoutingData[selectedSpecialty][selectedCI][selectedTestIndication] as TestDetails).panel_app_no === null ? 'N/A' : (testRoutingData[selectedSpecialty][selectedCI][selectedTestIndication] as TestDetails).panel_app_no}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Test Category</TableCell>
                                <TableCell>{(testRoutingData[selectedSpecialty][selectedCI][selectedTestIndication] as TestDetails).category}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Single National Provider</TableCell>
                                <TableCell>{(testRoutingData[selectedSpecialty][selectedCI][selectedTestIndication] as TestDetails).single_national_provider === true ? "Yes" : "No"}</TableCell>
                            </TableRow>
                        </Table>
                    </TableContainer>
                </>
            }
        </Box>
    )
}