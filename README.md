# Training Wheels 

## Setup
Initial instance is for rehearsing site creation using primary tools: HTML, CSS, JS.  Ancillary tools are Webpack, Git, Vercel, and Illustrator.

Setup process begins with `npm init -y`, then `git init`.  Three folders are added to the root directory: `src`, `dist`, and `webpack`.  `index.html`, `script.js`, and `style.css` are created in `./src`.  A `.gitignore` file is created and `package-lock.json`, `node-modules`, and the `dist` folder are added to it.  

### Webpack 

#### Webpack install and packages
This is followed by installation of core Webpack packages for bundling, loading files, and running the dev server.  Webpack-merge is installed to split the dev and production configs.  Babel is added for transpiling with the core package, a loader, and the preset-env.  All packages are installed with `-D` modifier as devDependencies:

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
 
*Note: When React is added in the future, `@babel/preset-react` will need to be installed as well.*

#### Webpack configuration

Webpack configuration files are created in `./webpack`: `webpack.common.js`, `webpack.dev.js`, and `webpack.prod.js`. 

*Note: Specific configurations in each of these files will be adjusted over many rehearsal sessions, but some initial configurations include:*

1. Setting output rule `clean: {keep: /.gitkeep/}` to overwrite the `/dist` folder each build, but keep the directory structure.
2. Creating module rules for loading html, css, images, and fonts.  Special rules are created for Babel and Markdown.  (Note: Future module rules will include shaders and React specific svg)


### Package.json
The `package.json` file is then modified to remove the `"main": "index.js"` line and add `"private": true`.

Webpack dev server and building Scripts are then added to `package.json`, with a reference to these configuration files: 
`"dev": "webpack serve --open --config webpack/webpack.dev.js"`
`"build": "webpack --config webpack/webpack.prod.js"`

## New version creation
Basic process involves creating a new branch, deleting all files and folders except README.md, and starting from scratch (except for `git init`).  After rebuilding the next-version branch from scratch, merge or rebase main.  Then, continue adding any version features or changes before repeating the process ad infinitum.

## Upcoming features
1. Header title and font
2. Top nav bar with the following: 
   - Home: basic description of the site
   - History: summarized version history
   - Process: this Markdown file
3. Media queries for responsiveness (large screen limits especially)
4. Smooth transitions and CSS effects
5. Three.js elements
6. Accessibility (aria)

### Styling principles
Not currently working with any pre or post-processors for CSS, but for general organization I like Kevin Powell's method of Display - Positioning - Box Model - Typography - Manipulation/Effects - Miscellaneous.