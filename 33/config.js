// config.js
const configLib = require('config');

const env = process.env.NODE_ENV || 'development';

module.exports = {
  env,
  port: configLib.get('app.port'),
  message: configLib.get('app.message'),
  name: configLib.get('app.name')
};

