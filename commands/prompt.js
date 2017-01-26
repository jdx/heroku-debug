'use strict'

const {Command} = require('heroku-command')

class Prompt extends Command {
  async run () {
    const inquirer = require('inquirer')
    let answer = await inquirer.prompt({type: 'password', message: 'enter a password', name: 'password'})
    this.inspect(answer)
  }
}

Prompt.topic = 'debug'
Prompt.command = 'prompt'
Prompt.description = 'Outputs debugging info'

module.exports = Prompt
