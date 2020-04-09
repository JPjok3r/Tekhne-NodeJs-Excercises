let express = require('express');
let calcomplexController = require('./calcomplex.controller');

let router = express.Router();
// more routes /persons for our API will happen here
// ----------------------------------------------------
router.post('/', calcomplexController.calcomplex);



module.exports = router;