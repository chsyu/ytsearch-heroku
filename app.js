var path              = require('path'),
    express           = require('express');

const app             = express();

if(process.env.NODE_ENV !== 'production') {
  var webpack           = require('webpack'),
      webpackMiddleware = require('webpack-dev-middleware'),
      webpackDevMiddleware = require('webpack-dev-middleware'),
      webpackHotMiddleware = require('webpack-hot-middleware'),
      config            = require('./webpack.config'),
        compiler        = webpack(config);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(__dirname + '/public'));
app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000);
