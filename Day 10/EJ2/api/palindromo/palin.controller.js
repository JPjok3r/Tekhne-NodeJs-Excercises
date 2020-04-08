function palindrome(req, res) {
    let w = req.body.word;
    let aux = "";
    let pal = '';
    w = w.toString();
    aux = w.split('').reverse().join('');        
    console.log(aux);
    if(aux === w) 
        pal = true;
    else
        pal = false;

    let data = { 
        result: pal, 
        res: aux 
    };
    console.log(data);
    //res.render('palindrome', data);
    
    res.status(200).json(data);
}

module.exports = {
    palindrome
    
};