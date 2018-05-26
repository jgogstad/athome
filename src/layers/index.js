const path = require('path')
const applicationLayers = require('./application_layers')
const capsLayer = require('./caps_layer')
const tabLayer = require('./tab_layer')
const trainingWheels = require('./training_wheels')
const Utils = require('../common/utils')
const Env = require('../common/env')

const global = Utils.load(path.join(__dirname, '/global_modifications.yaml'))

const prioritizedOrder = [
    capsLayer.definition,
    tabLayer.definition,
    ...trainingWheels.rules,
    ...applicationLayers.rules,
    global,
    ...capsLayer.rules,
    ...tabLayer.rules,
]

const rules = Env.development ? prioritizedOrder : [{
    description: 'AtHome',
    manipulators: prioritizedOrder.map(rule => rule.manipulators).reduce((a, b) => a.concat(b), [])
}]

module.exports = {
    "title": "At Home",
    "author": "jgogstad",
    "homepage": "https://github.com/jgogstad/athome",
    "hostpage": "https://pqrs.org/osx/karabiner/complex_modifications/",
    "manual": "https://github.com/jgogstad/athome",
    "import_url": "karabiner://karabiner/assets/complex_modifications/import?url=https://raw.githubusercontent.com/jgogstad/athome/master/foo.json",
    "rules": rules
}
