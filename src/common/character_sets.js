const latin_alphabet = [
    { key_code: 'a' },
    { key_code: 'b' },
    { key_code: 'c' },
    { key_code: 'd' },
    { key_code: 'e' },
    { key_code: 'f' },
    { key_code: 'g' },
    { key_code: 'h' },
    { key_code: 'i' },
    { key_code: 'j' },
    { key_code: 'k' },
    { key_code: 'l' },
    { key_code: 'm' },
    { key_code: 'n' },
    { key_code: 'o' },
    { key_code: 'p' },
    { key_code: 'q' },
    { key_code: 'r' },
    { key_code: 's' },
    { key_code: 't' },
    { key_code: 'u' },
    { key_code: 'v' },
    { key_code: 'w' },
    { key_code: 'x' },
    { key_code: 'y' },
    { key_code: 'z' },
]

const digits = [
    { key_code: '0' },
    { key_code: '1' },
    { key_code: '2' },
    { key_code: '3' },
    { key_code: '4' },
    { key_code: '5' },
    { key_code: '6' },
    { key_code: '7' },
    { key_code: '8' },
    { key_code: '9' },
]

const alpha_numeric = latin_alphabet.concat(digits)

module.exports = { latin_alphabet, digits, alpha_numeric }
