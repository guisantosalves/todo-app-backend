module.exports = function(req, res, next){
    res.header('Access-Control-Allow-Origin','*') //mudando o * -> delimitando quem pode consumir minha aplicação
    res.header('Access-Control-Allow-Origin', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, COntent-Type, Accept')
    next()
}//colocar o next() se n trava a aplicação