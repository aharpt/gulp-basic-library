# Basic Gulp Starter Theme:
## Prerequisites:
1. Make sure git is installed ("git --version") if not, you can look at this link https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
2. Install homebrew by going to their website http://brew.sh/. You can also check if you already have it installed by running "brew --version"
3. Node and npm must also be installed.  You can run "node --version" and "npm --version" to check if they are installed.  If not install using Homebrew (installed in step 2) by running "brew install node".  That command will install both node and npm.

## How to use:
1. Clone framework by running "git clone https://github.com/AaronMatthewHarpt/gulp-basic-framework.git"
2. run "gulp" in the root directory of your clone and watch everything happen!

### Framework Functionalities
**CSS/SASS:**
+ Automatic SCSS compilation: Equipped with automatic SCSS compiling, our gulp framework
watches your SCSS files and converts any changes to CSS.
+ SCSS Source Maps: To make their SCSS code cleaner, many developers create several small files, which they combine using import rules. However, when showing the file location of a CSS rule, most browser developer tools reference the large production file, not the small development ones. To fix the problem, our Gulp framework creates a CSS map file, causing your developer tools to reference the small development files. Overall, SCSS source maps let you work with small SCSS files so your code is easier to debug.
+ CSS Autoprefixer: Vender prefixes broaden your site’s audience, but manually entering them takes time. Our framework automatically inserts the prefixes needed for many browsers.


**JavaScript:**
+ JavaScript Concatenation: Many JavaScript files means many HTTP requests, hurting your site’s page speed. On the other hand, large files make your code more difficult to handle. Our framework’s JavaScript concatenation feature combines your manageable development files into a large production file, giving you both speed and manageability.
+ JavaScript Minification: Unnecessary characters, lines, or files slow down your site. Our framework minifies your JavaScript, eliminating spaces, comments, and other characters from the production file while leaving your development files intact.

**Web Server with Live Reload:**
+ Web Server: When you run “Gulp” in your site’s root directory, our framework automatically creates a virtual server. At the same time, the framework loads the site in your browser, allowing you to preview it as if it were live.
+ Live Reload: The virtual server mentioned above lets you preview your site in {real time}. The server automatically reloads the site whenever you change SASS or JavaScript, allowing you to see how the new code changes your site.



**Notes:**
+ Our framework works with every released version of Gulp. I plan to modify the framework for Gulp 4 (currently in development), and will post a link to it on this page once it is complete.
+ If you discover a problem with our framework, please feel free to submit an issue on the GitHub repository. Your discoveries help make our framework better!
