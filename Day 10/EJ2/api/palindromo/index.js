let express = require('express');
let palindromeController = require('./palin.controller');

let router = express.Router();
// more routes /persons for our API will happen here
// ----------------------------------------------------
router.post('/', palindromeController.palindrome);
//router.post('/', flightController.createFlight);


module.exports = router;