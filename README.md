# Address-Book-Project_v2-PWA

### Introduction

The script in this repository represents a modified version of the
Address-Book-Project / Contact Management System; the links to the 
original version is provided at the end of the paragraph. The simple 
address book website was converted into a progressive web application
(PWA).  

The address book's code allows changes to get automatically 
saved in your browser. Meaning that any added / deleted person(s), or 
modifications done to elements within your address book will remain
after refreshing or closing your browser. Please note that your initial
contacts are fictional characters that were included by default.

1. Github Repository (original version): https://github.com/Juan-Moctezuma/Address-Book-Project
2. Github Page (Original version): https://juan-moctezuma.github.io/Address-Book-Project/

### What is a PWA?
It's a web app that will not crash if there's no internet access. Anyhow, 
features that rely completely on the network will not be available.
PWA are able to load fetched data when there is no network, sync in the background 
and seamlessly do things while providing a native-like experience for users.

### PWA's folder structure vs. Static / Vanilla JS website's architecture

#### Version 1 - Original
1. Assets:
   	* Images: Background-image jpg
2. index.html
3. main.css
4. main.js


#### Version 2 - PWA 
NOTE: Sections 1 - 3 are created via terminal - see next paragraph
1. node_modules (folder NOT included on repository due to size)
2. package-lock.json
3. package.json
4. server.js
5. public:
	* Assets:
        1. Images: Background-image jpg
	* index.html
  	* main.css
  	* main.js
  	* manifest.json
  	* sw.js (JavaScript Service Worker)

### What command lines are required after setting up the files?

`npm init -y`

`npm install express body-parser`

If you are on Mac, use terminal and type the previous command; but first 
make sure you are in the correct directory (the folder containing your project).
Node_modules, package-lock.json & package.json will get created after running 
the previous commands.

### How to run local web server for testing purposes?

`python -m SimpleHTTPServer 1779`

If you are on Mac, use terminal and type the previous command; but first 
make sure you are in the correct directory (the folder containing your project).
NOTE that you don't need to request port 1779, you may use (e.g.) 8000.

### Does the code require a local web server to run?
Yes, but only once; afterwards you can simply visit your your local host on Google 
Chrome and your script should be able to run with or without internet connection.

If you decide to run this code, be sure to use the following link
in order to view the app: http://localhost:1779/public/

Please note that you don't need to use port 1779, you can change it
on the server.js file.

### Technologies

1. HTML
2. CSS
   * Responsive Framework: Bootstrap
3. JavaScript
   * ES6
   * jQuery
   * JSON
   * Regular Expressions (used for: Form-Validation)
4. Node.js
   * Web Application Framework: Express.js
   * Body-Parser (middleware)
5. Python 2 (via Live/local Server)
