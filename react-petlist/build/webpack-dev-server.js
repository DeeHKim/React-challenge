import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import path from 'path';

import config from '../config';
import webpackConfig from './dev.config.babel';

const compiler = webpack(webpackConfig);
const app = express();

const serverOptions = {
//  contentBase: `http://${config.server_host}:${config.server_port}`,
  contentBase: 'src',
  quiet: true,
  noInfo: true,
  hot: true,
  inline: true,
  lazy: false,
  publicPath: webpackConfig.output.publicPath,
  stats: {colors: true},
  historyApiFallback: true,
};

const middleware = webpackMiddleware(compiler, serverOptions);
app.use(middleware);
app.use(webpackHotMiddleware(compiler));
app.use('/static', express.static('./src/web-api'));

// This is a catch all for browerhistory to work

app.use('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/../src/index.html'));
});


app.listen(config.server_port, function onAppListening(err) {
  if (err) {
    console.error(err);
  } else {
    console.info('==> 🚧  Webpack development server listening on port %s', config.server_port);
  }
});
