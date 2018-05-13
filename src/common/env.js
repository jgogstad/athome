
const development = process.env.ENVIRONMENT == 'development'

module.exports = {
    development,
    production: !development
}