import {Dispatch, useState} from "react";
import {createRoot} from "react-dom/client";
import {Box, Button, TextField} from "@mui/material";


export const AdminPage = () => {
    const [isVerified, setIsVerified]: [boolean, Dispatch<boolean>] = useState(false);
    const [username, setUsername]: [string, Dispatch<string>] = useState("");
    const [password, setPassword]: [string, Dispatch<string>] = useState("");
    const FormValidation = () => {
        console.log('form validation happens here');
    }
    return (
        <section>
            <Box>
                <TextField
                required
                label="Username"
                helperText="Enter your psername"
                onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                required
                label="Password"
                helperText="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                />
                <Button onClick={()=>FormValidation()}>Submit</Button>
            </Box>
        </section>
    )
}

const root = createRoot(document.getElementById("app")!);
root.render(<AdminPage/>);