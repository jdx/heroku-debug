'use strict'

let cli = require('heroku-cli-util')

function run (context) {
  cli.debug({
    context,
    arch: process.arch,
    platform: process.platform,
    term: process.env.TERM,
  })
}

module.exports = {
  topic: 'debug',
  description: 'Outputs debugging info',
  run: cli.command(run),
}
