//let flights = require('../../data');

function getFibo(req, res) {
    console.log('Generando serie fibonacci');
    let n = req.params.num;
    n = parseInt(n);
    let numeros=[0,1];
        for (let i = 2; i < n; i++) {
            numeros[i] = numeros[i - 2] + numeros[i - 1];
        }
    
    res.status(200).json(numeros);
}

/*
HEADER
Content-Type: application/json
*/
/*
BODY
{
    "number": "999",
    "origin": "CBBA",
    "destination": "SLC",
    "departs": "01:00PM",
    "arrives": "09:00PM"
}
*/
// function createFlight(req, res) {
//     //console.log('Creating Flights');
    
// }



module.exports = {
    getFibo
    //createFlight
};