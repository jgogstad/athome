const YAML = require('yamljs')
const path = require('path')
const utils = require('../../common/utils')

const templates = [{
    condition: {
        type: 'frontmost_application_if',
        bundle_identifiers: ['^com\\.jetbrains\\.intellij.*']
    },
    rule: YAML.load(path.join(__dirname, '/intellij.yaml'))
}]

module.exports = {
    rules: utils.merge(templates)
}