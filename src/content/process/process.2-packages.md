## npm initialization and package install
To begin rebuilding the site, run `npm init -y`.  Next we install Webpack packages and set up configuration files to bundle the project.  Then we modify the `package.json` file and add scripts for the dev server and production building.

## Webpack

### Webpack install and packages
Begin with installation of core Webpack packages for bundling, loading files, and running the dev server.  Webpack-merge is installed to split the dev and production configs.  Babel is added for transpiling with the core package, a loader, and the preset-env.  All packages are installed with `-D` modifier as devDependencies:

`webpack`
`webpack-cli`
`html-webpack-plugin`
`html-loader`
`css-loader`
`style-loader`
`markdown-loader`
`webpack-dev-server`
`webpack-merge`
`@babel/core`
`babel-loader`
`@babel/preset-env` 

*Note: When React is added in the future, `@babel/preset-react` will need to be installed as well.  Review babel/preset-env.*

### Webpack configuration

Webpack configuration files are created in `./webpack`: `webpack.common.js`, `webpack.dev.js`, and `webpack.prod.js`. 

*Note: Specific configurations in each of these files will be adjusted over many rehearsal sessions, but some initial configurations include:*

1. Setting output rule `clean: {keep: /.gitkeep/}` to overwrite the `/dist` folder each build, but keep the directory structure.
2. Creating module rules for loading html, css, images, and fonts.  Special rules are created for Babel, Markdown, and svg images.  (Note: Future module rules will include shaders and React specific svg)


## Package.json
The `package.json` file is then modified to remove the `"main": "index.js"` line and add `"private": true`.  We update the version number in `package.json`.

Webpack dev server and building Scripts are then added to `package.json`, with a reference to these configuration files: 
`"dev": "webpack serve --open --config webpack/webpack.dev.js"`
`"build": "webpack --config webpack/webpack.prod.js"`