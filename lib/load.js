const path = require('path')

// return a function that executes the run function in the file p
module.exports = p => {
  return function run (...args) {
    const run = require(path.join(__dirname, '..', p))
    // always return a promise
    return Promise.resolve(run(...args))
  }
}
