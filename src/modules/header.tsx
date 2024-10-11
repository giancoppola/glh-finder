import { AppBar, Container, Link, Toolbar, Typography, MenuItem } from "@mui/material"


export const Header = () => {
    return (
        <AppBar position='static' sx={{ marginBottom: '2rem' }}>
            <Container maxWidth='xl'>
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    <Typography variant="h5" fontWeight='bold'>GLH Mapper</Typography>
                    <MenuItem component='a' href="https://www.linkedin.com/in/giancoppola/" target="_blank">
                        Found an issue? Contact me
                    </MenuItem>
                </Toolbar>
            </Container>
        </AppBar>
    )
}