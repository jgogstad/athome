const YAML = require('yamljs')
const path = require('path')
const utils = require('../../common/utils')

const condition = {
    "type": "variable_if",
    "name": "tabcaps pressed",
    "value": 1
}

const templates = [
  { rule: YAML.load(path.join(__dirname, '/window_management.yaml')) },
]

const definition = YAML.load(path.join(__dirname, '/layer_definition.yaml'))

module.exports = {
    definition,
    rules: utils.merge(templates.map(t => ({ ...t, condition })))
}
