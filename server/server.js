/////////////////////////////////////////////////////////////////////
// Copyright (c) Autodesk, Inc. All rights reserved
// Written by Forge Partner Development
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted,
// provided that the above copyright notice appears in all copies and
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS.
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC.
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
/////////////////////////////////////////////////////////////////////
'use strict';

import express, { static } from 'express';
import cookieParser from 'cookie-parser';
import cookieSession from 'cookie-session';
import session from 'express-session';
var app = express();

// this session will be used to save the oAuth token
app.use(cookieParser());
app.set('trust proxy', 1) // trust first proxy - HTTPS on Heroku

app.use(session({
    secret: 'autodeskforge',
    cookie: {
        httpOnly: true,
        secure: (process.env.NODE_ENV === 'production'),
        maxAge: 1000 * 60 * 60 // 1 hours to expire the session and avoid memory leak
    },
    resave: false,
    saveUninitialized: true
}));

/*
app.use(cookieSession({
    name: 'session',
    keys: ['autodeskForge'],

    // Cookie Options
    maxAge: 60 * 60 * 1000
}));
*/

// prepare server routing
app.use('/', static(__dirname + '/..')); // redirect static calls
app.use('/js', static(__dirname + '/../node_modules/bootstrap/dist/js')); // redirect static calls
app.use('/js', static(__dirname + '/../node_modules/jquery/dist')); // redirect static calls
app.use('/css', static(__dirname + '/../node_modules/bootstrap/dist/css')); // redirect static calls
app.use('/fonts', static(__dirname + '/../node_modules/bootstrap/dist/fonts'));
app.use('/font',static(__dirname + '/../font')) // redirect static calls
app.set('port', process.env.PORT || 3030); // main port

// prepare our API endpoint routing
import oauth from './oauth';
import dm from './data.management';
import md from './model.derivative';
app.use('/', oauth); // redirect oauth API calls
app.use('/dm/', dm); // redirect our Data Management API calls
app.use('/md/', md); // redirect our Data Management API calls

export default app;