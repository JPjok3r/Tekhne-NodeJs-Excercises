let express = require('express');
let conjuntosController = require('./conjuntos.controller');

let router = express.Router();
// more routes /persons for our API will happen here
// ----------------------------------------------------
router.post('/', conjuntosController.conjuntos);



module.exports = router;