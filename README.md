# Setup
Initial instance is for rehearsing site creation using primary tools: HTML, CSS, JS.  Ancillary tools are Webpack, Git, Vercel, and Illustrator.

Setup process begins with `npm init -y`, then `git init`.  Three folders are added to the root directory: `src`, `dist`, and `webpack`.  `index.html`, `script.js`, and `style.css` are created in `./src`.  A `.gitignore` file is created and `package-lock.json`, `node-modules`, and the `dist` folder are added to it.  

## Webpack 

### Webpack install and packages
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

### Webpack configuration

Webpack configuration files are created in `./webpack`: `webpack.common.js`, `webpack.dev.js`, and `webpack.prod.js`. 

*Note: Specific configurations in each of these files will be adjusted over many rehearsal sessions, but some initial configurations include:*

1. Setting output rule `clean: {keep: /.gitkeep/}` to overwrite the `/dist` folder each build, but keep the directory structure.
2. Creating module rules for loading html, css, images, and fonts.  Special rules are created for Babel and Markdown.  (Note: Future module rules will include shaders and React specific svg)


## Package.json
The `package.json` file is then modified to remove the `"main": "index.js"` line and add `"private": true`.

Webpack dev server and building Scripts are then added to `package.json`, with a reference to these configuration files: 
`"dev": "webpack serve --open --config webpack/webpack.dev.js"`
`"build": "webpack --config webpack/webpack.prod.js"`

# New version creation
Once prepared to "rehearse" - i.e. start from scratch and iterate - the current process is to create a folder in `/versions` and clone the latest production commit into it as a backup.  Then, create a new version branch off of main, and delete everything except the directory structure, `README.md`, `.gitignore`, `.gitkeep`, `src/assets`, and `src/content`.  (For now, also delete `package.json` and the `/node_modules`).  

After the files are all deleted, commit and rebuild site from scratch, including `npm install` for any packages.  The last version can be referenced as needed for Webpack configurations, etc.  After rebuilding, merge back into main, then switch back to the version branch to continue adding any features or changes before the next stopping point is reached.

# Upcoming features
1. Fonts
2. Media queries for responsiveness (large screen limits especially)
3. Smooth transitions and CSS effects
4. Three.js elements
5. Accessibility (aria)

# Styling principles
Not currently working with any pre or post-processors for CSS, but for general organization I like Kevin Powell's method of Display - Positioning - Box Model - Typography - Manipulation/Effects - Miscellaneous.

I'm adapting the [Modern CSS Reset](https://piccalil.li/blog/a-modern-css-reset/) by Andy Bell and some aspects of the CUBE CSS method for class conventions.  I want to avoid the class-frenzy on each HTML tag that CUBE seems to have.

Avoid fixed sizes for responsiveness - instead you can use min-height and max-width.  Try to use media queries to increase complexity (this means using min-width media queries from a mobile-first perspective).  Media queries can use em and rem, and often you can get away with only one or two breakpoints.  Can use clamp() for responsiveness instead of @media.