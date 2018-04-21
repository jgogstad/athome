const merge = (conditionAndRules) => conditionAndRules.map(({
    condition,
    rule
}) => ({
    ...rule,
    manipulators: rule.manipulators.map(m => {
        if (m.conditions) {
            m.conditions.push(condition)
        } else {
            m.conditions = [condition]
        }
        return m
    })
}))

exports.merge = merge