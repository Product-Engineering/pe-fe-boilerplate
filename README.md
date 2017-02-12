![FE-Boilerplate](/../screenshots/public/pe_webpack.jpg?raw=true "FE-Boilerplate")
# FE Boilerplate
---
[![wercker status](https://app.wercker.com/status/75c55bca9af5d8657f2925758a4d3517/s/master "wercker status")](https://app.wercker.com/project/byKey/75c55bca9af5d8657f2925758a4d3517)

This is a Webpack tutorial, with development and production setups using an Express server, and Wercker for continuous integration.

Check out the post [here](https://medium.com/product-engineering).

### Development
Start the webpack development server on port 8080:
```
$ npm start
```

### Production
Build the production assets:
```
$ npm run build
```

### Tests
* `npm run test`

### Deployment
* Pushes to master branch will trigger Wercker CI.
* Manual build of the app with `npm run build`
