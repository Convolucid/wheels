# Rebuilding Process
Once prepared to "rehearse" - i.e. start from scratch and iterate - the current process is to create a folder in `/versions` and clone the latest production commit into it as a backup.  Then, create a new version branch off of main, and delete everything except the directory structure, `README.md`, `.gitignore`, `.gitkeep`, `src/assets`, and `src/content`.  (For now, also delete `package.json` and the `/node_modules`).  

After the files are all deleted, commit.  

To begin rebuilding the site from scratch, run `npm init -y` and update the version number.  Install all packages as in the initial setup.


The last version can be referenced as needed for Webpack configurations, etc.  After rebuilding, merge back into main, then switch back to the version branch to continue adding any features or changes before the next stopping point is reached.