## New Project Setup
Setup process begins with `npm init -y`, then `git init`.  Three folders are added to the root directory: `src`, `dist`, and `webpack`.  `index.html`, `script.js`, and `style.css` are created in `./src`.  A `.gitignore` file is created and `package-lock.json`, `node-modules`, and the `dist` folder are added to it.  

## Rebuilding Process
Once I'm prepared to "rehearse" - i.e. start from scratch and iterate - my current process is to create a folder in `/versions` and clone the latest production commit into it as a backup.  Then I create a new version branch off of main and delete everything except the directory structure, `README.md`, `.gitignore`, `.gitkeep`, `src/assets`, and `src/content`, making sure to delete `package.json` and `/node_modules`.  

After the files are all deleted, I commit.  