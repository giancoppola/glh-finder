import {Dispatch, StrictMode, useState} from "react";
import {Box, Button, TextField, ThemeProvider, Typography} from "@mui/material";

interface AdminLoginFormProps {
    setIsVerified: Dispatch<boolean>;
}

export const AdminLoginForm = (props: AdminLoginFormProps) => {
    const [username, setUsername]: [string, Dispatch<string>] = useState("");
    const [password, setPassword]: [string, Dispatch<string>] = useState("");
    const [error, setError]: [string, Dispatch<string>] = useState("");
    const FormValidation = async () => {
        setError("");
        try {
            const response = await fetch(`/login?username=${username}&password=${password}`)
            const result = await response.json();
            if (result.status === 'success'){
                props.setIsVerified(true);
            }
            else {
                setError(result.error);
            }
        }
        catch (error) {
            setError((error as Error).message);
        }

    }
    return (
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' height='100dvh'
        gap='1rem' width='50%'>
            <Typography variant='h3' fontWeight='500' textAlign='left' width='100%'>Log In</Typography>
            <TextField
                required
                fullWidth
                label="Username"
                helperText="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
                required
                fullWidth
                label="Password"
                helperText="Enter your password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant='outlined' fullWidth onClick={() => FormValidation()}>Submit</Button>
            <Typography color='error'>{error}</Typography>
        </Box>
    )
}