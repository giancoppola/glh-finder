import { AppBar, Container, Link, Toolbar, Typography, MenuItem } from "@mui/material"


export const Footer = () => {
    return (
        <AppBar position='fixed' sx={{ top: 'auto', bottom: 0 }} component='footer'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <MenuItem component='a' href='https://www.linkedin.com/in/giancoppola/' target="_blank">Developed by @giancoppola</MenuItem>
                    <MenuItem component='a' href="mailto:melissa_kow1@hotmail.com">Found an issue? Contact us</MenuItem>
                </Toolbar>
            </Container>
        </AppBar>
    )
}