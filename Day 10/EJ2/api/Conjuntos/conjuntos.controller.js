let conjuntos = function(req, res){
    let a = req.body.a;
    let b = req.body.b;
    let sust = [];
    for(let i = 0; i < a.length;i++){
        let est = false;
        for(let ii = 0; ii < b.length; ii++){
            if(a[i] === b[ii]) est = true;
        }   
        if(!est){
            sust.push(a[i]);
        }
    }
    let inter = [];
    for(let i = 0; i < a.length;i++){
        let est = false;
        for(let ii = 0; ii < b.length; ii++){
            if(a[i] === b[ii]) est = true;
        }   
        if(est){
            inter.push(a[i]);
        }
    }
    let union = [];
    union = a;
    for(let i = 0; i < b.length; i++){
        let est = false;
        for(let ii = 0; ii < union.length; ii++){
            if(b[i] === union[ii]) est = true;
        }  
        if(!est) union.push(b[i]);
    }
    let resu = {
        'substraccion': sust,
        'interseccion': inter,
        'union': union
    };
    res.status(200).json(resu);
};

module.exports = { conjuntos };



