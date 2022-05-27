const todo = require("./todo")

todo.methods(['get', 'post', 'put', 'delete'])

//aplicando validacao e aplicando alteracao no update
todo.updateOptions({new: true, runValidators: true})

module.exports = todo