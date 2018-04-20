const fs = require('fs')
const path = require('path')
const swig = require('swig')


//console.log(tpl())


const rules = swig.compileFile(path.join(__dirname, '/templates/index.json'))
console.log(rules())

