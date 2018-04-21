const YAML = require('yamljs')
const path = require('path')
const utils = require('../../common/utils')

const condition = {
    "type": "variable_if",
    "name": "caps_lock pressed",
    "value": 1
}
const templates = [{
        rule: YAML.load(path.join(__dirname, '/navigation.yaml'))
    },
    {
        rule: YAML.load(path.join(__dirname, '/deletion.yaml'))
    },
    {
        rule: YAML.load(path.join(__dirname, '/application_launchers.yaml'))
    },
    {
        rule: YAML.load(path.join(__dirname, '/misc.yaml'))
    },
    {
        rule: YAML.load(path.join(__dirname, '/window_control.yaml'))
    }
]

const definition = YAML.load(path.join(__dirname, '/layer_definition.yaml'))

module.exports = {
definition,
rules: [exports.definition].concat(
    utils.merge(templates.map(t => ({ ...t, condition })))
)
}
