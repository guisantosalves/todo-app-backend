const express = require("express")

module.exports = function(app){
    
    //api routes
    const router = express.Router()
    app.use('/api', router)

    // Todo routes
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')

}