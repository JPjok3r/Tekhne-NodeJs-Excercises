//import express from 'express';
let express = require('express');
let fiboController = require('./fibonacci.controller');

let router = express.Router();
// more routes /persons for our API will happen here
// ----------------------------------------------------
router.get('/:num', fiboController.getFibo);
//router.post('/', flightController.createFlight);


module.exports = router;