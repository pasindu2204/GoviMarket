const app = require('../server'); // import your express app

module.exports = (req, res) => {
  return app(req, res);
};