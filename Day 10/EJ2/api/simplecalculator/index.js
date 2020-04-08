let express = require('express');
let simcalController = require('./simcal.controller');

let router = express.Router();
// more routes /persons for our API will happen here
// ----------------------------------------------------
router.post('/', simcalController.simpcal);
//router.post('/', flightController.createFlight);


module.exports = router;