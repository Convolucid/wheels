# Training Wheels 

## Setup
Initial instance is for rehearsing site creation using primary tools: HTML, CSS, JS.  Ancillary tools are Webpack, Git, Vercel, and Illustrator.

Setup process begins with `npm init -y`, then `git init`.  Three folders are added to the root directory: `src`, `dist`, and `webpack`.  `index.html`, `script.js`, and `style.css` are created in `./src`.  A `.gitignore` file is created and `package-lock.json`, `node-modules`, and the `dist` folder are added to it.  

### Webpack install and packages
This is followed by installation of core Webpack packages for bundling, loading files, and running the dev server.  They are all installed with `-D` modifier as devDependencies.  These packages include:

`webpack`
`webpack-cli`
`html-webpack-plugin`
`html-loader`
`css-loader`
`style-loader`
`webpack-dev-server`

The `package.json` file is then modified to remove the `"main": "index.js"` line and add `"private": true`.

To differentiate between development and production environments, `npm install webpack-merge -D` is run and webpack configuration files are created in `./webpack`: `webpack.common.js`, `webpack.dev.js`, and `webpack.prod.js`. 

*Note: Specific configurations in each of these files will be adjusted over many rehearsal sessions, but some initial configurations include:*

1. Setting `.src/index.html` as the template in HtmlWebpackPlugin settings.
2. Creating module rules for loading html, css, images, and fonts.  (Note: Future module rules will include shaders and React specific svg)
3. Setting output rule `clean: true` to overwrite the `/dist` folder each build.

Webpack dev server and building Scripts are then added to `package.json`, with a reference to these configuration files: 
`"dev": "webpack serve --open --config webpack/webpack.dev.js"`
`"build": "webpack --config webpack/webpack.prod.js"`

### Babel
Babel is then added for transpiling:  `npm install @babel/core babel-loader -D`
And is then configured for webpack by installing a preset `npm install @babel/preset-env -D` and adding Babel to the `webpack.common.js` module rules.  *Note: When React is added in the future, `@babel/preset-react` will need to be installed as well.*

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