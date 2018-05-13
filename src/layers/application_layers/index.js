const path = require('path')
const utils = require('../../common/utils')
const capsLayer = require('../caps_layer')
const Utils = require('../../common/utils')
const CharacterSets = require('../../common/character_sets')

// To find the bundle identifier for your application, run
// `mdls -name kMDItemCFBundleIdentifier /Applications/YourApp.app`
const templates = [
    {
        conditions: [
            {
                type: 'frontmost_application_if',
                bundle_identifiers: ['^com\\.jetbrains\\.intellij.*']
            }
        ],
        rule: Utils.load(path.join(__dirname, '/intellij.yaml'))
    },
    {
        conditions: [
            {
                type: 'frontmost_application_if',
                bundle_identifiers: ['^com\\.googlecode\\.iterm2.*']
            },
            ...capsLayer.conditions
        ],
        rule: Utils.load(path.join(__dirname, '/iterm.yaml'))
    },
]

module.exports = {
    rules: utils.merge(templates)
}
