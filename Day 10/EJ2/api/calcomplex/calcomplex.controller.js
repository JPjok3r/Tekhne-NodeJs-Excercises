function calcomplex(req,res) {
    let exp = req.body.e;
    let r = eval(exp);
    
    res.status(200).json(r);
}

module.exports = { calcomplex };