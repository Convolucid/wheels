# Rebuilding Process
Once prepared to "rehearse" - i.e. start from scratch and iterate - the current process is to create a folder in `/versions` and clone the latest production commit into it as a backup.  Then, create a new version branch off of main, and delete everything except the directory structure, `README.md`, `.gitignore`, `.gitkeep`, `src/assets`, and `src/content`.  (For now, also delete `package.json` and the `/node_modules`).  

After the files are all deleted, commit.  

## npm initialization and package install
To begin rebuilding the site from scratch, run `npm init -y` and update the version number.  Install all packages as in the initial setup.
*Note: review babel/preset-env

## Webpack configuration and package.json modification
Recreate Webpack configuration files, using the last version as reference.  Modify `package.json` by removing the `"main": "index.js"` line and adding `"private": true`.  Webpack dev server and building Scripts are then added to `package.json`, with a reference to these configuration files: 
`"dev": "webpack serve --open --config webpack/webpack.dev.js"`
`"build": "webpack --config webpack/webpack.prod.js"`

## Core website HTML, CSS, and Javascript files
Recreate script.js, index.html, and style.css, using the last version as reference.

## Next steps
After rebuilding, merge back into main, then switch back to the version branch to continue adding any features or changes before the next stopping point is reached.