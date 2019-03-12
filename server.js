const express = require('express');
const chalk = require('chalk');
const server = express();
const fs = require('fs');
const path = require('path');
const createApp = require('./dist/server.bundle.js');

const PORT = 3000;

const renderer = require('vue-server-renderer').createRenderer({
  //set template
  template: fs.readFileSync('./index.html', 'utf-8')
});

server.use('/dist', express.static(path.join(__dirname, './dist')));

server.get('*', (req, res) => {
  const context = {url: req.url};

  createApp.default(context).then(app => {
    renderer.renderToString(app, (err, html) => {
      if (err) {
        if (err.code === 404) {
          res.status(404).end('Page not found');
        } else {
          res.status(500).end('Internal Server Error');
        }
      } else {
        res.end(html);
      }
    });
  });
});

server.listen(PORT, function() {
  console.log(chalk.cyan.bold(`Server started at http://localhost:${PORT}`));
});
