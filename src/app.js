const fs = require('fs')
const os = require('os')
const path = require('path')
const chalk = require('chalk')
const layers = require('./layers')

output = JSON.stringify(layers)

target = path.join(os.homedir(), '.config/karabiner/assets/complex_modifications')

if (!fs.existsSync(target)) {
  console.log(`${chalk.red('Error:')} path not found: '${target}'. Is Karabiner-Elements installed?`)
  process.exit(1)
} else {
  console.log(`Installing Karabiner complex modifications to '${target}/athome.json'...`)
  fs.writeFileSync(path.join(target, 'athome.json'), output)
  console.log(`${chalk.green('Success:')} Please install module in Karabiner by clicking "Enable all" under the Complex Modifications settings`)
}


