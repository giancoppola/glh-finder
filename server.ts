// require('dotenv').config();
import dotenv from 'dotenv';
dotenv.config();
// const express = require('express');
import express from 'express';
import {Express, NextFunction, Request, Response} from 'express';
import { dot } from 'node:test/reporters';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const app: Express = express();
import cors from 'cors';

// App middlewares
app.use(cors());
app.use(express.static(__dirname + '/public'));

app.get("*", (req: Request, res:Response, next: NextFunction) => {
    console.log(req.method, req.url, res.statusCode)
    next();
})

app.get('/', (req: Request, res:Response, next: NextFunction) => {
    res.sendFile(__dirname + `/html/index.html`)
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