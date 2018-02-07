const next = require('next');
const express = require('express');
const routes = require('./routes');

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app);
const server = express();

// set up any 301 redirects
const redirects = [
  // { from: '/', to: '/index' }
];

app.prepare().then(() => {
  if (!!redirects.length) {
    redirects.forEach(({ from, to, type = 301 }) => {
      server.get(from, (req, res) => {
        res.redirect(type, to);
      });
    });
  }

  server.use(handler);
  server.listen(3000);
});
