const path = require('path')
const Utils = require('../../common/utils')

const conditions = [{
    "type": "variable_if",
    "name": "tab pressed",
    "value": 1
}]

const templates = [
    { rule: Utils.load(path.join(__dirname, '/functional.yaml')) },
    { rule: Utils.load(path.join(__dirname, '/window_management.yaml')) },
    { rule: Utils.load(path.join(__dirname, '/application_launchers.yaml')) },
]

const definition = Utils.load(path.join(__dirname, '/layer_definition.yaml'))

module.exports = {
    conditions,
    definition,
    rules: Utils.merge(templates.map(t => ({ ...t, conditions })))
}
