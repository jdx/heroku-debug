'use strict'

const co = require('co')
const cli = require('heroku-cli-util')
const inquirer = require('inquirer')

function * run (context) {
  let answer = yield inquirer.prompt({type: 'password', message: 'enter a password', name: 'password'})
  cli.debug(answer)
}

module.exports = {
  topic: 'debug',
  command: 'prompt',
  description: 'Outputs debugging info',
  run: co.wrap(cli.command(run))
}
