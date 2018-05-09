const YAML = require('yamljs')
const path = require('path')
const fs = require('fs')
const Mustache = require('mustache')

const merge = (conditionAndRules) => conditionAndRules.map(({
    conditions,
    rule
}) => ({
    ...rule,
    manipulators: rule.manipulators.map(m => { // Override manipulators array with the same array + layer condition
        if (m.conditions) {
            m.conditions = m.conditions.concat(conditions)
        } else {
            m.conditions = conditions
        }
        return m
    })
}))

const load = filename => YAML.load(filename)
const loadWithValues = (filename, values) => {
    const template = fs.readFileSync(filename, 'utf-8')
    const rendered = Mustache.render(template, values)
    return YAML.parse(rendered)
}

module.exports = { merge, load, loadWithValues }
