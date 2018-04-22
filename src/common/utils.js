const merge = (conditionAndRules) => conditionAndRules.map(({
    condition,
    rule
}) => ({
    ...rule,
    manipulators: rule.manipulators.map(m => { // Override manipulators array with the same array + layer condition
        if (m.conditions) {
            m.conditions.push(condition)
        } else {
            m.conditions = [condition]
        }
        return m
    })
}))

module.exports = { merge }
