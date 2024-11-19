import {Dispatch, StrictMode, useState} from "react";
import {Box, Button, TextField, ThemeProvider} from "@mui/material";

interface AdminLoginFormProps {
    setIsVerified: Dispatch<boolean>;
}

export const AdminLoginForm = (props: AdminLoginFormProps) => {
    const [username, setUsername]: [string, Dispatch<string>] = useState("");
    const [password, setPassword]: [string, Dispatch<string>] = useState("");
    const FormValidation = async () => {

        console.log('form validation happens here');
    }
    return (
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' height='100dvh'
        gap='1rem'>
            <TextField
                required
                label="Username"
                helperText="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
                required
                label="Password"
                helperText="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant='outlined' fullWidth onClick={()=>FormValidation()}>Submit</Button>
        </Box>
    )
}