const Utils = require('../../common/utils')
const path = require('path')

const rules = [
  { rule: Utils.load(path.join(__dirname, '/training_wheels.yaml')) },
  //  { rule: Utils.load(path.join(__dirname, '/happy_hacker.yaml')) }
]

module.exports = { rules: rules.map(r => r.rule) }
