console.log('loading lazy.js')

const load = require('../lib/load')

module.exports = {
  topic: 'debug',
  command: 'lazy',
  description: 'Outputs debugging info',
  run: load('./commands/lazy.run')
}
