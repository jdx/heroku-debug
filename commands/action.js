'use strict'

const {Command, auth, app} = require('heroku-command')

class Action extends Command {
  async run () {
    let apps

    await this.action('getting apps', (async function () {
      apps = await this.api.get('/apps')
    })())

    this.log(`You have ${apps.length} apps.`)
  }
}

Action.topic = 'debug'
Action.command = 'action'
Action.mixins = [auth(), app()]

module.exports = Action
