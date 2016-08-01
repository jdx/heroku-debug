'use strict'

const co = require('co')
const cli = require('heroku-cli-util')

function run (context) {
  cli.debug({
    context,
    argv: process.argv,
    arch: process.arch,
    platform: process.platform,
    term: process.env.TERM,
    'dist-tag': 'alpha'
  })
}

module.exports = {
  topic: 'debug',
  description: 'Outputs debugging info',
  run: cli.command(co.wrap(run))
}
