'use strict';

let cli = require('heroku-cli-util');

function run (context) {
  cli.debug(context);
}

module.exports = {
  topic: 'debug',
  description: 'Outputs debugging info',
  run: cli.command(run),
};
