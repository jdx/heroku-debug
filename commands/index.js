'use strict'

exports.topic = {
  name: 'debug',
  description: 'CLI debugging tools'
}

exports.commands = [
  require('./debug'),
  require('./noop'),
  require('./prompt'),
  require('./action')
]
