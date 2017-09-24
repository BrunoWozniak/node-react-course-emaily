// keys.js - Figure out what set of credentials to return

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  require.exports = require('./dev');
}