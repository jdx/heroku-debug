'use strict'

const co = require('co')
const cli = require('heroku-cli-util')

function * run (context, heroku) {
  let apps

  yield cli.action('getting apps', co(function * () {
    apps = yield heroku.get('/apps')
  }))

  cli.log(`You have ${apps.length} apps.`)
}

module.exports = {
  topic: 'debug',
  command: 'action',
  needsAuth: true,
  run: cli.command(co.wrap(run))
}
