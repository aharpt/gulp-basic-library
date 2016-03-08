# Basic Gulp Starter Theme:
## What is included
### For CSS/SASS
 1. Compiling and watching your sass, (you don't have to rerun gulp after every sass change)
 2. SASS sourcemaps
 3. Added autoprefixer for advanced CSS features such as flexbox, transitions, etc.

### For Javascript
1. javascript concatenation
2. javascript minification

### Browsersync
1. automatically creates a web server to view your site
2. automatically updates your page when sass changes are made
3. automatically updates your page when html changes are made

## Installation
1. Make sure git is installed ("git --version") if not, you can look at this link https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
1. Make sure node and npm are installed by running "node --version" and "npm --version"
(Check http://blog.teamtreehouse.com/ for how to install node, npm.)
1. Clone project from github
2. Run "npm install" in the root directory of your project to install all uninstalled node dependancies
3. If you need to install any module manually you can go to http://gulpjs.com/plugins/ and for browser-sync https://www.browsersync.io/docs/gulp/.

## Project Setup
### For CSS/SASS
1. You must name your main sass file main.scss
2. main.scss must be in src/ in relation to your gulpfile

### For Javascript
1. All of your files before they are concatenated and minifying into a single file must be in src/ in relation to the gulp file

## NOTES:
1. My folder structure is an example of what your project could look like. It does not need  to be exactly like mine, but the Project Setup instructions are necessary for this to work.
2. This will only work with versions of gulp under version 4 which is going to be released at some point soon. Here is a link to its progress: https://github.com/gulpjs/gulp/milestones

###### If you find any issues with the program, you can submit a issue on the github repoitory.
