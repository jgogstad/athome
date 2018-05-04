const YAML = require('yamljs')
const path = require('path')

const rules = [
  { rule: YAML.load(path.join(__dirname, '/training_wheels.yaml')) },
  { rule: YAML.load(path.join(__dirname, '/happy_hacker.yaml')) }
]

module.exports = { rules: rules.map(r => r.rule ) }
