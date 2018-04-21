const applicationLayers = require('./application_layers')
const capsLayer = require('./caps_layer')
const tabLayer = require('./tab_layer')

module.exports = {
    "title": "At Home",
    "author": "jgogstad",
    "homepage": "https://github.com/jgogstad/athome",
    "hostpage": "https://pqrs.org/osx/karabiner/complex_modifications/",
    "manual": "https://github.com/jgogstad/athome",
    "import_url": "karabiner://karabiner/assets/complex_modifications/import?url=https://raw.githubusercontent.com/jgogstad/athome/master/foo.json",
    "rules": [...applicationLayers, ...capsLayer, ...tabLayer]
}