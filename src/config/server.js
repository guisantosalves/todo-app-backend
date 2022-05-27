const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const app = express()

//colocando middlewares
/*
Middleware functions are functions that have access to the request object ( req ), the response object ( res ), 
and the next middleware function in the application's request-response cycle.
*/
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.listen(port, function(){
    console.log(`tudo ok, rodando na porta ${port}.`)
})