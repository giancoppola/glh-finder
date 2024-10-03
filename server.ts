require('dotenv').config();
const express = require('express');
import {Express, NextFunction, Request, Response} from 'express';

const app: Express = express();
const cors = require('cors');

// App middlewares
app.use(cors());
app.use(express.static(__dirname + '/public'));

app.get("*", (req: Request, res:Response, next: NextFunction) => {
    console.log(req.method, req.url, res.statusCode)
    next();
})

app.get('/', (req: Request, res:Response, next: NextFunction) => {
    res.sendFile(__dirname + `/views/index.html`)
    // res.send('<a href="/auth/google">Login with Google</a><a href="/logout">Log Out</a>')
})

//API endpoints
// const googleAuthRoute = require("./api/google-auth").router;
// app.use("/", googleAuthRoute);

// Error page matching
app.get('*', (req: Request, res: Response, next: NextFunction) => {
    res.status(400).send('No match found - error page!');
    // res.redirect("/");
})

// Set up server
const server = app.listen(process.env.PORT || 3000, () => {
    // console.log('Your app is listening on port 3000 ' + listener.address().port)
})