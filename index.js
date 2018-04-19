const fs = require('fs')
const path = require('path')
const swig = require('swig')

//const tpl = swig.compileFile(path.join(__dirname, '/templates/index.json'))
//console.log(tpl())

const jo = fs.readFileSync(path.join(__dirname, '/templates/index.json'), { encoding: 'utf-8'} )
console.log(JSON.parse(jo))

