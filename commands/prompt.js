'use strict'

const co = require('co')
const cli = require('heroku-cli-util')

function * run (context) {
  const inquirer = require('inquirer')
  let answer = yield inquirer.prompt({type: 'password', message: 'enter a password', name: 'password'})
  cli.debug(answer)
}

module.exports = {
  topic: 'debug',
  command: 'prompt',
  description: 'Outputs debugging info',
  run: cli.command(co.wrap(run))
}
