const path = require('path')
const Utils = require('../../common/utils')

const conditions = [{
    "type": "variable_if",
    "name": "caps_lock pressed",
    "value": 1
}]

const templates = [
    { rule: Utils.load(path.join(__dirname, '/navigation.yaml')) },
    { rule: Utils.load(path.join(__dirname, '/deletion.yaml')) },
    { rule: Utils.load(path.join(__dirname, '/internationalization/norway.yaml')) },
    { rule: Utils.load(path.join(__dirname, '/functional.yaml')) },
    { rule: Utils.load(path.join(__dirname, '/misc.yaml')) },
    { rule: Utils.load(path.join(__dirname, '/window_management.yaml')) },
//    { rule: Utils.load(path.join(__dirname, '/caps_to_control.yaml')},
]

const definition = Utils.load(path.join(__dirname, '/layer_definition.yaml'))

module.exports = {
    conditions,
    definition,
    rules: Utils.merge(templates.map(t => ({ ...t, conditions })))
}
