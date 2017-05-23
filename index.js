'use strict'

exports.topic = {
  name: 'debug',
  description: 'CLI debugging tools'
}

exports.commands = [
  require('./commands/debug'),
  require('./commands/noop'),
  require('./commands/prompt'),
  require('./commands/lazy'),
  require('./commands/action')
]
