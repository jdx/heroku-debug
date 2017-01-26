'use strict'

const {Command} = require('heroku-command')

class Debug extends Command {
  async run () {
    this.inspect({
      this: this,
      argv: process.argv,
      arch: process.arch,
      platform: process.platform,
      term: process.env.TERM
    })
  }
}

Debug.topic = 'debug'
Debug.description = 'outputs debugging info'

module.exports = Debug
