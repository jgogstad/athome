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

module.exports = { merge }
