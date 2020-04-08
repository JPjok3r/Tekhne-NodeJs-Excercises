function simpcal(req, res) {
    console.log('Suma de dos numeros');
    let n1 = req.body.num1;
    let n2 = req.body.num2;
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    let suma = n1 + n2;
    
    res.status(200).json(suma);
}

module.exports = {
    simpcal
    
};