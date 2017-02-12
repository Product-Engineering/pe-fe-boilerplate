const path = require('path')
const express = require('express')
const app = express()
// ----------------------------------
// Config Vars
// ----------------------------------
const IS_DEV = process.env.NODE_ENV !== 'production';
const PORT = IS_DEV ? 8080 : process.env.PORT;
const INDEX_PATH = path.join(__dirname, 'dist/index.html')
// ----------------------------------
// Dev Server - Hot Module Replacement
// ----------------------------------
if (IS_DEV) {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const config = require('./webpack.dev.config.js')
  const compiler = webpack(config)

  const middleware = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });
  app.use(middleware);
  app.use(webpackHotMiddleware(compiler))
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(INDEX_PATH));
    res.end();
  });
} else {
  // ----------------------------------
  // Prod Server - Hot Module Replacement
  // ----------------------------------
  const publicPath = express.static(path.join(__dirname, 'dist'))
  app.use('/dist', publicPath)
  app.get('/', function (_, res) { res.sendFile(INDEX_PATH) })
}

app.listen(PORT)
console.log(`Listening at http://localhost:${PORT}`)
