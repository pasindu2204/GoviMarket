const app = require('./server');

if (require.main === module && typeof app.startServer === 'function') {
  app.startServer();
}

module.exports = app;